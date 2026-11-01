"use client";

import { motion } from "framer-motion";
import { Cloud, Cpu, Database, Lock, GitBranch, Activity, Brain, Network } from "lucide-react";
import FadeIn from "./FadeIn";

const stack = [
  { icon: Cloud, label: "Secure Cloud", note: "Enterprise-grade cloud infrastructure" },
  { icon: Brain, label: "AI Models", note: "RTO prediction · NLP for Cx · address parsing" },
  { icon: Database, label: "Real-time Data", note: "Event-driven pipelines · built-in BI" },
  { icon: Network, label: "High Availability", note: "Redundant setup with automatic failover" },
  { icon: Lock, label: "SOC-aligned", note: "Encrypted at rest & in transit" },
  { icon: GitBranch, label: "API-first", note: "REST · webhooks · SDKs" },
  { icon: Activity, label: "99.9% Uptime", note: "24/7 monitoring & alerting" },
  { icon: Cpu, label: "Auto-scaling", note: "Festive surge, zero touch" },
];

export default function TechStack() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <FadeIn className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <div className="eyebrow mb-6"><Cloud size={12} /> Infrastructure</div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.05] text-ink text-balance">
            Engineered for <span className="text-gradient">enterprise scale.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-md leading-relaxed">
            Our platform runs on <strong className="text-ink">secure, enterprise-grade cloud</strong> — auto-scaling, highly available and monitored around the clock. Every AI model, every API, every label generated is backed by infrastructure built to handle the next Diwali surge without a hiccup.
          </p>
        </FadeIn>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {stack.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.label} delay={(i % 4) * 0.08}>
                <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full p-6 card hover:shadow-lift hover:border-brand/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-canvas-200 grid place-items-center text-slate-700 group-hover:bg-brand-gradient group-hover:text-white transition-colors shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-ink">{s.label}</div>
                      <div className="text-sm text-slate-500 mt-1">{s.note}</div>
                    </div>
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
