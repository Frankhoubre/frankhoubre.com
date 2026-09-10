import type { Metadata } from "next";
import Link from "next/link";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
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
    <FunnelFrame>
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="cyber-card p-6 sm:p-8">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(251,219,175,0.62)]">
            Emails de la formation
          </p>
          <h1 className="cyber-title mt-3 text-2xl">
            {ok ? "Vous ne recevrez plus ces emails" : "Lien de désinscription invalide"}
          </h1>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            {ok
              ? "C'est fait, les emails restants du challenge sont annulés. Les trois vidéos restent accessibles sur la page de formation si vous voulez y revenir."
              : `Ce lien est incomplet ou a été modifié. Ouvrez le lien depuis l'email d'origine, ou écrivez à ${SUPPORT_EMAIL} et je m'en occupe.`}
          </p>
          <p className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={FUNNEL_PATHS.course}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[rgba(251,219,175,0.4)] px-5 py-3 text-sm font-medium text-[var(--cream)] transition-colors duration-200 hover:border-[var(--cream)]"
            >
              Revoir la formation
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center px-5 py-3 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--cream)]"
            >
              Retour au site
            </Link>
          </p>
        </div>
      </div>
    </FunnelFrame>
  );
}
