import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "3PL Services — Last-Mile, Express, B2B Freight, Reverse Logistics India",
  description:
    "End-to-end logistics services across 50+ Indian cities. Pickup, middle-mile, last-mile delivery, B2B freight, cross-border, warehousing, reverse logistics — surge-tested at 1.5M+ parcels/month.",
  alternates: { canonical: "/services" },
  keywords: [
    "last mile delivery India", "B2B freight India", "reverse logistics India",
    "warehousing India", "express parcel delivery", "intercity freight India",
    "cross border shipping India", "courier services India",
  ],
  openGraph: {
    title: "3PL Services by Amaze Solutions",
    description: "Pickup, last-mile, express, B2B, cross-border, warehousing. 50+ cities. 800+ professionals.",
    url: absoluteUrl("/services"),
    type: "website",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
