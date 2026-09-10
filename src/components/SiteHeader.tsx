"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FORMATION_PROMO_URL } from "@/lib/formation-promo";
import { siteName } from "@/lib/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary, localeFromPathname, withLocale } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);
  const navItems = dict.nav;
  const homeHref = withLocale("/", locale);
  const ctaLabel = locale === "en" ? "Free training" : "Formation gratuite";
  const isHome = pathname === homeHref;
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // L'accueil est entièrement sombre : le header y reste crème sur brun,
  // transparent tant qu'on est en haut du hero. Les autres pages gardent un
  // header clair.
  const dark = isHome;
  const transparent = isHome && !isScrolled && !menuOpen;

  const headerClass = transparent
    ? "fixed inset-x-0 border-b border-transparent bg-transparent"
    : dark
      ? "sticky border-b border-[rgba(17,17,17,0.12)] bg-[rgba(255,255,255,0.82)] backdrop-blur-xl"
      : "sticky border-b border-[rgba(228,220,210,0.9)] bg-white/85 backdrop-blur-xl";

  const brandClass = dark ? "text-[var(--cream)]" : "text-neutral-950";

  const navClass = dark
    ? "bg-[rgba(255,255,255,0.8)] text-[#111111] ring-1 ring-[rgba(17,17,17,0.12)] backdrop-blur-md"
    : "bg-[rgba(247,241,233,0.9)] text-zinc-800";

  const desktopLinkClass = `rounded-full px-3 py-1.5 transition-colors duration-200 ${
    dark
      ? "hover:bg-white hover:text-[#111111]"
      : "hover:bg-white hover:text-zinc-950"
  }`;

  const ctaClass = dark
    ? "bg-[#111111] text-white hover:bg-[#2a2a2a]"
    : "bg-[#111111] text-white hover:bg-[#2a2a2a]";

  const burgerClass = dark
    ? "bg-[rgba(255,255,255,0.8)] text-[#111111] backdrop-blur-md hover:bg-white"
    : "bg-[rgba(247,241,233,0.9)] text-zinc-900 hover:bg-[#e4e4e8]";

  const panelClass = dark
    ? "border-[rgba(17,17,17,0.12)] bg-[rgba(255,255,255,0.96)]"
    : "border-[rgba(228,220,210,0.9)] bg-white/95";

  const panelLink = (active: boolean) =>
    dark
      ? active
        ? "bg-[rgba(17,17,17,0.12)] text-[var(--cream)]"
        : "text-[rgba(17,17,17,0.82)] hover:bg-[rgba(17,17,17,0.1)] hover:text-[var(--cream)]"
      : active
        ? "bg-[#ececef] text-zinc-950"
        : "text-zinc-800 hover:bg-[#ececef] hover:text-zinc-950";

  return (
    <header
      className={`top-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href={homeHref}
          className={`heading-font shrink-0 text-sm uppercase tracking-[0.08em] transition ${brandClass}`}
        >
          {siteName}
        </Link>

        {/* Navigation desktop */}
        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1 text-sm font-medium transition lg:flex ${navClass}`}
          aria-label={locale === "en" ? "Main navigation" : "Navigation principale"}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={desktopLinkClass}>
              {item.label}
            </Link>
          ))}
          <span className="mx-1">
            <LanguageSwitcher onDark={dark} />
          </span>
          <Link
            href={FORMATION_PROMO_URL}
            className={`ml-1 rounded-full px-3.5 py-1.5 font-semibold transition-colors duration-200 ${ctaClass}`}
          >
            {ctaLabel}
          </Link>
        </nav>

        {/* Bouton menu mobile */}
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
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition lg:hidden ${burgerClass}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden
          >
            {menuOpen ? (
              <>
                <path d="M5 5l10 10" />
                <path d="M15 5L5 15" />
              </>
            ) : (
              <>
                <path d="M3 6h14" />
                <path d="M3 10h14" />
                <path d="M3 14h14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Panneau mobile */}
      <nav
        id="mobile-nav"
        aria-label={locale === "en" ? "Mobile navigation" : "Navigation mobile"}
        className={`overflow-hidden backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out lg:hidden ${panelClass} ${
          menuOpen ? "max-h-[28rem] border-b opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto max-w-5xl space-y-1 px-4 py-4 sm:px-6">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${panelLink(active)}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="px-4 py-3">
            <LanguageSwitcher onDark={dark} onNavigate={() => setMenuOpen(false)} />
          </li>
          <li className="pt-2">
            <Link
              href={FORMATION_PROMO_URL}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-xl px-4 py-3 text-center text-base font-semibold transition-colors ${ctaClass}`}
            >
              {ctaLabel}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
