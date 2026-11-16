import type { Metadata } from "next";
import Link from "next/link";
import { FormationCta } from "@/components/article/FormationCta";
import { notFound } from "next/navigation";
import { BlogList } from "@/components/BlogList";
import { Plus } from "@/components/FaqSection";
import { getPostsByCategory } from "@/lib/blog";
import { toPostSummary } from "@/lib/blog-thumbnail";
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

const CATEGORY_DESCRIPTIONS: Partial<Record<BlogCategorySlug, string>> = {
  actualite:
    "Brèves, annonces et sujets d’actualité : articles classés sous Actualité.",
  tutoriels:
    "Guides pas à pas et tutoriels pratiques pour aller droit au but.",
  notes:
    "Notes de travail, réflexions courtes et brouillons utiles partagés.",
  business:
    "Studio, pricing, acquisition et stratégie pour monétiser une pratique créative IA.",
  comparatifs:
    "Comparatifs d’outils et de modèles pour choisir ce qui convient à ton usage.",
  postproduction:
    "Étalonnage, finitions et chaîne image après tournage ou génération.",
  analyses:
    "Analyses de fond sur les usages, les limites et les évolutions de l’IA créative.",
  guides:
    "Guides thématiques et parcours structurés pour avancer étape par étape.",
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
  const desc =
    CATEGORY_DESCRIPTIONS[category] ??
    `Articles de la catégorie « ${label} » sur le blog de ${siteName}.`;

  return buildPageMetadata({
    title: `${label} : blog IA`,
    description: `${desc} Parcourez les articles et tutoriels de la catégorie ${label}.`,
    path: `/blog/category/${category}`,
    openGraph: {
      title: `${label} | Blog ${siteName}`,
      description: desc,
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
      description: CATEGORY_DESCRIPTIONS[category],
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
        lede={CATEGORY_DESCRIPTIONS[category] ?? "Tous les articles publiés dans cette catégorie."}
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
      <div className="container-x section-sm">
        <BlogList posts={posts.map(toPostSummary)} initialCategory={category} gridLayout />

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
