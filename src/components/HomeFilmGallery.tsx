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
 * Deux bandeaux de photogrammes en défilement continu, sens opposés, comme
 * deux bandes de pellicule. Vignettes rectangulaires, hairline, pas d'ombre.
 * `images` vide => rien.
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
        className="frame frame-hover relative h-28 w-[12.5rem] shrink-0 sm:h-40 sm:w-72"
      >
        {/* Dimensions fixes plutôt que `fill` : le srcset se limite à 1x/2x. */}
        <Image
          src={image.src}
          alt={index < row.length ? image.alt : ""}
          width={320}
          height={176}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </figure>
    ));

  return (
    <div id="galerie-inspiration-films" className="w-full" role="region" aria-label={label}>
      <div className="space-y-3">
        <div className="marquee">
          <div className="marquee-track marquee-left">{renderRow(firstRow, "row1")}</div>
        </div>
        <div className="marquee">
          <div className="marquee-track marquee-right">{renderRow(secondRow, "row2")}</div>
        </div>
      </div>
    </div>
  );
}
