/**
 * Tunnel payant « Viral AI videos » (en anglais uniquement) : la méthode et
 * le prompt exacts des reels IA de Frank (compte Instagram frank.houbre.ia),
 * vendus 7 $ via Stripe Checkout. Tout ce qui est partagé entre pages, API,
 * email et tableau de bord vit ici.
 */

export const BUZZ_PATHS = {
  sales: "/en/viral-ai-videos",
  access: "/en/viral-ai-videos/access",
  admin: "/admin/buzz",
} as const;

/** Prix unique, en cents. Stripe facture en dollars américains. */
export const BUZZ_PRICE = {
  amount: 700,
  currency: "usd",
  label: "$7",
} as const;

export const BUZZ_PRODUCT_NAME = "Viral AI videos: the exact method and the prompt";
export const BUZZ_PRODUCT_DESCRIPTION =
  "Permanent access to the method, the prompt and the settings of the hammock video.";

export const INSTAGRAM_HANDLE = "frank.houbre.ia";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

/** Lien Imaginode (lien de campagne possible via l'env). */
export const IMAGINODE_URL =
  process.env.NEXT_PUBLIC_IMAGINODE_URL ?? "https://imaginode.ai/";

/** Cookie posé après un achat vérifié : rouvre la page d'accès sans lien. */
export const BUZZ_ACCESS_COOKIE = "fh_buzz_access";

/** Événements du tunnel payant (ordre = ordre d'affichage dans l'admin). */
export const BUZZ_EVENTS = [
  "buzz_view",
  "buzz_checkout",
  "buzz_purchase",
  "buzz_access_view",
  "buzz_email_sent",
  "buzz_link_resent",
  "click_imaginode",
  "click_instagram",
] as const;

export type BuzzEvent = (typeof BUZZ_EVENTS)[number];

export const BUZZ_EVENT_LABELS: Record<BuzzEvent, string> = {
  buzz_view: "Vues page de vente",
  buzz_checkout: "Paiements démarrés (Stripe)",
  buzz_purchase: "Achats confirmés",
  buzz_access_view: "Vues page méthode",
  buzz_email_sent: "Emails d'accès envoyés",
  buzz_link_resent: "Liens renvoyés",
  click_imaginode: "Clics Imaginode",
  click_instagram: "Clics Instagram",
};

/** Événements dont on compte aussi les visiteurs uniques (par jour). */
export const BUZZ_UNIQUE_EVENTS: BuzzEvent[] = ["buzz_view", "buzz_access_view"];

/** Événements acceptés depuis le navigateur (le reste vient du serveur). */
export const BUZZ_CLIENT_EVENTS: BuzzEvent[] = [
  "buzz_view",
  "buzz_access_view",
  "click_imaginode",
  "click_instagram",
];
