"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { localeFromPathname } from "@/lib/i18n";

/**
 * Aligne l'attribut <html lang> sur la locale de l'URL côté client. Le layout
 * racine reste statique (lang="fr" par défaut) ; sur /en, on corrige en "en"
 * sans forcer un rendu dynamique de tout le site.
 */
export function HtmlLangSync() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = localeFromPathname(pathname);
  }, [pathname]);
  return null;
}
