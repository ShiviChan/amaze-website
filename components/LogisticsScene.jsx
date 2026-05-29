"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import { Activity, Radio, Zap } from "lucide-react";

const TOTAL = 13;

export default function LogisticsScene() {
  const PKG_COUNT = 3;
  const PKG_DURATION = 4.5;

  const [windowSeeds, setWindowSeeds] = useState([]);
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    setWindowSeeds(Array.from({ length: 30 }, () => Math.random() > 0.4));
  }, []);

  useEffect(() => {
    const cycle = [
      { label: "LOADING CARGO", ms: 2700 },
      { label: "IN TRANSIT", ms: 1900 },
      { label: "AT DOORSTEP", ms: 1400 },
      { label: "DELIVERED ✓", ms: 2300 },
      { label: "ROUTE COMPLETE", ms: 4700 },
    ];
    let i = 0;
    const tick = () => {
      setStatusIdx(i % cycle.length);
      const next = cycle[i % cycle.length];
      i++;
      return setTimeout(tick, next.ms);
    };
    const t = tick();
    return () => clearTimeout(t);
  }, []);

  const statuses = ["LOADING CARGO", "IN TRANSIT", "AT DOORSTEP", "DELIVERED ✓", "ROUTE COMPLETE"];

  const nodes = [
    { x: 150, y: 100 }, { x: 360, y: 80 }, { x: 540, y: 110 },
    { x: 740, y: 70 }, { x: 920, y: 110 }, { x: 1080, y: 90 },
  ];

  return (
    <section className="relative py-24 border-y border-brand/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#1a0508] to-ink" />
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-brand/15 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[1200px] rounded-full bg-brand/20 blur-[150px] pointer-events-none" />

      <div className="container-x relative z-10">
        <FadeIn>
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] text-balance">
                From warehouse to doorstep —<br />
                <span className="italic text-brand">handed over, every time.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-white/65 text-lg leading-relaxed">
                Watch a parcel travel through the Amaze stack: load, dispatch,
                line-haul, last-mile, doorstep handoff. All choreographed by AI,
                all visible in real time.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* MOBILE — three clearly-spaced scene rows */}
        <FadeIn delay={0.2}>
          <div className="md:hidden relative rounded-3xl border border-brand/30 bg-gradient-to-br from-[#1a0508] via-[#0E0203] to-[#2a0509] overflow-hidden shadow-[0_0_80px_-20px_rgba(229,9,20,0.4)] p-4">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand/30 blur-3xl pointer-events-none" />

            <div className="relative flex items-center justify-between gap-3 mb-4 px-1">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand font-mono">
                <motion.span className="h-1.5 w-1.5 rounded-full bg-brand"
                  animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                CLINSHIP · LIVE
              </div>
              <div className={`text-[10px] font-mono font-bold tracking-wide ${statuses[statusIdx] === "DELIVERED ✓" ? "text-emerald-400" : "text-brand"}`}>
                ● {statuses[statusIdx]}
              </div>
            </div>

            {/* SCENE 1: Truck */}
            <div className="relative mb-3 rounded-2xl border border-brand/20 bg-gradient-to-b from-[#15030a] to-[#0a0102] overflow-hidden">
              <div className="px-3 py-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-brand/80 border-b border-brand/15">
                <span>1 · In transit</span>
                <span className="text-white/40">Truck dispatched</span>
              </div>
              <div className="relative h-28 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.span key={`mstar-${i}`} className="absolute h-0.5 w-0.5 rounded-full bg-white"
                    style={{ left: `${(i * 47) % 100}%`, top: `${(i * 23) % 50}%` }}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.2 }} />
                ))}
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#0a0102] to-[#1a0508] border-t border-brand/50" />
                <motion.div className="absolute bottom-4 inset-x-0 h-0.5"
                  style={{ backgroundImage: "repeating-linear-gradient(90deg, #E50914 0px, #E50914 14px, transparent 14px, transparent 28px)" }}
                  animate={{ backgroundPositionX: ["0px", "-28px"] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                <motion.div className="absolute bottom-3 flex items-end gap-0.5"
                  initial={{ x: "-120%" }} animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}>
                  <div className="relative w-24 h-14 bg-cream rounded-sm border border-ink overflow-hidden shadow-lg">
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-brand" />
                    <div className="absolute inset-x-1 top-2 bottom-1 bg-brand rounded-sm grid place-items-center">
                      <span className="text-white font-black text-[9px] tracking-wider">AMAZE</span>
                    </div>
                  </div>
                  <div className="relative w-9 h-11 bg-brand rounded-sm border border-ink">
                    <div className="absolute top-1 inset-x-0.5 h-3 bg-sky-300/60 rounded-sm" />
                    <div className="absolute bottom-0.5 right-0.5 h-1 w-1 rounded-full bg-yellow-200" />
                  </div>
                  <div className="absolute -bottom-1 left-1 flex gap-[68px]">
                    <motion.div className="h-3 w-3 rounded-full bg-ink border-[1.5px] border-brand"
                      animate={{ rotate: 360 }} transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }} />
                    <motion.div className="h-3 w-3 rounded-full bg-ink border-[1.5px] border-brand"
                      animate={{ rotate: 360 }} transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }} />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* SCENE 2: Delivery person */}
            <div className="relative mb-3 rounded-2xl border border-brand/20 bg-gradient-to-b from-[#15030a] to-[#0a0102] overflow-hidden">
              <div className="px-3 py-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-brand/80 border-b border-brand/15">
                <span>2 · Out for delivery</span>
                <span className="text-white/40">Walking to door</span>
              </div>
              <div className="relative h-28 overflow-hidden">
                <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#1a0508] to-transparent border-t border-brand/30" />
                <div className="absolute bottom-3 inset-x-4 h-px opacity-50"
                  style={{ backgroundImage: "repeating-linear-gradient(90deg, #E50914 0px, #E50914 4px, transparent 4px, transparent 8px)" }} />
                <motion.div className="absolute bottom-2"
                  initial={{ x: 8 }}
                  animate={{ x: ["8px", "calc(100% - 96px)", "calc(100% - 96px)", "8px"] }}
                  transition={{ duration: 6, times: [0, 0.4, 0.65, 1], repeat: Infinity, ease: "easeInOut" }}>
                  <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex flex-col items-center w-12">
                    <div className="relative w-7 h-3 rounded-t-full bg-brand shadow-[0_0_8px_rgba(229,9,20,0.6)]">
                      <div className="absolute -bottom-0.5 inset-x-0 h-1 bg-brand-700 rounded" />
                      <div className="absolute top-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-white" />
                    </div>
                    <div className="relative w-5 h-5 rounded-full bg-amber-200 -mt-0.5 border border-amber-700/40">
                      <div className="absolute top-1.5 left-1 h-0.5 w-0.5 rounded-full bg-ink" />
                      <div className="absolute top-1.5 right-1 h-0.5 w-0.5 rounded-full bg-ink" />
                    </div>
                    <div className="relative w-7 h-8 rounded-sm bg-brand border border-brand-700 grid place-items-center">
                      <span className="text-white text-[5px] font-black tracking-wider">AMAZE</span>
                      <div className="absolute top-2 inset-x-0 h-0.5 bg-white" />
                    </div>
                    <motion.div animate={{ opacity: [1, 1, 0, 0, 1] }}
                      transition={{ duration: 6, times: [0, 0.4, 0.5, 0.85, 0.9], repeat: Infinity }}
                      className="absolute right-[-8px] top-7 w-4 h-3 bg-amber-700 rounded-sm border border-amber-900">
                      <div className="absolute top-1 inset-x-0 h-0.5 bg-brand" />
                    </motion.div>
                    <div className="absolute top-6 -left-1 w-1 h-3 bg-brand rounded-full rotate-12" />
                    <div className="absolute top-6 -right-1 w-1 h-3 bg-brand rounded-full -rotate-12" />
                    <motion.div className="absolute bottom-0 left-1.5 w-1.5 h-3 bg-ink rounded origin-top"
                      animate={{ rotate: [-15, 15, -15] }}
                      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} />
                    <motion.div className="absolute bottom-0 right-1.5 w-1.5 h-3 bg-ink rounded origin-top"
                      animate={{ rotate: [15, -15, 15] }}
                      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* SCENE 3: Customer */}
            <div className="relative mb-3 rounded-2xl border border-brand/20 bg-gradient-to-b from-[#15030a] to-[#0a0102] overflow-hidden">
              <div className="px-3 py-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-brand/80 border-b border-brand/15">
                <span>3 · Delivered</span>
                <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-emerald-400">✓ Handed over</motion.span>
              </div>
              <div className="relative h-32 flex items-end justify-around overflow-hidden px-4 pb-2">
                <motion.div initial={{ scale: 0.95, opacity: 0.9 }}
                  animate={{ scale: [0.95, 1.02, 0.95], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex flex-col items-center w-14">
                  <div className="relative w-7 h-2 bg-amber-900 rounded-t-full -mb-1" />
                  <div className="relative w-6 h-6 rounded-full bg-amber-200 border border-amber-700/50">
                    <div className="absolute top-2 left-1.5 h-0.5 w-0.5 rounded-full bg-ink" />
                    <div className="absolute top-2 right-1.5 h-0.5 w-0.5 rounded-full bg-ink" />
                    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-1.5 h-0.5 border-b border-ink rounded-full" />
                  </div>
                  <div className="relative w-9 h-10 rounded-sm bg-blue-900 border border-blue-950" />
                  <div className="absolute top-7 -left-1.5 w-1.5 h-5 bg-amber-200 rounded-full rotate-45" />
                  <div className="absolute top-7 -right-1.5 w-1.5 h-5 bg-amber-200 rounded-full -rotate-45" />
                  <motion.div initial={{ y: 5, opacity: 0 }}
                    animate={{ y: [5, 0, 0, 5], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, times: [0, 0.2, 0.85, 1], repeat: Infinity }}
                    className="absolute top-12 left-1/2 -translate-x-1/2 w-7 h-5 bg-amber-700 rounded border border-amber-900">
                    <div className="absolute top-1.5 inset-x-0 h-0.5 bg-brand" />
                  </motion.div>
                  <div className="flex gap-1 mt-0.5">
                    <div className="w-1.5 h-3 bg-ink rounded" />
                    <div className="w-1.5 h-3 bg-ink rounded" />
                  </div>
                </motion.div>

                <div className="relative w-20 h-24">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[16px] border-l-transparent border-r-transparent border-b-[#3a0508]" />
                  <div className="absolute top-4 inset-x-0 bottom-0 bg-[#1a0508] border border-[#3a0508] rounded-b">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-10 bg-ink border border-[#3a0508]" />
                    <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute bottom-5 left-1/2 translate-x-1 h-0.5 w-0.5 rounded-full bg-brand shadow-[0_0_6px_rgba(229,9,20,0.8)]" />
                    <div className="absolute top-1 left-1 w-3.5 h-3 bg-yellow-200/70" />
                    <motion.div animate={{ opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1 right-1 w-3.5 h-3 bg-brand" />
                  </div>
                  <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.6, repeat: Infinity }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-brand shadow-[0_0_8px_rgba(229,9,20,0.7)]" />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              {[
                { icon: Zap, label: "Live network", value: "AI · routing" },
                { icon: Activity, label: "Active fleet", value: "1,284 trucks" },
                { icon: Radio, label: "Hubs online", value: "50+ cities" },
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-ink/60 border border-brand/20">
                    <div className="h-7 w-7 rounded-lg bg-brand text-white grid place-items-center shrink-0">
                      <Icon size={12} />
                    </div>
                    <div className="flex-1 flex items-center justify-between gap-3 min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 truncate">{m.label}</div>
                      <div className="text-sm text-white font-medium truncate">{m.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* DESKTOP — full animated scene */}
        <FadeIn delay={0.2}>
          <div className="hidden md:block relative aspect-[16/6] rounded-3xl border border-brand/30 bg-gradient-to-b from-[#1a0508] via-[#0E0203] to-[#2a0509] overflow-hidden shadow-[0_0_120px_-20px_rgba(229,9,20,0.4)]">
            <svg viewBox="0 0 1200 480" className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice" role="img"
              aria-label="Amaze delivery truck loading at warehouse, driving across, and handing a parcel to a customer at their door">
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2a0509" />
                  <stop offset="40%" stopColor="#1a0306" />
                  <stop offset="100%" stopColor="#0a0102" />
                </linearGradient>
                <radialGradient id="sunGlow" cx="0.5" cy="1" r="0.8">
                  <stop offset="0%" stopColor="#E50914" stopOpacity="0.8" />
                  <stop offset="40%" stopColor="#9B050B" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E50914" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="truckCab" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF1F2D" />
                  <stop offset="100%" stopColor="#9B050B" />
                </linearGradient>
                <linearGradient id="truckBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F7F4EE" />
                  <stop offset="100%" stopColor="#E2DCC9" />
                </linearGradient>
                <linearGradient id="package" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4A574" />
                  <stop offset="100%" stopColor="#8B5E32" />
                </linearGradient>
                <radialGradient id="droneLight" cx="0.5" cy="0" r="0.7">
                  <stop offset="0%" stopColor="#E50914" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#E50914" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="headlightBeam" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFE7A8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFE7A8" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="conveyorGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E50914" stopOpacity="0" />
                  <stop offset="100%" stopColor="#E50914" stopOpacity="0.5" />
                </linearGradient>
                <pattern id="dashes" x="0" y="0" width="60" height="6" patternUnits="userSpaceOnUse">
                  <rect width="36" height="6" fill="#E50914" opacity="0.8" />
                </pattern>
                <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              <rect width="1200" height="480" fill="url(#sky)" />
              <ellipse cx="600" cy="420" rx="700" ry="200" fill="url(#sunGlow)" />

              {[...Array(40)].map((_, i) => (
                <motion.circle key={`star-${i}`} cx={(i * 137) % 1200} cy={(i * 47) % 180}
                  r={i % 5 === 0 ? "1.5" : "1"} fill={i % 7 === 0 ? "#E50914" : "white"} opacity="0.4"
                  animate={{ opacity: [0.2, 0.7, 0.2] }}
                  transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.1 }} />
              ))}

              <g opacity="0.4">
                {nodes.map((n, i) => {
                  const next = nodes[i + 1];
                  if (!next) return null;
                  return (
                    <motion.line key={`net-${i}`} x1={n.x} y1={n.y} x2={next.x} y2={next.y}
                      stroke="#E50914" strokeWidth="1" strokeDasharray="4 4"
                      animate={{ strokeDashoffset: [0, -16] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                  );
                })}
              </g>
              {nodes.map((n, i) => (
                <g key={`node-${i}`}>
                  <motion.circle cx={n.x} cy={n.y} r="3" fill="#E50914" filter="url(#redGlow)"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25 }} />
                  <motion.circle cx={n.x} cy={n.y} r="3" fill="none" stroke="#E50914" strokeWidth="1"
                    animate={{ r: [3, 20, 3], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} />
                </g>
              ))}

              <g opacity="0.7">
                {[
                  [60, 230, 70, 80], [140, 210, 80, 100], [230, 250, 60, 60],
                  [300, 190, 100, 120], [410, 230, 70, 80], [490, 170, 90, 140],
                  [590, 210, 80, 100], [680, 250, 70, 60], [760, 190, 110, 120],
                  [880, 230, 80, 80], [970, 210, 90, 100], [1070, 240, 80, 70],
                ].map(([x, y, w, h], i) => (
                  <g key={`bldg-${i}`}>
                    <rect x={x} y={y} width={w} height={h} fill="#0a0102" stroke="#3a0508" strokeWidth="1" />
                    {[0, 1, 2, 3].map((j) => {
                      const seed = windowSeeds[i * 4 + j];
                      const isRed = j % 2 === 0;
                      return (
                        <motion.rect key={j}
                          x={x + 10 + (j % 2) * 24} y={y + 15 + Math.floor(j / 2) * 22}
                          width="8" height="10"
                          fill={isRed ? "#E50914" : "#FFD27A"}
                          opacity={seed ? 0.7 : 0.2}
                          animate={{ opacity: seed ? [0.5, 0.9, 0.5] : [0.1, 0.3, 0.1] }}
                          transition={{ duration: 2 + j, repeat: Infinity, delay: i * 0.15 }} />
                      );
                    })}
                  </g>
                ))}
              </g>

              <path d="M0,330 Q150,290 300,310 T600,300 T900,320 T1200,310 L1200,480 L0,480 Z" fill="#0a0102" />
              <path d="M0,330 Q150,290 300,310 T600,300 T900,320 T1200,310"
                stroke="#E50914" strokeWidth="2" fill="none" opacity="0.5" filter="url(#redGlow)" />

              <rect x="0" y="380" width="1200" height="100" fill="#0a0102" />
              <line x1="0" y1="380" x2="1200" y2="380" stroke="#E50914" strokeWidth="1.5" opacity="0.7" filter="url(#redGlow)" />
              <motion.g animate={{ x: [-60, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}>
                <rect x="-60" y="425" width="1320" height="6" fill="url(#dashes)" />
              </motion.g>

              {/* WAREHOUSE */}
              <g>
                <rect x="40" y="180" width="240" height="180" fill="#1a0508" stroke="#E50914" strokeWidth="1.5" opacity="0.95" />
                <polygon points="40,180 160,140 280,180" fill="#0E0203" stroke="#E50914" strokeWidth="1" opacity="0.7" />
                <rect x="180" y="260" width="100" height="100" fill="#E50914" opacity="0.15" />
                <rect x="180" y="260" width="100" height="100" fill="#0a0102" stroke="#E50914" strokeWidth="1.5" />
                {[275, 295, 315, 335, 355].map((y) => (
                  <line key={y} x1="180" y1={y} x2="280" y2={y} stroke="#3a0508" strokeWidth="1" />
                ))}
                <motion.rect x="185" y="265" width="90" height="90" fill="#E50914" filter="url(#redGlow)"
                  animate={{ opacity: [0.15, 0.4, 0.15] }} transition={{ duration: 2.5, repeat: Infinity }} />
                <motion.g animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 1.8, repeat: Infinity }}>
                  <rect x="55" y="195" width="110" height="28" fill="#E50914" rx="3" filter="url(#redGlow)" />
                  <text x="110" y="215" fill="#FFFFFF" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="system-ui" letterSpacing="2">AMAZE</text>
                </motion.g>
                <text x="110" y="234" fill="#E50914" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui" letterSpacing="3">SOLUTIONS</text>
                {[[70, 250], [110, 250], [150, 250], [70, 290], [110, 290], [150, 290], [70, 330], [110, 330], [150, 330]].map(([x, y], i) => (
                  <motion.rect key={i} x={x} y={y} width="22" height="22"
                    fill={i % 3 === 0 ? "#E50914" : "#FFD27A"}
                    opacity={i % 3 === 0 ? 0.6 : 0.5}
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.2 }} />
                ))}
              </g>

              {/* CONVEYOR */}
              <g>
                <rect x="280" y="338" width="320" height="14" fill="url(#conveyorGlow)" filter="url(#redGlow)" />
                <rect x="280" y="318" width="320" height="20" fill="#1a0508" stroke="#E50914" strokeWidth="1" opacity="0.9" rx="2" />
                {[290, 330, 370, 410, 450, 490, 530, 570].map((x) => (
                  <circle key={x} cx={x} cy="328" r="6" fill="#E50914" opacity="0.6" />
                ))}
                <rect x="280" y="320" width="320" height="6" fill="#0a0102" />
                {Array.from({ length: PKG_COUNT }).map((_, i) => (
                  <motion.g key={`pkg-${i}`}
                    initial={{ x: 280, opacity: 0 }}
                    animate={{ x: [280, 600], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: PKG_DURATION, times: [0, 0.05, 0.9, 1],
                      repeat: Infinity, delay: i * (PKG_DURATION / PKG_COUNT), ease: "linear",
                    }}>
                    <rect x="0" y="290" width="28" height="28" rx="2" fill="url(#package)" />
                    <rect x="0" y="302" width="28" height="3" fill="#E50914" />
                    <rect x="4" y="294" width="12" height="8" fill="#F7F4EE" />
                    <rect x="6" y="296" width="8" height="1" fill="#0A0A0A" />
                    <rect x="6" y="298" width="8" height="1" fill="#0A0A0A" />
                    <circle cx="22" cy="296" r="1.5" fill="#E50914" />
                  </motion.g>
                ))}
              </g>

              {/* TRUCK */}
              <motion.g initial={{ x: -800 }}
                animate={{ x: [-800, 0, 0, 100, 100, 800, 1400] }}
                transition={{
                  duration: TOTAL, times: [0, 0.12, 0.25, 0.38, 0.80, 0.92, 1],
                  repeat: Infinity, ease: [0.65, 0, 0.35, 1],
                }}>
                <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}>
                  <motion.path d="M 865,355 L 1080,335 L 1080,378 L 865,358 Z" fill="url(#headlightBeam)"
                    animate={{ opacity: [0.6, 0.9, 0.6] }} transition={{ duration: 1.4, repeat: Infinity }} />

                  <rect x="610" y="250" width="184" height="120" fill="url(#truckBody)" stroke="#0a0102" strokeWidth="2" rx="3" />
                  <rect x="610" y="250" width="184" height="14" fill="#E50914" rx="3" />
                  <line x1="702" y1="264" x2="702" y2="370" stroke="#0a0102" strokeWidth="1.5" opacity="0.4" />

                  <rect x="630" y="284" width="144" height="36" fill="#E50914" rx="3" filter="url(#redGlow)" />
                  <text x="702" y="308" fill="#FFFFFF" fontSize="22" fontWeight="800" textAnchor="middle" fontFamily="system-ui" letterSpacing="3">AMAZE</text>
                  <text x="702" y="336" fill="#0a0102" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui" letterSpacing="1.5">POWERED BY AI</text>
                  <rect x="610" y="358" width="184" height="4" fill="#E50914" opacity="0.7" />

                  <rect x="790" y="280" width="80" height="90" fill="url(#truckCab)" stroke="#0a0102" strokeWidth="2" rx="6" />
                  <rect x="790" y="280" width="80" height="6" fill="#FFFFFF" opacity="0.3" rx="6" />
                  <path d="M822,288 L862,288 L868,318 L822,318 Z" fill="#8DC4EE" opacity="0.6" stroke="#0a0102" strokeWidth="1" />
                  <circle cx="840" cy="305" r="6" fill="#2a0509" />
                  <rect x="836" y="310" width="8" height="6" fill="#2a0509" />
                  <rect x="786" y="296" width="6" height="8" fill="#0a0102" />
                  <line x1="836" y1="338" x2="846" y2="338" stroke="#0a0102" strokeWidth="1.5" />
                  <circle cx="864" cy="350" r="5" fill="#FFE7A8" filter="url(#redGlow)" />

                  {[[620, 340], [650, 340], [680, 340], [635, 312], [665, 312]].map(([x, y], i) => (
                    <motion.g key={i}>
                      <motion.rect x={x} y={y} width="26" height="26" rx="2" fill="url(#package)"
                        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                        transition={{ duration: TOTAL, times: [0, 0.13, 0.22 + i * 0.02, 0.55, 0.6, 1], repeat: Infinity }} />
                      <motion.rect x={x} y={y + 12} width="26" height="3" fill="#E50914"
                        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                        transition={{ duration: TOTAL, times: [0, 0.13, 0.22 + i * 0.02, 0.55, 0.6, 1], repeat: Infinity }} />
                    </motion.g>
                  ))}

                  {[640, 770].map((cx) => (
                    <g key={cx}>
                      <circle cx={cx} cy="385" r="22" fill="#0a0102" />
                      <circle cx={cx} cy="385" r="14" fill="#E50914" opacity="0.8" />
                      <circle cx={cx} cy="385" r="10" fill="#0a0102" />
                      <motion.g animate={{ rotate: 360 }}
                        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: `${cx}px 385px` }}>
                        <line x1={cx - 10} y1="385" x2={cx + 10} y2="385" stroke="#E50914" strokeWidth="2" />
                        <line x1={cx} y1="375" x2={cx} y2="395" stroke="#E50914" strokeWidth="2" />
                      </motion.g>
                      <circle cx={cx} cy="385" r="2" fill="#E50914" />
                    </g>
                  ))}
                </motion.g>
              </motion.g>

              {/* HOUSE + CUSTOMER + DELIVERY PERSON */}
              <g>
                <rect x="1020" y="290" width="120" height="80" fill="#1a0508" stroke="#3a0508" strokeWidth="1.5" />
                <polygon points="1020,290 1080,250 1140,290" fill="#0E0203" stroke="#3a0508" strokeWidth="1" />
                <motion.circle cx="1080" cy="318" r="4" fill="#E50914" filter="url(#redGlow)"
                  animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.6, repeat: Infinity }} />
                <motion.rect x="1035" y="310" width="20" height="18" fill="#FFD27A"
                  animate={{ opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.rect x="1105" y="310" width="20" height="18" fill="#E50914"
                  animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} />

                <motion.g animate={{ scaleX: [1, 1, 0.4, 0.4, 1, 1] }}
                  transition={{ duration: TOTAL, times: [0, 0.52, 0.56, 0.72, 0.76, 1], repeat: Infinity }}
                  style={{ transformOrigin: "1065px 345px" }}>
                  <rect x="1065" y="320" width="30" height="50" fill="#0a0102" stroke="#3a0508" strokeWidth="1" />
                  <circle cx="1088" cy="346" r="1.5" fill="#E50914" />
                </motion.g>

                <motion.g initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: [0, 0, 1, 1, 0, 0], x: [0, 0, 0, -3, -8, -8] }}
                  transition={{ duration: TOTAL, times: [0, 0.55, 0.58, 0.7, 0.75, 1], repeat: Infinity }}>
                  <g transform="translate(1080, 320)">
                    <circle cx="0" cy="-8" r="7" fill="#D4A574" />
                    <path d="M-7,-12 Q0,-18 7,-12 L7,-8 L-7,-8 Z" fill="#3a1f0f" />
                    <circle cx="-2.5" cy="-8" r="0.8" fill="#0a0102" />
                    <circle cx="2.5" cy="-8" r="0.8" fill="#0a0102" />
                    <path d="M-2,-5 Q0,-3 2,-5" stroke="#0a0102" strokeWidth="0.6" fill="none" />
                    <path d="M-8,0 L8,0 L11,28 L-11,28 Z" fill="#1e3a8a" stroke="#0a1a3a" strokeWidth="0.8" />
                    <rect x="-9" y="28" width="8" height="18" fill="#3a1a08" />
                    <rect x="1" y="28" width="8" height="18" fill="#3a1a08" />
                    <ellipse cx="-5" cy="48" rx="5" ry="2" fill="#0a0102" />
                    <ellipse cx="5" cy="48" rx="5" ry="2" fill="#0a0102" />
                    <motion.g animate={{ rotate: [0, 0, -25, -25, 0, 0] }}
                      transition={{ duration: TOTAL, times: [0, 0.58, 0.62, 0.68, 0.72, 1], repeat: Infinity }}
                      style={{ transformOrigin: "0px 2px" }}>
                      <line x1="-8" y1="3" x2="-16" y2="12" stroke="#D4A574" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="8" y1="3" x2="16" y2="12" stroke="#D4A574" strokeWidth="3.5" strokeLinecap="round" />
                    </motion.g>
                    <motion.g animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }}
                      transition={{ duration: TOTAL, times: [0, 0.55, 0.62, 0.64, 0.66, 0.7, 0.74, 1], repeat: Infinity }}>
                      <rect x="-9" y="6" width="18" height="14" rx="1" fill="url(#package)" />
                      <rect x="-9" y="10" width="18" height="2" fill="#E50914" />
                    </motion.g>
                  </g>
                </motion.g>

                {/* DELIVERY PERSON */}
                <motion.g initial={{ x: 985, opacity: 0 }}
                  animate={{
                    x: [985, 985, 985, 985, 1058, 1058, 985, 985, 985],
                    opacity: [0, 0, 0, 1, 1, 1, 1, 0, 0],
                  }}
                  transition={{
                    duration: TOTAL,
                    times: [0, 0.32, 0.4, 0.42, 0.56, 0.66, 0.78, 0.8, 1],
                    repeat: Infinity, ease: "easeInOut",
                  }}>
                  <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}>
                    <ellipse cx="0" cy="278" rx="14" ry="7" fill="#E50914" filter="url(#redGlow)" />
                    <rect x="-14" y="278" width="28" height="4" fill="#9B050B" rx="1" />
                    <circle cx="0" cy="276" r="2" fill="#FFFFFF" />
                    <circle cx="0" cy="294" r="10" fill="#D4A574" stroke="#8B5E32" strokeWidth="0.6" />
                    <circle cx="-3.5" cy="293" r="1.2" fill="#0a0102" />
                    <circle cx="3.5" cy="293" r="1.2" fill="#0a0102" />
                    <path d="M-3,298 Q0,300 3,298" stroke="#0a0102" strokeWidth="0.8" fill="none" />
                    <rect x="-3" y="302" width="6" height="4" fill="#D4A574" />
                    <rect x="-15" y="306" width="30" height="40" rx="3" fill="#E50914" stroke="#9B050B" strokeWidth="1" />
                    <rect x="-15" y="318" width="30" height="3" fill="#FFFFFF" opacity="0.95" />
                    <rect x="-15" y="338" width="30" height="2" fill="#FFFFFF" opacity="0.6" />
                    <text x="0" y="330" fill="#FFFFFF" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="system-ui" letterSpacing="0.5">AMAZE</text>
                    <rect x="-15" y="345" width="30" height="3" fill="#0a0102" />
                    <rect x="-2" y="345" width="4" height="3" fill="#E50914" />
                    <motion.g animate={{ rotate: [-8, 8, -8] }}
                      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformOrigin: "-5px 348px" }}>
                      <rect x="-9" y="348" width="7" height="24" rx="1.5" fill="#1a1a2e" />
                    </motion.g>
                    <motion.g animate={{ rotate: [8, -8, 8] }}
                      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformOrigin: "5px 348px" }}>
                      <rect x="2" y="348" width="7" height="24" rx="1.5" fill="#1a1a2e" />
                    </motion.g>
                    <ellipse cx="-5.5" cy="374" rx="6" ry="2" fill="#0a0102" />
                    <ellipse cx="5.5" cy="374" rx="6" ry="2" fill="#0a0102" />
                    <motion.g animate={{ rotate: [-15, 15, -15] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      style={{ transformOrigin: "-13px 310px" }}>
                      <line x1="-13" y1="310" x2="-18" y2="330" stroke="#E50914" strokeWidth="5" strokeLinecap="round" />
                      <circle cx="-18" cy="332" r="3" fill="#D4A574" />
                    </motion.g>
                    <line x1="13" y1="310" x2="24" y2="320" stroke="#E50914" strokeWidth="5" strokeLinecap="round" />
                    <circle cx="24" cy="322" r="3" fill="#D4A574" />
                    <motion.g animate={{ opacity: [1, 1, 1, 0, 0] }}
                      transition={{ duration: TOTAL, times: [0, 0.55, 0.60, 0.64, 1], repeat: Infinity }}>
                      <rect x="20" y="312" width="26" height="22" rx="2" fill="url(#package)" stroke="#5C4426" strokeWidth="0.5" />
                      <rect x="20" y="320" width="26" height="3" fill="#E50914" />
                      <rect x="24" y="316" width="10" height="6" fill="#F7F4EE" />
                      <line x1="26" y1="318" x2="32" y2="318" stroke="#0a0102" strokeWidth="0.5" />
                      <line x1="26" y1="320" x2="32" y2="320" stroke="#0a0102" strokeWidth="0.5" />
                      <circle cx="42" cy="316" r="2" fill="#E50914" />
                    </motion.g>
                  </motion.g>
                </motion.g>

                <motion.g animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0], scale: [0.5, 0.5, 0.5, 0.5, 1.1, 1, 0.9, 0.5] }}
                  transition={{ duration: TOTAL, times: [0, 0.5, 0.6, 0.7, 0.72, 0.78, 0.82, 1], repeat: Infinity }}
                  style={{ transformOrigin: "1080px 230px" }}>
                  <rect x="1030" y="215" width="100" height="30" rx="6" fill="#1a3a1a" stroke="#7BD389" strokeWidth="1.5" filter="url(#redGlow)" />
                  <text x="1080" y="234" fill="#7BD389" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="system-ui" letterSpacing="2">✓ DELIVERED</text>
                </motion.g>
              </g>

              {/* DRONE */}
              <motion.g animate={{ x: [0, 80, -40, 0], y: [0, -8, 4, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
                <g transform="translate(700,120)">
                  <ellipse cx="0" cy="110" rx="45" ry="100" fill="url(#droneLight)" />
                  <rect x="-14" y="-5" width="28" height="10" fill="#E50914" stroke="#0a0102" strokeWidth="1" rx="3" filter="url(#redGlow)" />
                  <line x1="-14" y1="0" x2="-24" y2="-6" stroke="#0a0102" strokeWidth="2" />
                  <line x1="14" y1="0" x2="24" y2="-6" stroke="#0a0102" strokeWidth="2" />
                  <motion.ellipse cx="-24" cy="-6" rx="10" ry="2" fill="#FFFFFF" opacity="0.6"
                    animate={{ scaleX: [1, 0.3, 1] }} transition={{ duration: 0.15, repeat: Infinity }} />
                  <motion.ellipse cx="24" cy="-6" rx="10" ry="2" fill="#FFFFFF" opacity="0.6"
                    animate={{ scaleX: [1, 0.3, 1] }} transition={{ duration: 0.15, repeat: Infinity, delay: 0.07 }} />
                  <motion.circle cx="0" cy="0" r="2.5" fill="#FFFFFF"
                    animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
                </g>
              </motion.g>

              {[
                { x1: 280, y1: 200, x2: 700, y2: 130, delay: 0 },
                { x1: 920, y1: 180, x2: 700, y2: 130, delay: 1.5 },
                { x1: 700, y1: 130, x2: 1080, y2: 250, delay: 3 },
              ].map((b, i) => (
                <motion.circle key={`beam-${i}`} r="3" fill="#E50914" filter="url(#redGlow)"
                  initial={{ cx: b.x1, cy: b.y1, opacity: 0 }}
                  animate={{ cx: [b.x1, b.x2], cy: [b.y1, b.y2], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: b.delay, ease: "easeInOut" }} />
              ))}
            </svg>

            {/* HUD overlay */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 rounded-xl border border-brand/50 bg-ink/85 backdrop-blur-md shadow-[0_0_30px_-6px_rgba(229,9,20,0.5)] px-4 py-3 font-mono text-xs min-w-[200px]">
              <div className="flex items-center gap-2 text-brand text-[10px] tracking-[0.2em] mb-2">
                <motion.span className="h-1.5 w-1.5 rounded-full bg-brand"
                  animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                CLINSHIP · LIVE
              </div>
              <div className="text-white/80 text-[11px] tracking-wide mb-1">PARCEL TRACE</div>
              <motion.div key={statuses[statusIdx]} initial={{ opacity: 0, x: 4 }}
                animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
                className={`text-[11px] font-bold tracking-wide ${statuses[statusIdx] === "DELIVERED ✓" ? "text-emerald-400" : "text-brand"}`}>
                ● {statuses[statusIdx]}
              </motion.div>
            </div>

            <div className="absolute bottom-0 inset-x-0 grid grid-cols-3 divide-x divide-brand/30 bg-gradient-to-r from-ink/90 via-[#2a0509]/90 to-ink/90 backdrop-blur-md border-t border-brand/40">
              {[
                { icon: Zap, label: "Live network", value: "AI · routing" },
                { icon: Activity, label: "Active fleet", value: "1,284 trucks" },
                { icon: Radio, label: "Hubs online", value: "50+ cities" },
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="flex items-center gap-3 px-3 py-2 md:px-4 md:py-3">
                    <div className="h-9 w-9 rounded-lg bg-brand text-white grid place-items-center shrink-0 shadow-[0_0_20px_-2px_rgba(229,9,20,0.6)]">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 truncate">{m.label}</div>
                      <div className="text-sm md:text-base text-white font-medium truncate">{m.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
