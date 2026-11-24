import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { Cta } from "@/components/ui/Cta";
import { SPONSORED_REL } from "@/lib/affiliate";
import { buildBreadcrumbList, buildGraphJsonLd, pageUrl } from "@/lib/metadata";
import { RESOURCE_BASE, resourcePath, type Resource } from "@/lib/ressources";
import type { ResourceArt, ResourceVisual } from "@/lib/ressources/types";
import { LevelBadge } from "./LevelBadge";

const UI = {
  fr: { home: "Accueil", hub: "Ressources", seeSteps: "Voir les étapes", stepsLabel: "Les étapes" },
  en: { home: "Home", hub: "Resources", seeSteps: "See the steps", stepsLabel: "The steps" },
} as const;

const DOTS = {
  backgroundImage: "radial-gradient(rgb(255 255 255 / 0.09) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
} as const;

const GOLD_EDGE = "border-[color:var(--gold-label)] shadow-[0_0_60px_-16px_rgb(255_205_60/0.65)]";

type ArtOf<K extends ResourceArt["kind"]> = Extract<ResourceArt, { kind: K }>;

function Chip({ children }: { children: string }) {
  return (
    <span className="meta meta-strong absolute bottom-2 left-2 rounded-sm bg-black/65 px-1.5 py-1 text-[10px] backdrop-blur-sm">
      {children}
    </span>
  );
}

function Play() {
  return (
    <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
      <span className="flex size-9 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm sm:size-11">
        <svg width="14" height="16" viewBox="0 0 14 16" fill="#fff">
          <path d="M1 1l12 7-12 7z" />
        </svg>
      </span>
    </span>
  );
}

