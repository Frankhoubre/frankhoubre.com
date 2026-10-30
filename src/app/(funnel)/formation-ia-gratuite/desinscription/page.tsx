import type { Metadata } from "next";
import Link from "next/link";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { Arrow } from "@/components/ui/Cta";
import { FUNNEL_PATHS, SUPPORT_EMAIL } from "@/lib/funnel/config";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Désinscription",
  description: "Confirmation de désinscription des emails de la formation vidéo IA.",
  path: FUNNEL_PATHS.unsubscribed,
  noIndex: true,
});

export default async function UnsubscribedPage({
  searchParams,
}: {
  searchParams: Promise<{ etat?: string }>;
}) {
  const { etat } = await searchParams;
  const ok = etat === "ok";

  return (
    <FunnelFrame theme="noir">
      <div className="container-narrow py-16 sm:py-24">
        <div className="carte-noir p-6 sm:p-8">
          <p className="meta meta-strong">emails de la formation</p>
          <h1 className="h-block mt-4 text-cream">
            {ok ? (
              <>
                c’est fait, <span className="or">plus aucun email.</span>
              </>
            ) : (
              <>
                ce lien de désinscription <span className="or">ne fonctionne pas.</span>
              </>
            )}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-fog">
            {ok
              ? "Les emails restants du challenge sont annulés. Les trois vidéos restent accessibles sur la page de formation si vous voulez y revenir."
              : `Ce lien est incomplet ou a été modifié. Ouvrez le lien depuis l'email d'origine, ou écrivez à ${SUPPORT_EMAIL} et je m'en occupe.`}
          </p>
          <p className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={FUNNEL_PATHS.course} className="btn">
              <span>Revoir la formation</span>
              <Arrow />
            </Link>
            <Link href="/" className="btn btn-quiet">
              <span>Retour au site</span>
            </Link>
          </p>
        </div>
      </div>
    </FunnelFrame>
  );
}
