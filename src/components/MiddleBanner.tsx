import Image from "next/image";
import Link from "next/link";
import { FORMATION_PROMO_URL } from "@/lib/formation-promo";
import { Arrow } from "@/components/ui/Cta";

/** Photogramme de fond de l'encart (extrait de film IA de Frank). */
const BANNER_STILL = {
  src: "/images/home/hero-base.webp",
  alt: "",
};

/**
 * Encart inséré au milieu des articles (composant MDX <MiddleBanner />) :
 * photogramme plein cadre sous un dégradé noir progressif, offre à gauche,
 * un bouton plein.
 */
export function MiddleBanner() {
  return (
    <aside
      className="not-prose frame frame-grain frame-marks relative my-12 overflow-hidden"
      aria-label="Formation vidéo IA gratuite"
    >
      <Image
        src={BANNER_STILL.src}
        alt={BANNER_STILL.alt}
        fill
        sizes="(max-width: 768px) 100vw, 720px"
        className="object-cover object-[70%_center]"
      />
      <span
        className="absolute inset-0 bg-[linear-gradient(90deg,rgb(11_11_12/0.96)_0%,rgb(11_11_12/0.88)_38%,rgb(11_11_12/0.45)_70%,rgb(11_11_12/0.15)_100%),linear-gradient(180deg,rgb(11_11_12/0.2)_0%,rgb(11_11_12/0)_40%,rgb(11_11_12/0.75)_100%)]"
        aria-hidden
      />
      <div className="relative z-[3] max-w-md p-6 sm:p-8">
        <p className="meta meta-strong">Méthode offerte · 3 vidéos · 24 min</p>
        <p className="mt-4 text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-cream">
          Le film que vous avez en tête peut enfin exister.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-stone">
          Recevez gratuitement la méthode pour transformer une simple idée
          écrite en storyboard clair, puis en vidéo IA crédible. Séries, films
          ou publicités, dans tous les styles, même si vous débutez.
        </p>
        <p className="mt-6">
          <Link href={FORMATION_PROMO_URL} className="btn btn-primary">
            <span>Recevoir la méthode gratuite</span>
            <Arrow />
          </Link>
        </p>
        <p className="meta mt-5 text-[10px] text-fog/80">Accès immédiat · sans carte bancaire</p>
      </div>
      <span className="meta absolute bottom-4 right-5 z-[3] hidden text-[10px] sm:block">Fig. · Extrait de film IA</span>
    </aside>
  );
}
