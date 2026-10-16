import Image from "next/image";
import { CaptureLightbox } from "@/components/article/CaptureLightbox";
import {
  ARTICLE_LABELS,
  formatArticleDate,
  sourceHost,
  type ArticleLocale,
} from "@/components/article/labels";
import { readPublicImageDimensions } from "@/lib/image-dimensions";

export type CaptureProps = {
  src?: string;
  alt?: string;
  legende?: string;
  caption?: string;
  source?: string;
  captureLe?: string;
  capturedAt?: string;
  width?: string | number;
  height?: string | number;
};

type Internal = CaptureProps & {
  locale: ArticleLocale;
  slug: string;
  /** La première capture de l'article est chargée sans attendre. */
  eager?: boolean;
  compact?: boolean;
};

function toInt(v: string | number | undefined): number | null {
  const n = typeof v === "number" ? v : Number.parseInt(String(v ?? ""), 10);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export function resolveCaptureSrc(src: string, slug: string): string {
  const s = src.trim();
  if (/^https?:\/\//i.test(s) || s.startsWith("/")) return s;
  return `/images/blog/${slug}/${s}`;
}

/**
 * Capture d'écran légendée au ratio naturel : largeur et hauteur fixées (lues
 * dans le fichier si l'article ne les donne pas), aucun recadrage, clic pour
 * agrandir. Légende, source et date de capture sous l'image.
 */
export function Capture({ locale, slug, eager = false, compact = false, ...p }: Internal) {
  if (!p.src) return null;
  const t = ARTICLE_LABELS[locale];
  const src = resolveCaptureSrc(p.src, slug);
  const remote = /^https?:\/\//i.test(src);
  const read = remote ? null : readPublicImageDimensions(src);
  const width = toInt(p.width) ?? read?.width ?? 1600;
  const height = toInt(p.height) ?? read?.height ?? 900;
  if (!read && !toInt(p.width)) {
    console.warn(`[Capture] dimensions inconnues pour ${src} : ajoutez width et height`);
  }
  const alt = p.alt?.trim() || p.legende || p.caption || "";
  const caption = p.legende ?? p.caption;
  const captured = formatArticleDate(p.captureLe ?? p.capturedAt, locale);
  const host = sourceHost(p.source);

  const thumb = remote ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className="capture-img"
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={compact ? "(max-width: 640px) 100vw, 360px" : "(max-width: 768px) 100vw, 720px"}
      priority={eager}
      loading={eager ? undefined : "lazy"}
      className="capture-img"
    />
  );

  return (
    <figure className={`capture not-prose ${compact ? "" : "my-10"}`}>
      <CaptureLightbox
        src={src}
        alt={alt}
        width={width}
        height={height}
        remote={remote}
        enlargeLabel={t.enlarge}
        closeLabel={t.close}
      >
        {thumb}
      </CaptureLightbox>
      {caption || p.source || captured ? (
        <figcaption className="mt-3 text-[13px] leading-relaxed text-fog">
          {caption ? <span className="text-stone">{caption}</span> : null}
          {p.source || captured ? (
            <span className="meta mt-1 block text-[10px]">
              {p.source ? (
                <>
                  {t.source}
                  {t.colon}{" "}
                  <a href={p.source} target="_blank" rel="noopener noreferrer" className="underline decoration-line-strong underline-offset-4 hover:text-cream">
                    {host ?? p.source}
                  </a>
                </>
              ) : null}
              {p.source && captured ? <span aria-hidden> / </span> : null}
              {captured ? (
                <>
                  {t.capturedOn}{" "}
                  {captured.iso ? <time dateTime={captured.iso}>{captured.label}</time> : captured.label}
                </>
              ) : null}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
