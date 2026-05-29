"use client";

import { motion } from "framer-motion";
import { Cloud, Cpu, Database, Lock, GitBranch, Activity, Brain, Network } from "lucide-react";
import FadeIn from "./FadeIn";

const stack = [
  { icon: Cloud, label: "AWS Cloud", note: "EC2 · ECS · S3 · CloudFront" },
  { icon: Brain, label: "AI Models", note: "RTO prediction · NLP for Cx · address parsing" },
  { icon: Database, label: "Event-driven Data", note: "Kafka · Postgres · Metabase BI" },
  { icon: Network, label: "Multi-Region", note: "Mumbai + Singapore failover" },
  { icon: Lock, label: "SOC-aligned", note: "Encrypted at rest & in transit" },
  { icon: GitBranch, label: "API-first", note: "REST · webhooks · SDKs" },
  { icon: Activity, label: "99.9% Uptime", note: "PagerDuty · Datadog observability" },
  { icon: Cpu, label: "Auto-scaling", note: "Festive surge, zero touch" },
];

export default function TechStack() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-16">
        <FadeIn className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-brand mb-6">
            <Cloud size={12} /> Infrastructure
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95] text-balance">
            Engineered for<br /><span className="italic text-brand">enterprise scale.</span>
          </h2>
          <p className="mt-8 text-lg text-white/65 max-w-md leading-relaxed">
            Our platform runs on <strong className="text-white">AWS</strong> — auto-scaling, multi-region, observability-first. Every AI model, every API, every label generated is backed by infrastructure built to handle the next Diwali surge without a hiccup.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 text-sm text-white/70">
            <motion.span animate={{ scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-2 w-2 rounded-full bg-emerald-400" />
            Live · ap-south-1 (Mumbai) · all systems green
          </div>
        </FadeIn>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {stack.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.label} delay={(i % 4) * 0.08}>
                <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full p-6 rounded-2xl border border-white/10 hover:border-brand/40 hover:bg-brand/5 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-white/[0.04] border border-white/10 grid place-items-center text-white/70 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-white">{s.label}</div>
                      <div className="text-sm text-white/55 mt-1">{s.note}</div>
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
