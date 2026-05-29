"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const partners = [
  { name: "Urbanic", href: "https://in.urbanic.com/", category: "Fashion D2C", tagline: "Powering fulfilment & RTO reduction for India's fastest-growing fashion brand.", metric: "Sub-48h dispatch SLA" },
  { name: "Modicare", href: "https://www.modicare.com/", category: "Direct-to-Consumer", tagline: "Pan-India distribution backbone for one of India's most established D2C networks.", metric: "Pin-code coverage 99%+" },
];

const others = ["Leading Marketplace", "Premium FMCG", "Pharma Enterprise", "Quick Commerce", "Automotive OEM", "Health & Beauty"];

export default function Partners() {
  return (
    <section className="relative py-28 border-y border-white/10 overflow-hidden">
      <div className="container-x">
        <FadeIn>
          <div className="eyebrow mb-6">Trusted by</div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl text-balance leading-[0.95]">
            Brands that ship<br /><span className="italic text-brand">with us, scale with us.</span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {partners.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.15}>
              <motion.a href={p.href} target="_blank" rel="noreferrer"
                whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative block h-full p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
                <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-brand/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.25em] text-brand mb-6">{p.category}</div>
                  <div className="font-display text-6xl md:text-7xl text-white group-hover:text-brand transition-colors mb-6 tracking-tight">{p.name}</div>
                  <p className="text-white/65 text-lg leading-relaxed max-w-md">{p.tagline}</p>
                  <div className="mt-10 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {p.metric}
                    </div>
                    <ArrowUpRight className="text-white/40 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                  </div>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-8">And many more across</div>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {others.map((o) => (
                <motion.div key={o} whileHover={{ scale: 1.05, color: "#E50914" }}
                  className="font-display text-2xl md:text-3xl text-white/30 tracking-wide cursor-default">{o}</motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
