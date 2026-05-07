"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FORMATION_PROMO_URL } from "@/lib/formation-promo";
import { siteName } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const homeAtTop = isHome && !isScrolled;

  return (
    <header
      className={`top-0 z-50 transition-all duration-300 ${
        homeAtTop
          ? "fixed inset-x-0 border-b border-transparent bg-transparent"
          : "sticky border-b border-zinc-200/90 bg-white/80 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className={`text-base font-semibold tracking-tight transition ${
            homeAtTop ? "text-white" : "text-neutral-950"
          }`}
        >
          {siteName}
        </Link>
        <nav
          className={`flex items-center gap-3 rounded-full px-2 py-1 text-sm font-medium transition ${
            homeAtTop
              ? "bg-white/10 text-white/90 backdrop-blur-md"
              : "bg-zinc-100/80 text-zinc-800"
          }`}
          aria-label="Navigation principale"
        >
          <Link
            href="/blog"
            className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
              homeAtTop
                ? "hover:bg-white/15 hover:text-white"
                : "hover:bg-white hover:text-zinc-950"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/outils"
            className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
              homeAtTop
                ? "hover:bg-white/15 hover:text-white"
                : "hover:bg-white hover:text-zinc-950"
            }`}
          >
            Outils
          </Link>
          <a
            href={FORMATION_PROMO_URL}
            target="_blank"
            rel="noreferrer"
            className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
              homeAtTop
                ? "hover:bg-white/15 hover:text-white"
                : "hover:bg-white hover:text-zinc-950"
            }`}
          >
            Formation gratuite
          </a>
          <Link
            href="/a-propos"
            className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
              homeAtTop
                ? "hover:bg-white/15 hover:text-white"
                : "hover:bg-white hover:text-zinc-950"
            }`}
          >
            À propos
          </Link>
          <Link
            href="/prestation"
            className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
              homeAtTop
                ? "hover:bg-white/15 hover:text-white"
                : "hover:bg-white hover:text-zinc-950"
            }`}
          >
            Prestation
          </Link>
          <Link
            href="/contact"
            className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
              homeAtTop
                ? "hover:bg-white/15 hover:text-white"
                : "hover:bg-white hover:text-zinc-950"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/liens"
            className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
              homeAtTop
                ? "hover:bg-white/15 hover:text-white"
                : "hover:bg-white hover:text-zinc-950"
            }`}
          >
            Liens
          </Link>
        </nav>
      </div>
    </header>
  );
}
