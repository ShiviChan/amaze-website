"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Youtube, ArrowUpRight } from "lucide-react";
import { CAMPAIGN_HREF } from "./links";

const FPS = 25;
const ease = [0.22, 1, 0.36, 1];

function timecode(frames) {
  const f = frames % FPS;
  const s = Math.floor(frames / FPS);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f)}`;
}

const corners = [
  "top-3 left-3 border-t-2 border-l-2",
  "top-3 right-3 border-t-2 border-r-2",
  "bottom-3 left-3 border-b-2 border-l-2",
  "bottom-3 right-3 border-b-2 border-r-2",
];

export default function ViewfinderHero() {
  const reduce = useReducedMotion();
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setFrames((f) => f + 1), 1000 / FPS);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative pt-10 pb-20 md:pb-28 overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-8">
            <Image src="/media/newspath-logo.jpg" alt="Newspath Bharat logo" width={120} height={50}
              className="h-10 w-auto rounded-md bg-white px-1.5" priority />
            <span className="text-sm text-white/60">Media and marketing, through Newspath Bharat</span>
          </div>

          <h1 className="font-deva font-bold text-[13vw] sm:text-7xl xl:text-[5.6rem] leading-[1.2] tracking-normal text-white">
            ख़बर। जनहित।
            <span className="block text-brand">ज़मीनी हक़ीक़त।</span>
          </h1>
          <p className="mt-5 font-display text-2xl md:text-3xl text-white/75">
            News, public interest and ground reality, in Hindi.
          </p>

          <p className="mt-8 max-w-xl text-lg text-white/65 leading-relaxed">
            Newspath Bharat is a Hindi digital news network with a community of 6,00,000+ across YouTube, Facebook and Instagram, most of it in Tier-2 and Tier-3 India. Brands reach that audience through our reports, podcasts and sponsored campaigns.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={CAMPAIGN_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Plan a campaign <ArrowUpRight size={18} />
            </a>
            <a href="https://youtube.com/@NewspathBharat" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Youtube size={16} /> Watch on YouTube
            </a>
          </div>
        </div>

        {/* Camera viewfinder: the one orchestrated moment on this page */}
        <div className="lg:col-span-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 1.04, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease }}
            className="relative aspect-[3/2] rounded-sm overflow-hidden bg-ink-800 ring-1 ring-white/10"
          >
            <Image src="/media/lamp-lighting.jpg" alt="Guests and senior police officers lighting the ceremonial lamp on stage"
              fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

            {corners.map((c, i) => (
              <motion.span key={c}
                initial={reduce ? false : { opacity: 0, scale: 1.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.06, ease }}
                className={`absolute h-8 w-8 md:h-10 md:w-10 border-white/90 ${c}`} />
            ))}

            <div className="absolute top-5 left-6 md:top-6 md:left-8 flex items-center gap-2 text-xs md:text-sm font-semibold text-white tabular-nums">
              <span className="h-2.5 w-2.5 rounded-full bg-brand motion-safe:animate-pulse" />
              REC
            </div>
            <div className="absolute top-5 right-6 md:top-6 md:right-8 text-xs md:text-sm text-white/90 tabular-nums" aria-hidden="true">
              {timecode(frames)}
            </div>
            <div className="absolute inset-0 grid place-items-center pointer-events-none" aria-hidden="true">
              <span className="relative h-6 w-6 before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:bg-white/50 after:absolute after:top-1/2 after:left-0 after:w-full after:h-px after:bg-white/50" />
            </div>
            <div className="absolute bottom-5 left-6 right-6 md:bottom-6 md:left-8 md:right-8 flex items-end justify-between gap-4 text-xs md:text-sm text-white/90">
              <span>Lighting the ceremonial lamp</span>
              <span className="text-white/60">Newspath Bharat</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
