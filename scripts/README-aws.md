# AWS deploy (S3 + CloudFront) — **ap-south-1 (Mumbai)**

Matches the existing **amazesolutions.in** stack:

| Resource | Region |
|----------|--------|
| S3 bucket `asnmcare-website-prod` | **ap-south-1** |
| S3 bucket `amaze-website-prod` | **ap-south-1** |
| CloudFront (CDN) | Global (origin in Mumbai) |
| ACM SSL for CloudFront | **us-east-1 only** (AWS requirement) |
| Route 53 | Global |

```bash
cp scripts/aws.env.example scripts/aws.env
# add AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY to aws.env or ~/.aws/credentials
export AWS_REGION=ap-south-1
```

- `amaze-website-prod` → CloudFront `E3L1NT8ZO08GKK`
- Static files from `npm run build` → `out/`

## asnmcare.com (one-time setup)

### Critical: point the domain to Route 53

`asnmcare.com` currently uses **GoDaddy** nameservers (`ns47/ns48.domaincontrol.com`).  
The Route 53 hosted zone exists but is **not active** until you update nameservers at GoDaddy to:

- `ns-857.awsdns-43.net`
- `ns-1285.awsdns-32.org`
- `ns-239.awsdns-29.com`
- `ns-1828.awsdns-36.co.uk`

(Same pattern as [amazesolutions.in](https://amazesolutions.in/), which already uses Route 53.)

After NS propagate (usually 15–60 min), ACM validation completes and the site can go live.

**Already done with `shivichan` credentials:**
- S3 bucket `asnmcare-website-prod` + static site uploaded
- ACM cert requested (pending validation): `arn:aws:acm:us-east-1:113204171133:certificate/6ddd7b7c-b3e6-47e1-9a75-b072952bbd4e`
- ACM validation CNAMEs added in Route 53
- CloudFront OAC: `E178FZM7DD1UU3`

**After NS switch, run:**

```bash
export AWS_ACCESS_KEY_ID=... AWS_SECRET_ACCESS_KEY=...
bash scripts/finish-asnmcare-aws.sh
```

1. **ACM** (must be `us-east-1` for CloudFront):
   ```bash
   aws acm request-certificate \
     --region us-east-1 \
     --domain-name asnmcare.com \
     --subject-alternative-names www.asnmcare.com \
     --validation-method DNS
   ```
   Add the CNAME validation records Route 53 shows in the ACM console.

2. **S3 bucket** `asnmcare-website-prod` in `ap-south-1` (block public access; OAC from CloudFront only).

3. **CloudFront** distribution:
   - Origin: `asnmcare-website-prod.s3.ap-south-1.amazonaws.com`
   - Alternate domain names: `asnmcare.com`, `www.asnmcare.com`
   - ACM cert from step 1
   - Default root object: `index.html`
   - Custom errors: 403/404 → `/404.html` (same as amaze site)

4. **Route 53**: point `@` and `www` A/AAAA aliases to the new distribution (replace the old VPS `148.113.24.211` records).

5. **Deploy**:
   ```bash
   export CLOUDFRONT_DISTRIBUTION_ID=EXXXXXXXXX
   npm run deploy:aws
   ```
