"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, localizedHref, type Locale } from "@/lib/i18n";

const ITEMS: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

/**
 * Bascule de langue FR / EN : deux libellés en capitales séparés d'une
 * barre, l'actif en blanc chaud, l'autre en brume.
 */
export function LanguageSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);

  return (
    <div
      className="meta inline-flex items-center gap-2"
      role="group"
      aria-label={current === "fr" ? "Choisir la langue" : "Choose language"}
    >
      {ITEMS.map((item, i) => {
        const isActive = item.code === current;
        return (
          <span key={item.code} className="inline-flex items-center gap-2">
            {i > 0 ? <span className="text-fog/40" aria-hidden>/</span> : null}
            {isActive ? (
              <span className="text-cream" aria-current="true">
                {item.label}
              </span>
            ) : (
              <Link
                href={localizedHref(pathname, item.code)}
                onClick={onNavigate}
                className="line-link text-fog hover:text-cream"
                hrefLang={item.code}
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
