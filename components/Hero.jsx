"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Sparkles, Search, CheckCircle2, TrendingDown,
  Printer, Truck, MapPin, ShieldCheck,
} from "lucide-react";
import Marquee from "./Marquee";

const ease = [0.22, 1, 0.36, 1];

const couriers = ["Delhivery", "BlueDart", "Amazon", "DTDC", "Ekart", "Xpressbees"];

function FloatCard({ className = "", delay = 0, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease }}
      className={`absolute z-20 ${className}`}
    >
      <div className="animate-float" style={{ animationDelay: `${delay * 2}s` }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const router = useRouter();
  const [awb, setAwb] = useState("");

  const onTrack = (e) => {
    e.preventDefault();
    const v = awb.trim();
    router.push(v ? `/track/?awb=${encodeURIComponent(v)}` : "/track/");
  };

  return (
    <section className="relative overflow-hidden mesh-bg">
      {/* drifting colour blobs */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-coral/30 blur-[110px] animate-drift" />
      <div className="pointer-events-none absolute right-0 top-24 h-[380px] w-[380px] rounded-full bg-violet/25 blur-[110px] animate-drift" style={{ animationDelay: "-6s" }} />
      <div className="pointer-events-none absolute left-1/2 bottom-10 h-[300px] w-[300px] rounded-full bg-sky/25 blur-[100px] animate-drift" style={{ animationDelay: "-12s" }} />

      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 pt-36 md:pt-40 pb-16 md:pb-24 items-center">
        {/* Copy */}
        <div className="lg:col-span-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-7 flex-wrap">
            <span className="eyebrow"><Sparkles size={12} /> AI · SaaS · 3PL</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Est. 2015 · India</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease }}
            className="font-display font-extrabold text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] tracking-tight text-ink text-balance"
          >
            Logistics,<br />powered by <span className="text-gradient">AI.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
            India's tech-first 3PL + SaaS platform. We help D2C and enterprise brands automate label printing, shipment tracking, RTO reduction and Cx operations — powered by AI running <span className="font-semibold text-ink">at enterprise scale</span>.
          </motion.p>

          {/* Shiprocket-style inline action */}
          <motion.form onSubmit={onTrack}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 max-w-xl">
            <label htmlFor="hero-awb" className="block text-sm font-semibold text-ink mb-3">Track a shipment instantly</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 shadow-soft focus-within:border-brand/50 focus-within:ring-4 focus-within:ring-brand/10 transition">
                <Search size={18} className="text-slate-400 shrink-0" />
                <input id="hero-awb" value={awb} onChange={(e) => setAwb(e.target.value)}
                  placeholder="Enter AWB / waybill number"
                  className="w-full bg-transparent py-3.5 text-ink placeholder:text-slate-400 focus:outline-none" />
              </div>
              <button type="submit" className="btn-primary !rounded-2xl !px-7">Track</button>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Shipping at scale? <Link href="/contact" className="font-semibold text-brand hover:underline">Talk to sales</Link> or{" "}
              <Link href="/platform" className="font-semibold text-violet hover:underline">explore the platform</Link>.
            </p>
          </motion.form>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Trusted by Urbanic & Modicare</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> 6,500+ pin codes</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> 99.9% uptime</span>
          </motion.div>
        </div>

        {/* Floating product UI collage */}
        <div className="lg:col-span-6 relative h-[440px] sm:h-[500px]">
          {/* central card — positioned by a static wrapper so framer's transform doesn't clobber the centring */}
          <div className="absolute inset-0 grid place-items-center pt-6 sm:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease }}
            className="relative z-10 w-[78%] sm:w-[340px] card p-5 shadow-lift"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Clinship · Live</div>
                <div className="mt-1 font-display text-lg font-bold text-ink">Order #AMZ-24817</div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">In transit</span>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { icon: Printer, t: "Label printed", s: "Delhivery · 10:14 AM", done: true },
                { icon: Truck, t: "Picked up · Noida hub", s: "Sector-62 · 12:40 PM", done: true },
                { icon: MapPin, t: "Out for delivery", s: "Mumbai · ETA 6 PM", done: false },
              ].map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.t} className="flex items-center gap-3">
                    <div className={`h-9 w-9 rounded-xl grid place-items-center ${r.done ? "bg-brand-gradient text-white" : "bg-slate-100 text-slate-400"}`}>
                      <Icon size={16} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm font-semibold ${r.done ? "text-ink" : "text-slate-500"}`}>{r.t}</div>
                      <div className="text-xs text-slate-400">{r.s}</div>
                    </div>
                    {r.done && <CheckCircle2 size={16} className="text-emerald-500" />}
                  </div>
                );
              })}
            </div>
            <div className="mt-5 h-2 rounded-full bg-slate-100 overflow-hidden">
              <motion.div className="h-full rounded-full bg-brand-gradient"
                initial={{ width: "0%" }} animate={{ width: "72%" }} transition={{ duration: 1.6, delay: 1, ease }} />
            </div>
          </motion.div>
          </div>

          {/* RTO stat */}
          <FloatCard className="left-0 top-2 sm:-left-2 hidden sm:block" delay={0.6}>
            <div className="card p-4 w-[190px]">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <TrendingDown size={14} className="text-emerald-500" /> RTO with AI
              </div>
              <div className="mt-1 font-display text-3xl font-extrabold text-ink">−35%</div>
              <svg viewBox="0 0 120 32" className="mt-2 w-full h-8">
                <defs>
                  <linearGradient id="spark" x1="0" x2="1">
                    <stop offset="0%" stopColor="#E50914" />
                    <stop offset="100%" stopColor="#7B5CFF" />
                  </linearGradient>
                </defs>
                <path d="M0 6 L20 9 L40 8 L60 16 L80 20 L100 25 L120 28" fill="none" stroke="url(#spark)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </FloatCard>

          {/* Delivered toast */}
          <FloatCard className="right-0 top-6 sm:-right-2" delay={0.8}>
            <div className="card px-4 py-3 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-emerald-500 text-white grid place-items-center"><CheckCircle2 size={18} /></div>
              <div>
                <div className="text-sm font-bold text-ink">Order Delivered</div>
                <div className="text-xs text-slate-500">Gurugram · 2 min ago</div>
              </div>
            </div>
          </FloatCard>

          {/* Courier chips */}
          <FloatCard className="left-0 bottom-0 sm:-left-2 hidden sm:block" delay={1}>
            <div className="card p-4 w-[220px]">
              <div className="text-xs font-semibold text-slate-500 mb-2">15+ couriers · 1 API</div>
              <div className="flex flex-wrap gap-1.5">
                {couriers.map((c) => (
                  <span key={c} className="rounded-full bg-canvas-200 px-2.5 py-1 text-[11px] font-semibold text-slate-700">{c}</span>
                ))}
              </div>
            </div>
          </FloatCard>

          {/* Uptime */}
          <FloatCard className="right-0 bottom-0 sm:-right-2" delay={1.2}>
            <div className="rounded-2xl bg-ink text-white px-4 py-3 shadow-lift flex items-center gap-3">
              <ShieldCheck size={18} className="text-emerald-400" />
              <div>
                <div className="text-sm font-bold">99.9% uptime</div>
                <div className="text-[11px] text-white/60">Enterprise-grade cloud</div>
              </div>
            </div>
          </FloatCard>
        </div>
      </div>

      {/* Trust strip */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 border-y border-slate-200/70 bg-white/80 backdrop-blur">
        <Marquee items={[
          "1.5M+ parcels handled in a peak month",
          "AI-powered RTO reduction up to 35%",
          "Used by Urbanic, Modicare & 50+ enterprises",
          "Clinship — multi-courier aggregator",
          "Real-time shipment visibility APIs",
          "Secure cloud · 99.9% uptime",
          "800+ logistics professionals",
          "Last-mile, every mile",
        ]} />
      </motion.div>
    </section>
  );
}
