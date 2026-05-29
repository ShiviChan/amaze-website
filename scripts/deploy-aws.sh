#!/usr/bin/env bash
# Deploy static export to S3 + invalidate CloudFront (same flow as amazesolutions.in)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT"

[[ -f "$SCRIPT_DIR/aws.env" ]] && source "$SCRIPT_DIR/aws.env"

: "${AWS_REGION:=ap-south-1}"
export AWS_DEFAULT_REGION="${AWS_DEFAULT_REGION:-$AWS_REGION}"
: "${S3_BUCKET:=asnmcare-website-prod}"
: "${CLOUDFRONT_DISTRIBUTION_ID:=}"

echo "→ Building static site…"
npm run build

echo "→ Syncing out/ → s3://${S3_BUCKET}/"
aws s3 sync out/ "s3://${S3_BUCKET}/" --delete --region "$AWS_REGION"

if [[ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]]; then
  echo "→ CloudFront invalidation (${CLOUDFRONT_DISTRIBUTION_ID})…"
  aws cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text
fi

echo "✓ Deploy complete"
