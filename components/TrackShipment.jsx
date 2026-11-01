"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2, MapPin, Package, CheckCircle2, Truck } from "lucide-react";
import FadeIn from "./FadeIn";

export default function TrackShipment({ compact = false }) {
  const [awb, setAwb] = useState("");
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);

  const track = async (value) => {
    if (!value.trim()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1100));
    setResult({
      awb: value.trim(),
      status: "In Transit",
      eta: "Tomorrow, 6 PM",
      timeline: [
        { label: "Order picked up", city: "Gurugram", at: "May 21, 10:14 AM", done: true },
        { label: "Arrived at hub", city: "Delhi NCR", at: "May 21, 8:42 PM", done: true },
        { label: "Out for line haul", city: "→ Mumbai", at: "May 22, 6:00 AM", done: true },
        { label: "Out for delivery", city: "Mumbai", at: "Pending", done: false },
      ],
    });
    setStatus("result");
  };

  // The home hero links here as /track/?awb=... — prefill and run it.
  useEffect(() => {
    if (compact) return;
    const q = new URLSearchParams(window.location.search).get("awb");
    if (q) { setAwb(q); track(q); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compact]);

  const onSubmit = (e) => {
    e.preventDefault();
    track(awb);
  };

  if (compact) {
    return (
      <FadeIn>
        <form onSubmit={onSubmit} className="relative max-w-2xl mx-auto rounded-full bg-white border border-slate-200 shadow-lift p-2 flex items-center gap-2">
          <Search className="ml-4 text-slate-400 shrink-0" size={18} />
          <input type="text" value={awb} onChange={(e) => setAwb(e.target.value)}
            placeholder="Enter your AWB / waybill number..."
            aria-label="AWB / waybill number"
            className="flex-1 min-w-0 bg-transparent text-ink placeholder:text-slate-400 px-2 py-3 focus:outline-none" />
          <button type="submit" className="btn-primary !py-2.5 !px-5 text-sm">
            {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <>Track</>}
          </button>
        </form>
      </FadeIn>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-slate-200 shadow-lift p-2.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        <div className="flex flex-1 items-center">
          <Search className="ml-4 text-slate-400 shrink-0" size={20} />
          <input type="text" value={awb} onChange={(e) => setAwb(e.target.value)}
            placeholder="Enter your AWB / waybill number..."
            aria-label="AWB / waybill number"
            className="flex-1 min-w-0 bg-transparent text-ink placeholder:text-slate-400 text-lg px-3 py-4 focus:outline-none" autoFocus />
        </div>
        <button type="submit" className="btn-primary !rounded-2xl">
          {status === "loading" ? <><Loader2 size={18} className="animate-spin" /> Tracking...</> : <>Track <Search size={16} /></>}
        </button>
      </form>

      {status === "result" && result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="mt-10 card overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-200/70 flex flex-wrap items-center justify-between gap-4 mesh-soft">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">AWB # {result.awb}</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl text-ink">{result.status}</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">Estimated delivery</div>
              <div className="text-xl font-bold text-gradient">{result.eta}</div>
            </div>
          </div>

          <div className="p-6 md:p-8 relative">
            <div className="absolute left-[2.6rem] md:left-[3.1rem] top-12 bottom-12 w-px bg-slate-200" />
            <div className="space-y-6">
              {result.timeline.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  className="relative flex items-start gap-4">
                  <div className={`relative z-10 h-9 w-9 rounded-full grid place-items-center border ${step.done ? "bg-brand-gradient border-transparent text-white" : "bg-white border-slate-200 text-slate-400"}`}>
                    {step.done ? <CheckCircle2 size={16} /> : <Truck size={16} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className={step.done ? "font-semibold text-ink" : "text-slate-500"}>{step.label}</div>
                      <div className="text-sm text-slate-400">{step.at}</div>
                    </div>
                    <div className="text-sm text-slate-500 mt-1 flex items-center gap-1.5"><MapPin size={12} /> {step.city}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="px-6 md:px-8 py-4 border-t border-slate-200/70 text-xs text-slate-500 flex items-center gap-2">
            <Package size={12} /> Powered by Clinship · Real-time tracking API
          </div>
        </motion.div>
      )}
    </div>
  );
}
