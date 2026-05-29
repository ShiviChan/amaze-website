export default function manifest() {
  return {
    name: "Amaze Solutions — AI-Powered Logistics & SaaS",
    short_name: "Amaze",
    description: "India's tech-first logistics partner. AI SaaS for label printing, tracking, RTO reduction.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#E50914",
    orientation: "portrait",
    categories: ["business", "logistics", "productivity"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
