"use client";

import { motion } from "framer-motion";

export default function Logo({ size = 36, withWordmark = true, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <motion.svg
        width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="logoSwoosh" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#E50914" />
            <stop offset="60%" stopColor="#FF3D7F" />
            <stop offset="100%" stopColor="#FF6B4A" />
          </linearGradient>
        </defs>
        <path d="M50 12 L88 88 H68 L50 50 L32 88 H12 Z" fill={light ? "#FFFFFF" : "#0F172A"} />
        <path d="M10 70 Q40 40 60 55 Q80 70 92 35" stroke="url(#logoSwoosh)" strokeWidth="9" strokeLinecap="round" fill="none" />
      </motion.svg>
      {withWordmark && (
        <div className="leading-none">
          <div className={`text-lg font-display font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>Amaze</div>
          <div className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${light ? "text-white/60" : "text-slate-500"}`}>Solutions</div>
        </div>
      )}
    </div>
  );
}
