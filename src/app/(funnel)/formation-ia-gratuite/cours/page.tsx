import type { Metadata } from "next";
import { Suspense } from "react";
import { CourseWelcome } from "@/components/funnel/CourseWelcome";
import { FunnelBeacon } from "@/components/funnel/FunnelBeacon";
import { FilmStrip } from "@/components/funnel/FilmStrip";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { TrackedLink } from "@/components/funnel/TrackedLink";
import { VideoFacade } from "@/components/VideoFacade";
import {
  FUNNEL_DAYS,
  FUNNEL_PATHS,
  SCREENWEAVER_URL,
  SKOOL_OFFER,
  SKOOL_URL,
} from "@/lib/funnel/config";
import { COURSE_STILLS } from "@/lib/funnel/stills";
import { formatMinutes, getVimeoThumbnail } from "@/lib/funnel/vimeo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Votre formation : le challenge film IA en 3 jours",
  description:
    "Jour 1 la vision, jour 2 le storyboard, jour 3 le montage de Lost Garden. Les trois vidéos de la formation gratuite de Frank Houbre.",
  path: FUNNEL_PATHS.course,
  // Page réservée aux inscrits : accessible par lien, pas par Google.
  noIndex: true,
});

const ctaSolid =
  "heading-font inline-flex min-h-12 cursor-pointer items-center justify-center rounded-xl bg-[#111111] px-5 py-3 text-xs uppercase tracking-[0.08em] text-white transition-[background-color,transform] duration-200 hover:bg-[#2a2a2a]";
const ctaGhost =
  "inline-flex min-h-12 cursor-pointer items-center justify-center rounded-xl border border-[rgba(17,17,17,0.4)] px-5 py-3 text-sm font-medium text-[var(--cream)] transition-[border-color,background-color] duration-200 hover:border-[var(--cream)] hover:bg-[rgba(17,17,17,0.08)]";

