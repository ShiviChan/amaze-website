"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Briefcase, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

const cities = [
  "Noida (HQ)", "Delhi NCR", "Ghaziabad", "Gurugram", "Faridabad", "Mumbai", "Bengaluru", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow",
  "Indore", "Nagpur", "Coimbatore", "Kochi", "Bhubaneswar", "Guwahati",
  "Chandigarh", "Patna", "Ranchi", "Raipur", "Visakhapatnam", "Vadodara", "Goa",
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <section className="relative pt-12 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="container-x relative z-10">
          <FadeIn><div className="eyebrow mb-8">Talk to us</div></FadeIn>
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.95] tracking-tightest text-balance max-w-5xl">
            {"Let's move".split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
                <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block">{w}</motion.span>
              </span>
            ))}
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }} className="italic text-brand">
              {" "}something.
            </motion.span>
          </h1>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="eyebrow mb-6">Get in touch</div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[0.95] text-balance">One conversation away.</h2>
              <p className="mt-6 text-white/65 leading-relaxed">
                Tell us about your freight, your locations, your pain points. We'll come back with options that actually fit.
              </p>
            </FadeIn>

            <div className="mt-12 space-y-6">
              <FadeIn delay={0.1}>
                <a href="mailto:riteshsr@asnmcare.com"
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-brand/40 transition group">
                  <div className="h-10 w-10 rounded-lg bg-brand/10 border border-brand/30 grid place-items-center text-brand">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Email</div>
                    <div className="text-white group-hover:text-brand transition">riteshsr@asnmcare.com</div>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.13}>
                <a href="tel:+919676020374"
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-brand/40 transition group">
                  <div className="h-10 w-10 rounded-lg bg-brand/10 border border-brand/30 grid place-items-center text-brand">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Phone</div>
                    <div className="text-white group-hover:text-brand transition">+91 96760 20374</div>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10">
                  <div className="h-10 w-10 rounded-lg bg-brand/10 border border-brand/30 grid place-items-center text-brand">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">HQ</div>
                    <div className="text-white leading-snug">
                      8th Floor, B-807, i-Thum Tower<br />
                      Plot No. A-40, Sector-62<br />
                      Noida, Uttar Pradesh — 201301<br />
                      <span className="text-white/50 text-sm">ASNM Care Pvt Ltd</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <a href="https://www.linkedin.com/company/asnmcare/" target="_blank" rel="noreferrer"
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-brand/40 transition group">
                  <div className="h-10 w-10 rounded-lg bg-brand/10 border border-brand/30 grid place-items-center text-brand">
                    <Linkedin size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">LinkedIn</div>
                    <div className="text-white group-hover:text-brand transition flex items-center gap-2">
                      Follow Amaze Solutions <ArrowUpRight size={14} />
                    </div>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>

          <FadeIn className="lg:col-span-7" delay={0.2}>
            <div className="p-8 md:p-10 rounded-2xl glass">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 border-y border-white/10 bg-ink-800/40">
        <div className="container-x">
          <FadeIn>
            <div className="eyebrow mb-6">Where we operate</div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95] text-balance max-w-3xl">
              50+ cities. <span className="italic text-brand">One partner.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-2">
              {cities.map((c, i) => (
                <motion.span key={c}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/75 hover:bg-brand hover:border-brand hover:text-white transition cursor-default">
                  <MapPin size={12} className="inline mr-1.5 opacity-60" />{c}
                </motion.span>
              ))}
              <span className="px-4 py-2 rounded-full text-sm text-white/40 italic">+ more</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28">
        <div className="container-x">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-brand/15 via-ink to-ink overflow-hidden p-10 md:p-20">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn>
                  <div className="eyebrow mb-6">Careers</div>
                  <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] text-balance">
                    Come and get<br /><span className="italic text-brand">Amazed.</span>
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="mt-8 max-w-md text-white/70 leading-relaxed">
                    We're constantly on the lookout for opportunities to expand the Amaze family. If you care about logistics, technology, and getting things right — we'd love to have you.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.3}>
                <div className="space-y-4">
                  <a href="mailto:riteshsr@asnmcare.com"
                    className="flex items-center gap-4 p-6 rounded-xl border border-white/15 bg-ink/50 hover:border-brand hover:bg-brand/10 transition group">
                    <div className="h-12 w-12 rounded-xl bg-brand grid place-items-center text-white"><Briefcase size={20} /></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">Email careers</div>
                      <div className="text-sm text-white/60">riteshsr@asnmcare.com</div>
                    </div>
                    <ArrowUpRight className="text-white/40 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/asnmcare/jobs/" target="_blank" rel="noreferrer"
                    className="flex items-center gap-4 p-6 rounded-xl border border-white/15 bg-ink/50 hover:border-brand hover:bg-brand/10 transition group">
                    <div className="h-12 w-12 rounded-xl bg-brand grid place-items-center text-white"><Linkedin size={20} /></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">See open roles</div>
                      <div className="text-sm text-white/60">on LinkedIn Jobs</div>
                    </div>
                    <ArrowUpRight className="text-white/40 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
