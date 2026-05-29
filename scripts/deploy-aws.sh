#!/usr/bin/env bash
# Deploy static export to S3 + invalidate CloudFront (same flow as amazesolutions.in)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

: "${AWS_REGION:=ap-south-1}"
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
