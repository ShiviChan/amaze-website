# Amaze Solutions — Website

Production-ready marketing site for **Amaze Solutions / ASNM Care Pvt Ltd** — India's tech-first logistics + AI SaaS company.

Built with:
- **Next.js 14** (App Router, React 18)
- **Tailwind CSS**
- **Framer Motion** for animations
- **Lucide React** icons
- **Instrument Serif + Inter** typography (Google Fonts via `next/font`)

---

## 1. Local dev (first run)

```bash
# Install
npm install

# Drop Ritesh's photo into public/founder.jpg  (used by the About page)

# Start dev server on port 4818
npm run dev
```

Open http://localhost:4818

To stop: `Ctrl + C` in the terminal.

## 2. Production build

```bash
npm run build
npm run start   # serves the production build on port 4818
```

## 3. Deploy to AWS (same as [amazesolutions.in](https://amazesolutions.in/))

Production uses **Next.js static export** → **S3 (ap-south-1)** → **CloudFront** → **Route 53** (no Vercel).

| Domain | S3 bucket (Mumbai) | CloudFront |
|---|---|---|
| `amazesolutions.in` | `amaze-website-prod` | `E3L1NT8ZO08GKK` |
| `asnmcare.com` | `asnmcare-website-prod` | _(set after `finish-asnmcare-aws.sh`)_ |

```bash
cp scripts/aws.env.example scripts/aws.env
export AWS_REGION=ap-south-1
npm run deploy:aws
# First time infra: bash scripts/finish-asnmcare-aws.sh (see scripts/README-aws.md)
```

**Route 53** for `asnmcare.com` (after CloudFront exists):
- **A** (alias) `@` → CloudFront distribution
- **A** (alias) `www` → same CloudFront distribution

SSL: request an **ACM certificate** in `us-east-1` for `asnmcare.com` + `www.asnmcare.com`, validate via Route 53, attach to CloudFront.

Vercel issues + renews SSL automatically.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, animated logistics scene, local areas, partners, AI platform, services, tracking, tech stack, FAQ |
| `/platform` | Clinship SaaS pitch — 6 products, AWS infrastructure |
| `/services` | 9 logistics service cards + 4-step process |
| `/about` | Founder section, mission/vision/values, timeline, team |
| `/track` | AWB / waybill tracking input + timeline result |
| `/insights` | Blog placeholder with 3 starter articles |
| `/contact` | Form (opens Gmail), HQ details, 50+ cities, careers |
| `/404` | Branded not-found page |

---

## Project structure

```
amaze-website/
├── app/
│   ├── layout.jsx               # Root layout, fonts, JSON-LD Org/LocalBusiness schema
│   ├── page.jsx                 # Home
│   ├── globals.css              # Tailwind + utility classes
│   ├── icon.svg                 # Favicon
│   ├── apple-icon.jsx           # Dynamic Apple touch icon
│   ├── opengraph-image.jsx      # Dynamic 1200x630 OG image
│   ├── manifest.js              # PWA manifest
│   ├── sitemap.js               # Dynamic sitemap.xml
│   ├── robots.js                # Dynamic robots.txt
│   ├── not-found.jsx            # 404 page
│   ├── loading.jsx              # Suspense loading state
│   ├── about/ (page + layout)
│   ├── platform/ (page + layout)
│   ├── services/ (page + layout)
│   ├── contact/ (page + layout)
│   ├── track/ (page + layout)
│   └── insights/ (page + layout)
│
├── components/
│   ├── Navbar.jsx               # Sticky nav + mobile sheet
│   ├── Footer.jsx               # Footer + marquee + real contact info
│   ├── Logo.jsx                 # Inline SVG logo
│   ├── ScrollProgress.jsx       # Top progress bar
│   ├── Breadcrumbs.jsx          # Crumb + BreadcrumbList JSON-LD
│   ├── Hero.jsx                 # Home hero with marquee
│   ├── LogisticsScene.jsx       # ⭐ Animated truck + delivery person (mobile + desktop)
│   ├── LocalAreas.jsx           # Delhi NCR city cards (local SEO)
│   ├── Partners.jsx             # Urbanic + Modicare
│   ├── AIPlatform.jsx           # Clinship SaaS 6 products
│   ├── ServicesGrid.jsx         # 8-card 3PL services grid
│   ├── TrackInline.jsx          # Track widget for home
│   ├── TrackShipment.jsx        # Full track form + timeline result
│   ├── TechStack.jsx            # AWS + AI infrastructure
│   ├── Stats.jsx                # Animated counters (1.5M+, 50+, 800+, 10+)
│   ├── WhyUs.jsx                # 4 pillars sticky-scroll
│   ├── Testimonials.jsx         # Carousel
│   ├── Founder.jsx              # Ritesh photo + bio + LinkedIn
│   ├── FAQ.jsx                  # Accordion + FAQPage JSON-LD
│   ├── CTASection.jsx           # End-of-page CTA card
│   ├── ContactForm.jsx          # Opens Gmail compose to riteshsr@asnmcare.com
│   ├── ClientsRow.jsx           # Industry trust strip
│   ├── MagneticButton.jsx       # Magnetic hover helper
│   ├── Marquee.jsx              # Looping marquee
│   ├── FadeIn.jsx               # Viewport-triggered fade primitive
│   └── AnimatedCounter.jsx      # Count-up on view
│
├── public/
│   ├── logo.svg                 # Standalone logo asset
│   └── founder.jpg              # ⚠️ Drop Ritesh's photo here before deploy
│
├── package.json                 # next, react, framer-motion, lucide-react, tailwind
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
├── vercel.json                  # Cache + security headers, 301 redirects
└── README.md
```

