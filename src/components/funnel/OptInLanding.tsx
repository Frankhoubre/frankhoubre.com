import type { ReactNode } from "react";
import Image from "next/image";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { AwardsMarquee } from "@/components/funnel/AwardsMarquee";
import { CineHero } from "@/components/funnel/CineHero";
import { FilmStrip } from "@/components/funnel/FilmStrip";
import { FunnelBeacon } from "@/components/funnel/FunnelBeacon";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { OptInForm } from "@/components/funnel/OptInForm";
import { StickyCta } from "@/components/funnel/StickyCta";
import { Stars } from "@/components/ui/Stars";
import type { AbVariant } from "@/lib/funnel/ab";
import { FUNNEL_AWARDS, FUNNEL_DAYS, SKOOL_OFFER } from "@/lib/funnel/config";
import { LANDING_STILLS } from "@/lib/funnel/stills";
import { formatMinutes, type VimeoMeta } from "@/lib/funnel/vimeo";
import { homeHeroImages } from "@/lib/home-hero";

type Hero = { title: string; titleEnd: string; lede: string; proof: string };

/**
 * Accroche de chaque version du test A/B (src/lib/funnel/ab.ts). Le reste de
 * la page est identique : seul le premier écran change. Titres en minuscules
 * (charte noir et or), la fin du titre passe en serif italique or.
 */
const HEROES: Record<AbVariant, Hero> = {
  a: {
    title: "réalisez un film IA cohérent en 3 jours,",
    titleEnd: "sans jeter vos crédits par les fenêtres.",
    lede:
      "La méthode que j’utilise sur mes propres films, en trois vidéos : l’idée en une phrase, le storyboard validé en image, le montage. Des personnages qui restent les mêmes d’un plan à l’autre, et jusqu’à 80 % de crédits IA économisés.",
    proof: "La méthode derrière Ronces, VOIDBORN et Lost Garden, primés ou sélectionnés.",
  },
  b: {
    title: "j’ai réalisé seul un animé de 17 minutes avec l’IA.",
    titleEnd: "je vous montre comment, en 3 vidéos.",
    lede:
      "Pas de studio, pas d’équipe d’animation. J’ai tenu l’idée en une phrase, validé chaque plan en image dans un storyboard, puis seulement généré et monté. C’est cette méthode que je vous donne, avec les vrais fichiers de montage de Lost Garden.",
    proof: "Lost Garden, Ronces et VOIDBORN y ont été primés ou sélectionnés.",
  },
};

const FORM_ID = "inscription";

