"use client";

import { motion } from "framer-motion";
import { Printer, Eye, Brain, Repeat, MessageSquareText, Webhook, TrendingDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

const products = [
  { icon: Printer, name: "Smart Label Printing", sku: "Clinship · Print", body: "Auto-generate carrier-compliant labels in bulk. Manipal / TID / custom templates. Multi-courier in one click." },
  { icon: Eye, name: "Order Visibility", sku: "Clinship · Track", body: "Single pane of glass across every courier you ship with. APIs, dashboards, webhooks — ops gets one source of truth." },
  { icon: TrendingDown, name: "RTO Reduction AI", sku: "Clinship · AI", body: "ML scores every order at checkout. Flag risky addresses, suggest COD-to-prepaid nudges, cut returns up to 35%." },
  { icon: Repeat, name: "Reverse Workflow", sku: "Clinship · Returns", body: "Automated pickups, condition assessment, refurbishment routing — full reverse loop, zero manual coordination." },
  { icon: MessageSquareText, name: "Cx Automation", sku: "Clinship · Bots", body: "AI agents handling WISMO, address fixes, delivery rescheduling on WhatsApp/email — deflect 70% of support tickets." },
  { icon: Webhook, name: "Multi-Courier Aggregator", sku: "Clinship · Aggr", body: "Plug 15+ courier partners through one API. Best-rate routing, fallback failover, unified COD reconciliation." },
];

export default function AIPlatform() {
  return (
    <section id="platform" className="relative py-32 overflow-hidden border-y border-white/10">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <FadeIn className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-brand mb-6">
              <Brain size={12} /> AI Platform · Clinship Suite
            </div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] text-balance">
              We don't just ship.<br />
              <span className="italic text-brand">We build the SaaS</span><br />
              that ships everything.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="lg:col-span-5 lg:pt-16">
            <p className="text-lg text-white/70 leading-relaxed">
              Beyond 3PL, Amaze is a software company. Our <strong className="text-white">Clinship suite</strong> is a tech platform that runs end-to-end fulfilment for D2C and enterprise brands — label printing, multi-courier routing, real-time visibility, RTO prediction, returns and Cx automation. Built with AI. Deployed on AWS. Shipped at enterprise scale.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { v: 35, suffix: "%", label: "RTO reduction with AI" },
              { v: 70, suffix: "%", label: "Cx tickets auto-resolved" },
              { v: 15, suffix: "+", label: "Couriers in one API" },
              { v: 99.9, suffix: "%", label: "Platform uptime on AWS", format: (x) => x.toFixed(1) },
            ].map((stat) => (
              <div key={stat.label} className="bg-ink p-6 md:p-8">
                <div className="font-display text-4xl md:text-5xl text-white">
                  <AnimatedCounter to={stat.v} suffix={stat.suffix} format={stat.format} />
                </div>
                <div className="mt-2 text-sm text-white/55">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.name} delay={(i % 3) * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
                  <div className="absolute top-4 right-6 font-display text-5xl text-white/[0.04] group-hover:text-brand/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-brand/10 border border-brand/30 grid place-items-center text-brand group-hover:bg-brand group-hover:text-white transition-colors mb-6">
                      <Icon size={22} />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">{p.sku}</div>
                    <h3 className="text-2xl font-medium text-white mb-3">{p.name}</h3>
                    <p className="text-white/60 leading-relaxed">{p.body}</p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 flex justify-center">
            <Link href="/platform" className="btn-primary">See the full platform <ArrowUpRight size={18} /></Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
