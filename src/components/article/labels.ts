export type ArticleLocale = "fr" | "en";

export const ARTICLE_LABELS = {
  fr: {
    by: "Par",
    updatedOn: "Mis à jour le",
    verdict: "Verdict",
    forWhom: "Pour qui",
    strengths: "Points forts",
    weaknesses: "Points faibles",
    affiliateLink: "Lien affilié",
    methodology: "Méthodologie de notre analyse",
    methodologyDate: "Analyse du",
    pricesCheckedOn: "Prix relevés le",
    source: "Source",
    colon: " :",
    swipeHint: "Faites glisser le tableau pour voir toutes les colonnes",
    capturedOn: "Capture du",
    enlarge: "Agrandir la capture",
    close: "Fermer",
    affiliateKicker: "Affiliation",
    affiliateText:
      "Certains liens de cet article sont affiliés : si vous vous abonnez, Frank touche une commission, sans surcoût pour vous. Cela ne change pas notre avis.",
    toc: "Sommaire",
    tocSections: "sections",
  },
  en: {
    by: "By",
    updatedOn: "Updated",
    verdict: "Verdict",
    forWhom: "Who it is for",
    strengths: "Strengths",
    weaknesses: "Weaknesses",
    affiliateLink: "Affiliate link",
    methodology: "How we ran this review",
    methodologyDate: "Reviewed on",
    pricesCheckedOn: "Prices checked on",
    source: "Source",
    colon: ":",
    swipeHint: "Swipe the table to see every column",
    capturedOn: "Captured on",
    enlarge: "Enlarge screenshot",
    close: "Close",
    affiliateKicker: "Affiliate links",
    affiliateText:
      "Some links in this article are affiliate links: if you subscribe, Frank earns a commission at no extra cost to you. It does not change our opinion.",
    toc: "Contents",
    tocSections: "sections",
  },
} as const;

export type ArticleLabels = (typeof ARTICLE_LABELS)[ArticleLocale];

/**
 * Accepte « 2026-10-16 » ou « 16/10/2026 » et renvoie la date au format de la
 * langue (16/10/2026 en FR, October 16, 2026 en EN). Une valeur illisible est
 * rendue telle quelle plutôt que transformée en date fausse.
 */
export function formatArticleDate(
  value: string | undefined,
  locale: ArticleLocale,
  style: "short" | "long" = "short",
): { iso: string | null; label: string } | null {
  if (!value?.trim()) return null;
  const v = value.trim();
  let y: number, m: number, d: number;
  const iso = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const fr = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (iso) [y, m, d] = [Number(iso[1]), Number(iso[2]), Number(iso[3])];
  else if (fr) [d, m, y] = [Number(fr[1]), Number(fr[2]), Number(fr[3])];
  else return { iso: null, label: v };
  const date = new Date(Date.UTC(y, m - 1, d, 12));
  if (Number.isNaN(date.getTime())) return { iso: null, label: v };
  const isoStr = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  const fmt =
    locale === "fr"
      ? new Intl.DateTimeFormat("fr-FR", style === "short"
          ? { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }
          : { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
      : new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  return { iso: isoStr, label: fmt.format(date) };
}

/** Hôte lisible d'une URL source (« runwayml.com »). */
export function sourceHost(url: string | undefined): string | null {
  if (!url) return null;
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return null;
  }
}
