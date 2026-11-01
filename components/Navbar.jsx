"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, LogIn, Sparkles } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/services", label: "Services" },
  { href: "/media-marketing", label: "Media And Marketing" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/track", label: "Track" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Announcement strip */}
        <div className={`overflow-hidden bg-brand-gradient text-white transition-all duration-300 ${scrolled ? "max-h-0" : "max-h-10"}`}>
          <Link href="/platform" className="container-x flex h-9 items-center justify-center gap-2 text-xs sm:text-sm font-medium">
            <Sparkles size={14} className="shrink-0" />
            <span className="truncate">Clinship AI cuts RTO by up to 35% — see how it works</span>
            <ArrowUpRight size={14} className="shrink-0" />
          </Link>
        </div>

        <div className={`transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/70 shadow-soft" : "bg-transparent"}`}>
          <div className="container-x flex items-center justify-between h-16 md:h-[72px]">
            <Link href="/" className="flex items-center"><Logo /></Link>

            <nav className="hidden xl:flex items-center gap-0.5 rounded-full border border-slate-200/70 bg-white/70 px-2 py-1.5 shadow-soft backdrop-blur">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand transition">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-2 whitespace-nowrap">
              <a
                href="https://app.clinship.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-ink hover:text-brand transition"
              >
                <LogIn size={16} /> Client Login
              </a>
              <Link href="/contact" className="btn-primary !py-2.5 text-sm">Get a quote <ArrowUpRight size={16} /></Link>
            </div>

            <button onClick={() => setOpen(true)} className="xl:hidden text-ink p-2 rounded-full bg-white/80 border border-slate-200 shadow-soft" aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] mesh-bg xl:hidden flex flex-col"
          >
            <div className="container-x flex items-center justify-between h-16">
              <Logo />
              <button onClick={() => setOpen(false)} className="text-ink p-2 rounded-full bg-white border border-slate-200 shadow-soft" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="container-x flex-1 flex flex-col justify-center gap-1">
              {links.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}>
                  <Link href={l.href} onClick={() => setOpen(false)}
                    className="block text-3xl font-display font-bold tracking-tight py-3 border-b border-slate-900/10 text-ink hover:text-brand transition">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }} className="mt-8 flex flex-col gap-3">
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary">
                  Get a quote <ArrowUpRight size={16} />
                </Link>
                <a
                  href="https://app.clinship.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-ghost"
                >
                  <LogIn size={16} /> Client Login
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
