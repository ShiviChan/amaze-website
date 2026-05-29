"use client";

import { motion } from "framer-motion";
import { Compass, Heart, Sparkles, Target, Users, Brain } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import AnimatedCounter from "@/components/AnimatedCounter";
import Founder from "@/components/Founder";
import Breadcrumbs from "@/components/Breadcrumbs";

const timeline = [
  { year: "2015", title: "The founding", body: "A group of determined, like-minded builders came together with one passion — to revolutionize the logistics industry." },
  { year: "2018", title: "Tech-first pivot", body: "Started building in-house: freight tracking, vehicle punctuality, customised reporting, time alerts." },
  { year: "2020", title: "National scale", body: "Crossed 50+ locations across India with 800+ trained professionals." },
  { year: "2022", title: "Clinship launched", body: "Released our multi-courier aggregator + label printing platform — Clinship — for enterprise D2C clients." },
  { year: "2023", title: "API & AI", body: "Launched API-integrated dispatch and our first production AI models for RTO prediction and Cx automation." },
  { year: "Diwali Peak", title: "1.5M+ parcels in a month", body: "Handled over 1.5 million parcels in a single peak month — first & last mile, without breaking stride." },
  { year: "Today", title: "Tech + 3PL, together.", body: "Trusted by Urbanic, Modicare and 50+ enterprises. Still scaling. Still shipping AI alongside parcels." },
];

const values = [
  { icon: Target, title: "Mission", body: "Deliver smiles to every customer, round the clock, through technology and discipline." },
  { icon: Compass, title: "Vision", body: "Rewrite India's logistics playbook — make freight transparent, predictable, and effortlessly digital." },
  { icon: Heart, title: "Values", body: "Customer obsession. Engineering excellence. Speed of execution. Ownership at every level." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <section className="relative pt-12 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="container-x relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-brand mb-8">
              <Brain size={12} /> About Amaze
            </div>
          </FadeIn>
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.95] tracking-tightest text-balance max-w-5xl">
            {"Built by people who".split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block">{w}</motion.span>
              </span>
            ))}
            <br />
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }} className="italic text-brand">
              refuse the status quo.
            </motion.span>
          </h1>
          <FadeIn delay={0.5}>
            <p className="mt-12 max-w-2xl text-xl text-white/70 leading-relaxed">
              Founded in October 2015, Amaze has matured into a tech-first logistics + SaaS company — from intercity freight to AI-driven fulfilment software. One stop for every shipment problem, powered by our own Clinship platform on AWS.
            </p>
          </FadeIn>
        </div>
      </section>

      <Founder />

      <section className="py-28 border-y border-white/10">
        <div className="container-x">
          <FadeIn>
            <div className="eyebrow mb-6">Why we exist</div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-3xl text-balance leading-[0.95]">
              Three things that don't <span className="italic text-brand">change.</span>
            </h2>
          </FadeIn>
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.title} delay={i * 0.1}>
                  <div className="h-full p-8 rounded-2xl border border-white/10 hover:border-brand/40 transition-all group">
                    <div className="h-12 w-12 rounded-xl bg-brand/10 border border-brand/30 grid place-items-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-2xl font-medium mb-3">{v.title}</h3>
                    <p className="text-white/65 leading-relaxed">{v.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-x">
          <FadeIn>
            <div className="eyebrow mb-6">Our story</div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-3xl text-balance leading-[0.95]">
              A decade of <span className="italic text-brand">delivering smiles.</span>
            </h2>
          </FadeIn>
          <div className="mt-20 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2" />
            <div className="space-y-16">
              {timeline.map((t, i) => (
                <FadeIn key={t.year} delay={i * 0.05}>
                  <div className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-brand ring-4 ring-brand/20 [direction:ltr]" />
                    <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-16 md:text-right" : "md:pl-16"} [direction:ltr]`}>
                      <div className="font-display text-5xl md:text-6xl text-brand tracking-tight">{t.year}</div>
                    </div>
                    <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-16" : "md:pr-16"} [direction:ltr]`}>
                      <h3 className="text-2xl font-medium text-white mb-2">{t.title}</h3>
                      <p className="text-white/65 leading-relaxed">{t.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 border-y border-white/10 bg-ink-800/40">
        <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
          <FadeIn className="lg:col-span-6">
            <div className="eyebrow mb-6">The team</div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] text-balance">
              <span className="italic text-brand">800+</span><br />and counting.
            </h2>
            <p className="mt-8 text-lg text-white/65 max-w-md leading-relaxed">
              Our team of 800+ logistics professionals, engineers, designers and Cx specialists share one goal: deliver smiles, round the clock. Different roles, same culture.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="p-8 rounded-2xl bg-ink border border-white/10">
                <Users className="text-brand mb-4" size={32} />
                <div className="font-display text-5xl"><AnimatedCounter to={800} suffix="+" /></div>
                <div className="mt-2 text-sm text-white/60">Professionals</div>
              </div>
              <div className="p-8 rounded-2xl bg-ink border border-white/10">
                <Sparkles className="text-brand mb-4" size={32} />
                <div className="font-display text-5xl"><AnimatedCounter to={24} suffix="/7" /></div>
                <div className="mt-2 text-sm text-white/60">Support coverage</div>
              </div>
              <div className="col-span-2 p-8 rounded-2xl bg-ink border border-white/10">
                <p className="text-xl font-display text-white/90 italic leading-snug">"Come and get Amazed with Amaze."</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
