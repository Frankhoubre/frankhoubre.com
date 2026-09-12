import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { BuzzBeacon } from "@/components/buzz/BuzzBeacon";
import { BuzzTrackedLink } from "@/components/buzz/BuzzTrackedLink";
import { CopyPromptButton } from "@/components/buzz/CopyPromptButton";
import { ResendAccessForm } from "@/components/buzz/ResendAccessForm";
import { CineHero } from "@/components/funnel/CineHero";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { Arrow } from "@/components/ui/Cta";
import {
  BUZZ_ACCESS_COOKIE,
  BUZZ_PATHS,
  IMAGINODE_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/buzz/config";
import { buzzContent } from "@/lib/buzz/content";
import { readBuzzAccessToken } from "@/lib/funnel/security";
import { buildPageMetadata } from "@/lib/metadata";

const c = buzzContent.access;

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildPageMetadata({
  title: c.metaTitle,
  titleAbsolute: c.metaTitle,
  description: "Your personal access to the method and the prompt behind the hammock video.",
  path: BUZZ_PATHS.access,
  // Page réservée aux acheteurs : jamais indexée.
  noIndex: true,
});

const HERO = {
  src: "/images/formation/hero.webp",
  alt: "Film still: a silhouette in a coat on a monumental concrete terrace above the city at dawn",
};

function NoAccess() {
  return (
    <FunnelFrame locale="en">
      <div className="container-x py-16 sm:py-24">
        <div className="max-w-xl border border-line-strong p-6 sm:p-8">
          <p className="meta">Viral AI videos</p>
          <h1 className="h-block mt-4 text-cream">{c.noAccessTitle}</h1>
          <p className="mt-4 text-[15px] leading-relaxed text-fog">{c.noAccessBody}</p>
          <p className="mt-6">
            <Link href={BUZZ_PATHS.sales} className="btn btn-primary">
              <span>{c.noAccessCta}</span>
              <Arrow />
            </Link>
          </p>
          <div className="mt-8 border-t border-line pt-6">
            <h2 className="meta">{c.lostTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-fog">{c.lostBody}</p>
            <div className="mt-4">
              <ResendAccessForm label={c.lostLabel} cta={c.lostCta} done={c.lostDone} error={c.lostError} />
            </div>
          </div>
        </div>
      </div>
    </FunnelFrame>
  );
}

export default async function ViralAiVideosAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string; welcome?: string }>;
}) {
  const { t, welcome } = await searchParams;
  const jar = await cookies();
  const token = t ?? jar.get(BUZZ_ACCESS_COOKIE)?.value ?? "";
  const email = token ? readBuzzAccessToken(token) : null;
  if (!email) return <NoAccess />;

  const banner = welcome === "1" ? c.welcome : welcome === "back" ? c.welcomeBack : null;

  return (
    <FunnelFrame locale="en">
      <BuzzBeacon event="buzz_access_view" />
      <RevealObserver />

      <CineHero size="compact" base={HERO}>
        <div className="container-x flex flex-1 flex-col justify-end pb-12 pt-12 sm:pt-16">
          {banner ? (
            <div role="status" className="mb-8 max-w-3xl border border-amber/70 bg-amber/10 px-4 py-3 text-sm leading-relaxed text-cream">
              {banner}
            </div>
          ) : null}
          <p className="meta meta-strong reveal">00 / {c.kicker}</p>
          <h1 className="reveal mt-6 max-w-4xl text-[clamp(2rem,4.8vw,4.25rem)] leading-[0.98] tracking-[-0.03em] text-cream" data-delay="0.1">
            {c.title}
          </h1>
          {c.intro.map((p, i) => (
            <p key={p} className={`${i === 0 ? "lede" : "text-[15px] leading-relaxed text-stone"} reveal mt-6 max-w-2xl`} data-delay={`${0.2 + i * 0.1}`}>
              {p}
            </p>
          ))}
        </div>
      </CineHero>

      <section className="section border-t border-line" aria-labelledby="video-title">
        <div className="container-x grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <p className="meta">01 / Reference</p>
            <h2 id="video-title" className="h-block mt-4 text-cream">
              {c.videoTitle}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="text-[15px] leading-relaxed text-fog">{c.videoBody}</p>
            <p className="mt-6">
              <BuzzTrackedLink event="click_instagram" detail="access" href={INSTAGRAM_URL} className="btn">
                <span>
                  {c.videoCta} · @{INSTAGRAM_HANDLE}
                </span>
                <Arrow />
              </BuzzTrackedLink>
            </p>
          </div>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="steps-title">
        <div className="container-x">
          <p className="meta">02 / Method</p>
          <h2 id="steps-title" className="h-section mt-5">
            {c.stepsTitle}
          </h2>
          <ol className="mt-12 border-t border-line">
            {c.steps.map((s, i) => (
              <li key={s.title} className="grid-12 reveal gap-y-4 border-b border-line py-8">
                <div className="col-span-12 lg:col-span-4">
                  <p className="meta meta-strong tabular">0{i + 1}</p>
                  <h3 className="h-block mt-3 text-cream">{s.title}</h3>
                </div>
                <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                  {s.body.map((p) => (
                    <p key={p} className="mt-3 text-[15px] leading-relaxed text-fog first:mt-0">
                      {p}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="prompt-title">
        <div className="container-x">
          <p className="meta">03 / Prompt</p>
          <h2 id="prompt-title" className="h-section mt-5">
            {c.promptTitle}
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-fog">{c.promptIntro}</p>
          <pre
            id="buzz-prompt"
            className="mt-8 overflow-x-auto whitespace-pre-wrap border border-line-strong bg-charcoal-2 p-5 font-mono text-sm leading-relaxed text-cream"
          >
            {c.prompt}
          </pre>
          <div className="mt-4">
            <CopyPromptButton text={c.prompt} label={c.copy} doneLabel={c.copied} />
          </div>

          <h3 className="meta mt-12">{c.settingsTitle}</h3>
          <dl className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-3">
            {c.settings.map((s) => (
              <div key={s.label} className="bg-charcoal p-4">
                <dt className="meta text-[10px]">{s.label}</dt>
                <dd className="mt-2 text-sm text-cream">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="tools-title">
        <div className="container-x grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <p className="meta">04 / Tools</p>
            <h2 id="tools-title" className="h-block mt-4 text-cream">
              {c.toolsTitle}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            {c.toolsBody.map((p) => (
              <p key={p} className="mt-3 text-[15px] leading-relaxed text-fog first:mt-0">
                {p}
              </p>
            ))}
            <p className="mt-6">
              <BuzzTrackedLink event="click_imaginode" detail="access" href={IMAGINODE_URL} className="btn btn-primary">
                <span>{c.toolsCta}</span>
                <Arrow />
              </BuzzTrackedLink>
            </p>
          </div>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="checklist-title">
        <div className="container-x grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <p className="meta">05 / Checklist</p>
            <h2 id="checklist-title" className="h-block mt-4 text-cream">
              {c.checklistTitle}
            </h2>
          </div>
          <ul className="col-span-12 border-t border-line lg:col-span-7 lg:col-start-6">
            {c.checklist.map((item) => (
              <li key={item} className="flex gap-3 border-b border-line py-3 text-[15px] leading-relaxed text-stone">
                <span className="mt-[0.7em] h-px w-4 shrink-0 bg-fog" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-sm border-t border-line" aria-labelledby="keep-title">
        <div className="container-x">
          <div className="max-w-2xl border border-line p-6 sm:p-8">
            <h2 id="keep-title" className="meta">
              {c.keepTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-fog">{c.keepBody}</p>
          </div>
        </div>
      </section>
    </FunnelFrame>
  );
}
