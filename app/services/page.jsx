"use client";

import { motion } from "framer-motion";
import { Truck, Building2, Route, PackageCheck, Cpu, ShieldCheck, MapPin, BellRing, BarChart3, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

const services = [
  { icon: Truck, title: "Intercity Freight", body: "Long-distance road freight between cities with guaranteed turnaround. Full truckload (FTL) and part truckload (PTL).", bullets: ["Pan-India coverage", "FTL & PTL", "Guaranteed TAT"] },
  { icon: Building2, title: "Intracity Delivery", body: "Hyperlocal pickups and drops across metros with same-day SLAs. Built for high-frequency, dense routes.", bullets: ["Same-day SLA", "Metro coverage", "Dense-route optimized"] },
  { icon: Route, title: "Long Haul", body: "Cross-state freight movement with optimized routing, fuel efficiency, and driver welfare baked in.", bullets: ["Multi-state", "Route optimization", "Driver wellbeing"] },
  { icon: PackageCheck, title: "First & Last Mile", body: "End-to-end coverage that completes your supply chain. 1.5M+ parcels handled in our peak month.", bullets: ["Door-to-door", "Surge-ready", "Peak-tested"] },
  { icon: Cpu, title: "API Integration", body: "Automate dispatch end-to-end. Vehicles allocated at agreed turnaround times — no manual coordination.", bullets: ["REST APIs", "Webhooks", "SLA-backed"] },
  { icon: ShieldCheck, title: "Freight Security", body: "Tamper alerts, geofencing, and live tracking. Your cargo, watched end-to-end.", bullets: ["Live tracking", "Geofencing", "Tamper alerts"] },
  { icon: MapPin, title: "Vehicle Punctuality", body: "In-house tools track every vehicle against schedule. Delays surface in real time, not after the fact.", bullets: ["Real-time ETAs", "Delay alerts", "Performance SLAs"] },
  { icon: BellRing, title: "Time Alerts", body: "Customisable alerts at every milestone — pickup, transit, delivery — to keep stakeholders aligned.", bullets: ["Milestone alerts", "Custom triggers", "Multi-channel"] },
  { icon: BarChart3, title: "Custom Reporting", body: "Reporting tailored to your operations. Pull the data you need, the way you need it, when you need it.", bullets: ["Tailored dashboards", "Export-ready", "Scheduled delivery"] },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <section className="relative pt-12 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="container-x relative z-10">
          <FadeIn><div className="eyebrow mb-8">What we do</div></FadeIn>
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.95] tracking-tightest text-balance max-w-5xl">
            {"One stop. Every".split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block">{w}</motion.span>
              </span>
            ))}
            <br />
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }} className="italic text-brand">
              freight problem.
            </motion.span>
          </h1>
          <FadeIn delay={0.6}>
            <p className="mt-12 max-w-2xl text-xl text-white/70 leading-relaxed">
              From the first kilometer to the last, from manual freight to API-driven dispatch — Amaze provides the full stack of logistics services in one place.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 border-t border-white/10">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.title} delay={(i % 3) * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full p-8 rounded-2xl glass overflow-hidden">
                  <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-brand/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-brand/10 border border-brand/30 grid place-items-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-3">{s.title}</h3>
                    <p className="text-white/60 leading-relaxed mb-6">{s.body}</p>
                    <ul className="space-y-2 text-sm text-white/70">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-brand" />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="py-28 border-y border-white/10 bg-ink-800/40">
        <div className="container-x">
          <FadeIn>
            <div className="eyebrow mb-6">How we work</div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-3xl text-balance leading-[0.95]">
              From quote to delivery, <span className="italic text-brand">simplified.</span>
            </h2>
          </FadeIn>
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Tell us your freight", b: "Lane, volume, frequency, SLA." },
              { n: "02", t: "We confirm capacity", b: "Vehicles, route, agreed TAT." },
              { n: "03", t: "Dispatch automated", b: "Manual or API-driven — your call." },
              { n: "04", t: "Track to delivery", b: "Live updates till the last mile." },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.08}>
                <div className="relative h-full p-8 rounded-2xl border border-white/10 hover:border-brand/40 transition group">
                  <div className="font-display text-6xl text-white/10 group-hover:text-brand/40 transition-colors mb-6">{step.n}</div>
                  <h3 className="text-xl font-medium text-white mb-2">{step.t}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.b}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="mt-16 flex justify-center">
              <Link href="/contact" className="btn-primary">Start now <ArrowUpRight size={18} /></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
