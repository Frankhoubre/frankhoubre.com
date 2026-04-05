import { slugify, stripMarkdownInline } from "@/lib/slugify";

export const SECTION_BOUNDARY_TOKEN = "<<<SECTION_BOUNDARY>>>";

const FAQ_HEADINGS = [
  "Foire aux questions",
  "Foire aux questions (FAQ)",
  "Questions fréquentes (FAQ)",
  "Frequently Asked Questions (FAQ)",
  "Frequently Asked Questions",
] as const;

export function buildFaqDelimiterRegex(): RegExp {
  const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const mdParts = FAQ_HEADINGS.map(
    (h) => `(?:^##\\s+${esc(h)}\\s*$)`,
  );
  const htmlParts = FAQ_HEADINGS.map(
    (h) => `(?:^<h2[^>]*>\\s*${esc(h)}\\s*</h2>\\s*$)`,
  );
  return new RegExp(`(${mdParts.join("|")}|${htmlParts.join("|")})`, "mi");
}

export type FaqSplit = {
  before: string;
  faqBody: string;
  after: string;
  headingLine: string;
};

function splitAfterFollowingH2(rest: string): { faqBody: string; after: string } {
  const lines = rest.split("\n");
  for (let j = 0; j < lines.length; j++) {
    const L = lines[j];
    const t = L.trimStart();
    if (/^##\s+/.test(t) && !/^###\s+/.test(t)) {
      return {
        faqBody: lines.slice(0, j).join("\n").trim(),
        after: lines.slice(j).join("\n").trimStart(),
      };
    }
    if (/^<h2\b/i.test(t)) {
      return {
        faqBody: lines.slice(0, j).join("\n").trim(),
        after: lines.slice(j).join("\n").trimStart(),
      };
    }
  }
  return { faqBody: rest.trim(), after: "" };
}

export function splitFaqContent(raw: string): FaqSplit | null {
  const re = buildFaqDelimiterRegex();
  const m = re.exec(raw);
  if (!m || m.index === undefined) return null;
  const before = raw.slice(0, m.index).trimEnd();
  const rest = raw.slice(m.index + m[0].length);
  const headingLine = m[0].trim();
  const { faqBody, after } = splitAfterFollowingH2(rest);

  return { before, faqBody, after, headingLine };
}

export type FaqPair = { question: string; answer: string };

export function parseFaqBody(faqBody: string): FaqPair[] {
  const trimmed = faqBody.trim();
  if (!trimmed) return [];

  const blocks = trimmed.split(/\n\n+/);
  const pairs: FaqPair[] = [];
  let currentQ: string | null = null;
  let currentA: string[] = [];

  const flush = () => {
    if (currentQ) {
      pairs.push({
        question: currentQ,
        answer: currentA.join("\n\n").trim(),
      });
    }
    currentQ = null;
    currentA = [];
  };

  for (const block of blocks) {
    const bold = block.match(/^\*\*([^*]+)\*\*\s*([\s\S]*)$/);
    if (bold) {
      flush();
      currentQ = stripMarkdownInline(bold[1].trim());
      currentA = [bold[2].trim()].filter(Boolean);
      continue;
    }
    const h3 = block.match(/^<h3[^>]*>([\s\S]*?)<\/h3>\s*([\s\S]*)$/i);
    if (h3) {
      flush();
      currentQ = stripMarkdownInline(h3[1].replace(/<[^>]+>/g, "").trim());
      currentA = [h3[2].trim()].filter(Boolean);
      continue;
    }
    if (currentQ) {
      currentA.push(block);
    }
  }
  flush();
  return pairs.filter((p) => p.question && p.answer);
}

function makeHeadingIdTracker() {
  const counts = new Map<string, number>();
  return (text: string) => {
    const base = slugify(text);
    const n = (counts.get(base) ?? 0) + 1;
    counts.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  };
}

