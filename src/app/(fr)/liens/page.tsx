import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Arrow, Cta } from "@/components/ui/Cta";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
  pageUrl,
} from "@/lib/metadata";
import { FORMATION_PROMO_URL } from "@/lib/formation-promo";
import { siteName } from "@/lib/site";

const pageTitle = "Liens : podcast, réseaux et outils IA";
const pageDescription =
  "Liens utiles de Frank Houbre : outils IA, podcast Génération IA, réseaux sociaux et ressources AI Studios. Suivez et accédez aux ressources en un clic.";

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
    href: "https://higgsfield.ai/?fpr=frank70",
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
  {
    name: "ScreenWeaver",
    description:
      "Écriture de scénario, storyboard et workflows d'images reliés à la scène : le texte reste la colonne vertébrale du projet.",
    badge: "Écriture & storyboard",
    href: "https://screenweaver.ai/",
    cta: "Découvrir ScreenWeaver",
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
    title: "Site",
    links: [
      { label: "Rejoindre AI Studios", href: "https://www.skool.com/ai-studios", external: true },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "mailto:hello@businessdynamite.xyz", external: true },
    ],
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/liens",
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
  },
});

const rowClass =
  "group flex items-center justify-between gap-4 border-t border-line py-3.5 text-[15px] text-stone no-underline transition-colors duration-200 hover:text-cream last:border-b";

export default function LiensPage() {
  const jsonLd = buildGraphJsonLd(
    {
      "@type": "ItemList",
      name: `Liens | ${siteName}`,
      description: pageDescription,
      url: pageUrl("/liens"),
      numberOfItems: featuredTools.length,
      itemListElement: featuredTools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tool.name,
        url: tool.href,
      })),
    },
    buildBreadcrumbList([
      { name: "Accueil", path: "/" },
      { name: "Liens", path: "/liens" },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHeader
        index="08"
        kicker="Hub officiel"
        title={
          <>
            Liens
            <span className="block text-fog">outils, podcast, réseaux</span>
          </>
        }
        lede="Mes outils utilisés au quotidien, mes canaux de diffusion et les ressources pour apprendre à créer des images et vidéos IA de façon crédible, en un seul endroit."
        aside={
          <div className="flex flex-col gap-3 lg:items-end">
            <Cta href={FORMATION_PROMO_URL} variant="primary" size="sm">
              Formation gratuite
            </Cta>
            <Cta href="https://www.skool.com/ai-studios" size="sm">
              Rejoindre AI Studios
            </Cta>
          </div>
        }
      />

      <section className="container-x section-sm" aria-label="Workflow de création">
        <figure>
          <div className="frame frame-grain frame-marks relative aspect-[2048/501] min-h-[7rem]">
            <Image
              src="/images/liens-formation-workflow.png"
              alt="Workflow de création : idée, personnage, storyboard, puis film IA."
              fill
              sizes="(max-width: 1024px) 100vw, 1344px"
              className="object-cover"
            />
          </div>
          <figcaption className="meta mt-3">Fig. 01 · Idée, personnage, storyboard, film</figcaption>
        </figure>
      </section>

      <section className="section border-t border-line" aria-labelledby="selection">
        <div className="container-x">
          <SectionHeader
            index="01"
            kicker="Sélection principale"
            id="selection"
            title="Les outils qui structurent mon workflow IA"
          />
          <ol className="mt-14 border-t border-line">
            {featuredTools.map((tool, i) => (
              <li key={tool.name} className="border-b border-line">
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid-12 items-baseline gap-y-3 py-7 no-underline"
                >
                  <span className="meta meta-strong tabular col-span-2 lg:col-span-1">0{i + 1}</span>
                  <span className="meta col-span-10 lg:col-span-2">{tool.badge}</span>
                  <span className="h-block col-span-12 text-cream lg:col-span-3">{tool.name}</span>
                  <span className="col-span-12 text-[15px] leading-relaxed text-fog lg:col-span-4">{tool.description}</span>
                  <span className="arrow-link col-span-12 mt-2 justify-self-start text-fog transition-colors duration-200 group-hover:text-cream lg:col-span-2 lg:mt-0 lg:justify-self-end">
                    <span>{tool.cta}</span>
                    <Arrow />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="ecosysteme">
        <div className="container-x">
          <SectionHeader index="02" kicker="Écosystème complet" id="ecosysteme" title="Accès rapide à toutes mes plateformes" />
          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {linkGroups.map((group, gi) => (
              <section key={group.title} aria-label={group.title}>
                <p className="meta"><span className="meta-strong tabular">0{gi + 1}</span> &nbsp;/&nbsp; {group.title}</p>
                <ul className="mt-4">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                          <span>{link.label}</span>
                          <span className="text-fog transition-colors group-hover:text-cream"><Arrow /></span>
                        </a>
                      ) : (
                        <Link href={link.href} className={rowClass}>
                          <span>{link.label}</span>
                          <span className="text-fog transition-colors group-hover:text-cream"><Arrow /></span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
