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
import type { ResourceState, ResourceTile } from "@/lib/ressources/types";

const UI = {
  fr: {
    method: "Méthode",
    home: "Accueil",
    hub: "Ressources",
    seePath: "Voir le chemin",
    abKicker: "Avant, après",
    abTitle: ["d'où vous partez,", "où vous arrivez."],
    from: "Aujourd'hui",
    to: "À l'arrivée",
    caseKicker: "La preuve",
    stepsKicker: "Le chemin",
    stepsTitle: (n: number) => [`de A à B,`, `en ${n} étapes.`],
    stepsLede: "Chaque étape a sa leçon vidéo : vous regardez le geste, vous le refaites.",
    step: "Étape",
    lesson: "Voir la leçon complète",
    play: "Lire",
    trapKicker: "Le piège à éviter",
    extraKicker: "Pour aller plus loin",
    others: "D'autres méthodes",
  },
  en: {
    method: "Method",
    home: "Home",
    hub: "Resources",
    seePath: "See the path",
    abKicker: "Before, after",
    abTitle: ["where you start,", "where you land."],
    from: "Today",
    to: "At the end",
    caseKicker: "The proof",
    stepsKicker: "The path",
    stepsTitle: (n: number) => [`from A to B,`, `in ${n} steps.`],
    stepsLede: "Every step has its video lesson: watch the move, then do it yourself.",
    step: "Step",
    lesson: "Watch the full lesson",
    play: "Play",
    trapKicker: "The trap to avoid",
    extraKicker: "Go further",
    others: "More methods",
  },
} as const;

const TILE_SIZES = "(max-width: 1024px) 100vw, 560px";

