/**
 * Visuels du hero d'accueil. Trois images : la scène de base, la scène
 * alternative révélée par le curseur, et la vignette de la carte produit.
 * Pour remplacer un visuel, changer l'URL ici (et l'autoriser dans
 * next.config.ts si l'hôte change).
 */
const HIGGS = "https://images.higgs.ai/?default=1&output=webp&url=";
const CDN =
  "https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F";

export const homeHeroImages = {
  base: {
    src: `${HIGGS}${CDN}hf_20260831_115955_2a9adb39-5e9b-4ced-96e2-6900eabe3de9.png&w=1920&q=85`,
    alt: "Portrait cyberpunk généré par IA : un ronin aux lunettes teintées dans une lumière orangée",
  },
  reveal: {
    src: `${HIGGS}${CDN}hf_20260831_123709_183f0065-efb2-4bb2-a849-13aaa5af2f3f.png&w=1920&q=85`,
    alt: "Même scène IA en variante nocturne, révélée sous le curseur",
  },
  thumb: {
    src: `${HIGGS}${CDN}hf_20260831_121937_3f02b5a0-5b86-43d9-b30e-03c5e46632e7.png&w=1920&q=85`,
    alt: "Vignette du programme AI Studios : image cyberpunk générée par IA",
  },
} as const;
