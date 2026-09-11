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
  /** Repère affiché en haut du cadre : « Jour 1 », « Court film IA ». */
  caption?: string;
  /** Repère secondaire à droite : durée, année. */
  meta?: string;
  sizes?: string;
  priority?: boolean;
};

function embedSrc(provider: Props["provider"], id: string): string {
  return provider === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
    : `https://player.vimeo.com/video/${id}?autoplay=1`;
}

/**
 * Façade vidéo : photogramme cadré, repères de cadre, bouton « Lire » en
 * capitales. L'iframe du lecteur ne se charge qu'au clic : zéro JavaScript
 * tiers tant que personne ne lance la vidéo.
 */
export function VideoFacade({
  provider,
  videoId,
  title,
  poster,
  posterAlt,
  playLabel = "Lire",
  caption,
  meta,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: Props) {
  const [playing, setPlaying] = useState(false);
  const posterSrc =
    poster ??
    (provider === "youtube"
      ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
      : undefined);

  if (playing) {
    return (
      <div className="frame relative aspect-video w-full bg-black">
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
      className="group frame frame-grain frame-marks relative block aspect-video w-full text-left"
      aria-label={`${playLabel} : ${title}`}
    >
      {posterSrc ? (
        <Image
          src={posterSrc}
          alt={posterAlt ?? `Aperçu de la vidéo ${title}`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-[900ms] ease-[var(--ease)] group-hover:scale-[1.025]"
        />
      ) : null}
      <span
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-charcoal/30"
        aria-hidden
      />
      {caption ? (
        <span className="meta meta-strong absolute left-6 top-5 z-[3] text-[10px]">{caption}</span>
      ) : null}
      {meta ? (
        <span className="meta absolute right-6 top-5 z-[3] text-[10px]">{meta}</span>
      ) : null}
      {/* Bouton « Lire » au centre du cadre, là où la main va d'elle-même. */}
      <span className="absolute inset-0 z-[3] grid place-items-center" aria-hidden>
        <span className="flex flex-col items-center gap-3">
          <span className="grid h-16 w-16 place-items-center rounded-full border border-cream/80 bg-charcoal/55 text-cream backdrop-blur-sm transition-[background-color,color,transform] duration-200 group-hover:scale-105 group-hover:bg-cream group-hover:text-charcoal sm:h-20 sm:w-20">
            <svg width="18" height="22" viewBox="0 0 10 12" fill="currentColor" className="ml-1">
              <path d="M0 0v12l10-6z" />
            </svg>
          </span>
          <span className="meta meta-strong text-[10px] text-cream">{playLabel}</span>
        </span>
      </span>
    </button>
  );
}
