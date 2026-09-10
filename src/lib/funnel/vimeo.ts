/**
 * Métadonnées d'une vidéo Vimeo via l'API oEmbed publique (aucune clé requise) :
 * vignette et durée. Appelée côté serveur au build, puis rafraîchie au plus une
 * fois par jour. Retourne null si Vimeo ne répond pas : les pages gardent alors
 * une façade neutre et n'affichent pas de durée, sans casser le rendu.
 */
export type VimeoMeta = {
  url: string;
  width: number;
  height: number;
  /** Durée en secondes. */
  duration: number | null;
};

export async function getVimeoThumbnail(
  videoId: string,
  width = 1280,
): Promise<VimeoMeta | null> {
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
      duration?: number;
    };
    if (!data.thumbnail_url) return null;
    return {
      url: data.thumbnail_url,
      width: data.thumbnail_width ?? width,
      height: data.thumbnail_height ?? Math.round((width * 9) / 16),
      duration: typeof data.duration === "number" ? data.duration : null,
    };
  } catch {
    return null;
  }
}

/** "12 min" à partir d'une durée en secondes (arrondi à la minute). */
export function formatMinutes(seconds: number | null | undefined): string | null {
  if (!seconds) return null;
  return `${Math.max(1, Math.round(seconds / 60))} min`;
}

/** Durée ISO 8601 (PT24M) pour le JSON-LD, ou null si inconnue. */
export function isoMinutes(seconds: number | null | undefined): string | null {
  if (!seconds) return null;
  return `PT${Math.max(1, Math.round(seconds / 60))}M`;
}
