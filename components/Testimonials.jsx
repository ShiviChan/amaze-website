"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, TrendingUp } from "lucide-react";
import FadeIn from "./FadeIn";

const quotes = [
  {
    text: "Amaze handled our Diwali surge without missing a beat. Their API integration made our dispatch invisible — exactly what good infrastructure should be.",
    name: "Operations Head", role: "Leading E-commerce Marketplace", metric: "Festive peak shipped on time", tint: "linear-gradient(135deg,#FF6B8B,#FF3D7F 50%,#7B5CFF)",
  },
  {
    text: "We've worked with every major logistics provider in India. Amaze is the only one where tech, people, and execution actually align.",
    name: "Supply Chain Director", role: "FMCG Distributor", metric: "One partner, pan-India", tint: "linear-gradient(135deg,#3BA9FF,#7B5CFF)",
  },
  {
    text: "Real-time tracking, security alerts, and a team that picks up the phone at 2am. Hard to ask for more.",
    name: "Founder", role: "D2C Brand", metric: "24/7 support", tint: "linear-gradient(135deg,#FF6B4A,#E50914)",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((i - 1 + quotes.length) % quotes.length);
  const next = () => setI((i + 1) % quotes.length);
  const q = quotes[i];

  return (
    <section className="relative py-24 md:py-28 bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <FadeIn>
            <div className="eyebrow mb-6">Testimonials</div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink">
              Voices of our <span className="text-gradient">clients</span>
            </h2>
          </FadeIn>
          <div className="flex items-center gap-3">
            <button onClick={prev} className="h-12 w-12 rounded-full bg-white border border-slate-200 shadow-soft grid place-items-center text-ink hover:bg-brand-gradient hover:text-white hover:border-transparent transition" aria-label="Previous testimonial"><ChevronLeft size={20} /></button>
            <button onClick={next} className="h-12 w-12 rounded-full bg-white border border-slate-200 shadow-soft grid place-items-center text-ink hover:bg-brand-gradient hover:text-white hover:border-transparent transition" aria-label="Next testimonial"><ChevronRight size={20} /></button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7 card p-8 md:p-12 flex flex-col">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={18} fill="currentColor" />)}
              </div>
              <p className="mt-6 flex-1 text-xl md:text-2xl font-display font-semibold tracking-tight text-ink leading-snug text-balance">
                "{q.text}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full grid place-items-center text-white font-display font-bold text-lg" style={{ backgroundImage: q.tint }}>
                  {q.name[0]}
                </div>
                <div>
                  <div className="text-ink font-bold">{q.name}</div>
                  <div className="text-slate-500 text-sm">{q.role}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative overflow-hidden rounded-3xl p-8 md:p-10 text-white shadow-lift min-h-[260px] flex flex-col justify-between" style={{ backgroundImage: q.tint }}>
              <Quote className="absolute -right-4 -top-4 text-white/15" size={160} strokeWidth={1.5} />
              <div className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] backdrop-blur">
                <TrendingUp size={14} /> Client story
              </div>
              <div className="relative">
                <div className="font-display text-3xl md:text-4xl font-extrabold leading-tight">{q.metric}</div>
                <div className="mt-2 text-white/80">{q.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-center gap-1.5">
          {quotes.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-brand" : "w-4 bg-slate-300"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
