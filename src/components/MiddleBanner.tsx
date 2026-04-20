import { FORMATION_PROMO_URL } from "@/lib/formation-promo";

export function MiddleBanner() {
  return (
    <aside
      className="my-10 rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white px-5 py-6 shadow-sm sm:px-7 sm:py-8"
      aria-label="Formation vidéo IA gratuite"
    >
      <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em] text-neutral-500">
        Méthode offerte
      </p>
      <p className="mt-3 text-xl font-semibold leading-snug tracking-tight text-neutral-950 sm:text-2xl">
        Le film que vous imaginez
        <br className="sm:hidden" /> peut enfin exister.
      </p>
      <ul className="mt-4 space-y-2 text-[1.05rem] leading-relaxed text-neutral-900">
        <li className="flex gap-2.5">
          <span className="mt-0.5 shrink-0 font-semibold text-emerald-700">
            ✓
          </span>
          <span>
            Créez des séries, des films ou des publicités dans tous les styles
          </span>
        </li>
      </ul>
      <p className="mt-4 text-[1.05rem] leading-relaxed text-neutral-800">
        Recevez gratuitement la méthode pour transformer une simple idée
        écrite en storyboard clair, puis en vidéo IA spectaculaire. Même si
        vous débutez.
      </p>
      <p className="mt-6">
        <a
          href={FORMATION_PROMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-950 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-neutral-800 sm:w-auto"
        >
          Recevoir la méthode gratuite
        </a>
      </p>
    </aside>
  );
}
