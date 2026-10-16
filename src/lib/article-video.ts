import type { PostFrontmatter } from "@/lib/blog";

/**
 * VideoObject JSON-LD d'un article. Il n'est émis que pour une vidéo
 * réellement intégrée dans le corps ET décrite dans le frontmatter (`video`)
 * avec ses propres données : titre, description, date de mise en ligne. Les
 * vidéos « recommandées » ajoutées en bas d'article n'en ont pas : leur prêter
 * le titre et la date de l'article produisait un balisage faux.
 */
export function buildArticleVideoObject(
  frontmatter: PostFrontmatter,
  embeddedIds: string[],
  inLanguage: string,
): object | null {
  const v = frontmatter.video;
  if (!v?.id || !v.name?.trim() || !v.description?.trim()) return null;
  if (!embeddedIds.includes(v.id)) return null;
  // YAML transforme une date non citée en objet Date.
  const rawDate: unknown = v.uploadDate;
  const uploadDate =
    rawDate instanceof Date ? rawDate.toISOString().slice(0, 10) : String(rawDate ?? "");
  if (!/^\d{4}-\d{2}-\d{2}/.test(uploadDate)) return null;
  return {
    "@type": "VideoObject",
    name: v.name.trim(),
    description: v.description.trim(),
    inLanguage,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
    uploadDate,
    ...(v.duration ? { duration: v.duration } : {}),
    contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
  };
}