export function injectHeadingIds(content: string): string {
  const idFor = makeHeadingIdTracker();
  return content.replace(
    /<(h[234])(\s[^>]*)>([\s\S]*?)<\/\1>/gi,
    (full, tag: string, attrs: string, inner: string) => {
      if (/\sid\s*=/i.test(attrs)) return full;
      const plain = inner.replace(/<[^>]+>/g, "");
      const id = idFor(stripMarkdownInline(plain));
      const a = attrs.trim();
      return `<${tag}${a ? ` ${a}` : ""} id="${id}">${inner}</${tag}>`;
    },
  );
}

function extractYoutubeId(url: string): string | null {
  const w = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (w) return w[1];
  const s = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (s) return s[1];
  return null;
}

function isYoutubeUrl(url: string): boolean {
  return /youtube\.com\/watch|youtu\.be\//i.test(url);
}

function escapeJsxAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

/** Ligne : texte d’intro + lien markdown YouTube. */
const LINE_INTRO_LINK =
  /^(.+?)\s+\[([^\]]*)\]\(([^)]+)\)\s*$/m;

/** Ligne : uniquement le lien markdown YouTube. */
const LINE_LINK_ONLY = /^\s*\[([^\]]*)\]\(([^)]+)\)\s*$/m;

export function embedYouTubeLinks(content: string): string {
  const lines = content.split("\n");
  const out: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const intro = line.match(LINE_INTRO_LINK);
    if (intro && isYoutubeUrl(intro[3])) {
      const id = extractYoutubeId(intro[3]);
      if (id) {
        const title = (intro[2].trim() || intro[1].trim()).slice(0, 200);
        out.push("");
        out.push(
          `<YouTubeEmbed videoId="${id}" title="${escapeJsxAttr(title)}" />`,
        );
        out.push("");
        continue;
      }
    }
    const only = line.match(LINE_LINK_ONLY);
    if (only && isYoutubeUrl(only[2])) {
      const id = extractYoutubeId(only[2]);
      if (id) {
        const title = (only[1].trim() || "Vidéo YouTube").slice(0, 200);
        out.push("");
        out.push(
          `<YouTubeEmbed videoId="${id}" title="${escapeJsxAttr(title)}" />`,
        );
        out.push("");
        continue;
      }
    }
    out.push(line);
  }

  return out.join("\n");
}

export function injectMiddleBanner(content: string): string {
  const parts = content.split(/\n\n+/);
  if (parts.length < 2) {
    return `${content.trimEnd()}\n\n<MiddleBanner />\n`;
  }
  const mid = Math.floor(parts.length / 2);
  const next = [...parts];
  next.splice(mid, 0, "<MiddleBanner />");
  return next.join("\n\n");
}

export function runMdxPipeline(segment: string): string {
  let s = segment;
  s = injectHeadingIds(s);
  s = embedYouTubeLinks(s);
  return s;
}

export function prepareArticleMdxParts(rawContent: string): {
  beforeMdx: string;
  afterMdx: string;
  faqPairs: FaqPair[] | null;
} {
  const faq = splitFaqContent(rawContent);
  if (!faq) {
    const single = injectMiddleBanner(runMdxPipeline(rawContent));
    return { beforeMdx: single, afterMdx: "", faqPairs: null };
  }

  const pairs = parseFaqBody(faq.faqBody);
  if (!pairs.length) {
    const merged = [faq.before, faq.headingLine, faq.faqBody, faq.after]
      .filter(Boolean)
      .join("\n\n");
    const single = injectMiddleBanner(runMdxPipeline(merged));
    return { beforeMdx: single, afterMdx: "", faqPairs: null };
  }

  const main = `${faq.before}\n\n${SECTION_BOUNDARY_TOKEN}\n\n${faq.after}`;
  const processedMain = injectMiddleBanner(runMdxPipeline(main));
  const boundaryRe = new RegExp(
    `\\n*${SECTION_BOUNDARY_TOKEN.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\n*`,
    "g",
  );
  const [beforeMdx = "", afterMdx = ""] = processedMain.split(boundaryRe);

  return {
    beforeMdx: beforeMdx.trimEnd(),
    afterMdx: afterMdx.trimStart(),
    faqPairs: pairs,
  };
}
