import { extractToc, type TocItem } from "@/lib/blog";
import { parseFaqBody, splitFaqContent } from "@/lib/mdx-pipeline";

const FAQ_TOC_ITEM: TocItem = {
  id: "foire-aux-questions",
  text: "Foire aux questions",
  level: 2,
};

export function buildArticleToc(raw: string): TocItem[] {
  const faq = splitFaqContent(raw);
  if (!faq) return extractToc(raw);

  const pairs = parseFaqBody(faq.faqBody);
  if (!pairs.length) {
    const merged = [faq.before, faq.headingLine, faq.faqBody, faq.after]
      .filter(Boolean)
      .join("\n\n");
    return extractToc(merged);
  }

  return [
    ...extractToc(faq.before),
    FAQ_TOC_ITEM,
    ...extractToc(faq.after),
  ];
}
