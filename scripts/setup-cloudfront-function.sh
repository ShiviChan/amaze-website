#!/usr/bin/env bash
# One-time: create/publish the index-rewrite CloudFront Function and attach it
# to the asnmcare.com distribution (viewer-request on the default behavior).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
[[ -f "$SCRIPT_DIR/aws.env" ]] && source "$SCRIPT_DIR/aws.env"

: "${CLOUDFRONT_DISTRIBUTION_ID:=E1AOL12C8GRCCI}"
FN_NAME="asnmcare-index-rewrite"
CODE="$SCRIPT_DIR/cloudfront-index-rewrite.js"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
# aws.exe / python.exe on Windows need C:/ paths, not Git Bash /c/ or /tmp paths
w() { if command -v cygpath >/dev/null; then cygpath -m "$1"; else echo "$1"; fi; }
CODE="$(w "$CODE")"
T="$(w "$TMP")"

if aws cloudfront describe-function --name "$FN_NAME" >/dev/null 2>&1; then
  echo "→ Updating function $FN_NAME…"
  ETAG=$(aws cloudfront describe-function --name "$FN_NAME" --query ETag --output text)
  aws cloudfront update-function --name "$FN_NAME" --if-match "$ETAG" \
    --function-config '{"Comment":"Directory index rewrite for asnmcare.com","Runtime":"cloudfront-js-2.0"}' \
    --function-code "fileb://$CODE" >/dev/null
else
  echo "→ Creating function $FN_NAME…"
  aws cloudfront create-function --name "$FN_NAME" \
    --function-config '{"Comment":"Directory index rewrite for asnmcare.com","Runtime":"cloudfront-js-2.0"}' \
    --function-code "fileb://$CODE" >/dev/null
fi

echo "→ Testing…"
test_uri() {
  cat >"$TMP/ev.json" <<EOF
{"version":"1.0","context":{"eventType":"viewer-request"},"viewer":{"ip":"1.2.3.4"},
 "request":{"method":"GET","uri":"$1","querystring":{},"headers":{},"cookies":{}}}
EOF
  ETAG=$(aws cloudfront describe-function --name "$FN_NAME" --query ETag --output text)
  OUT=$(aws cloudfront test-function --name "$FN_NAME" --if-match "$ETAG" --stage DEVELOPMENT \
    --event-object "fileb://$T/ev.json" --query 'TestResult.FunctionOutput' --output text)
  echo "   $1 → $OUT" | cut -c1-160
  grep -q "$2" <<<"$OUT" || { echo "Test failed for $1 (expected $2)"; exit 1; }
}
test_uri "/media-marketing/" '"/media-marketing/index.html"'
test_uri "/about" '"statusCode":301'
test_uri "/_next/static/x.js" '"/_next/static/x.js"'

echo "→ Publishing…"
ETAG=$(aws cloudfront describe-function --name "$FN_NAME" --query ETag --output text)
FN_ARN=$(aws cloudfront publish-function --name "$FN_NAME" --if-match "$ETAG" \
  --query 'FunctionSummary.FunctionMetadata.FunctionARN' --output text)
echo "   $FN_ARN"

echo "→ Attaching to distribution $CLOUDFRONT_DISTRIBUTION_ID…"
aws cloudfront get-distribution-config --id "$CLOUDFRONT_DISTRIBUTION_ID" >"$TMP/dist.json"
DIST_ETAG=$(python -c "import json,sys;print(json.load(open(sys.argv[1]))['ETag'])" "$T/dist.json")
python - "$T/dist.json" "$T/config.json" "$FN_ARN" <<'PY'
import json, sys
src, dst, arn = sys.argv[1:]
cfg = json.load(open(src))["DistributionConfig"]
cfg["DefaultCacheBehavior"]["FunctionAssociations"] = {
    "Quantity": 1,
    "Items": [{"FunctionARN": arn, "EventType": "viewer-request"}],
}
json.dump(cfg, open(dst, "w"))
PY
aws cloudfront update-distribution --id "$CLOUDFRONT_DISTRIBUTION_ID" --if-match "$DIST_ETAG" \
  --distribution-config "file://$T/config.json" --query 'Distribution.Status' --output text

echo "→ Invalidating cache…"
aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths "/*" \
  --query 'Invalidation.Id' --output text

echo "✓ Done. Changes reach all edge locations in ~5 minutes."
