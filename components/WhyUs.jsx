"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, Headphones, Globe2 } from "lucide-react";
import FadeIn from "./FadeIn";

const pillars = [
  { icon: Zap, title: "Tech at the core", body: "Every workflow — tracking, security, punctuality, reporting, alerts — runs on tools we built ourselves." },
  { icon: BarChart3, title: "Cost & manpower savings", body: "Optimized routes and automated dispatch translate directly to lower spend and higher throughput." },
  { icon: Headphones, title: "Round-the-clock support", body: "800+ trained professionals delivering smiles, 24/7, with one shared goal — your customer's experience." },
  { icon: Globe2, title: "National footprint", body: "50+ locations across India and growing. One partner, every pin code that matters." },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-px bg-gradient-to-b from-transparent via-brand to-transparent" />
      <div className="container-x grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <FadeIn>
            <div className="eyebrow mb-6">Why Amaze</div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance leading-[0.95]">
              Built different. <br /><span className="italic text-brand">On purpose.</span>
            </h2>
            <p className="mt-8 text-lg text-white/65 max-w-md leading-relaxed">
              We didn't enter logistics to do what's been done. We came to rewrite it — with technology, transparency, and a team that cares about every parcel like it's their own.
            </p>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={i * 0.1}>
                <motion.div whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex gap-6 p-8 rounded-2xl border border-white/10 hover:border-brand/40 hover:bg-brand/5 transition-all">
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-white/[0.04] border border-white/10 grid place-items-center text-white/80 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-2">{p.title}</h3>
                    <p className="text-white/60 leading-relaxed">{p.body}</p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
