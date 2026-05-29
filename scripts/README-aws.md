# AWS deploy (S3 + CloudFront)

Matches the existing **amazesolutions.in** stack:

- `amaze-website-prod` → CloudFront `E3L1NT8ZO08GKK`
- Static files from `npm run build` → `out/`

## asnmcare.com (one-time setup)

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
