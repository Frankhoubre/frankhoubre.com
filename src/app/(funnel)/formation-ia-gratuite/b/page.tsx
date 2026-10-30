import type { Metadata } from "next";
import { OptInLanding } from "@/components/funnel/OptInLanding";
import { FUNNEL_DAYS, FUNNEL_PATHS } from "@/lib/funnel/config";
import { formatMinutes, getVimeoThumbnail } from "@/lib/funnel/vimeo";
import { buildPageMetadata } from "@/lib/metadata";

/**
 * Version B du test A/B de la page d'inscription (src/lib/funnel/ab.ts).
 * Servie à la place de la version A par le proxy, sous l'URL de la page A :
 * non indexée, canonique vers la page A.
 */
export const metadata: Metadata = buildPageMetadata({
  title: "Formation vidéo IA gratuite : l’animé de 17 minutes réalisé seul avec l’IA",
  description:
    "Frank Houbre a réalisé seul un épisode d’animé de 17 minutes avec l’IA. Sa méthode en 3 vidéos gratuites, accès immédiat, sans carte bancaire.",
  path: FUNNEL_PATHS.optin,
  noIndex: true,
});

export default async function FormationOptInPageB() {
  const metas = await Promise.all(FUNNEL_DAYS.map((d) => getVimeoThumbnail(d.vimeoId)));
  const totalSeconds = metas.reduce((acc, m) => acc + (m?.duration ?? 0), 0);
  const totalLabel = formatMinutes(totalSeconds) ?? "24 min";
  return <OptInLanding variant="b" metas={metas} totalLabel={totalLabel} />;
}
