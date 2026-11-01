"use client";

import { motion } from "framer-motion";
import { Printer, Eye, Brain, Repeat, MessageSquareText, Webhook, TrendingDown, ArrowUpRight, PackageCheck, Radar, Bot } from "lucide-react";
import Link from "next/link";
import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

// Small product "screenshot" tiles shown on each card, Shiprocket-style.
function MiniScreen({ kind }) {
  const frame = "h-32 rounded-2xl bg-canvas border border-slate-200/70 p-3 overflow-hidden text-[10px]";
  if (kind === "label") return (
    <div className={`${frame} flex items-center justify-center gap-3`}>
      {[0, 1, 2].map((k) => (
        <div key={k} className="w-16 rounded border border-slate-300 bg-white p-1.5 shadow-soft" style={{ transform: `rotate(${(k - 1) * 5}deg)` }}>
          <div className="font-display text-[8px] font-extrabold text-ink">AMAZE</div>
          <div className="mt-1 flex h-5 items-end gap-[1px]">{Array.from({ length: 16 }).map((_, i) => <div key={i} className="bg-ink" style={{ width: i % 3 ? 1 : 2, height: "100%" }} />)}</div>
          <div className="mt-1 h-1 w-8 rounded bg-slate-200" />
        </div>
      ))}
    </div>
  );
  if (kind === "courier") return (
    <div className={`${frame} space-y-1.5`}>
      {[["Courier A", "₹38", true], ["Courier B", "₹42"], ["Courier C", "₹45"]].map(([c, p, best]) => (
        <div key={c} className={`flex items-center justify-between rounded-lg px-2 py-1.5 ${best ? "bg-white shadow-soft border border-brand/30" : "bg-white/60"}`}>
          <span className="font-semibold text-ink">{c}</span><span className="text-slate-500">{p}</span>
          {best ? <span className="rounded-full bg-brand-gradient px-1.5 py-0.5 text-[8px] font-bold text-white">BEST</span> : <span className="w-7" />}
        </div>
      ))}
    </div>
  );
  if (kind === "track") return (
    <div className={`${frame} flex items-center gap-2`}>
      {["Picked", "Hub", "Transit", "OFD", "Delivered"].map((s, i) => (
        <div key={s} className="flex flex-1 flex-col items-center gap-1">
          <div className={`h-6 w-6 rounded-full grid place-items-center text-[9px] font-bold ${i < 3 ? "bg-brand-gradient text-white" : "bg-white border border-slate-200 text-slate-400"}`}>{i + 1}</div>
          <span className={i < 3 ? "font-semibold text-ink" : "text-slate-400"}>{s}</span>
        </div>
      ))}
    </div>
  );
  if (kind === "returns") return (
    <div className={`${frame} space-y-1.5`}>
      {[["R-2041", "Pickup scheduled", "bg-sky/15 text-sky"], ["R-2038", "QC passed", "bg-emerald-50 text-emerald-600"], ["R-2032", "Restocked", "bg-violet/15 text-violet"]].map(([id, t, c]) => (
        <div key={id} className="flex items-center justify-between rounded-lg bg-white px-2 py-1.5 shadow-soft">
          <span className="text-ink">Return #{id}</span><span className={`rounded-full px-1.5 py-0.5 font-semibold ${c}`}>{t}</span>
        </div>
      ))}
    </div>
  );
  if (kind === "rto") return (
    <div className={`${frame} flex items-end gap-1.5`}>
      {[80, 72, 66, 58, 50, 44, 40, 36].map((h, i) => (
        <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-violet to-rose" style={{ height: `${h}%` }} />
      ))}
    </div>
  );
  return (
    <div className={`${frame} space-y-1.5 bg-[#ECE5DD]`}>
      <div className="ml-auto w-fit rounded-lg bg-[#DCF8C6] px-2 py-1 text-ink">Where is my order?</div>
      <div className="w-fit max-w-[85%] rounded-lg bg-white px-2 py-1 text-ink">Out for delivery — arriving by 6 PM today 🚚</div>
      <div className="ml-auto w-fit rounded-lg bg-[#DCF8C6] px-2 py-1 text-ink">Great, thanks!</div>
    </div>
  );
}