---

## SEO foundation (already wired)

- **Per-page metadata** — every route has unique title/description/OG via route layouts.
- **JSON-LD schemas** — `Organization`, `LocalBusiness`, `Service`, `WebSite`, `FAQPage` (on home), `BreadcrumbList` (on inner pages), `Blog` + `BlogPosting` (on /insights), `Person` (founder).
- **Local SEO** — `LocalBusiness` schema with Noida HQ address + geo coords + `areaServed` array including Delhi, Ghaziabad, Noida, Gurugram, Faridabad, Delhi NCR. Visible `LocalAreas` content section reinforces these terms in body text.
- **Dynamic OG image** — `app/opengraph-image.jsx` generates a branded PNG for every social share.
- **PWA manifest + Apple touch icon** — installable.
- **sitemap.xml + robots.txt** — auto-generated, includes all routes.
- **Security headers** — HSTS, X-Frame-Options, Permissions-Policy, Referrer-Policy.
- **Cache headers** — 1-year immutable on static assets.
- **301 redirects** from old `asnmcare.com` URLs (`/about.html`, `/contact.html`, `/index.html`).
- **Skip-to-content link**, semantic HTML, alt text on images — Lighthouse accessibility friendly.

**Off-page SEO (your todo)**:
1. Set up Google Business Profile for the Noida HQ.
2. Get listed on JustDial, Sulekha, IndiaMart, Yellow Pages.
3. Add Amaze to Urbanic / Modicare partner pages if possible.
4. Submit sitemap to Google Search Console once deployed.
5. Publish real articles on /insights every 1–2 weeks.

Realistic ranking timeline: 3–6 months after deploy for medium-competition terms, 6–12+ months for "logistics company Delhi/Ghaziabad" against giants like Delhivery.

---

## Real contact (live everywhere on the site)

- **Email**: riteshsr@asnmcare.com
- **Phone**: +91 96760 20374
- **Founder**: Ritesh Sharan Srivastava — Founder & CEO
- **HQ**: 8th Floor, B-807, i-Thum Tower, Plot No. A-40, Sector-62, Noida, UP — 201301
- **LinkedIn (company)**: https://www.linkedin.com/company/asnmcare/
- **LinkedIn (founder)**: https://www.linkedin.com/in/ritesh-sharan-srivastava-372b3467/

---

## Customization checklist

### Required before deploy
- [ ] Drop **Ritesh's photo** into `public/founder.jpg` (used by `/about` page)
- [ ] Run `npm install` + `npm run build` to confirm clean build
- [ ] Push to GitHub → deploy on Vercel → attach `www.asnmcare.com` + `asnmcare.com` in Route 53
- [ ] Set up Google Business Profile

### Nice to have
- [ ] Replace text wordmarks in `components/Partners.jsx` with real Urbanic + Modicare SVG logos (drop into `public/partners/`)
- [ ] Real customer testimonial quotes in `components/Testimonials.jsx`
- [ ] Write actual /insights articles (the 3 cards link to `/insights/[slug]` which currently 404s)
- [ ] Add Google Analytics or Plausible

---

## Design tokens

| Token | Value |
|---|---|
| Background | `#0A0A0A` (ink) |
| Brand red | `#E50914` |
| Text | `#F7F4EE` (cream) |
| Display font | Instrument Serif (italics for emphasis) |
| Body font | Inter |
| Motion easing | `[0.22, 1, 0.36, 1]` for entrances |
| Default dev port | 4818 |
