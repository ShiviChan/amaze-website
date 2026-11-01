"use client";

import FadeIn from "./FadeIn";

const clients = ["ENTERPRISE", "MARKETPLACE", "D2C BRAND", "FMCG", "PHARMA", "AUTOMOTIVE"];

export default function ClientsRow() {
  return (
    <section className="py-16 border-y border-slate-200 bg-white">
      <div className="container-x">
        <FadeIn>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-400 mb-10">Trusted across industries</p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
          {clients.map((c, i) => (
            <FadeIn key={c} delay={i * 0.05}>
              <div className="text-center font-display font-bold text-xl md:text-2xl text-slate-400 hover:text-slate-700 transition-colors tracking-wider">{c}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
