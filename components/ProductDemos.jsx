"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, CheckCircle2, Truck, Printer,
  MessageCircle, Search, Bell, TrendingDown, BarChart3, Smartphone, LayoutDashboard,
} from "lucide-react";
import FadeIn from "./FadeIn";

/* ---------- device frames ---------- */

function Phone({ children }) {
  return (
    <div className="relative mx-auto w-[240px] h-[490px] sm:w-[250px] sm:h-[510px] rounded-[2.6rem] bg-ink p-2.5 shadow-lift">
      <div className="absolute left-1/2 top-4 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-canvas">{children}</div>
    </div>
  );
}

const LAPTOP_W = 520;
const LAPTOP_H = 330;

// The laptop screen is drawn at a fixed desktop size and scaled to fit, so on phones it
// shrinks like a screenshot instead of squashing its layout.
function Laptop({ children }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / LAPTOP_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto w-full min-w-0 max-w-[520px]">
      <div className="overflow-hidden" style={{ height: LAPTOP_H * scale }}>
        <div style={{ width: LAPTOP_W, transform: `scale(${scale})`, transformOrigin: "top left" }}>
          <div className="rounded-t-2xl bg-ink p-2.5 pb-0 shadow-lift">
            <div className="h-[310px] overflow-hidden rounded-t-lg bg-canvas">{children}</div>
          </div>
          <div className="mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-2xl bg-slate-300" />
        </div>
      </div>
    </div>
  );
}

/* ---------- screens ---------- */

