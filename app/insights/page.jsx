"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { absoluteUrl } from "@/lib/site";

const posts = [
  { slug: "ai-rto-reduction-india-d2c", title: "How AI cuts RTO by 35% for India's D2C brands", excerpt: "A practical guide to predicting and preventing Return-To-Origin orders using address quality scoring, COD risk, and customer-history signals.", tag: "AI · RTO", read: "8 min read", date: "May 2026" },
  { slug: "clinship-multi-courier-aggregator", title: "Why one API beats fifteen courier integrations", excerpt: "Inside Clinship's multi-courier aggregator: how brands plug 15+ partners through a single REST API, with automatic failover and best-rate routing.", tag: "Platform · API", read: "6 min read", date: "May 2026" },
  { slug: "label-printing-at-scale-amaze", title: "Bulk label printing for 1.5M parcels in a peak month", excerpt: "How Amaze prints carrier-compliant labels at festive scale — multi-courier templates, brand sleeves, and zero-touch dispatch on AWS.", tag: "Operations · Print", read: "5 min read", date: "Apr 2026" },
];

export default function InsightsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Amaze Solutions Insights",
    url: absoluteUrl("/insights"),
    publisher: { "@type": "Organization", name: "Amaze Solutions" },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      url: absoluteUrl(`/insights/${p.slug}`),
      datePublished: "2026-05-01",
      author: { "@type": "Organization", name: "Amaze Solutions" },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: "Insights", href: "/insights" }]} />

      <section className="relative pt-12 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="container-x relative z-10">
          <FadeIn><div className="eyebrow mb-8">Field notes · Playbooks</div></FadeIn>
          <h1 className="font-display text-[12vw] md:text-[7vw] leading-[0.95] tracking-tightest text-balance max-w-5xl">
            {"Insights from".split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block">{w}</motion.span>
              </span>
            ))}
            <br />
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }} className="italic text-brand">
              the operators.
            </motion.span>
          </h1>
          <FadeIn delay={0.5}>
            <p className="mt-10 max-w-2xl text-xl text-white/70 leading-relaxed">
              Deep-dives on AI in logistics, RTO reduction, label printing at scale, courier aggregation, and the engineering choices that keep fulfilment humming at festive surge.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <FadeIn key={p.slug} delay={(i % 3) * 0.1}>
              <article className="group h-full">
                <Link href={`/insights/${p.slug}`}
                  className="block h-full p-8 rounded-2xl border border-white/10 hover:border-brand/40 hover:bg-brand/5 transition-all">
                  <div className="flex items-center gap-3 text-xs text-white/40 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-brand"><Tag size={11} /> {p.tag}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span className="inline-flex items-center gap-1.5"><Clock size={11} /> {p.read}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl tracking-tight leading-tight text-white group-hover:text-brand transition mb-4">{p.title}</h2>
                  <p className="text-white/60 leading-relaxed">{p.excerpt}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm text-white group-hover:text-brand transition">
                    Read article
                    <ArrowUpRight size={14} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div className="mt-4 text-xs text-white/30">{p.date}</div>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="container-x mt-16 text-center text-white/40 text-sm">
            More articles coming weekly. Subscribe via{" "}
            <a href="https://www.linkedin.com/company/asnmcare/" target="_blank" rel="noreferrer"
              className="text-white/70 hover:text-brand transition">LinkedIn →</a>
          </p>
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}
