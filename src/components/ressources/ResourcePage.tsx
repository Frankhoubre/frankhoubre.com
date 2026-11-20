import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { VideoFacade } from "@/components/VideoFacade";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { ArrowLink, Cta } from "@/components/ui/Cta";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SPONSORED_REL } from "@/lib/affiliate";
import { buildBreadcrumbList, buildGraphJsonLd, pageUrl } from "@/lib/metadata";
import { RESOURCE_BASE, resourcePath, resourcesFor, type Resource } from "@/lib/ressources";

const UI = {
  fr: {
    word: "Mot",
    home: "Accueil",
    hub: "Ressources",
    seeSteps: "Voir le déroulé",
    caseKicker: "Le cas",
    stepsKicker: "Le déroulé",
    stepsTitle: "Les étapes, dans l'ordre.",
    stepsLede: "Chaque étape renvoie à la leçon vidéo qui montre le geste dans l'app.",
    step: "Étape",
    lesson: "Voir la leçon complète",
    play: "Lire",
    trapKicker: "Le piège",
    extraKicker: "Pour aller plus loin",
    ctaKicker: "À vous",
    others: "Les autres mots",
    othersLede: "Chaque mot commenté sous un reel ouvre sa propre page.",
  },
  en: {
    word: "Word",
    home: "Home",
    hub: "Resources",
    seeSteps: "See the steps",
    caseKicker: "The case",
    stepsKicker: "The steps",
    stepsTitle: "Step by step, in order.",
    stepsLede: "Each step links to the video lesson that shows it inside the app.",
    step: "Step",
    lesson: "Watch the full lesson",
    play: "Play",
    trapKicker: "The trap",
    extraKicker: "Go further",
    ctaKicker: "Your turn",
    others: "The other words",
    othersLede: "Every word you can comment under a reel opens its own page.",
  },
} as const;

