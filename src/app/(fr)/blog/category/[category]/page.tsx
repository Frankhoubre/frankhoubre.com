import type { Metadata } from "next";
import Link from "next/link";
import { FormationCta } from "@/components/article/FormationCta";
import { notFound } from "next/navigation";
import { BlogList } from "@/components/BlogList";
import { Plus } from "@/components/FaqSection";
import { getPostsByCategory } from "@/lib/blog";
import { POSTS_PER_PAGE, toPostSummary } from "@/lib/blog-thumbnail";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import {
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
} from "@/lib/metadata";
import {
  baseUrl,
  blogCategories,
  getCategoryLabel,
  isBlogCategorySlug,
  siteName,
  type BlogCategorySlug,
} from "@/lib/site";

/**
 * Texte de chaque catégorie : `lede` s'affiche sous le titre, `meta` est la
 * meta description (120 à 155 caractères). Écrits à la main, sans promesse
 * qu'on ne tient pas dans les articles.
 */
const CATEGORY_COPY: Record<BlogCategorySlug, { lede: string; meta: string }> = {
  actualite: {
    lede: "Les annonces qui comptent quand on fabrique des images et des films avec l’IA : nouveaux modèles, changements de prix, décisions de justice, sorties en salles. À chaque fois, ce que ça change sur un projet réel.",
    meta: "Actualité de l’IA créative : nouveaux modèles vidéo et image, prix, droit d’auteur, films IA. Ce que chaque annonce change sur un projet réel.",
  },
  tutoriels: {
    lede: "Des méthodes pas à pas, issues de ma pratique de réalisateur IA : prompts, réglages, ordre des étapes et erreurs qui coûtent des crédits. De quoi refaire le plan chez soi, pas seulement comprendre le principe.",
    meta: "Tutoriels IA vidéo et image pas à pas : prompts, réglages, ordre des étapes et erreurs qui coûtent des crédits. Pour refaire le plan chez soi.",
  },
  notes: {
    lede: "Des notes courtes, écrites en cours de production : une observation, un réglage qui a marché, une idée à creuser. Moins abouties qu’un tutoriel, plus proches du carnet de tournage.",
    meta: "Notes de production sur l’IA créative : observations, réglages qui ont marché, idées à creuser. Le carnet de tournage d’un réalisateur IA.",
  },
  business: {
    lede: "Vendre une prestation vidéo IA, fixer un prix, trouver des clients, monter un studio : la partie du métier dont on parle peu, avec les chiffres quand je les ai et les limites quand il y en a.",
    meta: "Vivre de la création IA : vendre une prestation vidéo, fixer un prix, trouver des clients, monter un studio. Avec les chiffres et les limites.",
  },
  comparatifs: {
    lede: "Deux outils face à face, et ce que chacun donne vraiment : prix relevés à date, crédits consommés, points forts et défauts. Pour choisir selon le projet, pas selon la dernière annonce.",
    meta: "Comparatifs d’outils IA vidéo et image : prix relevés à date, crédits consommés, points forts et défauts. Pour choisir selon le projet.",
  },
  postproduction: {
    lede: "Ce qui se passe après la génération : étalonnage, upscaling, son, montage et finitions. C’est souvent là qu’une vidéo IA cesse d’avoir l’air générée.",
    meta: "Postproduction des vidéos IA : étalonnage, upscaling, son, montage et finitions. Là où une vidéo cesse d’avoir l’air générée.",
  },
  analyses: {
    lede: "Des prises de recul sur l’IA créative : ce qu’un modèle sait vraiment faire, où il casse, ce que les annonces ne disent pas. Les faits d’abord, mon avis ensuite, et je signale lequel est lequel.",
    meta: "Analyses de l’IA créative : ce qu’un modèle sait vraiment faire, où il casse, ce que les annonces ne disent pas. Les faits, puis mon avis.",
  },
  guides: {
    lede: "Les dossiers de fond du blog : un sujet traité en entier, du premier réglage au rendu final, avec les étapes dans l’ordre. À garder ouvert pendant qu’on travaille.",
    meta: "Guides complets sur l’IA vidéo et image : un sujet traité en entier, du premier réglage au rendu final, avec les étapes dans l’ordre.",
  },
};

