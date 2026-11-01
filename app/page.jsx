import Hero from "@/components/Hero";
import AIPlatform from "@/components/AIPlatform";
import ProductDemos from "@/components/ProductDemos";
import LocalAreas from "@/components/LocalAreas";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import AIInnovations from "@/components/AIInnovations";
import ServicesGrid from "@/components/ServicesGrid";
import TrackInline from "@/components/TrackInline";
import Developers from "@/components/Developers";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AIPlatform />
      <ProductDemos />
      <Stats />
      <AIInnovations />
      <LocalAreas />
      <Partners />
      <ServicesGrid />
      <Developers />
      <TrackInline />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