/** Page d'inscription à la formation, commune aux deux versions du test. */
export function OptInLanding({
  variant,
  metas,
  totalLabel,
  children,
}: {
  variant: AbVariant;
  metas: (VimeoMeta | null)[];
  totalLabel: string;
  /** Données structurées (version A seulement, la version B n'est pas indexée). */
  children?: ReactNode;
}) {
  const hero = HEROES[variant];
  return (
    <FunnelFrame minimal theme="noir">
      {children}
      <FunnelBeacon event="optin_view" />
      <RevealObserver />

      {/* Accroche, promesse, formulaire : tout tient dans le premier écran. */}
      <CineHero base={homeHeroImages.base} reveal={homeHeroImages.reveal}>
        <div className="container-x grid flex-1 gap-10 pb-12 pt-12 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-16 lg:pt-16">
          <div className="min-w-0">
            <p className="meta meta-strong reveal">
              formation offerte · 3 vidéos · {totalLabel} · sans carte bancaire
            </p>
            <h1
              id="hero-title"
              className="reveal mt-6 text-[clamp(2.3rem,5.2vw,4.75rem)] leading-[0.98] text-cream"
              data-delay="0.1"
            >
              {hero.title} <span className="or">{hero.titleEnd}</span>
            </h1>
            <p className="lede reveal mt-8 max-w-xl" data-delay="0.2">
              {hero.lede}
            </p>
            <p className="reveal mt-8 flex max-w-xl items-center gap-4 text-[15px] leading-snug text-stone" data-delay="0.3">
              <span className="num text-[2.6rem]">{FUNNEL_AWARDS.length}</span>
              <span>
                <span className="block font-semibold text-cream">festivals internationaux</span>
                <span className="text-fog">{hero.proof}</span>
              </span>
            </p>
          </div>

          <div
            id={FORM_ID}
            className="carte-noir reveal min-w-0 scroll-mt-6 p-5 backdrop-blur-md sm:p-7"
            data-delay="0.25"
          >
            <p className="meta meta-strong">où envoyer vos accès ?</p>
            <p className="h-block mt-3 text-cream">
              recevez les 3 vidéos, <span className="or">commencez la première</span> tout de suite.
            </p>
            <div className="mt-6">
              <OptInForm />
            </div>
          </div>
        </div>
      </CineHero>

      <AwardsMarquee />

      {/* La preuve : les films, les avis, les trois vidéos. */}
      <section className="section" aria-labelledby="proof-title">
        <div className="container-x">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 reveal lg:col-span-4">
              <p className="meta meta-strong">la preuve</p>
              <h2 id="proof-title" className="h-section mt-5">
                des films qui sortent en festival, <span className="or">pas des tests.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-fog">
                Ronces, VOIDBORN et Lost Garden ont été construits exactement
                comme dans les trois vidéos : l’idée, le storyboard, puis la
                génération. Lost Garden est un épisode d’animé de 17 minutes,
                réalisé seul.
              </p>
              <ul className="mt-8">
                {SKOOL_OFFER.reviews.map((r) => (
                  <li key={r.author} className="border-t border-line py-4 last:border-b">
                    <Stars label={`${r.author} : 5 étoiles sur 5`} />
                    <p className="serif mt-2 text-[1.2rem] leading-snug text-cream">« {r.text} »</p>
                    <p className="meta mt-2">
                      {r.author} · membre AI Studios · <span className="text-amber">{SKOOL_OFFER.trustpilotScore}</span> sur Trustpilot
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 reveal lg:col-span-7 lg:col-start-6" data-delay="0.15">
              <FilmStrip
                stills={LANDING_STILLS}
                caption="Extraits de mes films et séries IA, tous produits avec cette méthode"
                priority
              />
              <ol className="mt-8 grid gap-3 sm:grid-cols-3">
                {FUNNEL_DAYS.map((d, i) => {
                  const m = formatMinutes(metas[i]?.duration);
                  return (
                    <li key={d.slug} className="carte-noir p-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="num text-[2.4rem]">0{d.n}</span>
                        {m ? <span className="meta tabular">{m}</span> : null}
                      </div>
                      <p className="h-item mt-4 text-cream">{d.shortTitle}</p>
                      <p className="mt-2 text-sm leading-relaxed text-fog">{d.mission}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Dernier appel : la promesse, et le formulaire. */}
      <section className="band grain vignette relative border-t border-line" aria-labelledby="final-title">
        <div className="layer" aria-hidden>
          <Image src="/images/formation/hero.webp" alt="" fill sizes="100vw" className="opacity-50 saturate-[0.8]" />
        </div>
        <div className="scrim" aria-hidden />
        <div className="container-x relative z-[5] section">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-6">
              <span className="tampon reveal text-2xl">offert</span>
              <h2 id="final-title" className="h-section reveal mt-6 text-cream" data-delay="0.1">
                votre premier film IA cohérent <span className="or">commence par une phrase.</span>
              </h2>
              <p className="reveal mt-5 max-w-md text-[15px] leading-relaxed text-fog" data-delay="0.2">
                Inscrivez-vous, la vidéo 1 s’ouvre tout de suite. Accès
                immédiat, <span className="text-amber">0 €</span>, rien à installer.
              </p>
            </div>
            <div className="carte-noir reveal col-span-12 p-5 backdrop-blur-md sm:p-7 lg:col-span-5 lg:col-start-8" data-delay="0.2">
              <OptInForm compact cta="Recevoir mes 3 vidéos" />
            </div>
          </div>
        </div>
      </section>

      <StickyCta targetId={FORM_ID} label="Recevoir mes 3 vidéos" />
    </FunnelFrame>
  );
}
