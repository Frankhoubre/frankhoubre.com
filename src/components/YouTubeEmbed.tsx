import { VideoFacade } from "@/components/VideoFacade";

type Props = {
  videoId: string;
  title?: string;
  locale?: "fr" | "en";
};

/**
 * Vidéo YouTube d'un article : façade (vignette + bouton), le lecteur tiers
 * ne se charge qu'au clic. Aucune iframe YouTube au chargement de la page.
 */
export function YouTubeEmbed({ videoId, title, locale = "fr" }: Props) {
  const label = title ?? (locale === "en" ? "YouTube video" : "Vidéo YouTube");
  return (
    <div className="not-prose my-10">
      <VideoFacade
        provider="youtube"
        videoId={videoId}
        title={label}
        playLabel={locale === "en" ? "Play" : "Lire"}
        posterAlt={locale === "en" ? `Preview of the video ${label}` : undefined}
        caption="YouTube"
        sizes="(max-width: 768px) 100vw, 720px"
      />
    </div>
  );
}
