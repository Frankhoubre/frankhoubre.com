#!/usr/bin/env node
/**
 * Editorial triage for frankhoubre.com, per GUIDE_EDITORIAL.md.
 *
 * Read-only. Scores every FR article against the editorial charter and sorts
 * them into three buckets: good (light polish), medium (serious rework), weak
 * (deep rewrite). Never edits files.
 *
 * Usage:
 *   node .loop_scripts/editorial_audit.mjs           # human report
 *   node .loop_scripts/editorial_audit.mjs --json     # machine-readable
 *   node .loop_scripts/editorial_audit.mjs --md       # markdown triage table
 */

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const FR_DIR = path.join(ROOT, "content", "blog");
const SITE_HOST = "frankhoubre.com";

const args = new Set(process.argv.slice(2));
const asJson = args.has("--json");
const asMd = args.has("--md");

// FR phrases that signal generic / AI / corporate writing (charter bans).
const FR_BANNED = [
  "dans un monde où",
  "à l'ère du",
  "à l'heure où",
  "il est important de noter",
  "il est essentiel de",
  "il convient de noter",
  "en conclusion",
  "force est de constater",
  "de nos jours",
  "au-delà de cela",
  "n'hésitez pas à",
  "dans cet article, nous",
  "dans cet article nous",
  "plongeons dans",
  "révolutionnaire",
  "incontournable",
  "véritable game changer",
];

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
    )
      val = val.slice(1, -1);
    data[m[1]] = val;
  }
  return { data, body };
}

const wordCount = (t) => t.trim().split(/\s+/).filter(Boolean).length;

function countLinks(body) {
  const re = /\]\(([^)]+)\)/g;
  let m,
    internal = 0,
    external = 0;
  while ((m = re.exec(body)) !== null) {
    const href = m[1].trim();
    if (href.startsWith("/")) internal++;
    else if (/^https?:\/\//i.test(href)) {
      if (!href.includes(SITE_HOST)) external++;
    }
  }
  return { internal, external };
}

function hasFaq(body) {
  if (/^#{2,3}\s+.*(faq|questions?\s+fr[ée]quentes|foire aux questions)/im.test(body))
    return true;
  // fallback: a cluster of question headings
  const qHeads = (body.match(/^#{2,4}\s+.+\?\s*$/gm) || []).length;
  return qHeads >= 4;
}

function listMd(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => /\.mdx?$/.test(f));
}

const rows = [];
for (const file of listMd(FR_DIR)) {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(FR_DIR, file), "utf8");
  const { data, body } = parseFrontmatter(raw);
  const text = body.replace(/!\[.*?\]\(.*?\)/g, "");
  const wc = wordCount(text);
  const h1 = (body.match(/^#\s+.+$/gm) || []).length;
  const h2 = (body.match(/^##\s+.+$/gm) || []).length;
  const { internal, external } = countLinks(body);
  const emDash = body.includes("—") || body.includes("–");
  const lower = body.toLowerCase();
  const banned = FR_BANNED.filter((p) => lower.includes(p));
  const faq = hasFaq(body);
  const imgs = (body.match(/!\[(.*?)\]\(([^)]+)\)/g) || []).length;
  const excerptLen = (data.excerpt || "").length;
  const titleLen = (data.title || "").length;

  // ---- scoring (higher = healthier). Start at 100, subtract penalties. ----
  let score = 100;
  const flags = [];
  if (emDash) {
    score -= 25;
    flags.push("tiret long");
  }
  if (banned.length) {
    score -= Math.min(20, banned.length * 8);
    flags.push(`IA/filler x${banned.length}`);
  }
  if (wc < 600) {
    score -= 35;
    flags.push(`très court ${wc}w`);
  } else if (wc < 1200) {
    score -= 18;
    flags.push(`court ${wc}w`);
  } else if (wc < 1800) {
    score -= 8;
    flags.push(`${wc}w`);
  }
  if (h1 !== 1) {
    score -= 10;
    flags.push(`H1=${h1}`);
  }
  if (h2 < 3) {
    score -= 12;
    flags.push(`H2=${h2}`);
  } else if (h2 < 5) {
    score -= 5;
  }
  if (internal === 0) {
    score -= 12;
    flags.push("0 lien interne");
  } else if (internal < 2) {
    score -= 6;
    flags.push("1 lien interne");
  }
  if (external === 0) {
    score -= 10;
    flags.push("0 lien externe");
  }
  if (!faq) {
    score -= 6;
    flags.push("pas de FAQ");
  }
  if (!excerptLen || excerptLen < 70 || excerptLen > 165) {
    score -= 6;
    flags.push(`meta ${excerptLen}c`);
  }
  if (titleLen > 65) {
    score -= 3;
    flags.push(`titre ${titleLen}c`);
  }
  if (imgs === 0) {
    score -= 4;
    flags.push("0 image");
  }
  score = Math.max(0, score);

  let bucket;
  if (score >= 80) bucket = "good";
  else if (score >= 55) bucket = "medium";
  else bucket = "weak";

  rows.push({
    slug,
    date: data.date || "",
    category: data.category || "",
    title: data.title || "",
    wc,
    h1,
    h2,
    internal,
    external,
    emDash,
    banned: banned.length,
    faq,
    imgs,
    score,
    bucket,
    flags,
  });
}

rows.sort((a, b) => a.score - b.score);

const buckets = { good: [], medium: [], weak: [] };
for (const r of rows) buckets[r.bucket].push(r);

const summary = {
  total: rows.length,
  good: buckets.good.length,
  medium: buckets.medium.length,
  weak: buckets.weak.length,
};

if (asJson) {
  console.log(JSON.stringify({ summary, rows }, null, 2));
  process.exit(0);
}

if (asMd) {
  const order = ["weak", "medium", "good"];
  const label = {
    weak: "FAIBLES — réécriture en profondeur",
    medium: "MOYENS — retravail sérieux",
    good: "BONS — optimisation légère",
  };
  console.log("# Triage éditorial FR (auto-généré)\n");
  console.log(
    `Total ${summary.total} | Faibles ${summary.weak} | Moyens ${summary.medium} | Bons ${summary.good}\n`,
  );
  for (const b of order) {
    console.log(`\n## ${label[b]} (${buckets[b].length})\n`);
    console.log("| Score | Slug | Mots | H2 | Int | Ext | Problèmes |");
    console.log("| --- | --- | --- | --- | --- | --- | --- |");
    for (const r of buckets[b])
      console.log(
        `| ${r.score} | \`${r.slug}\` | ${r.wc} | ${r.h2} | ${r.internal} | ${r.external} | ${r.flags.join(", ") || "-"} |`,
      );
  }
  process.exit(0);
}

console.log("=".repeat(60));
console.log("TRIAGE ÉDITORIAL FR — frankhoubre.com");
console.log("=".repeat(60));
console.log(
  `Total ${summary.total}  |  Faibles ${summary.weak}  Moyens ${summary.medium}  Bons ${summary.good}`,
);
for (const [b, list] of Object.entries(buckets)) {
  console.log(`\n${b.toUpperCase()} (${list.length})`);
  for (const r of list.slice(0, 50))
    console.log(`  ${r.score}  ${r.slug}  [${r.flags.join(", ")}]`);
  if (list.length > 50) console.log(`  ... +${list.length - 50} more`);
}
