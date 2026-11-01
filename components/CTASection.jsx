"use client";

import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";
import FadeIn from "./FadeIn";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container-x">
        <div className="relative rounded-[2rem] overflow-hidden p-8 sm:p-12 md:p-20 shadow-lift"
          style={{ backgroundImage: "linear-gradient(120deg, #E50914 0%, #FF3D7F 45%, #7B5CFF 100%)" }}>
          <div className="absolute inset-0 grid-bg opacity-20 mix-blend-overlay" />
          <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-[#FFD36E]/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
          <div className="relative">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur mb-6">Get Amazed</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[1.02] text-white text-balance max-w-4xl">
                Ready to move smarter?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
                Tell us about your freight. We'll come back with a route, a quote, and a turnaround time you can plan around.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink shadow-lift transition hover:-translate-y-0.5">
                  Get a quote <ArrowUpRight size={18} />
                </Link>
                <a href="https://www.linkedin.com/company/asnmcare/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                  <Linkedin size={18} /> Follow on LinkedIn
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
