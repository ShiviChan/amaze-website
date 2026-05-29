import Hero from "@/components/Hero";
import LogisticsScene from "@/components/LogisticsScene";
import LocalAreas from "@/components/LocalAreas";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import AIPlatform from "@/components/AIPlatform";
import ServicesGrid from "@/components/ServicesGrid";
import TrackInline from "@/components/TrackInline";
import TechStack from "@/components/TechStack";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogisticsScene />
      <LocalAreas />
      <Partners />
      <AIPlatform />
      <Stats />
      <ServicesGrid />
      <TrackInline />
      <TechStack />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
