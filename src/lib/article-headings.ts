import { stripMarkdownInline } from "@/lib/slugify";

/**
 * Le H1 de la page vient de l'en-tête d'article (titre du frontmatter). Environ
 * 300 articles reprennent ce titre en `# Titre` dans le corps, parfois dans une
 * version plus longue que le title SEO. On corrige au rendu, sans toucher aux
 * fichiers :
 *  - un H1 placé avant le premier H2 est la ligne de titre de l'article : retiré ;
 *  - un H1 quasi identique au titre, où qu'il soit : retiré ;
 *  - tout autre H1 devient un H2 (il garde sa place dans le plan et le sommaire).
 * Les blocs de code sont ignorés (un `# commentaire` bash n'est pas un titre).
 */

function normalizeForCompare(s: string): string {
  return stripMarkdownInline(s)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function isTitleLikeHeading(heading: string, title: string | undefined): boolean {
  if (!title) return false;
  const a = normalizeForCompare(heading);
  const b = normalizeForCompare(title);
  if (!a || !b) return false;
  if (a === b || a.includes(b) || b.includes(a)) return true;
  const tokens = (s: string) => new Set(s.split(" ").filter((t) => t.length > 2));
  const ta = tokens(a);
  const tb = tokens(b);
  if (!ta.size || !tb.size) return false;
  let shared = 0;
  for (const t of ta) if (tb.has(t)) shared += 1;
  return shared / Math.min(ta.size, tb.size) >= 0.75;
}

const FENCE = /^\s*(```|~~~)/;
const ATX_H1 = /^#[ \t]+(.+?)[ \t#]*$/;
const ATX_H2 = /^##[ \t]+/;
const HTML_H2 = /^<h2\b/i;

export function normalizeBodyHeadings(content: string, title: string | undefined): string {
  const lines = content.split("\n");
  const out: string[] = [];
  let fence: string | null = null;
  let seenH2 = false;

  for (const line of lines) {
    const fenceMatch = line.match(FENCE);
    if (fenceMatch) {
      if (fence === null) fence = fenceMatch[1];
      else if (fenceMatch[1] === fence) fence = null;
      out.push(line);
      continue;
    }
    if (fence !== null) {
      out.push(line);
      continue;
    }
    if (ATX_H2.test(line) || HTML_H2.test(line)) seenH2 = true;
    const h1 = line.replace(/\r$/, "").match(ATX_H1);
    if (h1) {
      if (!seenH2 || isTitleLikeHeading(h1[1], title)) continue;
      out.push(`## ${h1[1]}`);
      seenH2 = true;
      continue;
    }
    out.push(line);
  }
  return out.join("\n");
}
