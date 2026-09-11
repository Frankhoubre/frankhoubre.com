import type { Metadata } from "next";
import { Suspense } from "react";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { CineHero } from "@/components/funnel/CineHero";
import { CourseWelcome } from "@/components/funnel/CourseWelcome";
import { FunnelBeacon } from "@/components/funnel/FunnelBeacon";
import { FilmStrip } from "@/components/funnel/FilmStrip";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { TrackedLink } from "@/components/funnel/TrackedLink";
import { VideoFacade } from "@/components/VideoFacade";
import { Plus } from "@/components/FaqSection";
import { Arrow } from "@/components/ui/Cta";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
        <div className="container-x flex flex-1 flex-col justify-end pb-12 pt-12 sm:pt-16">
          <Suspense fallback={null}>
            <CourseWelcome />
          </Suspense>
          <p className="meta meta-strong reveal">00 / Challenge gratuit · 3 jours · accessible aux débutants</p>
          <h1 className="reveal mt-6 max-w-4xl text-[clamp(2rem,4.8vw,4.25rem)] leading-[0.98] tracking-[-0.03em] text-cream" data-delay="0.1">
            Vous avez la méthode. Voici vos trois vidéos.{" "}
            <span className="text-fog">La première commence maintenant.</span>
          </h1>
          <p className="lede reveal mt-8 max-w-2xl" data-delay="0.2">
            Regardez la vidéo du jour, faites sa mission, passez à la suivante.
            En trois jours, vous construisez votre film avant de générer : des
            personnages qui restent les mêmes, des plans plus forts, et bien
            moins d’essais qui brûlent votre temps et vos crédits.
          </p>

          <nav aria-label="Les trois jours" className="reveal mt-10 border-t border-line" data-delay="0.3">
            <ol className="grid sm:grid-cols-3">
              {FUNNEL_DAYS.map((d, i) => (
                <li key={d.slug} className="border-b border-line sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <a
                    href={`#${d.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-4 no-underline sm:pr-6"
                  >
                    <span>
                      <span className="meta meta-strong">Jour {d.n}</span>
                      <span className="mt-1 block text-[15px] text-cream">{d.shortTitle}</span>
                    </span>
                    <span className="meta tabular whitespace-nowrap">
                      {formatMinutes(thumbnails[i]?.duration) ?? ""}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <p className="meta reveal mt-6 text-[10px]" data-delay="0.4">
            La méthode derrière des œuvres primées à Séoul, Hollywood et aux Mondial Chroma Awards.
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
            className="section scroll-mt-6 border-t border-line"
            aria-labelledby={`${d.slug}-title`}
          >
            <div className="container-x">
              <div className={`grid-12 reveal gap-y-10 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="col-span-12 min-w-0 lg:col-span-7">
                  <VideoFacade
                    provider="vimeo"
                    videoId={d.vimeoId}
                    title={`${d.kicker} : ${d.title}`}
                    caption={d.kicker}
                    meta={formatMinutes(thumbnails[i]?.duration) ?? undefined}
                    poster={thumbnails[i]?.url}
                    posterAlt={`Vignette de la vidéo ${d.kicker}`}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
                <div className="col-span-12 min-w-0 lg:col-span-5">
                  <p className="meta"><span className="meta-strong tabular">0{d.n}</span> &nbsp;/&nbsp; {d.kicker}</p>
                  <h2 id={`${d.slug}-title`} className="h-block mt-4 text-cream">
                    {d.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-fog">{d.intro}</p>
                  <ul className="mt-6 border-t border-line">
                    {d.points.map((p) => (
                      <li key={p} className="flex gap-3 border-b border-line py-3 text-[15px] leading-relaxed text-stone">
                        <span className="mt-[0.7em] h-px w-4 shrink-0 bg-fog" aria-hidden />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-stone">
                    <span className="meta mr-2">Mission du jour</span>
                    {d.mission}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <TrackedLink
                      href={SCREENWEAVER_URL}
                      event="click_screenweaver"
                      detail={d.slug}
                      className="btn btn-primary"
                    >
                      <span>{d.screenweaverCta}</span>
                      <Arrow />
                    </TrackedLink>
                    <TrackedLink
                      href={SKOOL_URL}
                      event="click_skool"
                      detail={d.slug}
                      className="btn"
                    >
                      <span>{d.skoolCta}</span>
                      <Arrow />
                    </TrackedLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* La suite : AI Studios sur Skool. */}
      <section id="ai-studios" className="section scroll-mt-6 border-t border-line" aria-labelledby="ai-studios-title">
        <div className="container-x">
          <SectionHeader
            index="04"
            kicker="La suite"
            id="ai-studios-title"
            title="Comment passer de six plans à des films complets, sans repartir de zéro"
            lede="Vous savez maintenant par où commencer et pourquoi vos anciens essais brûlaient votre budget. Ce qui reste à apprendre, c’est la cohérence des personnages sur un film entier, la mise en scène, le mouvement, le montage, le son. C’est ce qu’on travaille dans AI Studios, avec des retours sur vos propres plans."
          />

          <div className="mt-14">
            <FilmStrip
              stills={COURSE_STILLS}
              caption="Planche 02 · Ce que donne la méthode complète : extraits de mes films et séries IA"
            />
          </div>

          <div className="grid-12 mt-16 gap-y-12">
            <div className="col-span-12 border border-line-strong p-6 sm:p-8 lg:col-span-6">
              <p className="meta">La communauté AI Studios</p>
              <h3 className="h-block mt-4 text-cream">Ce que vous débloquez aujourd’hui</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-fog">
                Le module Étape 1 de la formation, la Méthode Film Mental en
                cadeau, et une communauté privée de {SKOOL_OFFER.members}{" "}
                créateurs IA qui partagent leurs plans et leurs prompts chaque
                jour. Vous postez votre storyboard du challenge, vous avez des
                retours.
              </p>
              <p className="mt-8 flex items-baseline gap-3">
                <span className="display text-5xl leading-none text-cream">{SKOOL_OFFER.priceLabel}</span>
                <span className="text-sm text-fog">{SKOOL_OFFER.period}</span>
              </p>
              <p className="meta mt-2">Moins qu’un café par semaine</p>
              <p className="mt-4 text-sm leading-relaxed text-fog">
                Sans engagement, annulable en un clic à tout moment. Vous gardez
                l’accès tant que vous êtes membre, vous partez quand vous voulez.
              </p>
              <div className="mt-6">
                <TrackedLink
                  href={SKOOL_URL}
                  event="click_skool"
                  detail="offre"
                  className="btn btn-primary btn-lg w-full sm:w-auto"
                >
                  <span>Débloquer l’Étape 1 pour {SKOOL_OFFER.priceLabel} par mois</span>
                  <Arrow />
                </TrackedLink>
              </div>
            </div>

            <div className="col-span-12 min-w-0 lg:col-span-5 lg:col-start-8">
              <p className="meta">Ce que vous obtenez</p>
              <ul className="mt-4 border-t border-line">
                {SKOOL_OFFER.includes.map((item, i) => (
                  <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3 text-[15px] leading-relaxed text-stone">
                    <span className="meta tabular pt-1">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-fog">
                Les modules suivants (Étapes 2 à 5, masterclass et bonus) font
                partie de l’accès annuel complet.
              </p>

              <p className="meta mt-10">
                Ce qu’ils en disent · {SKOOL_OFFER.trustpilotScore} sur Trustpilot
              </p>
              <ul className="mt-4">
                {SKOOL_OFFER.reviews.map((r) => (
                  <li key={r.author} className="border-t border-line py-4 last:border-b">
                    <p className="serif text-[1.2rem] leading-snug text-cream">« {r.text} »</p>
                    <p className="meta mt-2">{r.author}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid-12 mt-16 gap-y-8 border-t border-line pt-12">
            <div className="col-span-12 lg:col-span-4">
              <p className="meta"><span className="meta-strong">05</span> &nbsp;/&nbsp; Questions fréquentes</p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              {SKOOL_OFFER.faq.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>
                    <span>{f.q}</span>
                    <Plus />
                  </summary>
                  <p className="text-[15px] leading-relaxed text-fog">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band band-navy grain border-t border-line" aria-labelledby="final-title">
        <div className="glow drift" style={{ width: 560, height: 560, right: "-10%", top: "-30%" }} aria-hidden />
        <div className="container-x relative z-[5] section">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <p className="meta meta-strong reveal">06 / Dernière séquence</p>
              <p id="final-title" className="h-section reveal mt-5 text-cream" data-delay="0.1">
                Le challenge vous a donné la direction.
              </p>
              <p className="reveal mt-5 max-w-lg text-[15px] leading-relaxed text-fog" data-delay="0.2">
                AI Studios vous donne l’exécution, les retours sur vos plans et la
                régularité, pour {SKOOL_OFFER.priceLabel} par mois, sans engagement.
              </p>
            </div>
            <div className="reveal col-span-12 lg:col-span-5 lg:text-right" data-delay="0.3">
              <TrackedLink href={SKOOL_URL} event="click_skool" detail="final" className="btn btn-primary btn-lg">
                <span>Rejoindre AI Studios pour {SKOOL_OFFER.priceLabel} par mois</span>
                <Arrow />
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </FunnelFrame>
  );
}
