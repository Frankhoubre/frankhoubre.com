import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { getAllEnPosts } from "@/lib/blog-en";
import { buildPageMetadata } from "@/lib/metadata";

export const revalidate = 3600;

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Tutorials, workflows and analysis to create believable, cinematic AI images, videos and films.",
  path: "/en/blog",
  alternateLanguages: { en: "/en/blog", fr: "/blog", "x-default": "/blog" },
});

export default function EnBlogPage() {
  const posts = getAllEnPosts();
  const dateFmt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="ds-page">
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="ds-card p-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-700">
                <Badge category={p.frontmatter.category} />
                <time dateTime={p.frontmatter.date}>
                  {dateFmt.format(new Date(`${p.frontmatter.date}T12:00:00`))}
                </time>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-neutral-950">
                <Link href={`/en/blog/${p.slug}`} className="hover:underline">
                  {p.frontmatter.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {p.frontmatter.excerpt}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
