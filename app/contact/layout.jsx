import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Contact Amaze Solutions — Get a Logistics & SaaS Quote",
  description:
    "Reach Amaze Solutions for 3PL, AI fulfilment SaaS, or careers. Email riteshsr@asnmcare.com, call +91 96760 20374, or visit our Noida HQ (Sector-62, i-Thum Tower).",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Amaze Solutions",
    description: "Get a quote for 3PL services or the Clinship SaaS platform. Reach us in Noida.",
    url: absoluteUrl("/contact"),
    type: "website",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
