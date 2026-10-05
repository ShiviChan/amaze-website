import { Noto_Serif_Devanagari } from "next/font/google";
import { absoluteUrl } from "@/lib/site";

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["500", "700"],
  variable: "--font-deva",
  display: "swap",
});

export const metadata = {
  title: "Media and Marketing — Newspath Bharat Hindi News Network",
  description:
    "Newspath Bharat: a Hindi digital news network with a 6,00,000+ community across YouTube, Facebook and Instagram. Podcasts, ground reports, five channels and brand campaigns for Tier-2 and Tier-3 India.",
  alternates: { canonical: "/media-marketing" },
  keywords: [
    "Newspath Bharat", "Hindi digital news", "Hindi news YouTube channel",
    "brand campaigns Hindi audience", "media partnership Noida", "Tier-2 Tier-3 India marketing",
    "Crime Path Bharat", "Kisanpath Bharat", "Dharmpath Bharat", "Carpath Bharat",
  ],
  openGraph: {
    title: "Media and Marketing — Newspath Bharat",
    description: "A 6,00,000+ Hindi digital news community. Podcasts, ground reports, five channels.",
    url: absoluteUrl("/media-marketing"),
    type: "website",
    images: [{ url: "/media/lamp-lighting.jpg", width: 1280, height: 853 }],
  },
};

export default function MediaMarketingLayout({ children }) {
  return <div className={devanagari.variable}>{children}</div>;
}
