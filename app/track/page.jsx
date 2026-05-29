"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import TrackShipment from "@/components/TrackShipment";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TrackPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Track", href: "/track" }]} />
      <section className="relative pt-12 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="container-x relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex eyebrow mb-8 mx-auto justify-center">Track your shipment</div>
          </FadeIn>
          <h1 className="font-display text-[12vw] md:text-[7vw] leading-[0.95] tracking-tightest text-balance">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="block">
              Where is my
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }} className="italic text-brand">
              parcel?
            </motion.span>
          </h1>
          <FadeIn delay={0.4}>
            <p className="mt-10 max-w-xl mx-auto text-lg text-white/65">
              Enter your AWB / waybill number. Live updates from every Amaze hub, every courier partner.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <TrackShipment />
        </div>
      </section>
    </>
  );
}
