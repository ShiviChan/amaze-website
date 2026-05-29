"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink overflow-hidden">
      <div className="overflow-hidden border-b border-white/10">
        <div className="marquee-track py-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display text-[12vw] md:text-[8vw] leading-none px-8 text-white/[0.07] whitespace-nowrap">
              Get Amazed •
            </span>
          ))}
        </div>
      </div>

      <div className="container-x py-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Logo size={44} />
          <p className="mt-6 max-w-sm text-white/60 leading-relaxed">
            India's tech-first logistics company. Intercity to intracity, long haul to last mile — one stop for every freight problem since 2015.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="https://www.linkedin.com/company/asnmcare/" target="_blank" rel="noreferrer"
              className="h-11 w-11 rounded-full border border-white/15 grid place-items-center text-white/70 hover:bg-brand hover:border-brand hover:text-white transition" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:riteshsr@asnmcare.com"
              className="h-11 w-11 rounded-full border border-white/15 grid place-items-center text-white/70 hover:bg-brand hover:border-brand hover:text-white transition" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.25em] text-white/40 mb-5">Explore</h4>
          <ul className="space-y-3 text-white/80">
            <li><Link href="/" className="hover:text-brand transition">Home</Link></li>
            <li><Link href="/platform" className="hover:text-brand transition">Clinship Platform</Link></li>
            <li><Link href="/services" className="hover:text-brand transition">3PL Services</Link></li>
            <li><Link href="/insights" className="hover:text-brand transition">Insights</Link></li>
            <li><Link href="/track" className="hover:text-brand transition">Track Shipment</Link></li>
            <li><Link href="/about" className="hover:text-brand transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-brand transition">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-white/40 mb-5">Get in touch</h4>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
              <span>8th Floor, B-807, i-Thum Tower<br />Plot No. A-40, Sector-62<br />Noida, UP — 201301<br /><span className="text-white/40 text-xs">50+ locations across India</span></span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-brand shrink-0 mt-0.5" />
              <a href="tel:+919676020374" className="hover:text-brand transition">+91 96760 20374</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-brand shrink-0 mt-0.5" />
              <a href="mailto:riteshsr@asnmcare.com" className="hover:text-brand transition">riteshsr@asnmcare.com</a>
            </li>
          </ul>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm text-white hover:text-brand transition">
            Start a project <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} ASNM Care Pvt Ltd · Amaze Solutions. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Made with precision in India</span>
            <motion.span className="inline-flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              All systems operational
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
