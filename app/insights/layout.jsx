import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Insights — Logistics, AI & SaaS Articles | Amaze Solutions",
  description:
    "Deep-dives, playbooks and field notes on logistics in India, AI for fulfilment, RTO reduction strategies, label printing and supply chain automation.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights from Amaze Solutions",
    description: "Logistics, AI & SaaS — written by operators.",
    url: absoluteUrl("/insights"),
    type: "website",
  },
};

export default function InsightsLayout({ children }) {
  return children;
}
