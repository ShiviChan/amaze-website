"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

const photos = [
  { src: "/media/award-presentation.jpg", w: 1280, h: 582, alt: "Award presentation on stage with senior police officers", caption: "Award presentation with senior police officers", cls: "lg:col-span-4 lg:row-span-2", pos: "object-center" },
  { src: "/media/hosts-on-stage.jpg", w: 1280, h: 1117, alt: "Two hosts in white suits on stage, trophies behind them", caption: "Hosts on stage", cls: "lg:col-span-2 lg:row-span-2", pos: "object-[60%_50%]" },
  { src: "/media/lamp-lighting.jpg", w: 1280, h: 853, alt: "Guests and police officers lighting the ceremonial lamp", caption: "Lighting the ceremonial lamp", cls: "lg:col-span-3 lg:row-span-2", pos: "object-center" },
  { src: "/media/dance-performers.jpg", w: 1280, h: 853, alt: "Young classical dancers in traditional costume with guests behind them", caption: "Classical dance performers with the guests", cls: "lg:col-span-3 lg:row-span-2", pos: "object-[50%_40%]" },
  { src: "/media/dancers-with-guests.jpg", w: 1280, h: 582, alt: "Classical dancers and guests on stage with a Ganesha image on the screen", caption: "Closing photo with the performers", cls: "lg:col-span-6 lg:row-span-2", pos: "object-[50%_45%]" },
];

export default function EventGallery() {
  const [open, setOpen] = useState(-1);
  const closeRef = useRef(null);
  const lastTrigger = useRef(null);

  const close = useCallback(() => {
    setOpen(-1);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d) => setOpen((i) => (i + d + photos.length) % photos.length), []);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = photos[open];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[240px] lg:auto-rows-[210px] gap-3">
        {photos.map((p, i) => (
          <button key={p.src} type="button"
            onClick={(e) => { lastTrigger.current = e.currentTarget; setOpen(i); }}
            className={`group relative overflow-hidden rounded-sm bg-ink-800 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand ${p.cls} ${i === 4 ? "sm:col-span-2" : ""}`}
            aria-label={`Open photo: ${p.caption}`}>
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
              className={`object-cover ${p.pos} transition-transform duration-700 group-hover:scale-[1.03]`} />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/75 to-transparent flex items-end justify-between gap-3">
              <span className="text-sm text-white/90">{p.caption}</span>
              <Expand size={16} className="shrink-0 text-white/60 group-hover:text-white transition" aria-hidden="true" />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div key="lightbox" role="dialog" aria-modal="true" aria-label={current.caption}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] bg-black/95 flex flex-col"
            onClick={close}>
            <div className="flex items-center justify-between px-4 md:px-8 h-16 shrink-0 text-sm text-white/70" onClick={(e) => e.stopPropagation()}>
              <span className="tabular-nums">{open + 1} of {photos.length}</span>
              <button ref={closeRef} onClick={close} aria-label="Close photo"
                className="h-10 w-10 grid place-items-center rounded-full text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand">
                <X size={22} />
              </button>
            </div>

            <div className="relative flex-1 min-h-0 mx-4 md:mx-20" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={current.src} className="absolute inset-0"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between gap-4 px-4 md:px-8 py-5 shrink-0" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => step(-1)} aria-label="Previous photo"
                className="h-11 w-11 grid place-items-center rounded-full border border-white/20 text-white hover:bg-white hover:text-ink transition">
                <ChevronLeft size={20} />
              </button>
              <p className="text-center text-white/85">{current.caption}</p>
              <button onClick={() => step(1)} aria-label="Next photo"
                className="h-11 w-11 grid place-items-center rounded-full border border-white/20 text-white hover:bg-white hover:text-ink transition">
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
