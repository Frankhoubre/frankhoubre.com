import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import { ArticleHeader } from "@/components/ArticleHeader";
import { AuthorBox } from "@/components/AuthorBox";
import { createBlogMdxComponents } from "@/components/createBlogMdxComponents";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { RelatedPosts } from "@/components/RelatedPosts";
import { readingTimeMinutes } from "@/lib/blog";
import { getAllEnPosts, getEnPostBySlug, getRelatedEnPosts } from "@/lib/blog-en";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { prepareArticleMdxParts } from "@/lib/mdx-pipeline";
import {
  ORGANIZATION_ID,
  PERSON_ID,
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
} from "@/lib/metadata";
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

/** Markdown → texte brut pour les réponses du FAQPage JSON-LD. */
function stripMdSimple(s: string): string {
  return s
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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

  // Graphe aligné sur le FR : BlogPosting + BreadcrumbList + FAQPage (quand
  // l'article a une section FAQ). Le FAQPage nourrit les extraits enrichis
  // et les réponses des moteurs IA.
  const related = getRelatedEnPosts(slug, 3);
  const wordCount = raw.trim().split(/\s+/).filter(Boolean).length;

  const graphNodes: object[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      inLanguage: "en-US",
      datePublished: post.frontmatter.date,
      dateModified: post.frontmatter.dateModified ?? post.frontmatter.date,
      url,
      mainEntityOfPage: url,
      wordCount,
      timeRequired: `PT${minutes}M`,
      ...(img ? { image: [img] } : {}),
      author: {
        "@type": "Person",
        "@id": PERSON_ID,
        name: person.name,
        url: `${baseUrl}/en/about`,
        jobTitle: "AI trainer, AI filmmaker and image & video creator",
        image: `${baseUrl}${person.image}`,
        sameAs: [...person.sameAs],
      },
      publisher: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: siteName,
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/frank-houbre-about.png`,
          width: 1024,
          height: 1024,
        },
      },
    },
    buildBreadcrumbList([
      { name: "Home", path: "/en" },
      { name: "Blog", path: "/en/blog" },
      { name: post.frontmatter.title, path: `/en/blog/${slug}` },
    ]),
  ];
  if (faqPairs?.length) {
    graphNodes.push({
      "@type": "FAQPage",
      mainEntity: faqPairs.map((p) => ({
        "@type": "Question",
        name: p.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: stripMdSimple(p.answer),
        },
      })),
    });
  }
  const jsonLd = buildGraphJsonLd(...graphNodes);

  const mdxOpts = { mdxOptions: { remarkPlugins: [remarkGfm] } };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ReadingProgressBar />
      <div className="container-x page-top pb-20 sm:pb-28">
        <article className="mx-auto max-w-[45rem]">
          <ArticleHeader
            title={post.frontmatter.title}
            excerpt={post.frontmatter.excerpt}
            date={post.frontmatter.date}
            dateLabel={dateFmt.format(new Date(`${post.frontmatter.date}T12:00:00`))}
            minutesLabel={`${minutes} min read`}
            category={post.frontmatter.category}
            thumb={thumb}
            thumbAlt={`Illustration for “${post.frontmatter.title}”`}
            breadcrumb={[
              { label: "Home", href: "/en" },
              { label: "Blog", href: "/en/blog" },
              { label: post.frontmatter.title },
            ]}
            breadcrumbLabel="Breadcrumb"
            figureCaption="Fig. 01"
          />

          <div className="prose-cinema mt-12">
            {beforeMdx ? (
              <MDXRemote source={beforeMdx} components={components} options={mdxOpts} />
            ) : null}
            {faqPairs ? <FaqSection pairs={faqPairs} components={components} /> : null}
            {afterMdx ? (
              <MDXRemote source={afterMdx} components={components} options={mdxOpts} />
            ) : null}
          </div>

          <AuthorBox
            locale="en"
            imageSrc={`${baseUrl}${person.image}`}
            jobTitle="AI trainer, AI filmmaker and image & video creator."
            links={[
              { label: "About", href: "/en/about" },
              { label: "All articles", href: "/en/blog" },
            ]}
          />

          <RelatedPosts posts={related} locale="en" />
        </article>
      </div>
    </>
  );
}
