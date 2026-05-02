import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { JsonLd } from "@/components/JsonLd";
import { getAllPosts } from "@/lib/blog";
import { baseUrl, siteName } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: `Articles et notes de ${siteName}.`,
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: `Blog | ${siteName}`,
    description: `Articles et notes de ${siteName}.`,
    url: `${baseUrl}/blog`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteName}`,
    description: `Articles et notes de ${siteName}.`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const pageUrl = `${baseUrl}/blog`;
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Blog | ${siteName}`,
        description: `Articles et notes de ${siteName}.`,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Articles du blog",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: posts.length,
        itemListElement: posts.slice(0, 20).map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${baseUrl}/blog/${post.slug}`,
          name: post.frontmatter.title,
        })),
      },
    ],
  };

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
              <span>cinema, IA et production</span>
            </span>
          </h1>
          <p className="relative z-10 mt-4 text-lg leading-relaxed text-white/85">
            Idees, tutoriels et actualites signes {siteName}. Utilisez la recherche
            et les catégories pour parcourir les articles publiés.
          </p>
        </header>
        <BlogList posts={posts} gridLayout />
      </div>
    </>
  );
}
