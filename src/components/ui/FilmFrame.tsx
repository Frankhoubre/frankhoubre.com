import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  /** Ratio CSS, ex. "21/9", "16/9", "4/5". */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  /** Légende technique en dessous : « FIG. 01 · Ronces, 2025 ». */
  caption?: ReactNode;
  /** Étiquette posée dans le cadre (coin haut gauche). */
  label?: string;
  marks?: boolean;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
};

/**
 * Photogramme : cadre rectangulaire, hairline, grain léger, repères de
 * cadre optionnels et légende façon planche contact. Les <img> distants
 * passent par une balise native (hôtes non déclarés dans next.config).
 */
export function FilmFrame({
  src,
  alt,
  ratio = "16/9",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  caption,
  label,
  marks = false,
  className = "",
  imgClassName = "",
  children,
}: Props) {
  const remote = /^https?:\/\//.test(src);
  return (
    <figure className={className}>
      <div
        className={`frame frame-grain frame-hover ${marks ? "frame-marks" : ""}`}
        style={{ aspectRatio: ratio }}
      >
        {remote ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={imgClassName}
          />
        )}
        {label ? (
          <span className="meta meta-strong absolute left-4 top-3 z-[3] text-[10px]">{label}</span>
        ) : null}
        {children}
      </div>
      {caption ? <figcaption className="meta mt-3">{caption}</figcaption> : null}
    </figure>
  );
}
