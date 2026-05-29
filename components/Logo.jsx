"use client";

import { motion } from "framer-motion";

export default function Logo({ size = 36, withWordmark = true }) {
  return (
    <div className="flex items-center gap-3">
      <motion.svg
        width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <path d="M50 12 L88 88 H68 L50 50 L32 88 H12 Z" fill="#0A0A0A" stroke="white" strokeWidth="1.5" />
        <path d="M10 70 Q40 40 60 55 Q80 70 92 35" stroke="#E50914" strokeWidth="9" strokeLinecap="round" fill="none" />
      </motion.svg>
      {withWordmark && (
        <div className="leading-none">
          <div className="text-lg font-semibold tracking-tight text-white">Amaze</div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">Solutions</div>
        </div>
      )}
    </div>
  );
}
