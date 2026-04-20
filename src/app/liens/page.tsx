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
        <section className="mb-10">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-black p-5 shadow-[0_14px_36px_rgba(0,0,0,0.35)] sm:p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_40%)]"
            />
            <div className="relative">
              <p className="inline-flex rounded-full border border-amber-300/60 bg-amber-200/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-200">
                Offre exclusive - Formation gratuite
              </p>
              <h2 className="mt-3 text-lg font-semibold tracking-tight text-white sm:text-xl">
                Transformez une simple idée en film IA captivant
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Accédez gratuitement à une méthode pas à pas pour passer d'une
                page blanche à un storyboard solide, puis à une vidéo IA
                convaincante, même si vous débutez complètement.
              </p>
              <figure className="mt-4 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-950/95 shadow-sm">
                <Image
                  src="/images/liens-formation-workflow.png"
                  alt="Workflow de création : idée, personnage, storyboard, puis film IA."
                  width={2048}
                  height={501}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </figure>
              <a
                href="https://www.ai-studios.fr/formation-ia-gratuite-video"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-neutral-100 sm:w-auto"
              >
                Recevoir la formation gratuite pour réaliser votre film IA
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-2" aria-label="Outils vedettes">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Mes outils préférés
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
