/**
 * i18n léger et additif : le FR reste à la racine (inchangé), l'EN vit sous
 * /en. La langue se déduit du chemin (pas de rendu dynamique imposé), ce qui
 * garde le rendu statique du site intact.
 */
export type Locale = "fr" | "en";

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

/** Déduit la locale d'un pathname ("/en/..." => en, sinon fr). */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

/** Retire le préfixe /en d'un pathname pour obtenir le chemin "logique". */
export function stripLocale(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

/** Préfixe un chemin avec la locale (fr = racine, en = /en). */
export function withLocale(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "fr") return clean;
  return clean === "/" ? "/en" : `/en${clean}`;
}

type NavItem = { label: string; href: string };

type Dictionary = {
  nav: NavItem[];
  switchTo: { label: string; href: string }; // bascule vers l'autre langue
  footer: {
    tagline: string;
    nav: string;
    social: string;
    legalNotice: string;
    privacy: string;
    rights: string;
  };
  langSwitcher: { fr: string; en: string };
};

/**
 * Routes EN livrées en v1 (Home, About, Blog). Les autres (outils, prestation,
 * liens, mentions) restent FR-only pour l'instant et arriveront en phase 2.
 */
export const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    nav: [
      { label: "Blog", href: "/blog" },
      { label: "Outils", href: "/outils" },
      { label: "À propos", href: "/a-propos" },
      { label: "Prestation", href: "/prestation" },
      { label: "Contact", href: "/contact" },
      { label: "Liens", href: "/liens" },
    ],
    switchTo: { label: "EN", href: "/en" },
    footer: {
      tagline:
        "Tutoriels, workflows et analyses pour créer des images, vidéos et films IA avec une exigence cinématographique.",
      nav: "Navigation",
      social: "Réseaux",
      legalNotice: "Mentions légales",
      privacy: "Politique de confidentialité",
      rights: "Tous droits réservés.",
    },
    langSwitcher: { fr: "Français", en: "English" },
  },
  en: {
    nav: [
      { label: "Blog", href: "/en/blog" },
      { label: "About", href: "/en/about" },
    ],
    switchTo: { label: "FR", href: "/" },
    footer: {
      tagline:
        "Tutorials, workflows and analysis to create AI images, videos and films with a cinematic standard.",
      nav: "Navigation",
      social: "Social",
      legalNotice: "Legal notice",
      privacy: "Privacy policy",
      rights: "All rights reserved.",
    },
    langSwitcher: { fr: "Français", en: "English" },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
