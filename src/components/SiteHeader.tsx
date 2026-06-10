"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FORMATION_PROMO_URL } from "@/lib/formation-promo";
import { siteName } from "@/lib/site";

const NAV_ITEMS = [
  { label: "Blog", href: "/blog" },
  { label: "Outils", href: "/outils" },
  { label: "À propos", href: "/a-propos" },
  { label: "Prestation", href: "/prestation" },
  { label: "Contact", href: "/contact" },
  { label: "Liens", href: "/liens" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
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

  const homeAtTop = isHome && !isScrolled && !menuOpen;

  const desktopLinkClass = `rounded-full px-3 py-1.5 transition-colors duration-200 ${
    homeAtTop
      ? "hover:bg-white/15 hover:text-white"
      : "hover:bg-white hover:text-zinc-950"
  }`;

  return (
    <header
      className={`top-0 z-50 transition-all duration-300 ${
        homeAtTop
          ? "fixed inset-x-0 border-b border-transparent bg-transparent"
          : "sticky border-b border-zinc-200/90 bg-white/85 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className={`shrink-0 text-base font-semibold tracking-tight transition ${
            homeAtTop ? "text-white" : "text-neutral-950"
          }`}
        >
          {siteName}
        </Link>

        {/* Navigation desktop */}
        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1 text-sm font-medium transition lg:flex ${
            homeAtTop
              ? "bg-white/10 text-white/90 backdrop-blur-md"
              : "bg-zinc-100/80 text-zinc-800"
          }`}
          aria-label="Navigation principale"
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={desktopLinkClass}>
              {item.label}
            </Link>
          ))}
          <a
            href={FORMATION_PROMO_URL}
            target="_blank"
            rel="noreferrer"
            className={`ml-1 rounded-full px-3.5 py-1.5 font-semibold transition-colors duration-200 ${
              homeAtTop
                ? "bg-white text-zinc-950 hover:bg-white/90"
                : "bg-zinc-950 text-white hover:bg-zinc-800"
            }`}
          >
            Formation gratuite
          </a>
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition lg:hidden ${
            homeAtTop
              ? "bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
              : "bg-zinc-100/80 text-zinc-900 hover:bg-zinc-200"
          }`}
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
        aria-label="Navigation mobile"
        className={`overflow-hidden border-zinc-200/90 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          menuOpen
            ? "max-h-[28rem] border-b opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto max-w-5xl space-y-1 px-4 py-4 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`)
                    ? "bg-zinc-100 text-zinc-950"
                    : "text-zinc-800 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={FORMATION_PROMO_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl bg-zinc-950 px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Formation gratuite
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
