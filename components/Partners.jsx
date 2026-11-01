"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const partners = [
  { name: "Urbanic", href: "https://in.urbanic.com/", category: "Fashion D2C", tagline: "Powering fulfilment & RTO reduction for India's fastest-growing fashion brand.", metric: "Sub-48h dispatch SLA", gradient: "linear-gradient(135deg, #FFE3EC 0%, #FFD1C2 100%)" },
  { name: "Modicare", href: "https://www.modicare.com/", category: "Direct-to-Consumer", tagline: "Pan-India distribution backbone for one of India's most established D2C networks.", metric: "Pin-code coverage 99%+", gradient: "linear-gradient(135deg, #E4E9FF 0%, #D8F3FF 100%)" },
];

const others = ["Leading Marketplace", "Premium FMCG", "Pharma Enterprise", "Quick Commerce", "Automotive OEM", "Health & Beauty"];

export default function Partners() {
  return (
    <section className="relative py-24 md:py-28 bg-white overflow-hidden">
      <div className="container-x">
        <FadeIn>
          <div className="eyebrow mb-6">Trusted by</div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight max-w-3xl text-ink text-balance leading-[1.05]">
            Brands that ship with us, <span className="text-gradient">scale with us.</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {partners.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.15}>
              <motion.a href={p.href} target="_blank" rel="noreferrer"
                whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative block h-full p-8 md:p-10 rounded-[2rem] border border-white overflow-hidden shadow-soft hover:shadow-lift transition-shadow"
                style={{ backgroundImage: p.gradient }}>
                <div className="relative">
                  <div className="inline-block rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand mb-6">{p.category}</div>
                  <div className="font-display font-extrabold text-5xl md:text-6xl text-ink mb-5 tracking-tight">{p.name}</div>
                  <p className="text-slate-700 text-lg leading-relaxed max-w-md">{p.tagline}</p>
                  <div className="mt-10 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-soft">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {p.metric}
                    </div>
                    <div className="h-11 w-11 rounded-full bg-white grid place-items-center shadow-soft text-ink group-hover:bg-brand-gradient group-hover:text-white transition">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-14">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-6">And many more across</div>
            <div className="flex flex-wrap gap-3">
              {others.map((o) => (
                <span key={o} className="rounded-full border border-slate-200 bg-canvas-50 px-5 py-2.5 font-display font-semibold text-slate-600 hover:border-brand/40 hover:text-brand transition cursor-default">{o}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
