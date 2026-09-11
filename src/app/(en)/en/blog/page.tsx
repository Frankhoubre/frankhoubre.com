import Link from "next/link";
import type { Metadata } from "next";
import { getAllEnPosts } from "@/lib/blog-en";
import { EnBlogGrid, EN_POSTS_PER_PAGE } from "@/components/EnBlogGrid";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Cta } from "@/components/ui/Cta";
import {
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
} from "@/lib/metadata";
import { baseUrl, siteName } from "@/lib/site";

export const revalidate = 3600;

const enBlogDescription =
  "Tutorials, workflows and analysis to create believable, cinematic AI images, videos and films.";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description: enBlogDescription,
  path: "/en/blog",
  alternateLanguages: { en: "/en/blog", fr: "/blog", "x-default": "/blog" },
});

export default function EnBlogPage() {
  const posts = getAllEnPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / EN_POSTS_PER_PAGE));
  const pagePosts = posts.slice(0, EN_POSTS_PER_PAGE);

  const blogJsonLd = buildGraphJsonLd(
    buildBreadcrumbList([
      { name: "Home", path: "/en" },
      { name: "Blog", path: "/en/blog" },
    ]),
    {
      "@type": "Blog",
      name: `${siteName} Blog (English)`,
      url: `${baseUrl}/en/blog`,
      description: enBlogDescription,
      inLanguage: "en-US",
      blogPost: pagePosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.frontmatter.title,
        url: `${baseUrl}/en/blog/${post.slug}`,
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
        kicker="Journal"
        title={
          <>
            Blog
            <span className="block text-fog">AI filmmaking, in the trenches</span>
          </>
        }
        lede="Concrete workflows and honest analysis to make AI images and videos that actually look cinematic."
        aside={
          <dl className="meta space-y-1">
            <div className="flex gap-3 lg:justify-end">
              <dt>Articles</dt>
              <dd className="meta-strong tabular">{posts.length}</dd>
            </div>
            <div className="flex gap-3 lg:justify-end">
              <dt>Pages</dt>
              <dd className="meta-strong tabular">{totalPages}</dd>
            </div>
          </dl>
        }
      />
      <div className="container-x section-sm">
        {posts.length === 0 ? (
          <div className="border border-line p-8 sm:p-12">
            <p className="meta">Coming soon</p>
            <h2 className="h-block mt-4 text-cream">New articles, every day</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-fog">
              The English blog is just getting started. A fresh AI news article
              lands here daily. In the meantime, the full library lives on the
              French site.
            </p>
            <div className="mt-6">
              <Cta href="/blog">Browse the French articles</Cta>
            </div>
          </div>
        ) : (
          <EnBlogGrid posts={pagePosts} currentPage={1} totalPages={totalPages} />
        )}
        <p className="mt-16 border-t border-line pt-6 text-sm text-fog">
          Want the full library? The{" "}
          <Link href="/blog" className="link" hrefLang="fr">
            French blog
          </Link>{" "}
          has every article.
        </p>
      </div>
    </>
  );
}
