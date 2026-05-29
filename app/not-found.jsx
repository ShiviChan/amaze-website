import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";

export const metadata = {
  title: "404 — Page not found",
  description: "The page you're looking for doesn't exist on asnmcare.com",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center grid-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="container-x relative z-10 text-center pt-32">
        <div className="font-display text-[28vw] md:text-[18vw] leading-[0.9] tracking-tightest text-brand italic">404</div>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight text-balance leading-tight mt-4">
          That parcel got lost.
        </h1>
        <p className="mt-6 max-w-md mx-auto text-white/65 leading-relaxed">
          We can't find what you were looking for. The good news: every other parcel arrives on time.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary"><Home size={16} /> Back to home</Link>
          <Link href="/track" className="btn-ghost">Track a shipment <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
