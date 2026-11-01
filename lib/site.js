/** Canonical public URL for SEO, sitemap, and JSON-LD */
export const SITE_URL = "https://www.asnmcare.com";
export const SITE_HOST = "www.asnmcare.com";

/**
 * Google Analytics 4 Measurement ID — paste the "G-XXXXXXXXXX" from
 * GA4 → Admin → Data streams → your web stream. Leave empty to disable.
 */
export const GA_MEASUREMENT_ID = "";

/**
 * Google Search Console verification token — the string from the
 * "HTML tag" verification method (content of <meta name="google-site-verification">).
 * Leave empty to omit the tag.
 */
export const GOOGLE_SITE_VERIFICATION = "";

export function absoluteUrl(path = "") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
