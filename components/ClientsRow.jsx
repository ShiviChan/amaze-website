"use client";

import FadeIn from "./FadeIn";

const clients = ["ENTERPRISE", "MARKETPLACE", "D2C BRAND", "FMCG", "PHARMA", "AUTOMOTIVE"];

export default function ClientsRow() {
  return (
    <section className="py-16 border-y border-white/10 bg-ink-800/50">
      <div className="container-x">
        <FadeIn>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-10">Trusted across industries</p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
          {clients.map((c, i) => (
            <FadeIn key={c} delay={i * 0.05}>
              <div className="text-center font-display text-xl md:text-2xl text-white/30 hover:text-white/70 transition-colors tracking-wider">{c}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
