"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2, MapPin, Package, CheckCircle2, Truck } from "lucide-react";
import FadeIn from "./FadeIn";

export default function TrackShipment({ compact = false }) {
  const [awb, setAwb] = useState("");
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!awb.trim()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1100));
    setResult({
      awb: awb.trim(),
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

  if (compact) {
    return (
      <FadeIn>
        <form onSubmit={onSubmit} className="relative max-w-2xl mx-auto rounded-full glass p-2 flex items-center gap-2">
          <Search className="ml-4 text-white/40" size={18} />
          <input type="text" value={awb} onChange={(e) => setAwb(e.target.value)}
            placeholder="Enter your AWB / waybill number..."
            className="flex-1 bg-transparent text-white placeholder:text-white/40 px-2 py-3 focus:outline-none" />
          <button type="submit" className="btn-primary !py-2.5 !px-5 text-sm">
            {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <>Track</>}
          </button>
        </form>
      </FadeIn>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={onSubmit} className="rounded-2xl glass p-3 flex items-center gap-3">
        <Search className="ml-4 text-white/40" size={20} />
        <input type="text" value={awb} onChange={(e) => setAwb(e.target.value)}
          placeholder="Enter your AWB / waybill number..."
          className="flex-1 bg-transparent text-white placeholder:text-white/40 text-lg px-2 py-4 focus:outline-none" autoFocus />
        <button type="submit" className="btn-primary">
          {status === "loading" ? <><Loader2 size={18} className="animate-spin" /> Tracking...</> : <>Track <Search size={16} /></>}
        </button>
      </form>

      {status === "result" && result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="mt-10 rounded-2xl border border-white/10 bg-ink-800/60 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">AWB # {result.awb}</div>
              <div className="font-display text-4xl text-white">{result.status}</div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Estimated delivery</div>
              <div className="text-xl text-brand">{result.eta}</div>
            </div>
          </div>

          <div className="p-6 md:p-8 relative">
            <div className="absolute left-10 top-12 bottom-12 w-px bg-white/10" />
            <div className="space-y-6">
              {result.timeline.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  className="relative flex items-start gap-4">
                  <div className={`relative z-10 h-9 w-9 rounded-full grid place-items-center border ${step.done ? "bg-brand border-brand text-white" : "bg-ink border-white/20 text-white/40"}`}>
                    {step.done ? <CheckCircle2 size={16} /> : <Truck size={16} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className={step.done ? "text-white" : "text-white/50"}>{step.label}</div>
                      <div className="text-sm text-white/40">{step.at}</div>
                    </div>
                    <div className="text-sm text-white/50 mt-1 flex items-center gap-1.5"><MapPin size={12} /> {step.city}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="px-6 md:px-8 py-4 border-t border-white/10 text-xs text-white/40 flex items-center gap-2">
            <Package size={12} /> Powered by Clinship · Real-time tracking API
          </div>
        </motion.div>
      )}
    </div>
  );
}
