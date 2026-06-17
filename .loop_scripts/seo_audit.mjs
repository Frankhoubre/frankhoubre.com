#!/usr/bin/env node
/**
 * Daily SEO + content health audit for frankhoubre.com
 *
 * Read-only. Scans content/blog (FR) and content/blog-en (EN) plus a few
 * project invariants, and reports issues by severity. It NEVER edits files.
 *
 * Usage:
 *   node .loop_scripts/seo_audit.mjs            # human-readable report
 *   node .loop_scripts/seo_audit.mjs --json     # machine-readable JSON
 *   node .loop_scripts/seo_audit.mjs --quiet    # only summary + errors
 *
 * Exit code is always 0 (audit is informational; the loop decides what to fix).
 *
 * Severities:
 *   error   = breaks build/SEO or violates a hard rule (em dash, missing meta)
 *   warn    = should be fixed but not blocking (short excerpt, thin content)
 *   info    = nice-to-have / future opportunity
 */

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const DIRS = [
  { key: "fr", dir: path.join(ROOT, "content", "blog"), urlBase: "/blog" },
  { key: "en", dir: path.join(ROOT, "content", "blog-en"), urlBase: "/en/blog" },
];
const PUBLIC_DIR = path.join(ROOT, "public");

// Valid categories must stay in sync with src/lib/site.ts
const VALID_CATEGORIES = new Set([
  "actualite",
  "tutoriels",
  "notes",
  "business",
  "comparatifs",
  "postproduction",
  "analyses",
  "guides",
]);

// Style guide: phrases that signal generic AI writing. Hard rule = em dash.
const BANNED_PHRASES = [
  "game changer",
  "game-changer",
  "in today's fast paced world",
  "in today's fast-paced world",
  "unlock the power",
  "as an ai",
  "revolutionary",
  "seamless",
  "leverage",
  "delve",
  "in conclusion",
  "it's important to note",
  "in the ever-evolving",
  "landscape of",
];

const args = new Set(process.argv.slice(2));
const asJson = args.has("--json");
const quiet = args.has("--quiet");

const issues = []; // { severity, area, slug, locale, msg }
function add(severity, area, locale, slug, msg) {
  issues.push({ severity, area, locale, slug, msg });
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) return { data: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: raw };
  const fmBlock = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\s*\n/, "");
  const data = {};
  for (const line of fmBlock.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    data[m[1]] = val;
  }
  return { data, body };
}

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function countInternalLinks(body, urlBases) {
  // markdown links pointing at /blog/... or /en/blog/... or /outils/...
  const re = /\]\((\/[^)]+)\)/g;
  let m;
  let n = 0;
  while ((m = re.exec(body)) !== null) {
    const href = m[1];
    if (
      href.startsWith("/blog/") ||
      href.startsWith("/en/blog/") ||
      href.startsWith("/outils") ||
      href.startsWith("/a-propos") ||
      href.startsWith("/en/about") ||
      href.startsWith("/prestation")
    ) {
      // exclude image links (they are ![..](..) handled separately)
      n++;
    }
  }
  return n;
}

