"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain, Printer, Eye, TrendingDown, MessageSquareText,
  Webhook, BarChart3, Code2, Shield, ArrowUpRight,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import TechStack from "@/components/TechStack";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

const features = [
  { icon: Printer, name: "Smart Label Printing", body: "Bulk-generate carrier-compliant labels (Delhivery, BlueDart, DTDC, India Post + 15 more). Custom templates for Manipal, TID and your own brand sleeves.", points: ["Multi-courier in one click", "Auto barcode + QR", "Brand-customized templates"] },
  { icon: Eye, name: "Real-time Order Visibility", body: "Live status across every shipment, every courier — one dashboard, one source of truth for ops, finance and Cx.", points: ["Unified dashboard", "Webhook events", "Slack / WhatsApp alerts"] },
  { icon: TrendingDown, name: "AI RTO Reduction", body: "Machine-learning scores every order at checkout. Flags risky addresses, nudges COD-to-prepaid, cuts returns up to 35%.", points: ["Address quality scoring", "COD risk prediction", "Auto verification flows"] },
  { icon: MessageSquareText, name: "Cx Automation Bots", body: "AI agents on WhatsApp and email handle WISMO, address corrections, reschedules and refund triage. Deflect 70% of tickets.", points: ["WhatsApp + email", "Multilingual", "Human handoff built-in"] },
  { icon: Webhook, name: "Multi-Courier Aggregator", body: "Clinship plugs 15+ courier partners through one API. Best-rate routing, fallback failover, unified COD reconciliation.", points: ["15+ couriers, 1 API", "Best-rate routing", "Reconciliation built-in"] },
  { icon: BarChart3, name: "BI & Reporting", body: "Pre-built dashboards plus custom reports. Cost-per-shipment, courier-wise NDR, RTO trends — all in one place.", points: ["Pre-built dashboards", "Scheduled exports", "Custom KPIs"] },
];

const why = [
  { icon: Code2, t: "Developer-friendly", b: "Modern REST APIs, SDKs in Node / Python / PHP, sandbox keys in 60s." },
  { icon: Shield, t: "Enterprise-secure", b: "Encrypted at rest & in transit, SOC-aligned controls, role-based access." },
  { icon: Brain, t: "Built with AI", b: "Production ML for RTO, NLP for address parsing, LLMs for Cx — running in production." },
];

export default function PlatformPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Platform", href: "/platform" }]} />
      <section className="relative -mt-24 pt-36 pb-20 overflow-hidden mesh-bg">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="container-x relative z-10">
          <FadeIn>
            <div className="eyebrow mb-8">
              <Brain size={12} /> Clinship Platform · AI-powered SaaS
            </div>
          </FadeIn>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tightest text-balance max-w-5xl">
            {"The operating system".split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block">{w}</motion.span>
              </span>
            ))}
            <br />
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }} className="text-gradient">
              for fulfilment.
            </motion.span>
          </h1>
          <FadeIn delay={0.6}>
            <p className="mt-12 max-w-2xl text-xl text-slate-600 leading-relaxed">
              Clinship is Amaze's AI-powered SaaS suite. Everything D2C and enterprise brands need to print labels, ship across couriers, track orders, reduce RTO and automate Cx — under one roof, one API, one dashboard.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Book a demo <ArrowUpRight size={18} /></Link>
              <Link href="/track" className="btn-ghost">Try live tracking <ArrowUpRight size={16} /></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 border-y border-slate-200 bg-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: 35, suffix: "%", label: "RTO reduction" },
            { v: 70, suffix: "%", label: "Cx auto-resolved" },
            { v: 15, suffix: "+", label: "Couriers in 1 API" },
            { v: 99.9, suffix: "%", label: "Platform uptime", format: (x) => x.toFixed(1) },
          ].map((s) => (
            <FadeIn key={s.label}>
              <div className="font-display font-extrabold text-5xl md:text-6xl text-ink">
                <AnimatedCounter to={s.v} suffix={s.suffix} format={s.format} />
              </div>
              <div className="mt-3 text-sm text-slate-500">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="container-x">
          <FadeIn>
            <div className="eyebrow mb-6">What's inside</div>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight max-w-3xl text-balance leading-[1.05]">
              Six products. <span className="text-gradient">One platform.</span>
            </h2>
          </FadeIn>
          <div className="mt-16 grid md:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeIn key={f.name} delay={(i % 2) * 0.1}>
                  <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative h-full p-8 rounded-3xl glass overflow-hidden">
                    <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-brand/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="h-12 w-12 rounded-xl bg-brand/10 border border-brand/30 grid place-items-center text-brand group-hover:bg-brand group-hover:text-white transition-colors mb-6">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-2xl font-medium text-ink mb-3">{f.name}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">{f.body}</p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {f.points.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-brand" />{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-slate-200">
        <div className="container-x grid md:grid-cols-3 gap-5">
          {why.map((w, i) => {
            const Icon = w.icon;
            return (
              <FadeIn key={w.t} delay={i * 0.1}>
                <div className="p-8 rounded-3xl border border-slate-200/70 bg-white shadow-soft hover:border-brand/40 transition group h-full">
                  <Icon className="text-brand mb-6 group-hover:scale-110 transition" size={28} />
                  <h3 className="text-xl font-medium text-ink mb-3">{w.t}</h3>
                  <p className="text-slate-600 leading-relaxed">{w.b}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <TechStack />
      <CTASection />
    </>
  );
}
