"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, Headphones, Globe2 } from "lucide-react";
import FadeIn from "./FadeIn";

const pillars = [
  { icon: Zap, title: "Tech at the core", body: "Every workflow — tracking, security, punctuality, reporting, alerts — runs on tools we built ourselves.", tint: "from-[#FFE3EC] to-[#FFF4EE]" },
  { icon: BarChart3, title: "Cost & manpower savings", body: "Optimized routes and automated dispatch translate directly to lower spend and higher throughput.", tint: "from-[#E8E4FF] to-[#F5F3FF]" },
  { icon: Headphones, title: "Round-the-clock support", body: "800+ trained professionals delivering smiles, 24/7, with one shared goal — your customer's experience.", tint: "from-[#DDF1FF] to-[#F2FAFF]" },
  { icon: Globe2, title: "National footprint", body: "50+ locations across India and growing. One partner, every pin code that matters.", tint: "from-[#FFF1D6] to-[#FFFAF0]" },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <FadeIn>
            <div className="eyebrow mb-6">Why Amaze</div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-ink text-balance leading-[1.05]">
              Built different. <span className="text-gradient">On purpose.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-md leading-relaxed">
              We didn't enter logistics to do what's been done. We came to rewrite it — with technology, transparency, and a team that cares about every parcel like it's their own.
            </p>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group h-full p-7 rounded-3xl border border-white bg-gradient-to-br ${p.tint} shadow-soft hover:shadow-lift transition-shadow`}>
                  <div className="icon-tile h-12 w-12 mb-6"><Icon size={22} /></div>
                  <h3 className="text-xl font-bold text-ink mb-2">{p.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{p.body}</p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
