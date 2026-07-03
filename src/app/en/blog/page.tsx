import Link from "next/link";
import type { Metadata } from "next";
import { getAllEnPosts } from "@/lib/blog-en";
import { EnBlogGrid, EN_POSTS_PER_PAGE } from "@/components/EnBlogGrid";
import { JsonLd } from "@/components/JsonLd";
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
    <div className="ds-page">
      <JsonLd data={blogJsonLd} />
      <section className="ds-cinematic-frame p-6 sm:p-8">
        <div className="relative z-10">
          <p className="ds-eyebrow text-white/70">Blog</p>
          <h1 className="relative z-10 mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            AI filmmaking, in the trenches
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Concrete workflows and honest analysis to make AI images and videos
            that actually look cinematic.
          </p>
        </div>
      </section>

      {posts.length === 0 ? (
        <div className="ds-card mt-10 p-8 text-center">
          <h2 className="text-xl font-semibold text-neutral-950">
            New articles, every day
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-700">
            The English blog is just getting started. A fresh AI news article
            lands here daily. In the meantime, the full library lives on the
            French site.
          </p>
          <div className="mt-6">
            <Link href="/blog" className="ds-cta-primary">
              Browse the French articles
            </Link>
          </div>
        </div>
      ) : (
        <EnBlogGrid posts={pagePosts} currentPage={1} totalPages={totalPages} />
      )}
    </div>
  );
}
