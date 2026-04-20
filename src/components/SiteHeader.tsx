"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
          : "sticky border-b border-neutral-200/90 bg-white/85 backdrop-blur-md"
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
          className={`flex items-center gap-5 text-sm font-medium transition ${
            homeAtTop ? "text-white/90" : "text-neutral-800"
          }`}
          aria-label="Navigation principale"
        >
          <Link
            href="/blog"
            className={`transition ${homeAtTop ? "hover:text-white" : "hover:text-neutral-950"}`}
          >
            Blog
          </Link>
          <Link
            href="/outils"
            className={`transition ${homeAtTop ? "hover:text-white" : "hover:text-neutral-950"}`}
          >
            Outils
          </Link>
          <Link
            href="/a-propos"
            className={`transition ${homeAtTop ? "hover:text-white" : "hover:text-neutral-950"}`}
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className={`transition ${homeAtTop ? "hover:text-white" : "hover:text-neutral-950"}`}
          >
            Contact
          </Link>
          <Link
            href="/liens"
            className={`transition ${homeAtTop ? "hover:text-white" : "hover:text-neutral-950"}`}
          >
            Liens
          </Link>
        </nav>
      </div>
    </header>
  );
}
