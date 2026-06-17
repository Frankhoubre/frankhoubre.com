"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, localizedHref, type Locale } from "@/lib/i18n";

const ITEMS: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

/**
 * Bascule de langue segmentée FR | EN (les deux visibles, l'actif surligné).
 * `onDark` adapte le style au header transparent (accueil en haut de page).
 */
export function LanguageSwitcher({
  onDark = false,
  onNavigate,
}: {
  onDark?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);

  const container = onDark
    ? "bg-white/10 ring-1 ring-white/15 backdrop-blur-md"
    : "bg-zinc-100/80 ring-1 ring-zinc-200";
  const activeSeg = onDark
    ? "bg-white text-zinc-950 shadow-sm"
    : "bg-zinc-950 text-white shadow-sm";
  const idleSeg = onDark
    ? "text-white/70 hover:text-white"
    : "text-zinc-600 hover:text-zinc-950";
  const globe = onDark ? "text-white/70" : "text-zinc-500";

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full p-0.5 pl-2 ${container}`}
      role="group"
      aria-label={current === "fr" ? "Choisir la langue" : "Choose language"}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={`${globe} shrink-0`}
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </svg>
      {ITEMS.map((item) => {
        const isActive = item.code === current;
        const cls = `rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
          isActive ? activeSeg : idleSeg
        }`;
        return isActive ? (
          <span key={item.code} className={cls} aria-current="true">
            {item.label}
          </span>
        ) : (
          <Link
            key={item.code}
            href={localizedHref(pathname, item.code)}
            onClick={onNavigate}
            className={cls}
            hrefLang={item.code}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
