import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { getAllEnPosts } from "@/lib/blog-en";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
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
          {posts.map((p) => {
            const thumb = getPostThumbnail(p);
            return (
              <article
                key={p.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Link
                    href={`/en/blog/${p.slug}`}
                    className="relative block h-full w-full"
                  >
                    {thumb ? (
                      thumb.startsWith("http") ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={thumb}
                          alt={`Preview: ${p.frontmatter.title}`}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <Image
                          src={thumb}
                          alt={`Preview: ${p.frontmatter.title}`}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )
                    ) : (
                      <div className="flex h-full items-center justify-center text-neutral-500">
                        Preview
                      </div>
                    )}
                  </Link>
                  <span className="absolute left-3 top-3 z-10">
                    <Badge category={p.frontmatter.category} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time
                    dateTime={p.frontmatter.date}
                    className="text-xs text-neutral-700"
                  >
                    {dateFmt.format(new Date(`${p.frontmatter.date}T12:00:00`))}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold text-neutral-950">
                    <Link href={`/en/blog/${p.slug}`} className="hover:underline">
                      {p.frontmatter.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-700">
                    {p.frontmatter.excerpt}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
