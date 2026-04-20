import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { baseUrl } from "@/lib/site";

const pageTitle = "Liens - Podcast, réseaux et outils IA";
const pageDescription =
  "Tous mes liens utiles : outils IA, podcast Génération IA, réseaux sociaux et ressources AI Studios.";

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
      "Mon outil principal pour générer des vidéos et images IA au quotidien.",
    badge: "Outil principal",
    href: "https://goto.higgsfield.ai/YRxK5O",
    cta: "Essayer Higgsfield",
  },
  {
    name: "ElevenLabs",
    description:
      "Synthèse vocale et voix IA réalistes pour vidéos, podcasts et contenus audio.",
    badge: "Voix IA",
    href: "https://try.elevenlabs.io/4zj8lv8ns556",
    cta: "Essayer ElevenLabs",
  },
  {
    name: "HeyGen",
    description:
      "Création d'avatars et de présentateurs virtuels sans tournage en studio.",
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
      { label: "Flora Fauna", href: "https://dub.florafauna.ai/frank-houbre", external: true },
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
    title: "Podcast - Génération IA",
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
    title: "Réseaux",
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
    title: "Liens - Podcast, réseaux et outils IA | AI Studio",
    description: pageDescription,
    url: `${baseUrl}/liens`,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Liens - Podcast, réseaux et outils IA | AI Studio",
    description: pageDescription,
  },
};

function ExternalLinkButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-full cursor-pointer items-center justify-center rounded-xl border border-zinc-300 bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
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

      <div className="relative overflow-hidden bg-background text-foreground">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_55%_at_10%_-15%,rgba(37,99,235,0.09),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_12%,rgba(24,24,27,0.08),transparent_55%)]"
          aria-hidden
        />

        <section className="mx-auto max-w-5xl px-4 pb-10 pt-14 sm:px-6 sm:pt-20">
          <div className="ds-cinematic-frame ds-reveal relative overflow-hidden rounded-3xl p-6 text-white shadow-xl shadow-zinc-900/30 sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.24),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_40%)]"
            />
            <div className="relative">
              <p className="inline-flex rounded-full border border-blue-300/40 bg-blue-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                Hub officiel - Frank Houbre
              </p>
              <h1 className="ds-reveal ds-reveal-delay-1 mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Tous mes liens IA, podcast, plateformes et ressources en un seul endroit
              </h1>
              <p className="ds-reveal ds-reveal-delay-2 mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                Cette page regroupe mes outils utilises au quotidien, mes canaux de diffusion et
                les ressources pour apprendre a creer des images et videos IA de facon credible.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.ai-studios.fr/formation-ia-gratuite-video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ds-cta-primary ds-glow !rounded-xl !px-5 !py-3 !text-sm !font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Recevoir la formation gratuite
                </a>
                <a
                  href="https://www.skool.com/ai-studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ds-cta-ghost-light !rounded-xl !px-5 !py-3 !text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Rejoindre AI Studios
                </a>
              </div>
              <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950/95 shadow-sm">
                <Image
                  src="/images/liens-formation-workflow.png"
                  alt="Workflow de creation: idee, personnage, storyboard, puis film IA."
                  width={2048}
                  height={501}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="ds-section bg-white/70">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Selection principale
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                Les outils qui structurent mon workflow IA
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredTools.map((tool) => (
                <article
                  key={tool.name}
                  className="ds-card ds-reveal flex h-full flex-col p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{tool.name}</h3>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-700">
                      {tool.badge}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-700">{tool.description}</p>
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-cta-dark mt-5 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    {tool.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-section bg-zinc-50/70">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Ecosysteme complet
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                Acces rapide a toutes mes plateformes
              </h2>
            </div>

            <div className="space-y-8">
              {linkGroups.map((group) => (
                <section key={group.title} aria-label={group.title} className="ds-card ds-reveal rounded-2xl p-5 sm:p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {group.title}
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.links.map((link) =>
                      link.external ? (
                        <ExternalLinkButton
                          key={`${group.title}-${link.label}`}
                          label={link.label}
                          href={link.href}
                        />
                      ) : (
                        <Link
                          key={`${group.title}-${link.label}`}
                          href={link.href}
                          className="group inline-flex w-full cursor-pointer items-center justify-center rounded-xl border border-zinc-300 bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
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
        </section>
      </div>
    </>
  );
}
