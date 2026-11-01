import type { PostFrontmatter } from "@/lib/blog";

/**
 * Date de mise à jour à afficher : `dateModified` du frontmatter quand il est
 * valide et postérieur à la date de publication. Jamais la date du jour.
 */
export function realModifiedDate(fm: PostFrontmatter): string | null {
  const m = fm.dateModified?.trim();
  if (!m || !/^\d{4}-\d{2}-\d{2}$/.test(m)) return null;
  return m > fm.date ? m : null;
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Heure de publication du frontmatter (`time: "08:40"`, heure de Paris).
 * Sans guillemets, YAML lit 08:40 en base 60 (520) : on accepte les deux formes.
 */
export function publishTime(fm: PostFrontmatter): string | null {
  const t = fm.time;
  if (typeof t === "number" && Number.isInteger(t) && t >= 0 && t < 1440) {
    return `${pad(Math.floor(t / 60))}:${pad(t % 60)}`;
  }
  if (typeof t === "string" && /^\d{2}:\d{2}$/.test(t.trim())) return t.trim();
  return null;
}

function parisOffset(date: string, time: string): string {
  const zone = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Paris",
    timeZoneName: "longOffset",
  })
    .formatToParts(new Date(`${date}T${time}:00Z`))
    .find((part) => part.type === "timeZoneName")?.value;
  return zone?.match(/GMT([+-]\d{2}:\d{2})/)?.[1] ?? "+00:00";
}

/** datePublished : "2026-11-02T08:40:00+01:00" si l'heure est connue, sinon la date seule. */
export function publishedIso(fm: PostFrontmatter): string {
  const time = publishTime(fm);
  return time ? `${fm.date}T${time}:00${parisOffset(fm.date, time)}` : fm.date;
}

/** dateModified : le même jour que la publication, on reprend l'heure pour ne pas précéder datePublished. */
export function modifiedIso(fm: PostFrontmatter): string {
  const m = fm.dateModified?.trim();
  return m && m !== fm.date ? m : publishedIso(fm);
}
