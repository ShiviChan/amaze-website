"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles, Cpu } from "lucide-react";
import Marquee from "./Marquee";

const headline = ["Logistics,", "powered", "by", "AI."];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-ink to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute h-1 w-1 rounded-full bg-brand"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="flex-1 flex flex-col justify-end container-x relative z-20 pt-32 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8 flex-wrap">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-brand">
            <Sparkles size={12} /> AI · SaaS · 3PL
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-white/50">Est. 2015 · India</span>
        </motion.div>

        <h1 className="font-display text-[14vw] md:text-[8.5vw] leading-[0.95] tracking-tightest text-balance">
          {headline.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${w === "AI." ? "text-brand italic" : "text-white"}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }}
            className="max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
            India's tech-first 3PL + SaaS platform. We help D2C and enterprise brands automate label printing, shipment tracking, RTO reduction and Cx operations — powered by AI models running on <span className="text-white">AWS at scale</span>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.05 }}
            className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Talk to sales <ArrowUpRight size={18} /></Link>
            <Link href="/platform" className="btn-ghost"><Cpu size={14} /> Explore platform</Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }}
        className="relative z-20 border-y border-white/10 bg-ink/60 backdrop-blur shrink-0">
        <Marquee items={[
          "1.5M+ parcels handled in a peak month",
          "AI-powered RTO reduction up to 35%",
          "Used by Urbanic, Modicare & 50+ enterprises",
          "Clinship — multi-courier aggregator",
          "Real-time shipment visibility APIs",
          "Deployed on AWS · 99.9% uptime",
          "800+ logistics professionals",
          "Last-mile, every mile",
        ]} />
      </motion.div>
    </section>
  );
}
