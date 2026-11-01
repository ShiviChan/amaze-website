"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  { q: "What does Amaze Solutions do?", a: "Amaze Solutions is India's tech-first logistics partner. We operate end-to-end 3PL — pickup, middle mile, last-mile delivery, reverse logistics, warehousing — and we build the Clinship SaaS platform: AI-powered label printing, real-time order tracking, RTO reduction and Cx automation for D2C and enterprise brands." },
  { q: "Which cities does Amaze deliver to in India?", a: "We have direct presence in 50+ Indian cities with our own staff, hubs and last-mile fleet — including Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Lucknow, Jaipur, Noida and most metros. We ship pan-India — to 6,500+ pin codes across 1,600+ cities and towns in 30+ states and UTs, including the North-East." },
  { q: "What is Clinship?", a: "Clinship is Amaze's AI-powered fulfilment SaaS suite. It includes smart label printing (multi-courier templates), a unified order-tracking dashboard, an ML model for RTO prediction and reduction (up to 35%), Cx automation bots for WhatsApp/email, a multi-courier aggregator API (15+ partners) and BI reporting — all on one platform." },
  { q: "How does the AI-powered RTO reduction work?", a: "Our machine learning model scores every order at checkout against address quality, COD risk, customer history, and 30+ other signals. Risky orders are flagged so brands can verify the address, nudge the customer from COD to prepaid, or hold the order — reducing RTOs by up to 35% in production with our customers." },
  { q: "Which brands use Amaze Solutions?", a: "Amaze is the trusted 3PL and tech partner for leading D2C and enterprise brands including Urbanic and Modicare, plus customers across e-commerce marketplaces, FMCG, pharma, fashion and quick commerce." },
  { q: "Do you offer APIs for integration?", a: "Yes. Clinship exposes a REST API with webhooks and SDKs for Node, Python and PHP. You can plug into label generation, multi-courier dispatch, tracking events, RTO scoring, NDR management and COD reconciliation. Sandbox keys are available in 60 seconds." },
  { q: "Is the platform secure and reliable?", a: "Yes. Clinship runs on secure, enterprise-grade cloud infrastructure with automatic failover and 24/7 monitoring. Data is encrypted in transit and at rest, access is role-based, and the platform delivers 99.9% uptime." },
  { q: "How do I get a quote?", a: "Visit /contact and fill the enquiry form (it opens Gmail pre-filled to our team), or email riteshsr@asnmcare.com directly. We typically reply within one business day with route options, pricing, and proposed SLAs." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="relative py-24 md:py-28 mesh-soft">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-x grid lg:grid-cols-12 gap-16">
        <FadeIn className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <div className="eyebrow mb-6"><HelpCircle size={12} /> FAQ</div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink text-balance">
            Questions, <span className="text-gradient">answered.</span>
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed max-w-md">
            Most of what brands, partners and developers ask us. If anything else is on your mind, reach out — we reply within a business day.
          </p>
        </FadeIn>

        <div className="lg:col-span-7 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={f.q} delay={i * 0.04}>
                <div className={`rounded-2xl border bg-white transition-shadow ${isOpen ? "border-brand/25 shadow-lift" : "border-slate-200/70 shadow-soft"}`}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-6 px-6 py-5 text-left group" aria-expanded={isOpen}>
                    <h3 className="text-base md:text-lg font-semibold text-ink group-hover:text-brand transition pr-4">{f.q}</h3>
                    <div className={`shrink-0 mt-0.5 h-8 w-8 rounded-full grid place-items-center transition ${isOpen ? "bg-brand-gradient text-white" : "bg-canvas-200 text-slate-600 group-hover:text-brand"}`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <p className="px-6 pb-6 pr-12 text-slate-600 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
