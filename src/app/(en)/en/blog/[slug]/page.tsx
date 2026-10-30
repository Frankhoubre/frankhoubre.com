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
import { ArticleMobileToc } from "@/components/ArticleMobileToc";
import { ArticleToc } from "@/components/ArticleToc";
import { AffiliateDisclosure } from "@/components/article/AffiliateDisclosure";
import { ARTICLE_LABELS } from "@/components/article/labels";
import {
  extractYouTubeVideoIds,
  getPostBySlug,
  isPostPublished,
  readingTimeMinutes,
} from "@/lib/blog";
import { buildArticleToc } from "@/lib/blog-toc";
import { buildArticleVideoObject } from "@/lib/article-video";
import { realModifiedDate } from "@/lib/article-dates";
import { getAllEnPosts, getEnPostBySlug, getRelatedEnPosts } from "@/lib/blog-en";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { prepareArticleMdxParts } from "@/lib/mdx-pipeline";
import {
  ORGANIZATION_ID,
  PERSON_ID,
  buildBreadcrumbList,
  buildGraphJsonLd,
  articleSerpTitle,
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

/** Version FR publiée de l'article, pour le hreflang. */
function hasPublishedFr(slug: string): boolean {
  const fr = getPostBySlug(slug);
  return fr !== null && isPostPublished(fr);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getEnPostBySlug(slug);
  if (!post || !isPostPublished(post)) return { title: "Blog" };
  const { title, titleAbsolute } = articleSerpTitle(post.frontmatter.title);
  const thumb = getPostThumbnail(post);
  const ogImage = thumb
    ? thumb.startsWith("http")
      ? thumb
      : `${baseUrl}${thumb}`
    : undefined;
  return buildPageMetadata({
    title,
    titleAbsolute,
    description: trunc(post.frontmatter.excerpt, 160),
    path: `/en/blog/${slug}`,
    ...(hasPublishedFr(slug)
      ? {
          alternateLanguages: {
            en: `/en/blog/${slug}`,
            fr: `/blog/${slug}`,
            "x-default": `/blog/${slug}`,
          },
        }
      : {}),
    openGraph: {
      type: "article",
      title: titleAbsolute ?? `${title} | ${siteName}`,
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
  if (!post || !isPostPublished(post)) notFound();

  const raw = post.content;
  const articleTitle = post.frontmatter.title;
  const { beforeMdx, afterMdx, faqPairs } = prepareArticleMdxParts(raw, articleTitle);
  const toc = buildArticleToc(raw, articleTitle, "en");
  const thumb = getPostThumbnail(post);
  const components = createBlogMdxComponents(slug, {
    skipFirstBodyImage: Boolean(post.frontmatter.thumbnail?.trim()),
    articleTitle,
    locale: "en",
  });
  const faqComponents = createBlogMdxComponents(slug, {
    skipFirstBodyImage: false,
    articleTitle,
    locale: "en",
  });
  const modified = realModifiedDate(post.frontmatter);
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
  const video = buildArticleVideoObject(post.frontmatter, extractYouTubeVideoIds(raw), "en-US");
  if (video) graphNodes.push(video);
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
        <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(0,45rem)_minmax(0,1fr)] xl:gap-12">
          <div className="hidden xl:block" aria-hidden />
          <article className="mx-auto min-w-0 max-w-[45rem] xl:col-start-2 xl:mx-0">
            <ArticleHeader
              title={post.frontmatter.title}
              excerpt={post.frontmatter.excerpt}
              date={post.frontmatter.date}
              dateLabel={dateFmt.format(new Date(`${post.frontmatter.date}T12:00:00`))}
              {...(modified
                ? {
                    modifiedDate: modified,
                    modifiedLabel: `${ARTICLE_LABELS.en.updatedOn} ${dateFmt.format(new Date(`${modified}T12:00:00`))}`,
                  }
                : {})}
              author={{ prefix: ARTICLE_LABELS.en.by, name: person.name, href: "/en/about" }}
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

            {post.frontmatter.affiliate === true ? (
              <AffiliateDisclosure locale="en" className="mt-10" />
            ) : null}

            <ArticleMobileToc
              items={toc}
              label={ARTICLE_LABELS.en.toc}
              sectionsLabel={ARTICLE_LABELS.en.tocSections}
            />

            <div className="prose-cinema mt-12">
              {beforeMdx ? (
                <MDXRemote source={beforeMdx} components={components} options={mdxOpts} />
              ) : null}
              {faqPairs ? (
                <FaqSection pairs={faqPairs} components={faqComponents} locale="en" />
              ) : null}
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

          <div className="mt-12 hidden xl:col-start-3 xl:mt-0 xl:block xl:justify-self-start">
            <div className="sticky top-28">
              <ArticleToc items={toc} label={ARTICLE_LABELS.en.toc} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
