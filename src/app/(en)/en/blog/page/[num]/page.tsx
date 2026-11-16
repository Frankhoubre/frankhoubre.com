import { FormationCta } from "@/components/article/FormationCta";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getAllEnPosts } from "@/lib/blog-en";
import { EnBlogGrid, EN_POSTS_PER_PAGE } from "@/components/EnBlogGrid";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbList, buildGraphJsonLd, buildPageMetadata } from "@/lib/metadata";
import { baseUrl, siteName } from "@/lib/site";

export const revalidate = 3600;

/**
 * Pagination serveur du blog EN : /en/blog/page/2, /en/blog/page/3, …
 * Page 1 vit sur /en/blog (redirection pour éviter le doublon d'URL).
 * Objectif SEO : chaque article garde un chemin de crawl interne réel
 * au lieu d'une page unique de 200+ cartes (~1 Mo de HTML).
 */

function totalPagesCount(): number {
  return Math.max(1, Math.ceil(getAllEnPosts().length / EN_POSTS_PER_PAGE));
}

export function generateStaticParams(): { num: string }[] {
  const total = totalPagesCount();
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    num: String(i + 2),
  }));
}

type PageProps = { params: Promise<{ num: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { num } = await params;
  const page = Number(num);
  return buildPageMetadata({
    title: `AI filmmaking blog, page ${page}`,
    description: `English articles on AI filmmaking, image and video, page ${page}: tutorials, workflows and honest tool analysis, newest first, by Frank Houbre.`,
    path: `/en/blog/page/${page}`,
  });
}

export default async function EnBlogPaginatedPage({ params }: PageProps) {
  const { num } = await params;
  const page = Number(num);
  if (!Number.isInteger(page) || page < 1) notFound();
  if (page === 1) permanentRedirect("/en/blog");

  const posts = getAllEnPosts();
  const totalPages = totalPagesCount();
  if (page > totalPages) notFound();

  const start = (page - 1) * EN_POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + EN_POSTS_PER_PAGE);

  // Même graphe que les archives FR : BreadcrumbList + CollectionPage + ItemList.
  const jsonLd = buildGraphJsonLd(
    buildBreadcrumbList([
      { name: "Home", path: "/en" },
      { name: "Blog", path: "/en/blog" },
      { name: `Page ${page}`, path: `/en/blog/page/${page}` },
    ]),
    {
      "@type": "CollectionPage",
      name: `${siteName} Blog (English), page ${page}`,
      url: `${baseUrl}/en/blog/page/${page}`,
      inLanguage: "en-US",
      isPartOf: { "@type": "Blog", name: `${siteName} Blog (English)`, url: `${baseUrl}/en/blog` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: pagePosts.map((p, i) => ({
          "@type": "ListItem",
          position: start + i + 1,
          url: `${baseUrl}/en/blog/${p.slug}`,
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
        kicker="Blog archive"
        size="lg"
        title={`AI filmmaking, in the trenches, page ${page}`}
        lede={`Every English article, newest first. Page ${page} of ${totalPages}.`}
        breadcrumb={
          <Breadcrumb
            label="Breadcrumb"
            items={[
              { label: "Home", href: "/en" },
              { label: "Blog", href: "/en/blog" },
              { label: `Page ${page}` },
            ]}
          />
        }
      />
      <div className="container-x section-sm pt-8 sm:pt-10">
        <EnBlogGrid posts={pagePosts} currentPage={page} totalPages={totalPages} />
        <FormationCta locale="en" placement="listing" className="mt-20" />
      </div>
    </>
  );
}
