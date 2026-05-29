"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container-x">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-brand/20 via-ink to-ink overflow-hidden p-10 md:p-20">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative">
            <FadeIn><div className="eyebrow mb-6">Get Amazed</div></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-5xl md:text-8xl tracking-tight leading-[0.95] text-balance max-w-4xl">
                Ready to move <br /><span className="italic text-brand">smarter?</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
                Tell us about your freight. We'll come back with a route, a quote, and a turnaround time you can plan around.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Get a quote <ArrowUpRight size={18} /></Link>
                <a href="https://www.linkedin.com/company/asnmcare/" target="_blank" rel="noreferrer" className="btn-ghost">Follow on LinkedIn <ArrowUpRight size={18} /></a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
