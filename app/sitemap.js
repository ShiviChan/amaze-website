import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/platform", changeFrequency: "monthly", priority: 0.95 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/insights", changeFrequency: "weekly", priority: 0.85 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/track", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.75 },
  ];
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
