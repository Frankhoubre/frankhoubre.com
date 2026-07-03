import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { getAllPosts } from "@/lib/blog";
import { toPostSummary } from "@/lib/blog-thumbnail";
import { JsonLd } from "@/components/JsonLd";
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
      <div className="ds-page max-w-5xl">
      <header className="ds-cinematic-frame mb-12 max-w-4xl p-6 sm:p-8">
        <div className="ds-cinematic-beam" aria-hidden />
        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          Journal IA
        </p>
        <h1 className="relative z-10 mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          <span className="ds-title-line">
            <span>Blog</span>
          </span>
          <span className="ds-title-line delay-1">
            <span>cinéma, IA et production</span>
          </span>
        </h1>
        <p className="relative z-10 mt-4 text-lg leading-relaxed text-white/85">
          Idées, tutoriels et actualités signés {siteName}. Utilisez la recherche
          et les catégories pour parcourir les articles publiés.
        </p>
      </header>
      {/* PostSummary : ne jamais sérialiser le markdown complet vers le client. */}
      <BlogList
        posts={posts.map(toPostSummary)}
        gridLayout
        initialSearch={initialSearch}
      />
    </div>
    </>
  );
}
