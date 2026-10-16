import { extractToc, type TocItem } from "@/lib/blog";
import { normalizeBodyHeadings } from "@/lib/article-headings";
import {
  extractSupplementaryFaqSections,
  parseFaqBody,
  splitFaqContent,
} from "@/lib/mdx-pipeline";

const FAQ_TOC_LABEL = {
  fr: "Foire aux questions",
  en: "Frequently asked questions",
} as const;

/**
 * Sommaire des H2. Le corps passe par la même normalisation des H1 que le
 * rendu MDX : un H1 rétrogradé en H2 apparaît donc aussi ici, avec le même id.
 */
export function buildArticleToc(
  raw: string,
  title?: string,
  locale: "fr" | "en" = "fr",
): TocItem[] {
  const body = normalizeBodyHeadings(raw, title);
  const faq = splitFaqContent(body);
  if (!faq) return extractToc(body);

  const { cleanedAfter, extraPairs } = extractSupplementaryFaqSections(faq.after);
  const mainPairs = parseFaqBody(faq.faqBody);
  const pairs = [...mainPairs, ...extraPairs];
  if (!pairs.length) {
    const merged = [faq.before, faq.headingLine, faq.faqBody, faq.after]
      .filter(Boolean)
      .join("\n\n");
    return extractToc(merged);
  }

  return [
    ...extractToc(faq.before),
    { id: "foire-aux-questions", text: FAQ_TOC_LABEL[locale], level: 2 },
    ...extractToc(cleanedAfter),
  ];
}
