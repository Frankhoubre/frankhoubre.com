#!/usr/bin/env node
/**
 * Regenerates the *baseline index* portion of the content ledger from the
 * articles currently on disk. Read-only against content/, writes one file:
 *
 *   .loop_memory/CONTENT_INDEX.md   (auto-generated, do not hand-edit)
 *
 * The rich, hand-maintained ledger of *loop-published* articles lives in
 * .loop_memory/CONTENT_LEDGER.md and is never overwritten by this script.
 *
 * Usage: node .loop_scripts/build_ledger.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SETS = [
  { key: "FR", dir: path.join(ROOT, "content", "blog"), base: "/blog" },
  { key: "EN", dir: path.join(ROOT, "content", "blog-en"), base: "/en/blog" },
];
const OUT = path.join(ROOT, ".loop_memory", "CONTENT_INDEX.md");

function fm(raw) {
  const data = {};
  if (!raw.startsWith("---")) return data;
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return data;
  for (const line of raw.slice(3, end).split("\n")) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim().replace(/^["']|["']$/g, "");
    data[m[1]] = v;
  }
  return data;
}

const lines = [];
lines.push("# CONTENT INDEX (auto-generated)");
lines.push("");
lines.push(
  "> Regenerate with `node .loop_scripts/build_ledger.mjs`. Do not hand-edit.",
);
lines.push("> This is the baseline map of all existing articles. New articles");
lines.push("> the loop publishes are tracked richly in CONTENT_LEDGER.md.");
lines.push(`> Generated: ${new Date().toISOString()}`);
lines.push("");

const stats = {};
for (const { key, dir, base } of SETS) {
  if (!fs.existsSync(dir)) continue;
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f))
    .sort();
  const rows = [];
  const catCount = {};
  for (const f of files) {
    const slug = f.replace(/\.mdx?$/, "");
    const d = fm(fs.readFileSync(path.join(dir, f), "utf8"));
    catCount[d.category] = (catCount[d.category] || 0) + 1;
    rows.push({ slug, date: d.date || "?", category: d.category || "?", title: d.title || "" });
  }
  rows.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  stats[key] = { count: files.length, catCount };

  lines.push(`## ${key} — ${files.length} articles (${base}/<slug>)`);
  lines.push("");
  lines.push(
    "Categories: " +
      Object.entries(catCount)
        .sort((a, b) => b[1] - a[1])
        .map(([c, n]) => `${c} ${n}`)
        .join(", "),
  );
  lines.push("");
  lines.push("| Date | Category | Slug | Title |");
  lines.push("| --- | --- | --- | --- |");
  for (const r of rows) {
    const title = r.title.replace(/\|/g, "\\|");
    lines.push(`| ${r.date} | ${r.category} | \`${r.slug}\` | ${title} |`);
  }
  lines.push("");
}

fs.writeFileSync(OUT, lines.join("\n"));
console.log(`Wrote ${OUT}`);
for (const [k, v] of Object.entries(stats)) {
  console.log(`  ${k}: ${v.count} articles`);
}