function TrackingScreen() {
  const steps = [
    { t: "Order placed", s: "Mon, 10:14 AM", done: true },
    { t: "Picked up from seller", s: "Mon, 6:40 PM", done: true },
    { t: "In transit · Lucknow hub", s: "Tue, 9:02 AM", done: true },
    { t: "Out for delivery", s: "Expected today", done: false },
  ];
  return (
    <div className="h-full pt-10">
      <div className="bg-brand-gradient px-4 pb-6 pt-3 text-white">
        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] opacity-80">Your order</div>
        <div className="mt-1 font-display text-lg font-bold">Arriving today</div>
        <div className="text-[11px] opacity-80">AWB 3724 8812 0041</div>
      </div>
      <div className="relative mx-3 -mt-4 h-24 overflow-hidden rounded-2xl bg-[#E6EEF9] shadow-soft">
        <svg viewBox="0 0 220 96" className="absolute inset-0 h-full w-full">
          <path d="M0 70 C40 60 60 20 110 30 S180 70 220 40" stroke="#fff" strokeWidth="10" fill="none" />
          <path d="M20 66 C50 55 70 28 110 34 S170 58 196 46" stroke="url(#rt)" strokeWidth="3" strokeDasharray="5 4" fill="none" />
          <defs><linearGradient id="rt"><stop offset="0" stopColor="#E50914" /><stop offset="1" stopColor="#7B5CFF" /></linearGradient></defs>
          <circle cx="20" cy="66" r="5" fill="#E50914" /><circle cx="196" cy="46" r="5" fill="#7B5CFF" />
        </svg>
        <motion.div className="absolute top-[30px] h-6 w-6 rounded-full bg-white shadow grid place-items-center"
          animate={{ left: ["10%", "75%"] }} transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
          <Truck size={12} className="text-brand" />
        </motion.div>
      </div>
      <div className="mx-3 mt-3 rounded-2xl bg-white p-3 shadow-soft space-y-2.5">
        {steps.map((st) => (
          <div key={st.t} className="flex items-start gap-2">
            <div className={`mt-0.5 h-4 w-4 rounded-full grid place-items-center ${st.done ? "bg-emerald-500" : "bg-slate-200"}`}>
              {st.done && <CheckCircle2 size={10} className="text-white" />}
            </div>
            <div>
              <div className={`text-[11px] font-semibold ${st.done ? "text-ink" : "text-slate-400"}`}>{st.t}</div>
              <div className="text-[10px] text-slate-400">{st.s}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-3 mt-3 flex gap-2">
        <div className="flex-1 rounded-xl bg-ink py-2 text-center text-[11px] font-semibold text-white">Update address</div>
        <div className="flex-1 rounded-xl bg-white py-2 text-center text-[11px] font-semibold text-ink shadow-soft">Reschedule</div>
      </div>
    </div>
  );
}

function ChatScreen() {
  const msgs = [
    { me: true, t: "Where is my order?" },
    { me: false, t: "Hi! 👋 Your parcel is out for delivery and will reach you by 6 PM today." },
    { me: true, t: "I won't be home. Can I change the address?" },
    { me: false, t: "Sure — share the new address or pick a saved one below." },
  ];
  return (
    <div className="flex h-full flex-col bg-[#ECE5DD] pt-10">
      <div className="flex items-center gap-2 bg-[#075E54] px-3 py-2.5 text-white">
        <div className="h-7 w-7 rounded-full bg-brand-gradient grid place-items-center text-[10px] font-bold">A</div>
        <div>
          <div className="text-[12px] font-semibold">Amaze Support</div>
          <div className="text-[9px] opacity-80">AI assistant · online</div>
        </div>
      </div>
      <div className="flex-1 space-y-2 p-3">
        {msgs.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.5 }}
            className={`max-w-[80%] rounded-xl px-2.5 py-1.5 text-[11px] leading-snug shadow-sm ${m.me ? "ml-auto bg-[#DCF8C6] text-ink" : "bg-white text-ink"}`}>
            {m.t}
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="flex flex-wrap gap-1.5 pt-1">
          {["Home · Sector 62", "Office · Cyber City", "New address"].map((c) => (
            <span key={c} className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#075E54] shadow-sm">{c}</span>
          ))}
        </motion.div>
      </div>
      <div className="m-2 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] text-slate-400">
        <MessageCircle size={12} /> Type a message
      </div>
    </div>
  );
}

function DashboardScreen() {
  const bars = [42, 58, 50, 72, 66, 84, 78, 92, 70, 88, 95, 80];
  return (
    <div className="flex h-full text-[10px]">
      <div className="w-24 bg-white border-r border-slate-200 p-2 space-y-1.5">
        <div className="mb-3 font-display text-xs font-extrabold text-ink">Clinship</div>
        {["Dashboard", "Orders", "Labels", "NDR", "RTO", "Reports"].map((n, i) => (
          <div key={n} className={`rounded-md px-2 py-1 ${i === 0 ? "bg-brand-50 font-semibold text-brand" : "text-slate-500"}`}>{n}</div>
        ))}
      </div>
      <div className="flex-1 p-3 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-ink text-xs">Overview · Last 30 days</div>
          <div className="flex items-center gap-1 rounded-md bg-white px-2 py-1 text-slate-400 shadow-sm"><Search size={10} /> Search AWB</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[["Shipped", "48.2K"], ["Delivered", "92%"], ["In transit", "6.1K"], ["RTO", "↓ 35%"]].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-white p-2 shadow-sm">
              <div className="text-slate-400">{k}</div>
              <div className="mt-0.5 font-display text-sm font-extrabold text-ink">{v}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-white p-2 shadow-sm">
          <div className="mb-1 text-slate-500">Daily shipments</div>
          <div className="flex h-20 items-end gap-1.5">
            {bars.map((h, i) => (
              <motion.div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand to-rose"
                initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.05, duration: 0.6 }} />
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-sm divide-y divide-slate-100">
          {[["3724…0041", "Lucknow", "Out for delivery", "text-amber-600"], ["3724…0187", "Pune", "Delivered", "text-emerald-600"], ["3724…0233", "Guwahati", "In transit", "text-sky"]].map(([a, c, s, col]) => (
            <div key={a} className="flex justify-between px-2 py-1">
              <span className="text-ink">{a}</span><span className="text-slate-400">{c}</span><span className={`font-semibold ${col}`}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LabelScreen() {
  return (
    <div className="flex h-full gap-3 p-4 text-[10px]">
      <div className="flex-1 space-y-2">
        <div className="text-xs font-semibold text-ink">Bulk label print</div>
        {["Batch #1182 · 640 orders", "Batch #1183 · 412 orders", "Batch #1184 · 905 orders"].map((b, i) => (
          <div key={b} className="flex items-center justify-between rounded-lg bg-white p-2 shadow-sm">
            <span className="text-ink">{b}</span>
            <span className={`rounded-full px-2 py-0.5 font-semibold ${i < 2 ? "bg-emerald-50 text-emerald-600" : "bg-brand-50 text-brand"}`}>{i < 2 ? "Printed" : "Printing…"}</span>
          </div>
        ))}
        <div className="rounded-lg bg-white p-2 shadow-sm">
          <div className="text-slate-400">Templates</div>
          <div className="mt-1 flex flex-wrap gap-1">
            {["4×6 thermal", "A4 · 4-up", "Brand sleeve", "Multi-box"].map((t) => <span key={t} className="rounded bg-canvas-200 px-1.5 py-0.5 text-slate-600">{t}</span>)}
          </div>
        </div>
      </div>
      <motion.div initial={{ rotate: -4, y: 10, opacity: 0 }} animate={{ rotate: -2, y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
        className="w-40 self-center rounded-md border border-slate-300 bg-white p-2 shadow-lift">
        <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-1">
          <span className="font-display font-extrabold text-ink">AMAZE</span><span className="text-[8px] text-slate-400">PREPAID</span>
        </div>
        <div className="mt-1 text-[8px] leading-tight text-slate-600">Ship to: R. Sharma<br />Hazratganj, Lucknow 226001</div>
        <div className="mt-2 flex h-8 items-end gap-[1.5px]">
          {Array.from({ length: 38 }).map((_, i) => <div key={i} className="bg-ink" style={{ width: i % 3 ? 1.5 : 3, height: "100%" }} />)}
        </div>
        <div className="mt-0.5 text-center text-[8px] tracking-widest text-ink">3724 8812 0041</div>
        <div className="mt-1 grid grid-cols-2 gap-1 text-[7px] text-slate-500"><span>Wt 0.5 kg</span><span className="text-right">1 / 1</span></div>
      </motion.div>
    </div>
  );
}

/* ---------- section ---------- */

const demos = [
  {
    key: "track", label: "Customer Tracking", short: "Tracking", icon: Smartphone, device: "phone", Screen: TrackingScreen,
    title: "A branded tracking page your customers love",
    body: "Every shipment gets a live, mobile-first tracking page with map view, ETA and one-tap address updates — so fewer customers call your support team.",
    points: ["Live ETA + map", "Self-serve address change", "Fewer WISMO calls"],
  },
  {
    key: "chat", label: "WhatsApp Cx Bot", short: "WhatsApp Bot", icon: MessageCircle, device: "phone", Screen: ChatScreen,
    title: "AI support that answers on WhatsApp",
    body: "Our Cx agents resolve where-is-my-order, address fixes and reschedules automatically on WhatsApp and email — and hand off to a human when needed.",
    points: ["Up to 70% tickets auto-resolved", "Hindi + English", "Human handoff built in"],
  },
  {
    key: "dash", label: "Ops Dashboard", short: "Dashboard", icon: LayoutDashboard, device: "laptop", Screen: DashboardScreen,
    title: "One dashboard for every shipment",
    body: "Ops, finance and Cx see the same live picture — shipped, delivered, in transit, NDR and RTO — across every courier, with exports and alerts.",
    points: ["Real-time status", "NDR & RTO queues", "Scheduled reports"],
  },
  {
    key: "label", label: "Label Printing", short: "Labels", icon: Printer, device: "laptop", Screen: LabelScreen,
    title: "Print thousands of labels in one click",
    body: "Bulk-generate courier-compliant labels with your branding. Thermal, A4 and multi-box templates — ready for festive-scale dispatch.",
    points: ["Bulk batches", "Custom templates", "Multi-box shipments"],
  },
];

export default function ProductDemos() {
  const [active, setActive] = useState(0);
  const d = demos[active];
  const Screen = d.Screen;

  return (
    <section className="relative py-24 md:py-28 overflow-hidden mesh-soft">
      <div className="container-x">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow mb-6">See it in action</div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink text-balance">
              Experience Amaze products <span className="text-gradient">through live screens</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 sm:mt-10 flex justify-center">
            <div className="grid w-full grid-cols-2 gap-1 rounded-3xl border border-slate-200/70 bg-white p-1.5 shadow-soft sm:flex sm:w-auto sm:rounded-full">
              {demos.map((x, i) => {
                const Icon = x.icon;
                return (
                  <button key={x.key} onClick={() => setActive(i)}
                    className={`relative inline-flex shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-2.5 text-[13px] sm:text-sm font-semibold transition ${i === active ? "text-white" : "text-slate-600 hover:text-ink"}`}>
                    {i === active && <motion.span layoutId="demoTab" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                    <Icon size={16} className="relative" />
                    <span className="relative whitespace-nowrap"><span className="sm:hidden">{x.short}</span><span className="hidden sm:inline">{x.label}</span></span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <div className="mt-6 sm:mt-10 card overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={d.key}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 p-5 sm:p-10 md:p-14 items-center">
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-ink text-balance">{d.title}</h3>
                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">{d.body}</p>
                <ul className="mt-6 space-y-3">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-ink font-medium">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary mt-8 w-full sm:w-auto">Book a live demo <ArrowUpRight size={18} /></Link>
              </div>
              <div className="relative min-w-0 rounded-[2rem] mesh-bg py-8 px-3 sm:py-10 sm:px-4">
                {d.device === "phone" ? <Phone><Screen /></Phone> : <Laptop><Screen /></Laptop>}
                {/* little floating badges for flavour */}
                <div className="absolute left-3 top-4 hidden sm:flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-soft text-xs font-semibold text-ink">
                  <Bell size={14} className="text-brand" /> Live updates
                </div>
                <div className="absolute right-3 bottom-4 hidden sm:flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-soft text-xs font-semibold text-ink">
                  {d.device === "phone" ? <><TrendingDown size={14} className="text-emerald-500" /> Fewer support calls</> : <><BarChart3 size={14} className="text-violet" /> Real-time data</>}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
