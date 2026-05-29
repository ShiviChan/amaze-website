/** Canonical public URL for SEO, sitemap, and JSON-LD */
export const SITE_URL = "https://www.asnmcare.com";
export const SITE_HOST = "www.asnmcare.com";

export function absoluteUrl(path = "") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
