import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Track Your Shipment — Real-Time AWB Tracking | Amaze Solutions",
  description:
    "Track your Amaze shipment in real time. Enter your AWB / waybill number for live pickup, line-haul, out-for-delivery and delivered updates across 50+ Indian cities.",
  alternates: { canonical: "/track" },
  keywords: ["track shipment India", "AWB tracking", "waybill tracking", "track parcel Amaze", "live courier tracking"],
  openGraph: {
    title: "Track Your Amaze Shipment",
    description: "Live AWB / waybill tracking. Real-time hub updates.",
    url: absoluteUrl("/track"),
    type: "website",
  },
};

export default function TrackLayout({ children }) {
  return children;
}
