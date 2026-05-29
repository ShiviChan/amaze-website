#!/usr/bin/env bash
# One-time: wait for ACM → CloudFront → Route53 aliases → S3 policy → deploy
set -euo pipefail

export AWS_DEFAULT_REGION="${AWS_DEFAULT_REGION:-ap-south-1}"
CERT_ARN="${CERT_ARN:-arn:aws:acm:us-east-1:113204171133:certificate/6ddd7b7c-b3e6-47e1-9a75-b072952bbd4e}"
OAC_ID="${OAC_ID:-E178FZM7DD1UU3}"
S3_BUCKET="${S3_BUCKET:-asnmcare-website-prod}"
HOSTED_ZONE_ID="${HOSTED_ZONE_ID:-Z094069137F2HE9WPRBTY}"
ORIGIN_DOMAIN="${S3_BUCKET}.s3.ap-south-1.amazonaws.com"

echo "→ Waiting for ACM certificate (us-east-1)…"
for _ in $(seq 1 40); do
  STATUS=$(aws acm describe-certificate --region us-east-1 \
    --certificate-arn "$CERT_ARN" --query 'Certificate.Status' --output text)
  echo "   ACM status: $STATUS"
  [[ "$STATUS" == "ISSUED" ]] && break
  sleep 15
done
[[ "$STATUS" == "ISSUED" ]] || { echo "Certificate not issued. Fix DNS validation first."; exit 1; }

if [[ -z "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
  echo "→ Creating CloudFront distribution…"
  CALLER="asnmcare-$(date +%s)"
  CFG=$(mktemp)
  cat >"$CFG" <<EOF
{
  "CallerReference": "$CALLER",
  "Comment": "asnmcare.com marketing site",
  "Enabled": true,
  "DefaultRootObject": "index.html",
  "Aliases": { "Quantity": 2, "Items": ["asnmcare.com", "www.asnmcare.com"] },
  "Origins": {
    "Quantity": 1,
    "Items": [{
      "Id": "asnmcare-website-prod",
      "DomainName": "$ORIGIN_DOMAIN",
      "OriginAccessControlId": "$OAC_ID",
      "S3OriginConfig": { "OriginAccessIdentity": "" }
    }]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "asnmcare-website-prod",
    "ViewerProtocolPolicy": "redirect-to-https",
    "AllowedMethods": {
      "Quantity": 2,
      "Items": ["GET", "HEAD"],
      "CachedMethods": { "Quantity": 2, "Items": ["GET", "HEAD"] }
    },
    "Compress": true,
    "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6"
  },
  "CustomErrorResponses": {
    "Quantity": 2,
    "Items": [
      { "ErrorCode": 403, "ResponsePagePath": "/404.html", "ResponseCode": "404", "ErrorCachingMinTTL": 10 },
      { "ErrorCode": 404, "ResponsePagePath": "/404.html", "ResponseCode": "404", "ErrorCachingMinTTL": 10 }
    ]
  },
  "ViewerCertificate": {
    "ACMCertificateArn": "$CERT_ARN",
    "SSLSupportMethod": "sni-only",
    "MinimumProtocolVersion": "TLSv1.2_2021"
  },
  "PriceClass": "PriceClass_200",
  "HttpVersion": "http2and3",
  "IsIPV6Enabled": true,
  "Restrictions": { "GeoRestriction": { "RestrictionType": "none", "Quantity": 0 } }
}
EOF
  CLOUDFRONT_DISTRIBUTION_ID=$(aws cloudfront create-distribution \
    --distribution-config "file://$CFG" \
    --query 'Distribution.Id' --output text)
  rm -f "$CFG"
  echo "   Created distribution: $CLOUDFRONT_DISTRIBUTION_ID"
fi

CF_DOMAIN=$(aws cloudfront get-distribution --id "$CLOUDFRONT_DISTRIBUTION_ID" \
  --query 'Distribution.DomainName' --output text)
echo "→ CloudFront domain: $CF_DOMAIN"

echo "→ S3 bucket policy (OAC)…"
DIST_ARN=$(aws cloudfront get-distribution --id "$CLOUDFRONT_DISTRIBUTION_ID" \
  --query 'Distribution.ARN' --output text)
POLICY=$(cat <<EOF
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "AllowCloudFrontServicePrincipal",
    "Effect": "Allow",
    "Principal": { "Service": "cloudfront.amazonaws.com" },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::${S3_BUCKET}/*",
    "Condition": { "StringEquals": { "AWS:SourceArn": "${DIST_ARN}" } }
  }]
}
EOF
)
aws s3api put-bucket-policy --bucket "$S3_BUCKET" --policy "$POLICY"

echo "→ Route53 alias records (@ and www)…"
CHANGE=$(mktemp)
cat >"$CHANGE" <<EOF
{
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "asnmcare.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "${CF_DOMAIN}",
          "EvaluateTargetHealth": false
        }
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "asnmcare.com",
        "Type": "AAAA",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "${CF_DOMAIN}",
          "EvaluateTargetHealth": false
        }
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "www.asnmcare.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "${CF_DOMAIN}",
          "EvaluateTargetHealth": false
        }
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "www.asnmcare.com",
        "Type": "AAAA",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "${CF_DOMAIN}",
          "EvaluateTargetHealth": false
        }
      }
    }
  ]
}
EOF
aws route53 change-resource-record-sets --hosted-zone-id "$HOSTED_ZONE_ID" \
  --change-batch "file://$CHANGE"
rm -f "$CHANGE"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
export CLOUDFRONT_DISTRIBUTION_ID
npm run deploy:aws

echo "✓ Done. Distribution: $CLOUDFRONT_DISTRIBUTION_ID"
echo "  Ensure domain NS at registrar point to Route53 (see scripts/README-aws.md)."
