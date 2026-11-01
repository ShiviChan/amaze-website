"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/70 bg-white overflow-hidden">
      <div className="overflow-hidden border-b border-slate-200/70">
        <div className="marquee-track py-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display font-extrabold text-[12vw] md:text-[7vw] leading-none px-8 whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-brand/15 via-rose/15 to-violet/15">
              Get Amazed •
            </span>
          ))}
        </div>
      </div>

      <div className="container-x py-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Logo size={44} />
          <p className="mt-6 max-w-sm text-slate-600 leading-relaxed">
            India's tech-first logistics company. Intercity to intracity, long haul to last mile — one stop for every freight problem since 2015.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="https://www.linkedin.com/company/asnmcare/" target="_blank" rel="noreferrer"
              className="h-11 w-11 rounded-full border border-slate-200 bg-white shadow-soft grid place-items-center text-slate-600 hover:bg-brand-gradient hover:border-transparent hover:text-white transition" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:riteshsr@asnmcare.com"
              className="h-11 w-11 rounded-full border border-slate-200 bg-white shadow-soft grid place-items-center text-slate-600 hover:bg-brand-gradient hover:border-transparent hover:text-white transition" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-5">Explore</h4>
          <ul className="space-y-3 text-slate-700">
            <li><Link href="/" className="hover:text-brand transition">Home</Link></li>
            <li><Link href="/platform" className="hover:text-brand transition">Clinship Platform</Link></li>
            <li><Link href="/services" className="hover:text-brand transition">3PL Services</Link></li>
            <li><Link href="/media-marketing" className="hover:text-brand transition">Media And Marketing</Link></li>
            <li><Link href="/insights" className="hover:text-brand transition">Insights</Link></li>
            <li><Link href="/track" className="hover:text-brand transition">Track Shipment</Link></li>
            <li><Link href="/about" className="hover:text-brand transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-brand transition">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-5">Get in touch</h4>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
              <span>8th Floor, B-807, i-Thum Tower<br />Plot No. A-40, Sector-62<br />Noida, UP — 201301<br /><span className="text-slate-400 text-xs">50+ locations across India</span></span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-brand shrink-0 mt-0.5" />
              <a href="mailto:riteshsr@asnmcare.com" className="hover:text-brand transition">riteshsr@asnmcare.com</a>
            </li>
          </ul>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
            Start a project <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200/70 bg-canvas">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} ASNM Care Pvt Ltd · Amaze Solutions. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Made with precision in India</span>
            <motion.span className="inline-flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
