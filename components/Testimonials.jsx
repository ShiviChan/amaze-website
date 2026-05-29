"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";

const quotes = [
  { text: "Amaze handled our Diwali surge without missing a beat. Their API integration made our dispatch invisible — exactly what good infrastructure should be.", name: "Operations Head", role: "Leading E-commerce Marketplace" },
  { text: "We've worked with every major logistics provider in India. Amaze is the only one where tech, people, and execution actually align.", name: "Supply Chain Director", role: "FMCG Distributor" },
  { text: "Real-time tracking, security alerts, and a team that picks up the phone at 2am. Hard to ask for more.", name: "Founder", role: "D2C Brand" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((i - 1 + quotes.length) % quotes.length);
  const next = () => setI((i + 1) % quotes.length);

  return (
    <section className="relative py-28 border-y border-white/10">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <FadeIn className="lg:col-span-4">
          <div className="eyebrow mb-6">What customers say</div>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
            Trusted by the<br /><span className="italic text-brand">teams that ship.</span>
          </h2>
        </FadeIn>

        <div className="lg:col-span-8 relative min-h-[280px]">
          <Quote className="absolute -top-4 -left-2 text-brand/20" size={120} strokeWidth={1} />
          <AnimatePresence mode="wait">
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="relative">
              <p className="text-2xl md:text-3xl font-display tracking-tight text-white/90 leading-snug text-balance">
                "{quotes[i].text}"
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-brand/20 border border-brand/30 grid place-items-center text-brand font-display text-xl">
                  {quotes[i].name[0]}
                </div>
                <div>
                  <div className="text-white font-medium">{quotes[i].name}</div>
                  <div className="text-white/50 text-sm">{quotes[i].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center gap-4">
            <button onClick={prev} className="h-11 w-11 rounded-full border border-white/15 grid place-items-center text-white/80 hover:bg-brand hover:border-brand hover:text-white transition" aria-label="Previous"><ChevronLeft size={18} /></button>
            <button onClick={next} className="h-11 w-11 rounded-full border border-white/15 grid place-items-center text-white/80 hover:bg-brand hover:border-brand hover:text-white transition" aria-label="Next"><ChevronRight size={18} /></button>
            <div className="ml-2 text-sm text-white/40 tabular-nums">{String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
