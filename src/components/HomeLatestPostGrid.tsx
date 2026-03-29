import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { Badge } from "@/components/Badge";

type Props = {
  posts: Post[];
};

export function HomeLatestPostGrid({ posts }: Props) {
  const dateFmt = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const thumb = getPostThumbnail(post);
        return (
          <li key={post.slug}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-neutral-300 hover:shadow-md">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block h-full w-full"
                >
                  {thumb ? (
                    thumb.startsWith("http") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={thumb}
                        alt=""
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <Image
                        src={thumb}
                        alt=""
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    )
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-neutral-500">
                      Aperçu
                    </div>
                  )}
                </Link>
                <span className="absolute left-3 top-3 z-10">
                  <Badge
                    category={post.frontmatter.category}
                    href={`/blog/category/${post.frontmatter.category}`}
                  />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <time
                  dateTime={post.frontmatter.date}
                  className="text-xs text-neutral-700"
                >
                  {dateFmt.format(
                    new Date(`${post.frontmatter.date}T12:00:00`),
                  )}
                </time>
                <h2 className="mt-2 text-lg font-semibold leading-snug text-neutral-950">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-800">
                  {post.frontmatter.excerpt}
                </p>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
