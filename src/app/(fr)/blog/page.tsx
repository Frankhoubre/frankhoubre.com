import type { Metadata } from "next";
import Link from "next/link";
import { BlogList } from "@/components/BlogList";
import {
  POSTS_PER_ARCHIVE_PAGE,
  blogPagePath,
} from "@/components/PaginatedBlogGrid";
import { getAllPosts } from "@/lib/blog";
import { toPostSummary } from "@/lib/blog-thumbnail";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildBreadcrumbList, buildGraphJsonLd, buildPageMetadata } from "@/lib/metadata";
import { baseUrl, siteName } from "@/lib/site";

export const revalidate = 3600;

const blogDescription = `Tutoriels IA, workflows image et vidéo, analyses d’outils et méthodes de direction artistique par ${siteName}. Lisez le blog pour progresser vite.`;

export const metadata: Metadata = buildPageMetadata({
  title: "Blog IA vidéo et image",
  description: blogDescription,
  path: "/blog",
  alternateLanguages: { fr: "/blog", en: "/en/blog", "x-default": "/blog" },
  openGraph: {
    title: `Blog IA vidéo et image | ${siteName}`,
    description: blogDescription,
  },
});

type PageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function BlogIndexPage({ searchParams }: PageProps) {
  const posts = getAllPosts();
  const { q } = await searchParams;
  const initialSearch = typeof q === "string" ? q : "";
  const archivePages = Math.max(1, Math.ceil(posts.length / POSTS_PER_ARCHIVE_PAGE));

  const blogJsonLd = buildGraphJsonLd(
    buildBreadcrumbList([
      { name: "Accueil", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
    {
      "@type": "Blog",
      name: `Blog ${siteName}`,
      url: `${baseUrl}/blog`,
      description: blogDescription,
      inLanguage: "fr-FR",
      blogPost: posts.slice(0, 24).map((post) => ({
        "@type": "BlogPosting",
        headline: post.frontmatter.title,
        url: `${baseUrl}/blog/${post.slug}`,
        datePublished: post.frontmatter.date,
        dateModified: post.frontmatter.dateModified ?? post.frontmatter.date,
      })),
    },
  );

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <PageHeader
        index="02"
        kicker="Journal IA"
        title={
          <>
            Blog
            <span className="block text-fog">cinéma, IA et production</span>
          </>
        }
        lede={`Idées, tutoriels et actualités signés ${siteName}. Utilisez la recherche et les catégories pour parcourir les articles publiés.`}
        aside={
          <dl className="meta space-y-1">
            <div className="flex gap-3 lg:justify-end">
              <dt>Articles</dt>
              <dd className="meta-strong tabular">{posts.length}</dd>
            </div>
            <div className="flex gap-3 lg:justify-end">
              <dt>Pages</dt>
              <dd className="meta-strong tabular">{archivePages}</dd>
            </div>
            <div className="flex gap-3 lg:justify-end">
              <dt>Flux</dt>
              <dd>
                <Link href="/feed.xml" className="link-muted">
                  RSS
                </Link>
              </dd>
            </div>
          </dl>
        }
      />

      <div className="container-x section-sm">
        {/* PostSummary : ne jamais sérialiser le markdown complet vers le client. */}
        <BlogList
          posts={posts.map(toPostSummary)}
          gridLayout
          initialSearch={initialSearch}
        />

        {/* Archives statiques : la liste ci-dessus est un composant client qui ne
            rend que 9 cartes dans le HTML. Ces liens donnent aux moteurs un chemin
            réel vers chaque article ancien. */}
        {archivePages > 1 ? (
          <nav aria-label="Archives du blog par page" className="mt-20 border-t border-line pt-8">
            <div className="grid-12 gap-y-6">
              <div className="col-span-12 lg:col-span-4">
                <p className="meta">Archives</p>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  {posts.length} articles répartis sur {archivePages} pages, du plus récent au plus
                  ancien.
                </p>
              </div>
              <ul className="col-span-12 flex flex-wrap gap-2 lg:col-span-8">
                {Array.from({ length: archivePages }, (_, i) => i + 1).map((n) => (
                  <li key={n}>
                    <Link
                      href={blogPagePath("fr", n)}
                      className="chip min-w-9 justify-center px-2"
                      aria-current={n === 1 ? "page" : undefined}
                    >
                      {n}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        ) : null}
      </div>
    </>
  );
}
