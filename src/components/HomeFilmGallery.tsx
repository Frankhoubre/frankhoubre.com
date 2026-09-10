import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type HomeFilmGalleryProps = {
  images: GalleryImage[];
  label?: string;
};

/**
 * Deux bandeaux d'images en défilement continu. Les vignettes passent par
 * next/image (formats AVIF/WebP, largeur adaptée) ; `images` vide => rien.
 */
export function HomeFilmGallery({
  images,
  label = "Défilé d’extraits visuels",
}: HomeFilmGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const firstRow = images.filter((_, index) => index % 2 === 0);
  const secondRow = images.filter((_, index) => index % 2 !== 0);

  const renderRow = (row: GalleryImage[], key: string) =>
    [...row, ...row].map((image, index) => (
      <figure
        key={`${key}-${image.src}-${index}`}
        className="relative h-32 w-56 shrink-0 overflow-hidden rounded-xl border border-[rgba(17,17,17,0.14)] bg-[#e6e6ea] shadow-lg shadow-black/30 sm:h-44 sm:w-80"
      >
        {/* Dimensions fixes plutôt que `fill` : le srcset se limite à 1x/2x
            (deux candidats au lieu de seize), soit ~80 Ko de HTML en moins
            sur l'accueil pour les 60 vignettes du bandeau. */}
        <Image
          src={image.src}
          alt={index < row.length ? image.alt : ""}
          width={320}
          height={176}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </figure>
    ));

  return (
    <div
      id="galerie-inspiration-films"
      className="w-full"
      role="region"
      aria-label={label}
    >
      <div className="space-y-4 sm:space-y-5">
        <div className="ds-marquee-track">
          <div className="ds-marquee-slide-left">{renderRow(firstRow, "row1")}</div>
        </div>
        <div className="ds-marquee-track">
          <div className="ds-marquee-slide-right">{renderRow(secondRow, "row2")}</div>
        </div>
      </div>
    </div>
  );
}
