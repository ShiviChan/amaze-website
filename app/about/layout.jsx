import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "About — Tech-first 3PL & AI SaaS company in India",
  description:
    "Amaze Solutions (ASNM Care Pvt Ltd) was founded in 2015 in India. Learn about our mission, the Clinship platform, and how AI is reshaping last-mile logistics for D2C and enterprise brands.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Amaze Solutions — India's tech-first 3PL + SaaS company",
    description: "From road freight in 2015 to AI-powered fulfilment SaaS today. Meet the team behind Clinship.",
    url: absoluteUrl("/about"),
    type: "website",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
