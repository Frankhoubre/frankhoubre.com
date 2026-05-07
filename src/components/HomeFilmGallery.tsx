type GalleryImage = {
  src: string;
  alt: string;
};

type HomeFilmGalleryProps = {
  images: GalleryImage[];
};

/**
 * Deux bandeaux d’images en défilement (sans texte d’introduction).
 * Prévu pour le hero : `images` vides => ne rien afficher.
 */
export function HomeFilmGallery({ images }: HomeFilmGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const firstRow = images.filter((_, index) => index % 2 === 0);
  const secondRow = images.filter((_, index) => index % 2 !== 0);

  return (
    <div
      id="galerie-inspiration-films"
      className="w-full"
      role="region"
      aria-label="Défilé d’extraits visuels"
    >
      <div className="space-y-4 sm:space-y-5">
        <div className="ds-marquee-track">
          <div className="ds-marquee-slide-left">
            {[...firstRow, ...firstRow].map((image, index) => (
              <article
                key={`row1-${image.src}-${index}`}
                className="relative h-40 w-72 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-zinc-900/40 shadow-lg shadow-black/30 sm:h-44 sm:w-80"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </article>
            ))}
          </div>
        </div>

        <div className="ds-marquee-track">
          <div className="ds-marquee-slide-right">
            {[...secondRow, ...secondRow].map((image, index) => (
              <article
                key={`row2-${image.src}-${index}`}
                className="relative h-40 w-72 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-zinc-900/40 shadow-lg shadow-black/30 sm:h-44 sm:w-80"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
