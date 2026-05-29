"use client";

export default function Marquee({ items = [], className = "" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-6 py-3 text-white/60 whitespace-nowrap">
            {item}
            <span className="text-brand">•</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
