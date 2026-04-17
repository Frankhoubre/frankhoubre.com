import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList } from "@/components/BlogList";
import { getPostsByCategory } from "@/lib/blog";
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

  return {
    title: label,
    description: desc,
    alternates: { canonical: `${baseUrl}/blog/category/${category}` },
    openGraph: {
      title: `${label} | ${siteName}`,
      description: desc,
      url: `${baseUrl}/blog/category/${category}`,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${label} | ${siteName}`,
      description: desc,
    },
  };
}

export const revalidate = 3600;

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  if (!isBlogCategorySlug(category)) notFound();

  const posts = getPostsByCategory(category);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <header className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {getCategoryLabel(category)}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-800">
          {CATEGORY_DESCRIPTIONS[category] ??
            `Tous les articles publiés dans cette catégorie.`}
        </p>
      </header>
      <BlogList posts={posts} initialCategory={category} gridLayout />
    </div>
  );
}
