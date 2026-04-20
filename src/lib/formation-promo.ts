export const FORMATION_PROMO_URL =
  "https://www.ai-studios.fr/formation-ia-gratuite-video";

/** localStorage : date du dernier affichage (YYYY-MM-DD, fuseau local). */
export const FORMATION_PROMO_STORAGE_KEY = "fh-formation-promo-last-shown";

export function formationPromoTodayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
