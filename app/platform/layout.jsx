import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Clinship Platform — AI SaaS for Label Printing, Tracking, RTO Reduction",
  description:
    "Clinship by Amaze: AI-powered fulfilment OS. Smart label printing, multi-courier aggregator API, real-time order visibility, ML-driven RTO prediction, Cx automation. Deployed on AWS.",
  alternates: { canonical: "/platform" },
  keywords: [
    "logistics SaaS India", "RTO reduction software", "label printing automation",
    "multi-courier aggregator", "shipment tracking API", "Cx automation logistics",
    "Clinship", "AWS logistics platform",
  ],
  openGraph: {
    title: "Clinship — AI-Powered Logistics SaaS Platform",
    description: "Label printing, tracking, RTO reduction, Cx automation — six products, one platform. Built with AI on AWS.",
    url: absoluteUrl("/platform"),
    type: "website",
  },
};

export default function PlatformLayout({ children }) {
  return children;
}
