"use client";

import Image from "next/image";
import { Linkedin, ArrowUpRight, Quote } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Founder() {
  return (
    <section className="relative py-28 border-y border-white/10 overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/15 blur-3xl pointer-events-none" />
      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        <FadeIn className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-brand/20 via-ink to-ink">
            <div className="absolute -inset-1 bg-gradient-to-br from-brand/30 to-transparent rounded-2xl blur-xl pointer-events-none" />
            <div className="relative h-full w-full">
              <Image src="/founder.jpg" alt="Ritesh Sharan Srivastava, Founder and CEO of Amaze Solutions"
                fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 z-10">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-brand mb-1">Founder & CEO</div>
                <div className="font-display text-2xl text-white leading-tight">Ritesh Sharan<br />Srivastava</div>
              </div>
              <a href="https://www.linkedin.com/in/ritesh-sharan-srivastava-372b3467/"
                target="_blank" rel="noreferrer" aria-label="Ritesh Sharan Srivastava on LinkedIn"
                className="h-11 w-11 rounded-full bg-white/10 border border-white/20 grid place-items-center text-white hover:bg-brand hover:border-brand transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="lg:col-span-7">
          <FadeIn>
            <div className="eyebrow mb-6">Leadership</div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] text-balance">
              Ritesh Sharan<br /><span className="italic text-brand">Srivastava.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-6 inline-flex items-center gap-3 text-white/60 flex-wrap">
              <span>Founder & CEO</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Amaze Solutions / ASNM Care</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Est. 2015</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="mt-10 relative pl-8 border-l-2 border-brand">
              <Quote className="absolute -left-3 -top-2 text-brand bg-ink" size={20} />
              <p className="font-display text-2xl md:text-3xl text-white/90 leading-snug text-balance italic">
                "We started Amaze to change the landscape of traditional logistics. A decade later, we're still on it — only now we ship AI alongside parcels."
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="mt-10 text-white/65 leading-relaxed max-w-xl">
              Ritesh founded Amaze in 2015 with a small group of like-minded builders. Under his leadership, Amaze has grown from a road freight upstart into a tech-first 3PL + SaaS company powering fulfilment for brands like Urbanic, Modicare, and dozens of enterprise clients across India.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <a href="https://www.linkedin.com/in/ritesh-sharan-srivastava-372b3467/" target="_blank" rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-sm text-white hover:text-brand transition">
              Connect on LinkedIn <ArrowUpRight size={14} />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