export default async function FormationCoursePage() {
  const thumbnails = await Promise.all(
    FUNNEL_DAYS.map((d) => getVimeoThumbnail(d.vimeoId)),
  );
  return (
    <FunnelFrame>
      <FunnelBeacon event="course_view" />

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, rgba(224,112,32,0.12), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-10 pt-10 text-center sm:px-6 sm:pt-16">
          <Suspense fallback={null}>
            <CourseWelcome />
          </Suspense>
          <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.62)]">
            Challenge gratuit · 3 jours · accessible aux débutants
          </p>
          <h1 className="cyber-title mx-auto mt-4 max-w-3xl text-[clamp(1.6rem,4.8vw,2.75rem)]">
            Arrêtez de générer au hasard.
            <br />
            <span className="text-[var(--orange)]">
              Commencez à réaliser de vrais films IA.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            En trois jours, vous allez apprendre à construire votre film avant
            de générer : une méthode pensée pour obtenir des personnages plus
            cohérents, des plans plus forts et réduire drastiquement les essais
            qui brûlent votre temps et vos crédits.
          </p>

          <nav aria-label="Les trois jours" className="mt-8">
            <ol className="mx-auto grid max-w-3xl gap-2 sm:grid-cols-3">
              {FUNNEL_DAYS.map((d, i) => (
                <li key={d.slug}>
                  <a
                    href={`#${d.slug}`}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[rgba(17,17,17,0.18)] px-4 py-2.5 text-sm text-[var(--cream)] transition-colors duration-200 hover:border-[var(--cream)] hover:bg-[rgba(17,17,17,0.06)]"
                  >
                    <span className="heading-font whitespace-nowrap text-xs text-[var(--orange)]">
                      Jour {d.n}
                    </span>
                    <span className="text-[var(--muted)]">·</span>
                    <span>{d.shortTitle}</span>
                    {formatMinutes(thumbnails[i]?.duration) ? (
                      <span className="whitespace-nowrap text-xs text-[var(--label)]">
                        {formatMinutes(thumbnails[i]?.duration)}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <p className="mt-6 text-xs text-[rgba(17,17,17,0.62)]">
            La méthode derrière des œuvres primées à Séoul, Hollywood et aux
            Mondial Chroma Awards.
          </p>
        </div>
      </section>

      {/* Les trois jours : vidéo et texte alternent d'un jour à l'autre. */}
      {FUNNEL_DAYS.map((d, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={d.slug}
            id={d.slug}
            className="cyber-divider scroll-mt-6"
            aria-labelledby={`${d.slug}-title`}
          >
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
              <div
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="min-w-0">
                  <VideoFacade
                    provider="vimeo"
                    videoId={d.vimeoId}
                    title={`${d.kicker} : ${d.title}`}
                    caption={d.kicker}
                    poster={thumbnails[i]?.url}
                    posterAlt={`Vignette de la vidéo ${d.kicker}`}
                  />
                </div>
                <div className="min-w-0">
                  <p className="heading-font text-xs uppercase tracking-[0.1em] text-[var(--orange)]">
                    {d.kicker}
                  </p>
                  <h2
                    id={`${d.slug}-title`}
                    className="cyber-title mt-3 text-xl sm:text-2xl"
                  >
                    {d.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-[var(--muted)]">{d.intro}</p>
                  <ul className="mt-5 space-y-2.5">
                    {d.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-[var(--cream)]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-[var(--orange)]" aria-hidden>
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-xl border border-[rgba(17,17,17,0.14)] bg-[rgba(17,17,17,0.05)] px-4 py-3 text-sm leading-relaxed text-[var(--cream)]">
                    <span className="text-[rgba(17,17,17,0.62)]">Mission du jour : </span>
                    {d.mission}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <TrackedLink
                      href={SCREENWEAVER_URL}
                      event="click_screenweaver"
                      detail={d.slug}
                      className={ctaSolid}
                    >
                      {d.screenweaverCta}
                    </TrackedLink>
                    <TrackedLink
                      href={SKOOL_URL}
                      event="click_skool"
                      detail={d.slug}
                      className={ctaGhost}
                    >
                      {d.skoolCta}
                    </TrackedLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* La suite : AI Studios sur Skool. */}
      <section
        id="ai-studios"
        className="cyber-divider scroll-mt-6"
        aria-labelledby="ai-studios-title"
      >
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.62)]">
              Vous avez maintenant la carte
            </p>
            <h2 id="ai-studios-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
              Mais imaginez maîtriser tout le voyage.
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              Vous savez désormais où commencer, comment structurer votre projet
              et pourquoi vos anciens workflows brûlaient votre budget. AI
              Studios vous aide maintenant à maîtriser la cohérence des
              personnages, la mise en scène, le mouvement, le montage, le son et
              la création d’un portfolio qui ne ressemble pas à une simple
              démonstration d’outil.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <FilmStrip
              stills={COURSE_STILLS}
              caption="Ce que donne la méthode complète : extraits de mes films et séries IA"
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="cyber-card p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.62)]">
                La communauté AI Studios
              </p>
              <h3 className="cyber-title mt-3 text-xl sm:text-2xl">
                Rejoignez AI Studios sur Skool
              </h3>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Vous débloquez le module Étape 1 de la formation, vous recevez
                en cadeau la Méthode Film Mental, et vous rejoignez une
                communauté privée de {SKOOL_OFFER.members} créateurs IA où l’on
                partage ses créations et ses prompts chaque jour.
              </p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="heading-font text-4xl text-[var(--cream)]">
                  {SKOOL_OFFER.priceLabel}
                </span>
                <span className="text-sm text-[var(--muted)]">{SKOOL_OFFER.period}</span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[rgba(17,17,17,0.62)]">
                Moins qu’un café par semaine
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                Sans engagement, annulable en un clic. Vous gardez l’accès tant
                que vous êtes membre.
              </p>
              <div className="mt-6">
                <TrackedLink
                  href={SKOOL_URL}
                  event="click_skool"
                  detail="offre"
                  className={`${ctaSolid} w-full sm:w-auto`}
                >
                  Rejoindre AI Studios à {SKOOL_OFFER.priceLabel} par mois
                </TrackedLink>
              </div>
            </div>

            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.62)]">
                Ce que vous obtenez
              </p>
              <ul className="mt-4 space-y-3">
                {SKOOL_OFFER.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-[var(--cream)]">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--orange)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-[rgba(17,17,17,0.62)]">
                Les modules suivants (Étapes 2 à 5, masterclass et bonus) font
                partie de l’accès annuel complet.
              </p>

              <p className="mt-8 text-[11px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.62)]">
                Ce qu’ils en disent · {SKOOL_OFFER.trustpilotScore} sur Trustpilot
              </p>
              <ul className="mt-4 space-y-4">
                {SKOOL_OFFER.reviews.map((r) => (
                  <li key={r.author} className="border-l-2 border-[rgba(17,17,17,0.25)] pl-4">
                    <p className="text-[15px] leading-relaxed text-[var(--cream)]">
                      « {r.text} »
                    </p>
                    <p className="mt-1.5 text-xs text-[rgba(17,17,17,0.62)]">{r.author}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-2xl">
            <h3 className="cyber-title text-lg sm:text-xl">Questions fréquentes</h3>
            <div className="mt-4 divide-y divide-[rgba(17,17,17,0.14)] border-y border-[rgba(17,17,17,0.14)]">
              {SKOOL_OFFER.faq.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-[15px] font-medium text-[var(--cream)] [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="shrink-0 text-[var(--orange)] transition-transform duration-200 group-open:rotate-45" aria-hidden>
                      <path d="M8 2v12M2 8h12" />
                    </svg>
                  </summary>
                  <p className="pb-4 text-[15px] leading-relaxed text-[var(--muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="cyber-title text-xl sm:text-2xl">
              Le challenge vous a donné la direction.
            </p>
            <p className="mt-3 leading-relaxed text-[var(--muted)]">
              La communauté vous donne l’exécution, l’entraide et la régularité,
              pour le prix d’un café.
            </p>
            <div className="mt-6">
              <TrackedLink
                href={SKOOL_URL}
                event="click_skool"
                detail="final"
                className={ctaSolid}
              >
                Rejoindre AI Studios à {SKOOL_OFFER.priceLabel} par mois
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </FunnelFrame>
  );
}
