"use client";

import { Package, MapPin, Building2, Map, CheckCircle2, Target, Zap, Radio } from "lucide-react";
import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

// Network-wide totals from the Clinship platform (Nov 2026). Aggregates only — never per-client figures.
const stats = [
  { icon: Package, value: 15, suffix: " Lakh+", label: "Shipments managed on Clinship" },
  { icon: Radio, value: 27, suffix: " Cr+", label: "Live tracking updates processed", format: (v) => (v / 10).toFixed(1) },
  { icon: MapPin, value: 6500, suffix: "+", label: "Pin codes delivered to" },
  { icon: Building2, value: 1600, suffix: "+", label: "Cities & towns served" },
  { icon: Map, value: 30, suffix: "+", label: "States & UTs covered" },
  { icon: CheckCircle2, value: 92, suffix: "%+", label: "Delivery success rate" },
  { icon: Target, value: 90, suffix: "%+", label: "Delivered on the first attempt" },
  { icon: Zap, value: 15000, suffix: "+", label: "Shipments handled in a single day" },
];

export default function Stats() {
  return (
    <section className="relative py-24 md:py-28 mesh-soft">
      <div className="container-x">
        <FadeIn>
          <div className="text-center">
            <div className="eyebrow mb-6">By the numbers</div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-ink text-balance">
              Our core <span className="text-gradient">strengths</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">Real numbers from the Amaze network — across every brand we ship for.</p>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.label} delay={(i % 4) * 0.08} className="card p-6 md:p-7 group hover:shadow-lift hover:-translate-y-1 transition">
                <div className="icon-tile h-11 w-11 mb-5"><Icon size={20} /></div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-ink">
                  <AnimatedCounter to={s.value} suffix={s.suffix} format={s.format} />
                </div>
                <div className="mt-2 text-sm text-slate-500 leading-relaxed">{s.label}</div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
