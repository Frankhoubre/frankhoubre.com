import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/Badge";
import { createBlogMdxComponents } from "@/components/createBlogMdxComponents";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { readingTimeMinutes } from "@/lib/blog";
import { getAllEnPosts, getEnPostBySlug } from "@/lib/blog-en";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { prepareArticleMdxParts } from "@/lib/mdx-pipeline";
import { buildPageMetadata } from "@/lib/metadata";
import { baseUrl, person, siteName } from "@/lib/site";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllEnPosts().map((p) => ({ slug: p.slug }));
}

function trunc(s: string, max: number): string {
  const t = s.trim();
  return t.length <= max ? t : `${t.slice(0, max - 1).trimEnd()}…`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getEnPostBySlug(slug);
  if (!post) return { title: "Blog" };
  const thumb = getPostThumbnail(post);
  const ogImage = thumb
    ? thumb.startsWith("http")
      ? thumb
      : `${baseUrl}${thumb}`
    : undefined;
  return buildPageMetadata({
    title: trunc(post.frontmatter.title, 60),
    titleAbsolute: trunc(post.frontmatter.title, 60),
    description: trunc(post.frontmatter.excerpt, 160),
    path: `/en/blog/${slug}`,
    alternateLanguages: {
      en: `/en/blog/${slug}`,
      fr: `/blog/${slug}`,
      "x-default": `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.dateModified ?? post.frontmatter.date,
      ...(ogImage ? { images: [{ path: ogImage, width: 1200, height: 630 }] } : {}),
    },
    authors: [{ name: person.name, url: person.url }],
  });
}

export default async function EnBlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getEnPostBySlug(slug);
  if (!post) notFound();

  const raw = post.content;
  const { beforeMdx, afterMdx, faqPairs } = prepareArticleMdxParts(raw);
  const thumb = getPostThumbnail(post);
  const components = createBlogMdxComponents(slug, {
    skipFirstBodyImage: Boolean(post.frontmatter.thumbnail?.trim()),
    articleTitle: post.frontmatter.title,
  });
  const minutes = readingTimeMinutes(raw);
  const dateFmt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const url = `${baseUrl}/en/blog/${slug}`;
  const img = thumb
    ? thumb.startsWith("http")
      ? thumb
      : `${baseUrl}${thumb}`
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    inLanguage: "en",
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.dateModified ?? post.frontmatter.date,
    url,
    mainEntityOfPage: url,
    ...(img ? { image: [img] } : {}),
    author: {
      "@type": "Person",
      name: person.name,
      url: `${baseUrl}/en/about`,
    },
    publisher: { "@type": "Organization", name: siteName, url: baseUrl },
  };

  const mdxOpts = { mdxOptions: { remarkPlugins: [remarkGfm] } };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-14">
        <article>
          <section className="ds-hero p-5 sm:p-6">
            <nav className="mb-4 text-sm text-neutral-700" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/en" className="ds-link hover:text-neutral-950">
                    Home
                  </Link>
                </li>
                <li aria-hidden>›</li>
                <li>
                  <Link href="/en/blog" className="ds-link hover:text-neutral-950">
                    Blog
                  </Link>
                </li>
              </ol>
            </nav>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-800">
              <Badge category={post.frontmatter.category} />
              <time dateTime={post.frontmatter.date}>
                {dateFmt.format(new Date(`${post.frontmatter.date}T12:00:00`))}
              </time>
              <span aria-hidden>·</span>
              <span>{minutes} min read</span>
            </div>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {post.frontmatter.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-neutral-800">
              {post.frontmatter.excerpt}
            </p>
          </section>

          {thumb ? (
            <div className="relative mt-10 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              {thumb.startsWith("http") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={thumb}
                  alt={`Illustration for “${post.frontmatter.title}”`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={thumb}
                  alt={`Illustration for “${post.frontmatter.title}”`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              )}
            </div>
          ) : null}

          <div className="prose-cinema mt-10 max-w-none">
            {beforeMdx ? (
              <MDXRemote source={beforeMdx} components={components} options={mdxOpts} />
            ) : null}
            {faqPairs ? <FaqSection pairs={faqPairs} components={components} /> : null}
            {afterMdx ? (
              <MDXRemote source={afterMdx} components={components} options={mdxOpts} />
            ) : null}
          </div>

          <footer className="ds-hero mt-14 rounded-2xl px-5 py-8 sm:px-6">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Author</p>
            <p className="mt-3 font-semibold text-neutral-950">{person.name}</p>
            <p className="mt-1 text-sm text-neutral-600">
              AI trainer, AI filmmaker and image &amp; video creator.
            </p>
            <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              <Link href="/en/about" className="ds-link text-neutral-950">
                About
              </Link>
              <Link href="/en/blog" className="ds-link text-neutral-950">
                All articles
              </Link>
            </nav>
          </footer>
        </article>
      </div>
    </>
  );
}
