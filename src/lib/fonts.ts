import { Inter, Inter_Tight, JetBrains_Mono, Space_Mono } from "next/font/google";
import localFont from "next/font/local";

/**
 * Polices auto-hébergées par next/font (aucune requête vers Google côté
 * visiteur, pas de layout shift). Charte « régie de cinéma » (20 nov. 2026) :
 * - Regie Bodoni : titres. C'est Bodoni Moda (OFL) resserrée à 74 % en
 *   largeur, fabriquée par `scripts/build-regie-font.py`. Deux coupes :
 *   titrage (grands corps) et texte (déliés plus épais, intertitres).
 * - Space Mono : navigation, étiquettes, boutons, en capitales.
 * - JetBrains Mono : chiffres, dates, numéros de séquence.
 * - Inter : texte courant. Inter Tight : titres de fiches et questions.
 */
export const titleFont = localFont({
  variable: "--font-title",
  src: [
    { path: "../fonts/regie-bodoni-display.woff2", weight: "800", style: "normal" },
    { path: "../fonts/regie-bodoni-display-italic.woff2", weight: "800", style: "italic" },
  ],
  display: "swap",
  fallback: ["Bodoni Moda", "Didot", "Georgia", "serif"],
});

export const titleTextFont = localFont({
  variable: "--font-title-text",
  src: [
    { path: "../fonts/regie-bodoni-text.woff2", weight: "800", style: "normal" },
    { path: "../fonts/regie-bodoni-text-italic.woff2", weight: "800", style: "italic" },
  ],
  display: "swap",
  preload: false,
  fallback: ["Bodoni Moda", "Didot", "Georgia", "serif"],
});

export const displayFont = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const monoFont = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const codeFont = JetBrains_Mono({
  variable: "--font-tc",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  preload: false,
});

/** Classes à poser sur <html> pour exposer les variables de police. */
export const fontVariables = `${titleFont.variable} ${titleTextFont.variable} ${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} ${codeFont.variable}`;