/** Ce qu'on voit dans une case : une image, une note brute ou une page de scénario. */
function Tile({ tile, after }: { tile: ResourceTile; after: boolean }) {
  if (tile.kind === "image") {
    return (
      <Image
        src={tile.src}
        alt={tile.alt}
        fill
        sizes={TILE_SIZES}
        className={after ? "" : "opacity-80 grayscale"}
        style={{
          objectFit: tile.fit ?? "cover",
          objectPosition: tile.position ?? "center",
        }}
      />
    );
  }
  if (tile.kind === "script") {
    return (
      <div className={`absolute inset-0 overflow-hidden bg-[#efece4] px-[10%] py-[9%] font-mono text-[#1c1b19] ${after ? "" : "opacity-80 grayscale"}`}>
        {tile.lines.map((line, i) => (
          <p key={line} className={`text-[12.5px] leading-[1.6] sm:text-[15px] lg:text-[16px] ${i === 0 ? "font-bold uppercase" : "mt-[1.1em]"}`}>
            {line}
          </p>
        ))}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#efece4] to-transparent" aria-hidden />
      </div>
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center px-[10%]">
      <p className={`text-center font-serif text-[clamp(1.15rem,2.4vw,1.6rem)] italic leading-snug ${after ? "text-cream" : "text-fog"}`}>
        « {tile.text} »
      </p>
    </div>
  );
}

function StateTile({ state, after, className }: { state: ResourceState; after: boolean; className: string }) {
  return (
    <div
      className={`reveal frame frame-grain relative aspect-[16/10] ${className} ${
        after ? "border-[color:var(--gold-label)] shadow-[0_0_70px_-18px_rgb(255_205_60/0.55)]" : ""
      }`}
      data-delay={after ? "0.15" : "0"}
    >
      <Tile tile={state.tile} after={after} />
    </div>
  );
}

function StateText({ state, letter, label, after, className }: { state: ResourceState; letter: string; label: string; after: boolean; className: string }) {
  return (
    <div className={`reveal ${className}`} data-delay={after ? "0.15" : "0"}>
      <p className="meta flex items-center gap-3">
        <span className={`tabular ${after ? "text-[color:var(--gold)]" : "meta-strong"}`}>{letter}</span>
        <span>{label}</span>
      </p>
      <h3 className={`h-block mt-3 ${after ? "text-cream" : "text-stone"}`}>{state.title}</h3>
      <ul className="mt-5 space-y-2.5">
        {state.points.map((p) => (
          <li key={p} className={`flex gap-3 text-[15px] leading-relaxed ${after ? "text-stone" : "text-fog"}`}>
            <span className={`shrink-0 ${after ? "text-[color:var(--gold)]" : "text-fog/60"}`} aria-hidden>
              {after ? "→" : "×"}
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ResourcePage({ resource: r }: { resource: Resource }) {
  const t = UI[r.locale];
  const path = resourcePath(r.locale, r.slug);
  const home = r.locale === "fr" ? "/" : "/en";
  const others = resourcesFor(r.locale).filter((o) => o.slug !== r.slug);
  const ctaRel = r.cta.affiliate ? SPONSORED_REL : undefined;
  const stepsTitle = t.stepsTitle(r.steps.length);

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
      { name: r.label, path },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <RevealObserver />

      {/* Ouverture : la promesse */}
      <section className="band grain vignette relative flex min-h-[82svh] flex-col" aria-labelledby="ressource-title">
        {r.hero ? (
          <div className="layer kenburns" aria-hidden>
            <Image src={r.hero.src} alt="" fill priority sizes="100vw" className="opacity-60" style={{ objectPosition: r.hero.position ?? "center" }} />
          </div>
        ) : null}
        <div className="scrim" aria-hidden />
        <div className="glow drift" style={{ width: "40vw", height: "40vw", maxWidth: 640, maxHeight: 640, right: "-10%", top: "8%" }} aria-hidden />
        <div className="container-x relative z-[4] flex flex-1 flex-col justify-end pb-12 pt-[calc(var(--header-h)+4rem)] sm:pb-16">
          <p className="meta meta-strong reveal">
            {t.method} &nbsp;/&nbsp; {r.label}
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
              <Cta href="#chemin">{t.seePath}</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* Avant, après */}
      <section className="section" aria-labelledby="avant-apres">
        <div className="container-x">
          <p className="meta">
            <span className="meta-strong tabular">01</span> &nbsp;/&nbsp; {t.abKicker}
          </p>
          <h2 id="avant-apres" className="h-section mt-5">
            {t.abTitle[0]} <span className="or">{t.abTitle[1]}</span>
          </h2>
          <div className="mt-14 grid items-center gap-x-8 gap-y-6 lg:grid-cols-[1fr_auto_1fr]">
            <StateTile state={r.from} after={false} className="order-1" />
            <div className="order-3 flex justify-center py-4 text-[color:var(--gold)] lg:order-2 lg:py-0" aria-hidden>
              <svg width="56" height="24" viewBox="0 0 56 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 lg:rotate-0">
                <path d="M2 12h51M42 2l11 10-11 10" />
              </svg>
            </div>
            <StateTile state={r.to} after className="order-4 lg:order-3" />
            <StateText state={r.from} letter="A" label={t.from} after={false} className="order-2 self-start lg:order-4" />
            <div className="hidden lg:order-5 lg:block" aria-hidden />
            <StateText state={r.to} letter="B" label={t.to} after className="order-5 self-start lg:order-6" />
          </div>
        </div>
      </section>

      {/* La preuve */}
      <section className="section border-t border-line" aria-labelledby="preuve">
        <div className="container-x">
          <SectionHeader index="02" kicker={t.caseKicker} id="preuve" title={r.case.title} lede={r.case.text} />
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
              />
            ) : r.case.image ? (
              <div className="frame frame-grain frame-marks relative aspect-video w-full">
                <Image src={r.case.image.src} alt={r.case.image.alt} fill sizes="(max-width: 1024px) 100vw, 1024px" />
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

      {/* Le chemin */}
      <section className="section border-t border-line" aria-labelledby="chemin">
        <div className="container-x">
          <SectionHeader
            index="03"
            kicker={t.stepsKicker}
            id="chemin"
            title={
              <>
                {stepsTitle[0]} <span className="or">{stepsTitle[1]}</span>
              </>
            }
            lede={t.stepsLede}
          />
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
          <SectionHeader index="04" kicker={t.trapKicker} id="piege" title={r.trap.title} lede={r.trap.text} />
          {r.extra ? (
            <div className="mt-14 flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4 border-t border-line pt-8">
              <p className="max-w-2xl text-[15px] leading-relaxed text-fog">
                <span className="meta meta-strong mr-3">{t.extraKicker}</span>
                <span className="text-stone">{r.extra.title}.</span> {r.extra.text}
              </p>
              <ArrowLink href={r.extra.link.href}>{r.extra.link.label}</ArrowLink>
            </div>
          ) : null}
        </div>
      </section>

      {/* L'arrivée : l'appel */}
      <section className="band grain vignette relative border-t border-line" aria-labelledby="a-vous">
        <div className="glow drift" style={{ width: "36vw", height: "36vw", maxWidth: 560, maxHeight: 560, left: "-8%", bottom: "-20%" }} aria-hidden />
        <div className="container-x relative z-[4] py-24 sm:py-32">
          <p className="meta flex items-center gap-3">
            <span className="tabular text-[color:var(--gold)]">B</span>
            <span>{r.to.title}</span>
          </p>
          <h2 id="a-vous" className="display display-md mt-6 max-w-4xl normal-case leading-[1] text-cream">
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

      {/* D'autres méthodes */}
      <nav className="border-t border-line py-10" aria-label={t.others}>
        <div className="container-x flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="meta meta-strong">{t.others}</p>
          {others.map((o) => (
            <Link key={o.slug} href={resourcePath(o.locale, o.slug)} className="meta link-muted tap">
              {o.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