function checkImages(body, locale, slug) {
  const re = /!\[(.*?)\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const alt = m[1].trim();
    const src = m[2].trim();
    if (!alt) add("error", "alt-text", locale, slug, `Image missing alt text: ${src}`);
    else if (alt.length < 8)
      add("warn", "alt-text", locale, slug, `Alt text very short ("${alt}"): ${src}`);
    // verify local image files exist
    if (src.startsWith("/images/")) {
      const fp = path.join(PUBLIC_DIR, src.replace(/^\//, ""));
      if (!fs.existsSync(fp))
        add("error", "missing-image", locale, slug, `Image file not found: ${src}`);
    }
  }
}

function listMd(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

const titlesByLocale = { fr: new Map(), en: new Map() };
let totalScanned = 0;

for (const { key: locale, dir } of DIRS) {
  const files = listMd(dir);
  for (const file of files) {
    totalScanned++;
    const slug = file.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, body } = parseFrontmatter(raw);

    // ---- Frontmatter / metadata ----
    if (!data.title) add("error", "meta", locale, slug, "Missing title");
    if (!data.date || !/^\d{4}-\d{2}-\d{2}$/.test(data.date))
      add("error", "meta", locale, slug, `Invalid/missing date: ${data.date ?? "(none)"}`);
    if (!data.category) add("error", "meta", locale, slug, "Missing category");
    else if (!VALID_CATEGORIES.has(data.category))
      add("error", "meta", locale, slug, `Unknown category: ${data.category}`);
    if (!data.excerpt) add("error", "meta", locale, slug, "Missing excerpt (meta description)");
    else {
      const len = data.excerpt.length;
      if (len < 70)
        add("warn", "meta", locale, slug, `Excerpt short (${len} chars; aim 120-160)`);
      else if (len > 165)
        add("warn", "meta", locale, slug, `Excerpt long (${len} chars; Google truncates ~160)`);
    }
    if (data.title) {
      if (data.title.length > 65)
        add("warn", "meta", locale, slug, `Title long (${data.title.length} chars; aim <=60)`);
      // duplicate title detection within same locale
      const norm = data.title.toLowerCase().trim();
      const prev = titlesByLocale[locale].get(norm);
      if (prev)
        add("error", "duplicate-title", locale, slug, `Duplicate title with "${prev}"`);
      else titlesByLocale[locale].set(norm, slug);
    }

    // thumbnail existence
    if (data.thumbnail && data.thumbnail.startsWith("/")) {
      const fp = path.join(PUBLIC_DIR, data.thumbnail.replace(/^\//, ""));
      if (!fs.existsSync(fp))
        add("error", "missing-image", locale, slug, `Thumbnail not found: ${data.thumbnail}`);
    } else if (!data.thumbnail) {
      add("warn", "meta", locale, slug, "No thumbnail set");
    }

    // ---- Headings ----
    const h1s = body.match(/^#\s+.+$/gm) || [];
    if (locale === "fr") {
      // FR articles historically lead with an H1 in the body
      if (h1s.length === 0)
        add("warn", "headings", locale, slug, "No H1 (# ) in body");
      if (h1s.length > 1)
        add("error", "headings", locale, slug, `Multiple H1 tags (${h1s.length})`);
    }
    const h2s = body.match(/^##\s+.+$/gm) || [];
    if (h2s.length < 3)
      add("warn", "headings", locale, slug, `Few H2 sections (${h2s.length}; aim 5+)`);

    // ---- Content depth ----
    const wc = wordCount(body.replace(/!\[.*?\]\(.*?\)/g, ""));
    if (wc < 600)
      add("error", "thin-content", locale, slug, `Very thin content (${wc} words)`);
    else if (wc < 1500)
      add("warn", "thin-content", locale, slug, `Below target depth (${wc} words; aim 2000+)`);

    // ---- Internal links ----
    const links = countInternalLinks(body);
    if (links === 0)
      add("warn", "internal-links", locale, slug, "No internal links (aim for 2+)");
    else if (links === 1)
      add("info", "internal-links", locale, slug, "Only 1 internal link (aim for 2+)");

    // ---- Style: em dash (hard ban) ----
    if (body.includes("—"))
      add("error", "style", locale, slug, "Contains em dash (—), banned by style guide");

    // ---- Style: banned phrases ----
    const lower = body.toLowerCase();
    for (const phrase of BANNED_PHRASES) {
      if (lower.includes(phrase))
        add("warn", "style", locale, slug, `Banned phrase: "${phrase}"`);
    }

    // ---- Images alt + existence ----
    checkImages(body, locale, slug);
  }
}

// ---- Cross-cutting checks ----
// EN articles should ideally have a FR counterpart (translation model)
const frSlugs = new Set(
  listMd(DIRS[0].dir).map((f) => f.replace(/\.mdx?$/, "")),
);
for (const f of listMd(DIRS[1].dir)) {
  const slug = f.replace(/\.mdx?$/, "");
  if (!frSlugs.has(slug))
    add("info", "i18n", "en", slug, "EN article has no FR counterpart slug");
}

// ---- Output ----
const bySeverity = { error: [], warn: [], info: [] };
for (const i of issues) bySeverity[i.severity].push(i);

const summary = {
  scannedFiles: totalScanned,
  frArticles: listMd(DIRS[0].dir).length,
  enArticles: listMd(DIRS[1].dir).length,
  errors: bySeverity.error.length,
  warnings: bySeverity.warn.length,
  info: bySeverity.info.length,
  generatedAt: new Date().toISOString(),
};

if (asJson) {
  console.log(JSON.stringify({ summary, issues }, null, 2));
  process.exit(0);
}

const ICON = { error: "✗", warn: "!", info: "·" };
function printGroup(sev) {
  const list = bySeverity[sev];
  if (!list.length) return;
  console.log(`\n${sev.toUpperCase()} (${list.length})`);
  // group by area
  const byArea = {};
  for (const i of list) (byArea[i.area] ||= []).push(i);
  for (const area of Object.keys(byArea).sort()) {
    console.log(`  [${area}]`);
    for (const i of byArea[area])
      console.log(`    ${ICON[sev]} ${i.locale}/${i.slug}: ${i.msg}`);
  }
}

console.log("=".repeat(60));
console.log("SEO + CONTENT AUDIT — frankhoubre.com");
console.log("=".repeat(60));
console.log(
  `Scanned: ${summary.scannedFiles} files  (FR ${summary.frArticles}, EN ${summary.enArticles})`,
);
console.log(
  `Errors: ${summary.errors}  Warnings: ${summary.warnings}  Info: ${summary.info}`,
);

printGroup("error");
if (!quiet) {
  printGroup("warn");
  printGroup("info");
}
console.log("");
