"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import TrackShipment from "./TrackShipment";

export default function TrackInline() {
  return (
    <section className="relative py-24 border-y border-white/10 bg-ink-800/40">
      <div className="container-x">
        <FadeIn>
          <div className="text-center mb-10">
            <div className="eyebrow mb-6 justify-center inline-flex">Track shipment</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[0.95] text-balance">
              Where is your <span className="italic text-brand">parcel?</span>
            </h2>
          </div>
        </FadeIn>
        <TrackShipment compact />
        <FadeIn delay={0.2}>
          <div className="mt-6 text-center">
            <Link href="/track" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand transition">
              Open full tracker <ArrowUpRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
