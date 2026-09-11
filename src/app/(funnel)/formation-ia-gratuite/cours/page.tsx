import type { Metadata } from "next";
import { Suspense } from "react";
import { RevealObserver } from "@/components/cyber/RevealObserver";
import { CineHero } from "@/components/funnel/CineHero";
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

      <RevealObserver />
      <CineHero
        size="compact"
        base={{
          src: "/images/formation/hero.webp",
          alt: "Photogramme : une silhouette en manteau au bord d’une terrasse de béton monumentale au-dessus de la ville, à l’aube",
        }}
      >
        <div className="mx-auto w-full max-w-5xl px-4 pb-12 pt-10 text-center sm:px-6 sm:pt-16">
          <Suspense fallback={null}>
            <CourseWelcome />
          </Suspense>
          <p className="cine-timecode fade-up-reveal">
            Challenge gratuit · 3 jours · accessible aux débutants
          </p>
          <h1 className="cyber-title fade-up-reveal mx-auto mt-4 max-w-3xl text-[clamp(1.6rem,4.8vw,2.75rem)] text-white" data-delay="0.1">
            Vous avez la méthode. Voici vos trois vidéos.
            <br />
            <span className="text-[var(--orange)]">
              La première commence maintenant.
            </span>
          </h1>
          <p className="cine-text-muted fade-up-reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" data-delay="0.2">
            Regardez la vidéo du jour, faites sa mission, passez à la suivante.
            En trois jours, vous construisez votre film avant de générer : des
            personnages qui restent les mêmes, des plans plus forts, et bien
            moins d’essais qui brûlent votre temps et vos crédits.
          </p>

          <nav aria-label="Les trois jours" className="fade-up-reveal mt-8" data-delay="0.3">
            <ol className="mx-auto grid max-w-3xl gap-2 sm:grid-cols-3">
              {FUNNEL_DAYS.map((d, i) => (
                <li key={d.slug}>
                  <a
                    href={`#${d.slug}`}
                    className="cine-card flex min-h-12 items-center justify-center gap-2 !rounded-xl px-4 py-2.5 text-sm text-white transition-colors duration-200 hover:border-white/40"
                  >
                    <span className="cine-timecode whitespace-nowrap !text-[var(--orange)]">
                      Jour {d.n}
                    </span>
                    <span>{d.shortTitle}</span>
                    {formatMinutes(thumbnails[i]?.duration) ? (
                      <span className="cine-timecode whitespace-nowrap">
                        {formatMinutes(thumbnails[i]?.duration)}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <p className="cine-text-label fade-up-reveal mt-6 text-xs" data-delay="0.4">
            La méthode derrière des œuvres primées à Séoul, Hollywood et aux
            Mondial Chroma Awards.
          </p>
        </div>
      </CineHero>

      {/* Les trois jours : vidéo et texte alternent d'un jour à l'autre. */}
      {FUNNEL_DAYS.map((d, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={d.slug}
            id={d.slug}
            className="cyber-divider relative scroll-mt-6 overflow-hidden"
            aria-labelledby={`${d.slug}-title`}
          >
            <div
              className={`cine-leak ${i % 2 === 1 ? "cine-leak-blue" : "cine-leak-orange"}`}
              style={{ width: 460, height: 460, [i % 2 === 1 ? "left" : "right"]: "-12%", top: "-10%" }}
              aria-hidden
            />
            <div className="fade-up-reveal relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
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
                  <p className="heading-font text-xs uppercase tracking-[0.1em] text-[var(--orange-text)]">
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
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-[var(--orange-text)]" aria-hidden>
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
              La suite
            </p>
            <h2 id="ai-studios-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
              Comment passer de six plans à des films complets, sans repartir de zéro
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              Vous savez maintenant par où commencer et pourquoi vos anciens
              essais brûlaient votre budget. Ce qui reste à apprendre, c’est la
              cohérence des personnages sur un film entier, la mise en scène, le
              mouvement, le montage, le son. C’est ce qu’on travaille dans AI
              Studios, avec des retours sur vos propres plans.
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
                Ce que vous débloquez aujourd’hui
              </h3>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Le module Étape 1 de la formation, la Méthode Film Mental en
                cadeau, et une communauté privée de {SKOOL_OFFER.members}{" "}
                créateurs IA qui partagent leurs plans et leurs prompts chaque
                jour. Vous postez votre storyboard du challenge, vous avez des
                retours.
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
                Sans engagement, annulable en un clic à tout moment. Vous gardez
                l’accès tant que vous êtes membre, vous partez quand vous voulez.
              </p>
              <div className="mt-6">
                <TrackedLink
                  href={SKOOL_URL}
                  event="click_skool"
                  detail="offre"
                  className={`${ctaSolid} w-full sm:w-auto`}
                >
                  Débloquer l’Étape 1 pour {SKOOL_OFFER.priceLabel} par mois
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
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="shrink-0 text-[var(--orange-text)] transition-transform duration-200 group-open:rotate-45" aria-hidden>
                      <path d="M8 2v12M2 8h12" />
                    </svg>
                  </summary>
                  <p className="pb-4 text-[15px] leading-relaxed text-[var(--muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="cine-band cine-grain cine-vignette cine-letterbox" aria-labelledby="final-title">
        <div className="cine-glow cine-glow-orange cine-drift" style={{ width: 620, height: 620, right: "-10%", top: "-30%" }} aria-hidden />
        <div className="relative z-[5] mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:py-24">
          <p className="cine-timecode fade-up-reveal">Dernière séquence</p>
          <p id="final-title" className="cyber-title fade-up-reveal mt-3 text-xl text-white sm:text-2xl" data-delay="0.1">
            Le challenge vous a donné la direction.
          </p>
          <p className="cine-text-muted fade-up-reveal mt-3 leading-relaxed" data-delay="0.2">
            AI Studios vous donne l’exécution, les retours sur vos plans et la
            régularité, pour {SKOOL_OFFER.priceLabel} par mois, sans engagement.
          </p>
          <div className="fade-up-reveal mt-6" data-delay="0.3">
            <TrackedLink
              href={SKOOL_URL}
              event="click_skool"
              detail="final"
              className="cine-cta"
            >
              Rejoindre AI Studios pour {SKOOL_OFFER.priceLabel} par mois
            </TrackedLink>
          </div>
        </div>
      </section>
    </FunnelFrame>
  );
}
