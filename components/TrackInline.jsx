"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import TrackShipment from "./TrackShipment";

export default function TrackInline() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] mesh-bg border border-slate-200/70 px-6 py-14 md:py-20 shadow-soft">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="eyebrow mb-6">Track shipment</div>
              <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink text-balance">
                Where is your <span className="text-gradient">parcel?</span>
              </h2>
            </div>
          </FadeIn>
          <TrackShipment compact />
          <FadeIn delay={0.2}>
            <div className="mt-6 text-center">
              <Link href="/track" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand transition">
                Open full tracker <ArrowUpRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
