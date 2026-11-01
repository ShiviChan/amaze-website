"use client";

import Link from "next/link";
import { Code2, BookOpen, Webhook, ArrowRight, Plus } from "lucide-react";
import FadeIn from "./FadeIn";

const cards = [
  { icon: Code2, title: "Integrations", body: "Plug in your store, ERP or WMS with ready plugins, SDKs and server-side integrations.", cta: "Request integration" },
  { icon: BookOpen, title: "API reference", body: "Clean REST APIs for orders, labels, tracking, RTO scoring, NDR and COD reconciliation.", cta: "Get API access" },
  { icon: Webhook, title: "Webhooks", body: "Real-time events for every status change — picked up, in transit, delivered, NDR and RTO.", cta: "See event list" },
];

const chips = ["REST API", "Webhooks", "Node.js", "Python", "PHP", "Java", "Shopify", "WooCommerce", "Magento", "Unicommerce", "ERP / WMS", "Sandbox keys"];

const code = `curl -X POST $API_BASE_URL/v1/shipments \\
  -H "Authorization: Bearer $CLINSHIP_KEY" \\
  -d '{
    "order_id": "ORD-10293",
    "pincode": "226024",
    "payment": "COD",
    "weight_kg": 0.5
  }'`;

export default function Developers() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-soft">
          <div className="grid lg:grid-cols-12 gap-10 p-6 sm:p-10 md:p-14">
            <FadeIn className="lg:col-span-6">
              <div className="eyebrow mb-6"><Code2 size={12} /> For developers</div>
              <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink text-balance">
                Engineered for <span className="text-gradient">developers</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-lg">
                Our APIs bring shipping, tracking and returns into your own stack — so your team spends time building, not chasing couriers.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-6">
              <div className="rounded-2xl bg-ink p-5 shadow-lift">
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-xs text-white/50">create-shipment.sh</span>
                </div>
                <pre className="overflow-x-auto text-[12px] sm:text-[13px] leading-relaxed text-white/85"><code>{code}</code></pre>
                <div className="mt-3 rounded-lg bg-white/5 px-3 py-2 font-mono text-[12px] text-emerald-300">
                  ← 201 Created · awb: "3724 8812 0041" · label_url: "…/label.pdf"
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-slate-200/70 border-t border-slate-200/70">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.title} delay={i * 0.08} className="bg-white p-7 md:p-8 group">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-brand-50 grid place-items-center text-brand group-hover:bg-brand-gradient group-hover:text-white transition"><Icon size={18} /></div>
                    <h3 className="font-display text-xl font-bold text-ink">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-slate-600 leading-relaxed">{c.body}</p>
                  <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-brand transition">
                    {c.cta} <ArrowRight size={14} />
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          <div className="overflow-hidden py-5" style={{ backgroundImage: "linear-gradient(90deg, #FFE3EC, #E8E4FF, #DDF1FF)" }}>
            <div className="marquee-track gap-3">
              {[...chips, ...chips].map((c, i) => (
                <span key={i} className="mx-1.5 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white bg-white/70 px-4 py-2 text-sm font-semibold text-ink shadow-soft">
                  <Plus size={14} className="text-brand" /> {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