export function ResourcePage({ resource: r }: { resource: Resource }) {
  const t = UI[r.locale];
  const path = resourcePath(r.locale, r.slug);
  const home = r.locale === "fr" ? "/" : "/en";
  const others = resourcesFor(r.locale).filter((o) => o.slug !== r.slug);
  const ctaRel = r.cta.affiliate ? SPONSORED_REL : undefined;

  const jsonLd = buildGraphJsonLd(
    {
      "@type": "HowTo",
      name: `${r.title} ${r.titleGold}`,
      description: r.metaDescription,
      inLanguage: r.locale,
      url: pageUrl(path),
      step: r.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.text,
        ...(s.lesson ? { url: s.lesson.href } : {}),
      })),
    },
    buildBreadcrumbList([
      { name: t.home, path: home },
      { name: t.hub, path: RESOURCE_BASE[r.locale] },
      { name: r.word, path },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <RevealObserver />

      {/* Ouverture */}
      <section className="band grain vignette relative" aria-labelledby="ressource-title">
        <div className="glow drift" style={{ width: "40vw", height: "40vw", maxWidth: 640, maxHeight: 640, right: "-10%", top: "5%" }} aria-hidden />
        <div className="container-x relative z-[4] pb-12 pt-[calc(var(--header-h)+3.5rem)] sm:pb-16">
          <p className="meta meta-strong reveal">
            {t.word} {r.word}
          </p>
          <h1 id="ressource-title" className="display display-md reveal mt-6 max-w-5xl normal-case leading-[0.98] text-cream" data-delay="0.1">
            {r.title} <span className="or">{r.titleGold}</span>
          </h1>
          <div className="grid-12 mt-10 gap-y-8 border-t border-line pt-8">
            <p className="lede reveal col-span-12 lg:col-span-7" data-delay="0.2">
              {r.lede}
            </p>
            <div className="reveal col-span-12 flex flex-wrap gap-3 lg:col-span-5 lg:justify-end" data-delay="0.3">
              <Cta href={r.cta.link.href} variant="primary" rel={ctaRel}>
                {r.cta.link.label}
              </Cta>
              <Cta href="#deroule">{t.seeSteps}</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* Le cas */}
      <section className="section" aria-labelledby="le-cas">
        <div className="container-x">
          <SectionHeader index="01" kicker={t.caseKicker} id="le-cas" title={r.case.title} lede={r.case.text} />
          <div className="mt-12 max-w-5xl">
            {r.case.video ? (
              <VideoFacade
                provider={r.case.video.provider}
                videoId={r.case.video.id}
                title={r.case.video.title}
                poster={r.case.video.poster}
                caption={r.case.video.caption}
                meta={r.case.video.meta}
                playLabel={t.play}
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            ) : r.case.image ? (
              <div className="frame frame-grain frame-marks relative aspect-video w-full">
                <Image src={r.case.image.src} alt={r.case.image.alt} fill sizes="(max-width: 1024px) 100vw, 1024px" priority />
              </div>
            ) : null}
            {r.case.link ? (
              <div className="mt-6">
                <ArrowLink href={r.case.link.href}>{r.case.link.label}</ArrowLink>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Le déroulé */}
      <section className="section border-t border-line" aria-labelledby="deroule">
        <div className="container-x">
          <SectionHeader index="02" kicker={t.stepsKicker} id="deroule" title={t.stepsTitle} lede={t.stepsLede} />
          <ol className="mt-14 border-t border-line">
            {r.steps.map((s, i) => (
              <li key={s.title} className="reveal grid-12 gap-y-6 border-b border-line py-10">
                <div className="col-span-12 lg:col-span-5">
                  <p className="meta">
                    <span className="meta-strong tabular">0{i + 1}</span> &nbsp;/&nbsp; {t.step}
                  </p>
                  <h3 className="h-block mt-4 text-cream">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fog">{s.text}</p>
                  {s.lesson ? (
                    <div className="mt-5">
                      <ArrowLink href={s.lesson.href}>{t.lesson}</ArrowLink>
                    </div>
                  ) : s.link ? (
                    <div className="mt-5">
                      <ArrowLink href={s.link.href}>{s.link.label}</ArrowLink>
                    </div>
                  ) : null}
                </div>
                {s.lesson ? (
                  <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <VideoFacade
                      provider="youtube"
                      videoId={s.lesson.youtubeId}
                      title={s.lesson.title}
                      caption={`${t.step} ${i + 1}`}
                      playLabel={t.play}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Le piège */}
      <section className="section border-t border-line" aria-labelledby="piege">
        <div className="container-x">
          <SectionHeader index="03" kicker={t.trapKicker} id="piege" title={r.trap.title} lede={r.trap.text} />
        </div>
      </section>

      {/* Pour aller plus loin */}
      {r.extra ? (
        <section className="section border-t border-line" aria-labelledby="plus-loin">
          <div className="container-x">
            <SectionHeader
              index="04"
              kicker={t.extraKicker}
              id="plus-loin"
              title={r.extra.title}
              lede={r.extra.text}
              aside={<ArrowLink href={r.extra.link.href}>{r.extra.link.label}</ArrowLink>}
            />
          </div>
        </section>
      ) : null}

      {/* Appel final */}
      <section className="band grain vignette relative border-t border-line" aria-labelledby="a-vous">
        <div className="container-x relative z-[4] py-20 sm:py-28">
          <p className="meta meta-strong">{t.ctaKicker}</p>
          <h2 id="a-vous" className="h-section mt-5 max-w-4xl text-cream">
            {r.cta.title}
          </h2>
          <p className="lede mt-6 max-w-2xl">{r.cta.text}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Cta href={r.cta.link.href} variant="primary" size="lg" rel={ctaRel}>
              {r.cta.link.label}
            </Cta>
            {r.cta.secondary ? <Cta href={r.cta.secondary.href}>{r.cta.secondary.label}</Cta> : null}
          </div>
        </div>
      </section>

      {/* Les autres mots */}
      <section className="section border-t border-line" aria-labelledby="autres-mots">
        <div className="container-x">
          <SectionHeader kicker={t.hub} id="autres-mots" title={t.others} lede={t.othersLede} size="block" />
          <ul className="mt-10 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={resourcePath(o.locale, o.slug)} className="btn btn-sm">
                  <span>{o.word}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