/** Le plan en grand (et sa version verticale), puis la timeline de l'épisode. */
function Timeline({ art }: { art: ArtOf<"timeline"> }) {
  return (
    <div className="frame px-3 py-6 sm:px-6 sm:py-8" style={DOTS}>
      <div className="flex justify-center gap-[3%]">
        <div className={`relative aspect-video overflow-hidden rounded-md border ${GOLD_EDGE} ${art.vertical ? "w-[72%]" : "w-full"}`}>
          <Image src={art.main.src} alt={art.main.alt} fill sizes="(max-width: 1024px) 90vw, 560px" style={{ objectFit: "cover" }} />
          {art.vertical ? <Chip>16:9</Chip> : null}
        </div>
        {art.vertical ? (
          <div className="relative aspect-[9/16] w-[22.78%] overflow-hidden rounded-md border border-line-strong">
            <Image
              src={art.main.src}
              alt=""
              fill
              sizes="(max-width: 1024px) 60vw, 380px"
              style={{ objectFit: "cover", objectPosition: art.vertical }}
            />
            <Chip>9:16</Chip>
          </div>
        ) : null}
      </div>
      <div
        className="mt-6 h-2 opacity-50"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--stone) 0 1px, transparent 1px 12px)" }}
        aria-hidden
      />
      <ol className="mt-2 flex gap-1.5">
        {art.thumbs.map((t, i) => {
          const on = i === art.selected;
          return (
            <li
              key={t.src}
              className={`relative aspect-video flex-1 overflow-hidden rounded-sm border ${
                on ? "border-[color:var(--gold)] shadow-[0_0_24px_-6px_rgb(255_205_60/0.8)]" : "border-line opacity-70"
              }`}
            >
              <Image src={t.src} alt={t.alt} fill sizes="160px" style={{ objectFit: "cover" }} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Des blocs reliés, le dernier mis en avant ; ou posés côte à côte. */
function Flow({ art }: { art: ArtOf<"flow"> }) {
  const linked = art.link !== false;
  const width = art.nodes.length <= 2 ? "w-[42%]" : "w-[29%]";
  const textOnly = art.nodes.every((n) => !n.src);
  return (
    <div className={`frame flex items-center px-3 py-8 sm:px-6 sm:py-12 ${linked ? "" : "justify-center gap-[5%]"}`} style={DOTS}>
      {art.nodes.map((n, i) => {
        const last = linked && i === art.nodes.length - 1;
        return (
          <div key={n.label} className="contents">
            {linked && i > 0 ? (
              <div className="flex min-w-3 flex-1 items-center" aria-hidden>
                <span className="size-2 shrink-0 rounded-full bg-[color:var(--gold)]" />
                <span className="h-px flex-1 bg-[color:var(--gold)] opacity-70" />
                <span className="size-2 shrink-0 rounded-full bg-[color:var(--gold)]" />
              </div>
            ) : null}
            <figure className={`${width} shrink-0 overflow-hidden rounded-md border bg-[#141416] ${last ? GOLD_EDGE : "border-line-strong"}`}>
              <figcaption className={`meta px-2 py-2 text-center text-[10px] sm:text-[11px] ${last ? "meta-strong" : ""}`}>
                {n.label}
              </figcaption>
              <div className={`relative ${textOnly ? "aspect-[5/3]" : "aspect-[4/5]"}`}>
                {n.src ? (
                  <Image
                    src={n.src}
                    alt={n.alt ?? ""}
                    fill
                    sizes="(max-width: 1024px) 42vw, 260px"
                    style={{ objectFit: "cover", objectPosition: n.position ?? "center" }}
                  />
                ) : (
                  <p className="absolute inset-0 flex items-center justify-center px-3 text-center font-mono text-[11px] leading-relaxed text-stone sm:text-[13px]">
                    {n.text}
                  </p>
                )}
                {last && n.src ? <Play /> : null}
              </div>
            </figure>
          </div>
        );
      })}
    </div>
  );
}

function Cards({ art }: { art: ArtOf<"cards"> }) {
  return (
    <ul className="frame grid grid-cols-2 gap-3 px-4 py-8 sm:px-8 sm:py-12" style={DOTS}>
      {art.items.map((c) => (
        <li
          key={c.text}
          className={`flex min-h-[4.5rem] flex-col justify-center rounded-md border bg-[#141416] px-4 py-3 ${
            c.on ? GOLD_EDGE : "border-line-strong"
          }`}
        >
          <span className={`text-[15px] leading-snug ${c.on ? "text-cream" : "text-stone"}`}>{c.text}</span>
          {c.tag ? <span className={`meta mt-1.5 text-[10px] ${c.on ? "text-[color:var(--gold)]" : ""}`}>{c.tag}</span> : null}
        </li>
      ))}
    </ul>
  );
}

function Chat({ art }: { art: ArtOf<"chat"> }) {
  return (
    <div className="frame flex flex-col gap-4 px-4 py-8 sm:px-8 sm:py-12" style={DOTS}>
      <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-white/10 px-4 py-3 text-[15px] leading-snug text-cream">
        {art.user}
      </p>
      <div className={`mr-auto max-w-[85%] rounded-2xl rounded-bl-sm border bg-[#141416] px-4 py-3 ${GOLD_EDGE}`}>
        <p className="meta meta-strong flex items-center gap-2 text-[10px]">
          <span className="size-1.5 rounded-full bg-[color:var(--gold)]" aria-hidden />
          ScreenWeaver
        </p>
        <p className="mt-2 text-[15px] leading-snug text-stone">{art.reply}</p>
      </div>
    </div>
  );
}

/** Une illustration : image réelle, ou schéma dessiné en code. */
function Art({
  art,
  sizes,
  priority,
  glow,
  className = "",
}: {
  art: ResourceArt;
  sizes: string;
  priority?: boolean;
  /** Cadre mis en avant (l'état d'arrivée). */
  glow?: boolean;
  className?: string;
}) {
  const edge = glow ? GOLD_EDGE : "";
  switch (art.kind) {
    case "image":
      return (
        <div
          className={`frame relative w-full ${edge} ${art.narrow ? "mx-auto max-w-[380px]" : ""} ${className}`}
          style={{ aspectRatio: art.aspect }}
        >
          <Image
            src={art.src}
            alt={art.alt}
            fill
            priority={priority}
            sizes={sizes}
            style={{ objectFit: "cover", objectPosition: art.position ?? "center" }}
          />
        </div>
      );
    case "note":
      return (
        <div className={`frame relative flex aspect-[16/10] w-full items-center justify-center px-[10%] ${edge} ${className}`}>
          <p className="text-center font-serif text-[clamp(1.1rem,2.2vw,1.5rem)] italic leading-snug text-stone">« {art.text} »</p>
        </div>
      );
    case "script":
      return (
        <div
          className={`frame relative aspect-[16/10] w-full overflow-hidden px-[9%] py-[8%] font-mono text-[#1c1b19] ${edge} ${className}`}
          style={{ background: "#efece4" }}
        >
          {art.lines.map((line, i) => (
            <p key={line} className={`text-[12px] leading-[1.6] sm:text-[14px] ${i === 0 ? "font-bold uppercase" : "mt-[1em]"}`}>
              {line}
            </p>
          ))}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#efece4] to-transparent" aria-hidden />
        </div>
      );
    case "timeline":
      return <Timeline art={art} />;
    case "flow":
      return <Flow art={art} />;
    case "cards":
      return <Cards art={art} />;
    case "chat":
      return <Chat art={art} />;
  }
}

function ArrowMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="64"
      height="28"
      viewBox="0 0 64 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M2 14h58M48 3l12 11-12 11" />
    </svg>
  );
}

/**
 * Gabarit court : la transformation en ouverture, une illustration et une
 * phrase par étape, puis l'appel. Ni vidéo, ni section annexe.
 */
export function ResourceVisualPage({ resource: r, visual: v }: { resource: Resource; visual: ResourceVisual }) {
  const t = UI[r.locale];
  const path = resourcePath(r.locale, r.slug);
  const ctaRel = r.cta.affiliate ? SPONSORED_REL : undefined;

  const jsonLd = buildGraphJsonLd(
    {
      "@type": "HowTo",
      name: `${v.title} ${v.titleGold}`,
      description: r.metaDescription,
      inLanguage: r.locale,
      url: pageUrl(path),
      step: v.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
    },
    buildBreadcrumbList([
      { name: t.home, path: r.locale === "fr" ? "/" : "/en" },
      { name: t.hub, path: RESOURCE_BASE[r.locale] },
      { name: r.label, path },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <RevealObserver />

      {/* Ouverture : la transformation. Affichée sans animation, pour ne pas dépendre du script. */}
      <section className="band grain relative overflow-hidden" aria-labelledby="ressource-title">
        <div
          className="glow drift"
          style={{ width: "46vw", height: "46vw", maxWidth: 720, maxHeight: 720, right: "-8%", top: "30%" }}
          aria-hidden
        />
        <div className="container-x relative z-[4] pb-16 pt-[calc(var(--header-h)+2.5rem)] sm:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <LevelBadge locale={r.locale} className="mb-6" />
            <h1 id="ressource-title" className="display display-lg normal-case leading-[0.98] text-cream">
              {v.title} <span className="or">{v.titleGold}</span>
            </h1>
            <p className="lede mt-6">{v.lede}</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl items-center gap-x-8 gap-y-5 lg:grid-cols-[5fr_auto_7fr]">
            <figure>
              <Art art={v.before.art} sizes="(max-width: 1024px) 100vw, 480px" priority className="lg:-rotate-2" />
              <figcaption className="meta mt-4 text-center">{v.before.label}</figcaption>
            </figure>
            <ArrowMark className="mx-auto rotate-90 text-[color:var(--gold)] lg:rotate-0" />
            <figure>
              <Art art={v.after.art} sizes="(max-width: 1024px) 100vw, 680px" priority glow />
              <figcaption className="meta meta-strong mt-4 text-center">{v.after.label}</figcaption>
            </figure>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Cta href={r.cta.link.href} variant="primary" size="lg" rel={ctaRel}>
              {r.cta.link.label}
            </Cta>
            <Cta href="#etapes" size="lg">
              {t.seeSteps}
            </Cta>
          </div>
        </div>
      </section>

      {/* Les étapes : une image, une phrase */}
      <section id="etapes" className="section border-t border-line" aria-label={t.stepsLabel}>
        <ol className="container-x space-y-20 sm:space-y-28">
          {v.steps.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={s.title} className="reveal grid items-center gap-x-16 gap-y-8 lg:grid-cols-2">
                <div className={flip ? "lg:order-2" : ""}>
                  <span
                    className="display block text-[clamp(4.5rem,10vw,8rem)] leading-[0.8] text-transparent"
                    style={{ WebkitTextStroke: "1.5px var(--gold)" }}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <h2 className="h-section mt-6 text-cream">{s.title}</h2>
                  <p className="mt-4 max-w-md text-[18px] leading-relaxed text-stone">{s.text}</p>
                </div>
                <div className={flip ? "lg:order-1" : ""}>
                  <Art art={s.art} sizes="(max-width: 1024px) 100vw, 620px" />
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* L'appel */}
      <section className="band grain vignette relative border-t border-line" aria-labelledby="a-vous">
        <div
          className="glow drift"
          style={{ width: "36vw", height: "36vw", maxWidth: 560, maxHeight: 560, left: "50%", bottom: "-40%", transform: "translateX(-50%)" }}
          aria-hidden
        />
        <div className="container-x relative z-[4] py-24 text-center sm:py-32">
          <h2 id="a-vous" className="display display-md mx-auto max-w-3xl normal-case leading-[1] text-cream">
            {v.cta.title}
          </h2>
          <p className="lede mx-auto mt-6 max-w-xl">{v.cta.text}</p>
          <div className="mt-10 flex justify-center">
            <Cta href={r.cta.link.href} variant="primary" size="lg" rel={ctaRel}>
              {r.cta.link.label}
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
