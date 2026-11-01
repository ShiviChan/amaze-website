"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PackageOpen, Truck, Route, PackageCheck, Warehouse, Undo2, Globe2, Layers, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  { icon: PackageOpen, title: "Pickup", desc: "Same-day pickup from your door across most pin codes in India.", tag: "On-demand" },
  { icon: Route, title: "Middle-Mile", desc: "Truck & cargo van movement between hubs with trained loaders.", tag: "Hub-to-hub" },
  { icon: Truck, title: "Last-Mile Delivery", desc: "Preferred partner for India's top e-commerce. Trained agents, cash accounting, SLA-bound.", tag: "B2C" },
  { icon: PackageCheck, title: "Express Parcel", desc: "1.5M+ parcels handled in our peak month. Built for surge & festive load.", tag: "Surge-ready" },
  { icon: Warehouse, title: "Warehousing & Fulfilment", desc: "Distribution centers and sorting hubs segregated by pin code, dispatched daily.", tag: "Fulfilment" },
  { icon: Undo2, title: "Reverse Logistics", desc: "Take-back, refurbishment and recycling — extended producer responsibility, handled.", tag: "Returns" },
  { icon: Layers, title: "B2B Freight", desc: "Heavy & bulk freight, FTL/PTL across states with guaranteed turnaround.", tag: "B2B" },
  { icon: Globe2, title: "Cross-Border", desc: "Import/export shipping & customs coordination for D2C brands going global.", tag: "Global" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 md:py-28 bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <FadeIn>
            <div className="eyebrow mb-6">3PL Services</div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight max-w-3xl text-ink text-balance leading-[1.05]">
              Every shipment problem, <span className="text-gradient">solved end-to-end.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/services" className="btn-ghost text-sm">
              See all services <ArrowUpRight size={14} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.title} delay={(i % 4) * 0.08}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full p-6 rounded-3xl border border-slate-200/70 bg-canvas-50 hover:bg-white hover:shadow-lift transition-shadow overflow-hidden">
                  <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-rose/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-11 w-11 rounded-2xl bg-white border border-slate-200 grid place-items-center text-brand shadow-soft group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent transition-colors">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 bg-white border border-slate-200 rounded-full px-2 py-0.5">{s.tag}</span>
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
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
