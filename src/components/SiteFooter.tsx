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

  const linkClass =
    "transition-colors duration-200 text-[rgba(17,17,17,0.72)] hover:text-[var(--cream)]";
  const headingClass = "cyber-label";

  return (
    <footer className="cyber-page relative z-10 mt-auto border-t border-[rgba(17,17,17,0.12)] py-12 text-sm">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="heading-font text-sm uppercase tracking-[0.08em] text-[var(--cream)]">
              {siteName}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              {dict.footer.tagline}
            </p>
            <p className="mt-4 text-xs text-[var(--label)]">
              © {year} · {dict.footer.rights}
            </p>
          </div>

          <nav aria-label={dict.footer.nav}>
            <p className={headingClass}>{dict.footer.nav}</p>
            <ul className="mt-3 space-y-2">
              {dict.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              {locale === "fr" ? (
                <>
                  <li>
                    <Link href="/presse" className={linkClass}>
                      Kit presse
                    </Link>
                  </li>
                  <li>
                    <Link href="/feed.xml" className={linkClass}>
                      Flux RSS
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className={headingClass}>{locale === "fr" ? "Légal" : "Legal"}</p>
            <ul className="mt-3 space-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.social}>
            <p className={headingClass}>{dict.footer.social}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 sm:flex-col sm:gap-y-2">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={linkClass}
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
