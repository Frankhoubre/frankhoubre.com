"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FORMATION_PROMO_URL } from "@/lib/formation-promo";
import { siteName } from "@/lib/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary, localeFromPathname, withLocale } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Cta";

/**
 * En-tête fixe : transparent en haut de page, verre sombre dès qu'on
 * défile. Marque à gauche, navigation en capitales, bascule de langue et
 * un appel à l'action cadré à droite. Menu plein écran sur mobile.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);
  const navItems = dict.nav;
  const homeHref = withLocale("/", locale);
  const ctaLabel = locale === "en" ? "Free training" : "Formation gratuite";
  const tagline = locale === "en" ? "AI filmmaker" : "Réalisateur IA";
  const isHome = pathname === homeHref;
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Hors accueil, l'en-tête est toujours opaque : les pages intérieures
  // commencent sous lui et n'ont pas d'image plein cadre à laisser voir.
  const solid = !isHome || isScrolled || menuOpen;

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`site-header ${solid ? "is-solid" : ""}`}>
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href={homeHref} className="group flex shrink-0 items-baseline gap-3 whitespace-nowrap no-underline" aria-label={siteName}>
          <span className="display text-[13px] font-semibold tracking-[0.2em] text-cream">
            {siteName}
          </span>
          <span className="meta hidden text-[10px] text-fog transition-colors duration-200 group-hover:text-stone md:inline">
            {tagline}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label={locale === "en" ? "Main navigation" : "Navigation principale"}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <span className="ml-1 h-4 w-px bg-line-strong" aria-hidden />
          <LanguageSwitcher />
          <Link href={FORMATION_PROMO_URL} className="btn btn-sm">
            <span>{ctaLabel}</span>
            <Arrow />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={
            menuOpen
              ? locale === "en"
                ? "Close menu"
                : "Fermer le menu"
              : locale === "en"
                ? "Open menu"
                : "Ouvrir le menu"
          }
          className="meta flex h-11 items-center gap-3 text-cream lg:hidden"
        >
          <span>{menuOpen ? (locale === "en" ? "Close" : "Fermer") : "Menu"}</span>
          <span className="relative block h-3 w-5" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-[5.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menu mobile : plein écran, liste monumentale. */}
      <nav
        id="mobile-nav"
        aria-label={locale === "en" ? "Mobile navigation" : "Navigation mobile"}
        className={`fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 flex flex-col overflow-y-auto bg-charcoal transition-[opacity,visibility] duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="container-x flex-1 pt-6">
          {navItems.map((item, i) => (
            <li key={item.href} className="border-t border-line">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline justify-between py-5 no-underline"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span className="display text-[2rem] leading-none text-cream">{item.label}</span>
                <span className="meta tabular">0{i + 1}</span>
              </Link>
            </li>
          ))}
          <li className="border-t border-line py-5">
            <LanguageSwitcher onNavigate={() => setMenuOpen(false)} />
          </li>
        </ul>
        <div className="container-x border-t border-line py-5">
          <Link
            href={FORMATION_PROMO_URL}
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary w-full"
          >
            <span>{ctaLabel}</span>
            <Arrow />
          </Link>
        </div>
      </nav>
    </header>
  );
}
