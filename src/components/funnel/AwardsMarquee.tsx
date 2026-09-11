import { FUNNEL_AWARDS } from "@/lib/funnel/config";

/**
 * Bandeau défilant « Par Frank Houbre » suivi des distinctions en festival.
 * La piste est doublée pour boucler sans saut (l'animation glisse de 50 %) ;
 * la copie est masquée aux lecteurs d'écran, qui lisent la liste une fois.
 */
export function AwardsMarquee() {
  const items = [
    { strong: true, label: "Par Frank Houbre", sub: "Réalisateur IA, formateur" },
    ...FUNNEL_AWARDS.map((a) => ({ strong: false, label: a.label, sub: a.festival })),
  ];
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <li key={`${it.label}-${i}`} className="flex shrink-0 items-baseline gap-3 whitespace-nowrap">
          <span className={`meta ${it.strong ? "meta-strong text-cream" : "text-cream"}`}>{it.label}</span>
          <span className="meta text-fog">{it.sub}</span>
          <span className="meta ml-4 text-fog" aria-hidden>
            ·
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="border-y border-line py-4" aria-label="Récompenses en festival">
      <div className="marquee">
        <div className="marquee-track marquee-left marquee-text">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
