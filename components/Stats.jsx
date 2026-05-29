"use client";

import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 1500000, label: "Parcels in a peak month", suffix: "+", format: (v) => (v / 1000000).toFixed(2) + "M" },
  { value: 50, label: "Locations across India", suffix: "+" },
  { value: 800, label: "Trained professionals", suffix: "+" },
  { value: 10, label: "Years in business", suffix: "+" },
];

export default function Stats() {
  return (
    <section className="relative py-28 border-y border-white/10 bg-gradient-to-b from-ink to-ink-800">
      <div className="container-x">
        <FadeIn>
          <div className="eyebrow mb-6">By the numbers</div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl text-balance">
            Scale you can <span className="italic text-brand">trust.</span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="bg-ink p-8 md:p-10 group hover:bg-ink-800 transition-colors">
              <div className="font-display text-5xl md:text-6xl tracking-tight text-white group-hover:text-brand transition-colors">
                <AnimatedCounter to={s.value} suffix={s.suffix} format={s.format} />
              </div>
              <div className="mt-4 text-sm text-white/60 leading-relaxed">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
