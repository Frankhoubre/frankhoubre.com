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
