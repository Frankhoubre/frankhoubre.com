import { Instrument_Serif, Inter, Inter_Tight } from "next/font/google";

/**
 * Polices auto-hébergées par next/font (aucune requête vers Google côté
 * visiteur, pas de layout shift).
 * - Inter Tight : titres monumentaux, navigation, métadonnées (grotesque
 *   serrée, esprit Helvetica / éditorial suisse).
 * - Inter : texte courant.
 * - Instrument Serif : citations et chapôs, en italique uniquement.
 */
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

export const serifFont = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

/** Classes à poser sur <html> pour exposer les trois variables de police. */
export const fontVariables = `${displayFont.variable} ${bodyFont.variable} ${serifFont.variable}`;
