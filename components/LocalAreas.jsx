"use client";

import { motion } from "framer-motion";
import { MapPin, Truck, Building2, PackageCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const primaryAreas = [
  { city: "Delhi", desc: "Same-day intracity delivery across central, west, south, east and north Delhi. Hub at Patparganj plus city-wide last-mile fleet." },
  { city: "Noida", desc: "HQ at i-Thum Tower, Sector-62. Direct pickups across Noida and Greater Noida — sectors 1 through 168, plus the Yamuna Expressway industrial belt." },
  { city: "Ghaziabad", desc: "Door pickup and last-mile delivery across Ghaziabad — Indirapuram, Vaishali, Vasundhara, Crossings Republik, Raj Nagar Extension, Modinagar and beyond." },
  { city: "Gurugram", desc: "Cyber City to Sohna Road — full intracity coverage for D2C, FMCG and quick-commerce brands operating out of Gurugram." },
  { city: "Faridabad", desc: "End-to-end last-mile and middle-mile across Faridabad, Ballabhgarh, NIT and the industrial belt — connected to our Noida HQ." },
  { city: "Delhi NCR (Wider)", desc: "Single freight network across Delhi NCR — Noida, Greater Noida, Ghaziabad, Gurugram, Faridabad. One partner, one SLA." },
];

const services = [
  { icon: Truck, label: "Transport company in Delhi NCR" },
  { icon: Building2, label: "Warehousing in Noida & Ghaziabad" },
  { icon: PackageCheck, label: "Last-mile delivery across NCR" },
  { icon: MapPin, label: "Pin-code coverage 99%+" },
];

export default function LocalAreas() {
  return (
    <section className="relative py-28 border-y border-white/10 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[1000px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <FadeIn className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-brand mb-6">
              <MapPin size={12} /> Local Coverage
            </div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95] text-balance">
              Your <span className="italic text-brand">logistics partner</span><br />across Delhi NCR.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="lg:col-span-5 lg:pt-16">
            <p className="text-white/65 leading-relaxed">
              Headquartered in Noida with daily operations across Delhi, Ghaziabad, Gurugram and Faridabad — Amaze Solutions is the tech-first transport and logistics company powering D2C and enterprise fulfilment in the National Capital Region.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {primaryAreas.map((a, i) => (
            <FadeIn key={a.city} delay={(i % 3) * 0.08}>
              <motion.article whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full p-6 rounded-2xl border border-white/10 hover:border-brand/40 hover:bg-brand/5 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl text-white group-hover:text-brand transition">{a.city}</h3>
                  <MapPin size={18} className="text-brand/60" />
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{a.desc}</p>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-ink/40">
                  <Icon size={16} className="text-brand shrink-0" />
                  <span className="text-sm text-white/80 leading-tight">{s.label}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
