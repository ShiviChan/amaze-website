"use client";

import { motion } from "framer-motion";
import { MapPin, Truck, Building2, PackageCheck, Navigation } from "lucide-react";
import FadeIn from "./FadeIn";

// Pan-India coverage. Numbers are network-wide totals from the Clinship platform (no client-level data).
const coverage = [
  { v: "6,500+", l: "Pin codes delivered to" },
  { v: "1,600+", l: "Cities & towns" },
  { v: "30+", l: "States & UTs" },
];

const regions = [
  { region: "North India", cities: "Delhi NCR, Noida (HQ), Gurugram, Ghaziabad, Faridabad, Chandigarh, Ludhiana, Jaipur, Dehradun, Shimla", desc: "Our home turf — dense same-day and next-day networks across Delhi NCR, Punjab, Haryana, UP, Uttarakhand and the hill states." },
  { region: "West India", cities: "Mumbai, Pune, Ahmedabad, Surat, Vadodara, Nagpur, Goa", desc: "Metro and tier-2 coverage across Maharashtra, Gujarat and Goa for D2C, FMCG and marketplace brands." },
  { region: "South India", cities: "Bengaluru, Chennai, Hyderabad, Kochi, Coimbatore, Visakhapatnam", desc: "Line-haul from North hubs plus last-mile across Karnataka, Tamil Nadu, Telangana, Andhra Pradesh and Kerala." },
  { region: "East India", cities: "Kolkata, Bhubaneswar, Patna, Ranchi", desc: "Reliable lanes into West Bengal, Odisha, Bihar and Jharkhand with consolidated line-haul." },
  { region: "North-East", cities: "Guwahati, Shillong, Agartala, Gangtok, Itanagar, Aizawl", desc: "Hard-to-reach pin codes across Assam, Meghalaya, Tripura, Sikkim, Arunachal and Mizoram — delivered, not deferred." },
  { region: "Central India", cities: "Indore, Bhopal, Raipur, Lucknow, Kanpur", desc: "Growing tier-2 and tier-3 demand across Madhya Pradesh, Chhattisgarh and Uttar Pradesh." },
];

const services = [
  { icon: Truck, label: "Pan-India line-haul" },
  { icon: Building2, label: "Warehousing in Noida & NCR" },
  { icon: PackageCheck, label: "Last-mile in every metro" },
  { icon: Navigation, label: "Tier-2 & tier-3 reach" },
];

export default function LocalAreas() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden mesh-soft">
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <FadeIn className="lg:col-span-7">
            <div className="eyebrow mb-6"><MapPin size={12} /> Pan-India Coverage</div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink text-balance">
              Your <span className="text-gradient">logistics partner</span> across India.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="lg:col-span-5 lg:pt-14">
            <p className="text-slate-600 text-lg leading-relaxed">
              Headquartered in Noida, Delhi NCR — and shipping to every corner of the country. From metros to the North-East, Amaze moves D2C and enterprise parcels across India on one network, one dashboard and one SLA.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mb-10 grid grid-cols-3 gap-3 md:gap-5">
            {coverage.map((c) => (
              <div key={c.l} className="card p-5 md:p-7 text-center">
                <div className="font-display font-extrabold text-3xl md:text-5xl text-gradient">{c.v}</div>
                <div className="mt-1 text-xs md:text-sm text-slate-500">{c.l}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
          {regions.map((a, i) => (
            <FadeIn key={a.region} delay={(i % 3) * 0.08}>
              <motion.article whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full p-6 card hover:shadow-lift transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-xl text-ink group-hover:text-brand transition">{a.region}</h3>
                  <div className="h-8 w-8 rounded-full bg-brand-50 grid place-items-center"><MapPin size={15} className="text-brand" /></div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{a.desc}</p>
                <p className="mt-3 text-xs font-medium text-slate-500 leading-relaxed">{a.cities}</p>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-200/70 bg-white/80 shadow-soft">
                  <Icon size={16} className="text-brand shrink-0" />
                  <span className="text-sm font-medium text-slate-700 leading-tight">{s.label}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