// Shiprocket-style stacked gradient panels — each groups two Clinship products.
const stacks = [
  {
    n: "1/3",
    icon: PackageCheck,
    title: "Ship & print, in one click",
    gradient: "linear-gradient(120deg, #FFB199 0%, #FF6B8B 55%, #FF3D7F 100%)",
    products: [
      { icon: Printer, name: "Smart Label Printing", screen: "label", sku: "Clinship · Print", body: "Auto-generate carrier-compliant labels in bulk. Manipal / TID / custom templates. Multi-courier in one click." },
      { icon: Webhook, name: "Multi-Courier Aggregator", screen: "courier", sku: "Clinship · Aggr", body: "Plug 15+ courier partners through one API. Best-rate routing, fallback failover, unified COD reconciliation." },
    ],
  },
  {
    n: "2/3",
    icon: Radar,
    title: "See every shipment, live",
    gradient: "linear-gradient(120deg, #8EC5FF 0%, #A5B4FC 50%, #9BF2C8 100%)",
    products: [
      { icon: Eye, name: "Order Visibility", screen: "track", sku: "Clinship · Track", body: "Single pane of glass across every courier you ship with. APIs, dashboards, webhooks — ops gets one source of truth." },
      { icon: Repeat, name: "Reverse Workflow", screen: "returns", sku: "Clinship · Returns", body: "Automated pickups, condition assessment, refurbishment routing — full reverse loop, zero manual coordination." },
    ],
  },
  {
    n: "3/3",
    icon: Bot,
    title: "AI that pays for itself",
    gradient: "linear-gradient(120deg, #7B5CFF 0%, #B08CFF 45%, #FFD36E 100%)",
    products: [
      { icon: TrendingDown, name: "RTO Reduction AI", screen: "rto", sku: "Clinship · AI", body: "ML scores every order at checkout. Flag risky addresses, suggest COD-to-prepaid nudges, cut returns up to 35%." },
      { icon: MessageSquareText, name: "Cx Automation", screen: "chat", sku: "Clinship · Bots", body: "AI agents handling WISMO, address fixes, delivery rescheduling on WhatsApp/email — deflect 70% of support tickets." },
    ],
  },
];

const stats = [
  { v: 35, suffix: "%", label: "RTO reduction with AI" },
  { v: 70, suffix: "%", label: "Cx tickets auto-resolved" },
  { v: 15, suffix: "+", label: "Couriers in one API" },
  { v: 999, suffix: "%", label: "Platform uptime", format: (x) => (x / 10).toFixed(1) },
];

export default function AIPlatform() {
  return (
    <section id="platform" className="relative py-24 md:py-32 bg-white">
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <FadeIn className="lg:col-span-12">
            <div className="eyebrow mb-6"><Brain size={12} /> Built for 3PL + SaaS</div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink text-balance max-w-5xl">
              Why is Amaze the <span className="text-gradient">trusted partner</span> for scaling D2C & enterprise brands?
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-4xl">
              We're more than a delivery partner. Alongside pan-India pickup, line-haul and last-mile, our <strong className="text-ink">Clinship suite</strong> runs the software side of fulfilment — label printing, multi-courier routing, live tracking, RTO prediction, returns and Cx automation. One partner, from your warehouse to your customer's door.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mb-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card p-6 md:p-7">
                <div className="font-display font-extrabold text-3xl md:text-5xl text-gradient">
                  <AnimatedCounter to={stat.v} suffix={stat.suffix} format={stat.format} />
                </div>
                <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-6">
          {stacks.map((s, i) => {
            const StackIcon = s.icon;
            return (
              <div key={s.title} className="md:sticky" style={{ top: `${110 + i * 24}px` }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-[2rem] p-6 md:p-10 shadow-lift"
                  style={{ backgroundImage: s.gradient }}
                >
                  <div className="absolute inset-0 opacity-30 mix-blend-overlay grid-bg pointer-events-none" />
                  <div className="relative">
                    <span className="inline-block rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-bold text-ink">{s.n}</span>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-11 w-11 rounded-2xl bg-white grid place-items-center text-ink shadow-soft"><StackIcon size={20} /></div>
                      <h3 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-ink">{s.title}</h3>
                    </div>
                    <div className="mt-8 grid md:grid-cols-2 gap-4">
                      {s.products.map((p) => {
                        const Icon = p.icon;
                        return (
                          <div key={p.name} className="group rounded-3xl bg-white/85 backdrop-blur p-6 md:p-7 shadow-soft transition hover:bg-white hover:-translate-y-1">
                            <MiniScreen kind={p.screen} />
                            <div className="mt-5 flex items-center justify-between">
                              <div className="icon-tile h-11 w-11"><Icon size={20} /></div>
                              <ArrowUpRight size={20} className="text-slate-300 group-hover:text-brand transition" />
                            </div>
                            <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">{p.sku}</div>
                            <h4 className="mt-1 text-xl font-bold text-ink">{p.name}</h4>
                            <p className="mt-2 text-slate-600 leading-relaxed">{p.body}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-14 flex justify-center">
            <Link href="/platform" className="btn-primary">See the full platform <ArrowUpRight size={18} /></Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
