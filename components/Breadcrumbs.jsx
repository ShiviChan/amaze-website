import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export default function Breadcrumbs({ items = [] }) {
  const fullPath = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullPath.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: `${SITE_URL}${it.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="container-x pt-28 text-sm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex items-center gap-2 text-white/50 flex-wrap">
        {fullPath.map((it, i) => {
          const isLast = i === fullPath.length - 1;
          return (
            <li key={it.href} className="flex items-center gap-2">
              {i > 0 && <ChevronRight size={14} className="text-white/30" />}
              {isLast ? (
                <span className="text-brand">{it.label}</span>
              ) : (
                <Link href={it.href} className="hover:text-white transition inline-flex items-center gap-1.5">
                  {i === 0 && <Home size={12} />}
                  {it.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
