/**
 * Vignette d'une vidéo Vimeo via l'API oEmbed publique (aucune clé requise).
 * Appelée côté serveur au build, puis rafraîchie au plus une fois par jour.
 * Retourne null si Vimeo ne répond pas : la façade vidéo garde alors son fond
 * neutre au lieu de casser la page.
 */
export async function getVimeoThumbnail(
  videoId: string,
  width = 1280,
): Promise<{ url: string; width: number; height: number } | null> {
  const endpoint = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
    `https://vimeo.com/${videoId}`,
  )}&width=${width}`;
  try {
    const res = await fetch(endpoint, { next: { revalidate: 60 * 60 * 24 } });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      thumbnail_url?: string;
      thumbnail_width?: number;
      thumbnail_height?: number;
    };
    if (!data.thumbnail_url) return null;
    return {
      url: data.thumbnail_url,
      width: data.thumbnail_width ?? width,
      height: data.thumbnail_height ?? Math.round((width * 9) / 16),
    };
  } catch {
    return null;
  }
}
