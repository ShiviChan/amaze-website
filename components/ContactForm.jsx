"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Mail } from "lucide-react";

const TO = "riteshsr@asnmcare.com";

function buildBody(d) {
  return [
    `Hi Amaze team,`, ``, `I'd like to get in touch.`, ``,
    `Name:    ${d.name}`,
    `Email:   ${d.email}`,
    `Phone:   ${d.phone || "—"}`,
    `Company: ${d.company || "—"}`,
    `Interest: ${d.serviceType || "—"}`, ``,
    `Message:`, d.message, ``,
    `Sent from asnmcare.com`,
  ].join("\n");
}

function buildGmailUrl(d) {
  const subject = `Amaze enquiry — ${d.name} (${d.serviceType || "general"})`;
  const qs = new URLSearchParams({ view: "cm", fs: "1", to: TO, su: subject, body: buildBody(d) });
  return `https://mail.google.com/mail/?${qs.toString()}`;
}

function buildMailtoUrl(d) {
  const subject = `Amaze enquiry — ${d.name} (${d.serviceType || "general"})`;
  return `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBody(d))}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [gmailUrl, setGmailUrl] = useState("");
  const [mailtoUrl, setMailtoUrl] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "",
    serviceType: "AI / SaaS Platform (Clinship)", message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const g = buildGmailUrl(form);
    const m = buildMailtoUrl(form);
    setGmailUrl(g);
    setMailtoUrl(m);
    window.open(g, "_blank", "noopener,noreferrer");
    setStatus("done");
  };

  const inputCls = "w-full bg-transparent border-b border-white/15 py-4 text-white placeholder:text-white/40 focus:border-brand focus:outline-none transition";

  return (
    <AnimatePresence mode="wait">
      {status === "done" ? (
        <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="p-12 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 text-center">
          <CheckCircle2 className="mx-auto text-emerald-400 mb-6" size={48} />
          <h3 className="font-display text-4xl mb-3">Gmail opened.</h3>
          <p className="text-white/65 max-w-md mx-auto">
            Your enquiry is pre-filled in a new Gmail tab. Just hit <strong className="text-white">Send</strong> there to deliver it to <strong className="text-white">{TO}</strong>.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><Mail size={16} /> Reopen Gmail</a>
            <a href={mailtoUrl} className="btn-ghost">Use default mail app instead</a>
          </div>
          <button onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", company: "", phone: "", serviceType: "AI / SaaS Platform (Clinship)", message: "" });
          }} className="block mx-auto mt-6 text-sm text-white/50 hover:text-brand transition">Send another</button>
        </motion.div>
      ) : (
        <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} className="space-y-7">
          <div className="grid md:grid-cols-2 gap-7">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/40">Full name</label>
              <input name="name" required value={form.name} onChange={onChange} placeholder="Priya Sharma" className={inputCls} />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/40">Email</label>
              <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="priya@company.com" className={inputCls} />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/40">Company</label>
              <input name="company" value={form.company} onChange={onChange} placeholder="Your company" className={inputCls} />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/40">Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} placeholder="+91 ..." className={inputCls} />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-white/40">I'm interested in</label>
            <select name="serviceType" value={form.serviceType} onChange={onChange} className={`${inputCls} appearance-none cursor-pointer`}>
              {["AI / SaaS Platform (Clinship)", "Label Printing", "Multi-Courier Aggregator", "RTO Reduction", "Last-Mile Delivery", "Warehousing & Fulfilment", "Cross-Border", "Cx Automation Bots", "Other"].map((o) => (
                <option key={o} value={o} className="bg-ink">{o}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-white/40">Tell us about your shipment / use case</label>
            <textarea name="message" required rows={4} value={form.message} onChange={onChange}
              placeholder="Lane, volume, frequency, integrations needed..." className={`${inputCls} resize-none`} />
          </div>

          <button type="submit" className="btn-primary">Compose in Gmail <Send size={16} /></button>
          <p className="text-xs text-white/40">
            Opens a pre-filled draft to <a href={`mailto:${TO}`} className="text-white/60 hover:text-brand transition">{TO}</a> in a new tab. Hit Send there to deliver.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
