/**
 * Test A/B de la page d'inscription. Le proxy tire la version au sort à la
 * première visite (cookie de 30 jours, moitié-moitié) et sert la version B
 * par réécriture vers FUNNEL_PATHS.optinB, sans changer l'URL. Les robots
 * voient toujours la version A. Le navigateur renvoie la version avec chaque
 * événement du funnel, l'inscription la lit dans le cookie.
 *
 * Pour lancer un nouveau test : changer `id` et `cookie` (les compteurs et
 * les tirages repartent de zéro), réécrire la version B. Pour l'arrêter :
 * `active: false`, tout le monde voit A.
 */

export const AB_VARIANTS = ["a", "b"] as const;
export type AbVariant = (typeof AB_VARIANTS)[number];

export const OPTIN_AB = {
  active: true,
  /** optin-2 : même duel A/B, relancé sur la charte noir et or (30 oct. 2026). */
  id: "optin-2",
  cookie: "fh_ab_optin2",
  startedAt: "2026-10-30",
  /** Paramètre d'URL qui force une version (aperçu) : ?version=b */
  forceParam: "version",
  maxAgeSeconds: 60 * 60 * 24 * 30,
  variants: {
    a: {
      name: "A · le bénéfice",
      summary: "« Réalisez un film IA cohérent en 3 jours, sans jeter vos crédits par les fenêtres. »",
    },
    b: {
      name: "B · l’histoire",
      summary: "« J’ai réalisé seul un animé de 17 minutes avec l’IA. Je vous montre comment, en 3 vidéos. »",
    },
  },
} as const;

export function parseVariant(value: string | null | undefined): AbVariant | undefined {
  return value === "a" || value === "b" ? value : undefined;
}

export function drawVariant(): AbVariant {
  return Math.random() < 0.5 ? "a" : "b";
}

/** Version lue dans le cookie du navigateur (côté client). */
export function readVariantCookie(): AbVariant | undefined {
  if (typeof document === "undefined" || !OPTIN_AB.active) return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${OPTIN_AB.cookie}=([ab])`));
  return parseVariant(match?.[1]);
}

/** Fonction de répartition de la loi normale (approximation d'Abramowitz et Stegun). */
function normalCdf(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  const p =
    d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}

export type AbVerdict = {
  rateA: number;
  rateB: number;
  /** Écart relatif de B par rapport à A (0,1 = +10 %). */
  lift: number | null;
  /** Probabilité que B convertisse mieux que A (approximation normale). */
  probBBeatsA: number | null;
  /** Visiteurs encore nécessaires par version pour voir un écart de 20 % relatif. */
  neededPerVariant: number | null;
};

/**
 * Compare deux taux de conversion (inscrits / visiteurs uniques). On ne
 * conclut qu'au-delà de 95 % (ou en dessous de 5 %) avec au moins
 * 100 visiteurs par version.
 */
export function compareRates(
  a: { visitors: number; conversions: number },
  b: { visitors: number; conversions: number },
): AbVerdict {
  const rateA = a.visitors ? a.conversions / a.visitors : 0;
  const rateB = b.visitors ? b.conversions / b.visitors : 0;
  const lift = rateA > 0 ? rateB / rateA - 1 : null;
  let probBBeatsA: number | null = null;
  if (a.visitors > 0 && b.visitors > 0) {
    const se = Math.sqrt(
      (rateA * (1 - rateA)) / a.visitors + (rateB * (1 - rateB)) / b.visitors,
    );
    probBBeatsA = se > 0 ? normalCdf((rateB - rateA) / se) : null;
  }
  // Taille d'échantillon pour détecter +20 % relatif (alpha 5 %, puissance 80 %).
  let neededPerVariant: number | null = null;
  const base = rateA || rateB;
  if (base > 0 && base < 1) {
    const p2 = Math.min(base * 1.2, 0.99);
    const pBar = (base + p2) / 2;
    const n =
      (1.96 * Math.sqrt(2 * pBar * (1 - pBar)) +
        0.8416 * Math.sqrt(base * (1 - base) + p2 * (1 - p2))) ** 2 /
      (p2 - base) ** 2;
    neededPerVariant = Math.ceil(n);
  }
  return { rateA, rateB, lift, probBBeatsA, neededPerVariant };
}
