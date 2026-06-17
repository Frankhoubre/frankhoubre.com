"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteName, socialLinks } from "@/lib/site";
import { getDictionary, localeFromPathname } from "@/lib/i18n";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  // Le légal n'existe pour l'instant qu'en FR : on y pointe depuis les deux langues.
  const legal = [
    { label: dict.footer.legalNotice, href: "/mentions-legales" },
    { label: dict.footer.privacy, href: "/politique-confidentialite" },
  ];

  return (
    <footer className="relative z-10 mt-auto border-t border-zinc-200/90 bg-white/75 py-10 text-sm text-zinc-800 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-semibold text-zinc-950">{siteName}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-600">
              {dict.footer.tagline}
            </p>
            <p className="mt-4 font-medium text-zinc-900">
              © {year} · {dict.footer.rights}
            </p>
          </div>

          <nav aria-label={dict.footer.nav}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              {dict.footer.nav}
            </p>
            <ul className="mt-3 space-y-2">
              {dict.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-zinc-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {locale === "fr" ? (
                <li>
                  <Link
                    href="/feed.xml"
                    className="transition-colors duration-200 hover:text-zinc-950"
                  >
                    Flux RSS
                  </Link>
                </li>
              ) : null}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              {locale === "fr" ? "Légal" : "Legal"}
            </p>
            <ul className="mt-3 space-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-zinc-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.social}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              {dict.footer.social}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 sm:flex-col sm:gap-y-2">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-zinc-950"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
