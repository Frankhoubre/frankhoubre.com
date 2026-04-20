import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl } from "@/lib/site";

const pageTitle = "Liens - Podcast, reseaux et outils IA";
const pageDescription =
  "Tous mes liens utiles: outils IA, podcast Generation IA, reseaux sociaux et ressources AI Studios.";

type FeaturedTool = {
  name: string;
  description: string;
  badge: string;
  href: string;
  cta: string;
};

type LinkGroup = {
  title: string;
  links: Array<{ label: string; href: string; external?: boolean }>;
};

const featuredTools: FeaturedTool[] = [
  {
    name: "Higgsfield",
    description:
      "Mon outil principal pour generer des videos et images IA au quotidien.",
    badge: "Outil principal",
    href: "https://goto.higgsfield.ai/YRxK5O",
    cta: "Essayer Higgsfield",
  },
  {
    name: "ElevenLabs",
    description:
      "Synthese vocale et voix IA realistes pour videos, podcasts et contenus audio.",
    badge: "Voix IA",
    href: "https://try.elevenlabs.io/4zj8lv8ns556",
    cta: "Essayer ElevenLabs",
  },
  {
    name: "HeyGen",
    description:
      "Creation d'avatars et de presentateurs virtuels sans tournage en studio.",
    badge: "Avatars IA",
    href: "https://www.heygen.com/?sid=rewardful&via=frank-houbre",
    cta: "Essayer HeyGen",
  },
];

const linkGroups: LinkGroup[] = [
  {
    title: "Outils que j'utilise au quotidien",
    links: [
      { label: "WISP", href: "https://wisprflow.ai/r?BUSINESSDY1", external: true },
      { label: "Flora fauna", href: "https://dub.florafauna.ai/frank-houbre", external: true },
      { label: "Meshy", href: "https://www.meshy.ai/", external: true },
      { label: "Dzine", href: "https://www.dzine.ai/?via=frank-houbre", external: true },
      { label: "Metrical", href: "https://f.mtr.cool/JKAANJ", external: true },
      { label: "Proton", href: "https://go.getproton.me/aff_c?offer_id=26&aff_id=11173", external: true },
      { label: "Krotos", href: "https://krotos.studio/?rfsn=8772126.2bc91b", external: true },
      { label: "Tella", href: "https://www.youtube.com/watch?v=TaoYARoU7Lc&t=55s", external: true },
      { label: "OPUS", href: "https://www.opus.pro/?via=fdbcab", external: true },
    ],
  },
  {
    title: "Podcast - Generation IA",
    links: [
      {
        label: "Apple Podcasts",
        href: "https://podcasts.apple.com/fr/podcast/g%C3%A9n%C3%A9ration-ia/id1860623296",
        external: true,
      },
      { label: "Spotify", href: "https://open.spotify.com/show/5o77sq1qCLUagS4p904zPT", external: true },
      {
        label: "Amazon Music",
        href: "https://music.amazon.com/podcasts/17e9bf14-6a59-4e63-84b6-51b032cd6fbe/g%C3%A9n%C3%A9ration-ia",
        external: true,
      },
      { label: "Deezer", href: "https://www.deezer.com/fr/show/1002441922", external: true },
    ],
  },
  {
    title: "Reseaux",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/frank.houbre/", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/frank-houbre/", external: true },
      { label: "Pinterest", href: "https://fr.pinterest.com/04dgcq4lwno88zrfkv44xmfa8hc5iw/", external: true },
      { label: "Telegram", href: "https://t.me/businessdynamite", external: true },
      { label: "X (Twitter)", href: "https://x.com/BDFrankHoubre", external: true },
    ],
  },
  {
    title: "Autres outils",
    links: [{ label: "ScreenWeaver", href: "https://screenweaver.ai/", external: true }],
  },
  {
    title: "Site",
    links: [
      { label: "Rejoindre AI Studios (7 jours d'essai gratuit)", href: "https://www.skool.com/ai-studios", external: true },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "mailto:hello@businessdynamite.xyz", external: true },
    ],
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${baseUrl}/liens` },
  openGraph: {
    title: "Liens - Podcast, reseaux et outils IA | AI Studio",
    description: pageDescription,
    url: `${baseUrl}/liens`,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Liens - Podcast, reseaux et outils IA | AI Studio",
    description: pageDescription,
  },
};

function ExternalLinkButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-black px-5 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-neutral-900"
    >
      {label}
    </a>
  );
}

export default function LiensPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Liens AI Studio",
    description: pageDescription,
    url: `${baseUrl}/liens`,
    numberOfItems: featuredTools.length,
    itemListElement: featuredTools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      url: tool.href,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 p-2 shadow-sm">
          <a
            href="https://www.ai-studios.fr/formation-ia-gratuite-video"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-neutral-900 sm:text-base"
          >
            formation gratuite pour realiser votre filma avec l'ia meme si vous debutez
          </a>
        </div>

        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            AI Studios
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            Outils, podcast, reseaux et contact
          </p>
        </header>

        <section className="mt-12" aria-label="Outils vedettes">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Mes outils preferes
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {featuredTools.map((tool) => (
              <article
                key={tool.name}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                      {tool.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-700">
                    {tool.badge}
                  </span>
                </div>
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-900"
                >
                  {tool.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 space-y-9">
          {linkGroups.map((group) => (
            <section key={group.title} aria-label={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {group.title}
              </h2>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {group.links.map((link) =>
                  link.external ? (
                    <ExternalLinkButton key={`${group.title}-${link.label}`} label={link.label} href={link.href} />
                  ) : (
                    <Link
                      key={`${group.title}-${link.label}`}
                      href={link.href}
                      className="group inline-flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-black px-5 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-neutral-900"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
