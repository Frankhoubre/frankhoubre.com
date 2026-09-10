import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { Badge } from "@/components/Badge";

type Props = {
  posts: Post[];
  locale?: "fr" | "en";
};

const COPY = {
  fr: { title: "Continuer la lecture", preview: "Aperçu", base: "/blog" },
  en: { title: "Keep reading", preview: "Preview", base: "/en/blog" },
} as const;

export function RelatedPosts({ posts, locale = "fr" }: Props) {
  if (!posts.length) return null;
  const copy = COPY[locale];
  const dateFmt = new Intl.DateTimeFormat(locale === "en" ? "en-US" : "fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="mt-16 border-t border-[rgba(228,220,210,0.95)] pt-12">
      <h2 className="text-lg text-neutral-950">{copy.title}</h2>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const thumb = getPostThumbnail(post);
          const href = `${copy.base}/${post.slug}`;
          return (
            <li key={post.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(228,220,210,0.95)] bg-white shadow-sm transition hover:border-[rgba(224,112,32,0.5)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Link href={href} className="relative block h-full w-full">
                    {thumb ? (
                      thumb.startsWith("http") ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={thumb}
                          alt={`${copy.preview} : ${post.frontmatter.title}`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <Image
                          src={thumb}
                          alt={`${copy.preview} : ${post.frontmatter.title}`}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 50vw, 33vw"
                        />
                      )
                    ) : (
                      <div className="flex h-full items-center justify-center text-neutral-500">
                        {copy.preview}
                      </div>
                    )}
                  </Link>
                  <span className="absolute left-3 top-3 z-10">
                    <Badge
                      category={post.frontmatter.category}
                      href={
                        locale === "fr"
                          ? `/blog/category/${post.frontmatter.category}`
                          : undefined
                      }
                    />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <time dateTime={post.frontmatter.date} className="text-xs text-neutral-700">
                    {dateFmt.format(new Date(`${post.frontmatter.date}T12:00:00`))}
                  </time>
                  <h3 className="mt-2 text-sm leading-snug text-neutral-950 normal-case tracking-normal">
                    <Link href={href} className="hover:underline">
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-800">
                    {post.frontmatter.excerpt}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
