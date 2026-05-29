import "./globals.css";
import { Inter, Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE_URL, absoluteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Amaze Solutions — AI-Powered Logistics & SaaS Platform for B2B",
    template: "%s | Amaze Solutions",
  },
  description:
    "Top logistics & transport company in Delhi NCR, Ghaziabad, Noida & 50+ Indian cities. AI-powered SaaS for label printing, tracking, RTO reduction. Trusted by Urbanic, Modicare. Founded 2015, HQ Noida.",
  keywords: [
    "logistics company in Delhi",
    "logistics company in Ghaziabad",
    "transport company in Delhi NCR",
    "transport company in Noida",
    "courier company in Delhi NCR",
    "3PL services Delhi",
    "last mile delivery Delhi NCR",
    "logistics services Ghaziabad",
    "freight company Noida",
    "ecommerce logistics partner India",
    "AI logistics platform India",
    "RTO reduction SaaS",
    "shipment tracking API",
    "label printing software India",
    "B2B logistics SaaS",
    "courier aggregator India",
    "Clinship",
    "Amaze Solutions",
    "ASNM Care Pvt Ltd",
    "supply chain automation India",
    "warehouse logistics Noida",
  ],
  authors: [{ name: "Amaze Solutions" }],
  creator: "Amaze Solutions",
  publisher: "ASNM Care Pvt Ltd",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Amaze Solutions",
    title: "Amaze Solutions — AI-Powered Logistics & SaaS Platform",
    description:
      "Tech-first logistics. AI for RTO reduction, label printing, order visibility & Cx automation. Trusted by Urbanic, Modicare. Built on AWS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaze Solutions — AI-Powered Logistics & SaaS",
    description:
      "Tech-first logistics SaaS for India's leading brands. AI-driven RTO reduction, label printing, real-time visibility.",
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/icon.svg" },
  category: "logistics",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Amaze Solutions",
      legalName: "ASNM Care Pvt Ltd",
      url: SITE_URL,
      logo: absoluteUrl("/logo.svg"),
      image: absoluteUrl("/opengraph-image"),
      foundingDate: "2015-10",
      description:
        "Top logistics & transport company in Delhi NCR, Ghaziabad & Noida. AI-powered 3PL and SaaS for label printing, tracking, RTO reduction and last-mile delivery across 50+ Indian cities.",
      slogan: "Logistics, powered by AI.",
      priceRange: "₹₹",
      sameAs: ["https://www.linkedin.com/company/asnmcare/"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "8th Floor, B-807, i-Thum Tower, Plot No. A-40, Sector-62",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 28.6262, longitude: 77.3729 },
      areaServed: [
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "New Delhi" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Greater Noida" },
        { "@type": "City", name: "Ghaziabad" },
        { "@type": "City", name: "Gurugram" },
        { "@type": "City", name: "Faridabad" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Bengaluru" },
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Chennai" },
        { "@type": "City", name: "Kolkata" },
        { "@type": "City", name: "Pune" },
        { "@type": "City", name: "Ahmedabad" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
        { "@type": "Country", name: "India" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-96760-20374",
          contactType: "customer service",
          email: "riteshsr@asnmcare.com",
          areaServed: ["IN", "Delhi NCR"],
          availableLanguage: ["English", "Hindi"],
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      numberOfEmployees: { "@type": "QuantitativeValue", value: 800 },
      founder: {
        "@type": "Person",
        name: "Ritesh Sharan Srivastava",
        jobTitle: "Founder & CEO",
        sameAs: "https://www.linkedin.com/in/ritesh-sharan-srivastava-372b3467/",
      },
      knowsAbout: [
        "Last-mile delivery", "Reverse logistics", "Warehousing",
        "Multi-courier aggregation", "Label printing", "RTO reduction",
        "Supply chain automation", "Logistics SaaS", "AWS infrastructure",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Amaze Solutions",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans bg-ink text-cream min-h-screen overflow-x-hidden">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand focus:text-white">
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
