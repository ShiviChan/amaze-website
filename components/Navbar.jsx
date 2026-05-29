"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/services", label: "Services" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}
      >
        <div className="container-x flex items-center justify-between h-20">
          <Link href="/" className="flex items-center"><Logo /></Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="relative px-4 py-2 text-sm text-white/80 hover:text-white transition group">
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm">Get a quote <ArrowUpRight size={16} /></Link>
          </div>

          <button onClick={() => setOpen(true)} className="lg:hidden text-white p-2" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl lg:hidden flex flex-col"
          >
            <div className="container-x flex items-center justify-between h-20">
              <Logo />
              <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="container-x flex-1 flex flex-col justify-center gap-2">
              {links.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}>
                  <Link href={l.href} onClick={() => setOpen(false)}
                    className="block text-4xl font-display tracking-tight py-2 border-b border-white/10 text-white hover:text-brand transition">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }} className="mt-8">
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary">
                  Get a quote <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
