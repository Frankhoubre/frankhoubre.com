import Link from "next/link";
import { FORMATION_PROMO_URL } from "@/lib/formation-promo";
import { Arrow } from "@/components/ui/Cta";

/** Encart inséré au milieu des articles (composant MDX <MiddleBanner />). */
export function MiddleBanner() {
  return (
    <aside
      className="not-prose my-12 border-y border-line py-8"
      aria-label="Formation vidéo IA gratuite"
    >
      <p className="meta">Méthode offerte · 3 vidéos · 24 min</p>
      <p className="h-block mt-4 text-cream">
        Le film que vous imaginez peut enfin exister.
      </p>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-fog">
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
    </aside>
  );
}