export function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.slug }));
}

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!isBlogCategorySlug(category)) {
    return { title: `Blog | ${siteName}` };
  }
  const label = getCategoryLabel(category);
  const copy = CATEGORY_COPY[category];

  return buildPageMetadata({
    title: `${label} : blog IA`,
    description: copy.meta,
    path: `/blog/category/${category}`,
    openGraph: {
      title: `${label} | Blog ${siteName}`,
      description: copy.meta,
    },
  });
}

export const revalidate = 3600;

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  if (!isBlogCategorySlug(category)) notFound();

  const posts = getPostsByCategory(category);
  const label = getCategoryLabel(category);
  const categoryUrl = `${baseUrl}/blog/category/${category}`;
  const index = String(blogCategories.findIndex((c) => c.slug === category) + 1).padStart(2, "0");

  // CollectionPage + ItemList : la liste client ne rend que 9 cartes dans le
  // HTML, le JSON-LD expose donc l'inventaire de la catégorie aux moteurs.
  const jsonLd = buildGraphJsonLd(
    buildBreadcrumbList([
      { name: "Accueil", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: label, path: `/blog/category/${category}` },
    ]),
    {
      "@type": "CollectionPage",
      "@id": `${categoryUrl}#collection`,
      name: `${label} : articles du blog ${siteName}`,
      url: categoryUrl,
      description: CATEGORY_COPY[category].meta,
      inLanguage: "fr-FR",
      isPartOf: { "@type": "Blog", name: `Blog ${siteName}`, url: `${baseUrl}/blog` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: posts.length,
        itemListElement: posts.slice(0, 50).map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${baseUrl}/blog/${p.slug}`,
          name: p.frontmatter.title,
        })),
      },
    },
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        index={index}
        kicker="Catégorie du blog"
        title={label}
        lede={CATEGORY_COPY[category].lede}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Blog", href: "/blog" },
              { label },
            ]}
          />
        }
        aside={
          <p className="meta">
            <span className="meta-strong tabular">{posts.length}</span> article{posts.length > 1 ? "s" : ""}
          </p>
        }
      />
      <div className="container-x section-sm pt-8 sm:pt-10">
        <BlogList
          posts={posts.slice(0, POSTS_PER_PAGE).map(toPostSummary)}
          total={posts.length}
          initialCategory={category}
          gridLayout
        />

        {/* Index serveur : la liste ci-dessus (client) ne rend que 9 cartes dans
            le HTML. Ces liens donnent aux moteurs et aux lecteurs un chemin réel
            vers chaque article de la catégorie. */}
        {posts.length > 9 ? (
          <details className="faq-item mt-20">
            <summary>
              <h2 className="text-[inherit] font-[inherit] leading-[inherit] tracking-[inherit]">
                Tous les articles {label} ({posts.length})
              </h2>
              <Plus />
            </summary>
            {/* Mise en forme dans `.post-index` (globals.css) : pas de classes
                répétées sur 200 liens, le HTML reste sous le budget. */}
            <ul className="post-index">
              {posts.map((p) => (
                <li key={p.slug}>
                  <a href={`/blog/${p.slug}`}>{p.frontmatter.title}</a>
                </li>
              ))}
            </ul>
          </details>
        ) : null}

        <nav aria-label="Autres catégories du blog" className="mt-12 border-t border-line pt-8">
          <p className="meta">Autres catégories</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {blogCategories
              .filter((c) => c.slug !== category)
              .map((c) => (
                <li key={c.slug}>
                  <Link href={`/blog/category/${c.slug}`} className="chip">
                    {c.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/blog" className="chip">
                Tout le blog
              </Link>
            </li>
          </ul>
        </nav>

        <FormationCta locale="fr" placement="listing" className="mt-16" />
      </div>
    </>
  );
}
