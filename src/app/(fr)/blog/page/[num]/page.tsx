import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  POSTS_PER_ARCHIVE_PAGE,
  PaginatedBlogGrid,
} from "@/components/PaginatedBlogGrid";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { getAllPosts } from "@/lib/blog";
import {
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
} from "@/lib/metadata";
import { baseUrl, siteName } from "@/lib/site";

export const revalidate = 3600;

/**
 * Archives paginées du blog FR : /blog/page/2, /blog/page/3, …
 * La page 1 vit sur /blog (redirection pour éviter le doublon d'URL).
 * Objectif SEO : la liste principale (/blog) est un composant client qui ne
 * rend que 9 cartes dans le HTML ; ces pages statiques donnent à chaque
 * article ancien un vrai chemin de crawl interne, comme côté EN.
 */

function totalPagesCount(): number {
  return Math.max(1, Math.ceil(getAllPosts().length / POSTS_PER_ARCHIVE_PAGE));
}

export function generateStaticParams(): { num: string }[] {
  const total = totalPagesCount();
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    num: String(i + 2),
  }));
}

type PageProps = { params: Promise<{ num: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { num } = await params;
  const page = Number(num);
  return buildPageMetadata({
    title: `Blog IA, archives page ${page}`,
    description: `Archives du blog IA de ${siteName}, page ${page} : tutoriels vidéo et image IA, workflows, comparatifs d’outils et analyses, du plus récent au plus ancien.`,
    path: `/blog/page/${page}`,
  });
}

export default async function BlogArchivePage({ params }: PageProps) {
  const { num } = await params;
  const page = Number(num);
  if (!Number.isInteger(page) || page < 1) notFound();
  if (page === 1) redirect("/blog");

  const posts = getAllPosts();
  const totalPages = totalPagesCount();
  if (page > totalPages) notFound();

  const start = (page - 1) * POSTS_PER_ARCHIVE_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_ARCHIVE_PAGE);

  const jsonLd = buildGraphJsonLd(
    buildBreadcrumbList([
      { name: "Accueil", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: `Page ${page}`, path: `/blog/page/${page}` },
    ]),
    {
      "@type": "CollectionPage",
      name: `Blog ${siteName}, page ${page}`,
      url: `${baseUrl}/blog/page/${page}`,
      inLanguage: "fr-FR",
      isPartOf: { "@type": "Blog", name: `Blog ${siteName}`, url: `${baseUrl}/blog` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: pagePosts.map((p, i) => ({
          "@type": "ListItem",
          position: start + i + 1,
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
        index={String(page).padStart(2, "0")}
        kicker="Archives du blog"
        size="lg"
        title={`Blog IA vidéo et image, page ${page}`}
        lede={`Tous les articles publiés, du plus récent au plus ancien. Page ${page} sur ${totalPages}.`}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: `Page ${page}` },
            ]}
          />
        }
        aside={
          <p className="meta">
            Articles <span className="meta-strong tabular">{start + 1}</span> à{" "}
            <span className="meta-strong tabular">{start + pagePosts.length}</span>
          </p>
        }
      />
      <div className="container-x section-sm">
        <PaginatedBlogGrid
          posts={pagePosts}
          currentPage={page}
          totalPages={totalPages}
          locale="fr"
        />
      </div>
    </>
  );
}
