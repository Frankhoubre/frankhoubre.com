import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList } from "@/components/BlogList";
import { getPostsByCategory } from "@/lib/blog";
import { toPostSummary } from "@/lib/blog-thumbnail";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbList, buildPageMetadata } from "@/lib/metadata";
import {
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
    title: `${label} — blog IA`,
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

  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: label, path: `/blog/category/${category}` },
        ])}
      />
      <div className="ds-page max-w-5xl">
      <header className="ds-cinematic-frame mb-12 max-w-4xl p-6 sm:p-8">
        <div className="ds-cinematic-beam" aria-hidden />
        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          Catégorie blog
        </p>
        <h1 className="relative z-10 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          <span className="ds-title-line">
            <span>{getCategoryLabel(category)}</span>
          </span>
        </h1>
        <p className="relative z-10 mt-4 text-lg leading-relaxed text-white/85">
          {CATEGORY_DESCRIPTIONS[category] ??
            `Tous les articles publiés dans cette catégorie.`}
        </p>
      </header>
      <BlogList
        posts={posts.map(toPostSummary)}
        initialCategory={category}
        gridLayout
      />
    </div>
    </>
  );
}
