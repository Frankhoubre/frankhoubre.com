import { Inter, Orbitron } from "next/font/google";

/**
 * Polices auto-hébergées par next/font (zéro requête vers Google côté
 * visiteur, pas de layout shift). Orbitron porte les titres, Inter le texte.
 */
export const headingFont = Orbitron({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
