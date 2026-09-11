import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getAllEnPosts } from "@/lib/blog-en";
import { EnBlogGrid, EN_POSTS_PER_PAGE } from "@/components/EnBlogGrid";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { buildPageMetadata } from "@/lib/metadata";

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
    title: `Blog, page ${page}`,
    description: `English articles on AI filmmaking, image and video, page ${page}. Tutorials, workflows and honest tool analysis.`,
    path: `/en/blog/page/${page}`,
  });
}

export default async function EnBlogPaginatedPage({ params }: PageProps) {
  const { num } = await params;
  const page = Number(num);
  if (!Number.isInteger(page) || page < 1) notFound();
  if (page === 1) redirect("/en/blog");

  const posts = getAllEnPosts();
  const totalPages = totalPagesCount();
  if (page > totalPages) notFound();

  const start = (page - 1) * EN_POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + EN_POSTS_PER_PAGE);

  return (
    <>
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
      <div className="container-x section-sm">
        <EnBlogGrid posts={pagePosts} currentPage={page} totalPages={totalPages} />
      </div>
    </>
  );
}
