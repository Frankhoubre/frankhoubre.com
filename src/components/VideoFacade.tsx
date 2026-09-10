"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  provider: "youtube" | "vimeo";
  videoId: string;
  title: string;
  /** Affiche pour Vimeo (YouTube fournit sa propre vignette). */
  poster?: string;
  posterAlt?: string;
  playLabel?: string;
  /** Texte affiché en haut de la façade quand il n'y a pas de vignette. */
  caption?: string;
};

function embedSrc(provider: Props["provider"], id: string): string {
  return provider === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
    : `https://player.vimeo.com/video/${id}?autoplay=1`;
}

/**
 * Façade vidéo : une vignette et un bouton lecture, l'iframe du lecteur ne
 * se charge qu'au clic. Trois lecteurs YouTube/Vimeo au chargement de la page
 * coûtaient plusieurs centaines de Ko de JavaScript tiers ; ici, zéro tant que
 * personne ne clique.
 */
export function VideoFacade({
  provider,
  videoId,
  title,
  poster,
  posterAlt,
  playLabel = "Lire la vidéo",
  caption,
}: Props) {
  const [playing, setPlaying] = useState(false);
  const posterSrc =
    poster ??
    (provider === "youtube"
      ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
      : undefined);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
        <iframe
          src={embedSrc(provider, videoId)}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-[rgba(17,17,17,0.12)] bg-[#1a1a1a] text-left"
      aria-label={`${playLabel} : ${title}`}
    >
      {posterSrc ? (
        <Image
          src={posterSrc}
          alt={posterAlt ?? `Aperçu de la vidéo ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : null}
      <span
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
        aria-hidden
      />
      <span className="absolute inset-0 grid place-items-center" aria-hidden>
        <span className="grid h-14 w-14 place-items-center rounded-full border border-[var(--cream)] bg-[rgba(255,255,255,0.55)] text-white backdrop-blur-md transition-colors duration-200 group-hover:bg-[var(--orange)] group-hover:text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.5v13l11-6.5-11-6.5Z" />
          </svg>
        </span>
      </span>
      {caption ? (
        <span className="heading-font absolute left-4 top-3 text-[11px] uppercase tracking-[0.12em] text-white">
          {caption}
        </span>
      ) : null}
      <span className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.12em] text-white">
        {playLabel}
      </span>
    </button>
  );
}
