"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPinned, Route, Video, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, Ban } from "lucide-react";
import FadeIn from "./FadeIn";

function AddressVisual() {
  return (
    <div className="relative space-y-2">
      <div className="rounded-xl bg-white p-3 shadow-soft text-xs">
        <div className="text-slate-400">Entered address</div>
        <div className="mt-0.5 font-medium text-ink line-through decoration-brand/60">near temple, gali 4, lko</div>
      </div>
      <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="rounded-xl bg-white p-3 shadow-lift text-xs border border-emerald-200">
        <div className="flex items-center gap-1.5 text-emerald-600 font-semibold"><CheckCircle2 size={12} /> Verified & completed</div>
        <div className="mt-0.5 font-medium text-ink">House 14, Gali No. 4, Aliganj, Lucknow 226024</div>
      </motion.div>
      <div className="flex gap-2 text-[11px]">
        <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-slate-600 shadow-soft">Pin-code match</span>
        <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-slate-600 shadow-soft">Landmark parsed</span>
      </div>
    </div>
  );
}

function RouteVisual() {
  const rows = [
    { c: "Courier A", s: 94, best: true },
    { c: "Courier B", s: 88 },
    { c: "Courier C", s: 81 },
  ];
  return (
    <div className="rounded-xl bg-white p-3 shadow-soft text-xs space-y-2">
      <div className="flex justify-between text-slate-400"><span>Lane: Delhi → Guwahati</span><span>Live success rate</span></div>
      {rows.map((r, i) => (
        <div key={r.c} className="flex items-center gap-2">
          <span className="w-16 font-medium text-ink">{r.c}</span>
          <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
            <motion.div className={`h-full rounded-full ${r.best ? "bg-brand-gradient" : "bg-slate-300"}`}
              initial={{ width: 0 }} whileInView={{ width: `${r.s}%` }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }} />
          </div>
          <span className={`w-9 text-right font-semibold ${r.best ? "text-brand" : "text-slate-500"}`}>{r.s}%</span>
        </div>
      ))}
      <div className="flex items-center gap-1.5 pt-1 font-semibold text-emerald-600"><Sparkles size={12} /> Auto-routed to best performer</div>
    </div>
  );
}

function QCVisual() {
  return (
    <div className="rounded-xl bg-ink p-2 shadow-lift">
      <div className="relative aspect-[16/7] overflow-hidden rounded-lg bg-gradient-to-br from-slate-700 to-slate-900">
        <div className="absolute inset-x-6 bottom-4 top-6 rounded border-2 border-dashed border-emerald-400/70" />
        <div className="absolute left-2 top-2 flex items-center gap-1 rounded bg-brand px-1.5 py-0.5 text-[9px] font-bold text-white">
          <motion.span className="h-1.5 w-1.5 rounded-full bg-white" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity }} /> REC
        </div>
        <div className="absolute right-2 top-2 rounded bg-white/90 px-1.5 py-0.5 text-[9px] font-semibold text-ink">AWB 3724…0041</div>
        <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded bg-emerald-500 px-1.5 py-0.5 text-[9px] font-bold text-white">
          <CheckCircle2 size={10} /> Packed · clip saved
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1.5 px-1 pb-1 text-[11px] text-white/80">
        <AlertTriangle size={12} className="text-amber-400" /> Dispute? Pull the packing video in seconds.
      </div>
    </div>
  );
}

function RiderVisual() {
  const checks = ["ID & address verified", "Police verification", "No theft or fraud reports"];
  return (
    <div className="space-y-2">
      <div className="rounded-xl bg-white p-3 shadow-lift text-xs border border-emerald-200">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-brand-gradient grid place-items-center text-white font-bold">R</div>
          <div className="flex-1">
            <div className="font-semibold text-ink">Rider #R-4821</div>
            <div className="text-[11px] text-slate-400">Applying · Last-mile, Lucknow</div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-600"><ShieldCheck size={12} /> Verified</span>
        </div>
        <div className="mt-2.5 space-y-1">
          {checks.map((c, i) => (
            <motion.div key={c} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15 }}
              className="flex items-center gap-1.5 text-slate-600"><CheckCircle2 size={12} className="text-emerald-500" /> {c}</motion.div>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
        className="flex items-center gap-2.5 rounded-xl bg-white p-3 shadow-soft text-xs border border-brand/20">
        <div className="h-8 w-8 rounded-full bg-brand-50 grid place-items-center text-brand"><Ban size={14} /></div>
        <div className="flex-1">
          <div className="font-semibold text-ink">Rider #R-3307</div>
          <div className="text-[11px] text-slate-400">2 theft reports across partner networks</div>
        </div>
        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-bold text-brand">Flagged</span>
      </motion.div>
    </div>
  );
}

const items = [
  {
    icon: MapPinned, name: "Address Intelligence", tag: "Clinship · AI",
    body: "Our AI checks every delivery address before it ships — fixing incomplete addresses, matching pin codes and flagging risky orders. Fewer failed deliveries, lower RTO.",
    Visual: AddressVisual, tint: "from-[#FFE3EC] via-[#FFF0EA] to-white",
  },
  {
    icon: Route, name: "Smart Courier Routing", tag: "Clinship · AI",
    body: "Every order is matched to the courier with the best live success rate for that exact lane — not just the cheapest. Underperforming routes are rerouted automatically.",
    Visual: RouteVisual, tint: "from-[#E8E4FF] via-[#F2EEFF] to-white",
  },
  {
    icon: Video, name: "Video-verified Packing", tag: "Clinship · Vision",
    body: "Warehouse cameras record each parcel as it's packed and link the clip to its AWB. Damage or missing-item claims are settled with proof, not guesswork.",
    Visual: QCVisual, tint: "from-[#DDF1FF] via-[#EEF8FF] to-white",
  },
  {
    icon: ShieldCheck, name: "Verified Rider Network", tag: "Clinship · Trust",
    body: "Background-check every rider before they touch a parcel. Our shared registry flags riders reported for theft, fraud or misconduct across partner networks — so you onboard only trusted riders, cut parcel losses and lift delivery success.",
    Visual: RiderVisual, tint: "from-[#E3F8EC] via-[#F1FBF5] to-white",
  },
];

export default function AIInnovations() {
  return (
    <section className="relative py-24 md:py-28 bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <FadeIn className="lg:col-span-7">
            <div className="eyebrow mb-6"><Sparkles size={12} /> AI Powered</div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink text-balance">
              AI powered <span className="text-gradient">innovations</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="lg:col-span-5">
            <p className="text-lg text-slate-600 leading-relaxed">
              Built in-house and available as SaaS — the AI behind fewer failed deliveries, safer riders, faster dispatch and cleaner claims.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            const Visual = it.Visual;
            return (
              <FadeIn key={it.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`h-full flex flex-col rounded-[2rem] border border-slate-200/70 bg-gradient-to-b ${it.tint} p-7 shadow-soft hover:shadow-lift transition-shadow`}>
                  <div className="flex items-center gap-3">
                    <div className="icon-tile h-11 w-11"><Icon size={20} /></div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{it.tag}</div>
                      <h3 className="font-display text-xl font-bold text-ink">{it.name}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-slate-600 leading-relaxed">{it.body}</p>
                  <div className="mt-6 flex-1 flex items-end"><div className="w-full"><Visual /></div></div>
                  <Link href="/platform" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
                    Know more <ArrowUpRight size={14} />
                  </Link>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
