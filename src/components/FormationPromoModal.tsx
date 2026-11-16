"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { SUBSCRIBED_COOKIE } from "@/lib/funnel/config";
import {
  FORMATION_COPY,
  FORMATION_PROMO_STORAGE_KEY,
  formationHref,
  formationPromoTodayKey,
} from "@/lib/formation-promo";
import { localeFromPathname } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Cta";

const DELAY_MS = 30_000;

/** Photogramme de la fenêtre : extrait de film IA de Frank (galerie de l'accueil). */
const PROMO_STILL_SRC = "/images/home/gallery/shot-37.webp";

/** Textes de la fenêtre, dans la langue de la page (la formation est en français). */
const MODAL_COPY = {
  fr: {
    stillAlt:
      "Extrait de film IA : une silhouette assise sur une chaise dans une forêt embrumée, face au soleil couchant",
    closeVeil: "Fermer la promotion",
    close: "Fermer",
    fig: "Fig. 01 · Extrait de film IA",
    offered: "Méthode offerte",
    videos: "3 vidéos",
    specs: "24 min · 0 €",
    kicker: "Formation vidéo IA gratuite",
    title: "Le film que vous imaginez peut enfin exister.",
    text: "Une idée écrite, un storyboard clair, puis une vidéo IA crédible. Même si vous débutez.",
    button: "Recevoir la méthode",
    later: "Plus tard",
    note: "Accès immédiat · sans carte bancaire · désinscription en un clic",
  },
  en: {
    stillAlt:
      "AI film still: a figure sitting on a chair in a misty forest, facing the setting sun",
    closeVeil: "Close this offer",
    close: "Close",
    fig: "Fig. 01 · AI film still",
    offered: "Free method",
    videos: "3 videos",
    specs: "24 min · €0",
    kicker: "Free AI video training · in French",
    title: "The film you imagine can finally exist.",
    text: "A written idea, a clear storyboard, then a believable AI video. Even if you are just starting. The videos are in French.",
    button: "Get the method",
    later: "Later",
    note: "Instant access · no credit card · unsubscribe in one click",
  },
} as const;

function markShownToday() {
  try {
    localStorage.setItem(
      FORMATION_PROMO_STORAGE_KEY,
      formationPromoTodayKey(),
    );
  } catch {
    /* private mode / quota */
  }
}

/** Déjà inscrit à la formation (cookie posé par l'API du funnel). */
function alreadySubscribed(): boolean {
  try {
    return document.cookie
      .split(";")
      .some((c) => c.trim().startsWith(`${SUBSCRIBED_COOKIE}=`));
  } catch {
    return false;
  }
}

function wasShownToday(): boolean {
  try {
    return (
      localStorage.getItem(FORMATION_PROMO_STORAGE_KEY) ===
      formationPromoTodayKey()
    );
  } catch {
    return false;
  }
}

/**
 * Fenêtre promo (une fois par jour, après 30 s) : double page façon dossier
 * de production, photogramme cadré à gauche, offre à droite, un seul bouton
 * plein. Fermeture au clic hors cadre ou à Échap.
 */
export function FormationPromoModal() {
  const [open, setOpen] = useState(false);
  const locale = localeFromPathname(usePathname());
  const c = MODAL_COPY[locale];
  const days = FORMATION_COPY[locale].end.days;

  const dismiss = useCallback(() => {
    setOpen(false);
    markShownToday();
  }, []);

  useEffect(() => {
    if (wasShownToday() || alreadySubscribed()) return;

    const t = window.setTimeout(() => {
      setOpen(true);
      markShownToday();
    }, DELAY_MS);

    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[var(--z-modal)] flex items-end justify-center p-3 sm:items-center sm:p-8">
      <button
        type="button"
        className="modal-veil absolute inset-0 bg-charcoal/75 backdrop-blur-sm"
        aria-label={c.closeVeil}
        onClick={dismiss}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="formation-promo-title"
        aria-describedby="formation-promo-text"
        className="modal-in relative flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-y-auto border border-line-strong bg-charcoal md:grid md:grid-cols-[0.95fr_1.05fr]"
      >
        {/* Photogramme */}
        <figure className="frame-grain relative aspect-[5/2] shrink-0 overflow-hidden sm:aspect-[16/9] border-b border-line md:aspect-auto md:min-h-[30rem] md:border-b-0 md:border-r">
          <Image
            src={PROMO_STILL_SRC}
            alt={c.stillAlt}
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-cover object-[55%_center]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-charcoal/30" aria-hidden />
          <span className="frame-marks absolute inset-0" aria-hidden />
          <span className="meta meta-strong absolute left-5 top-4 hidden text-[10px] sm:block">{c.fig}</span>
          <figcaption className="absolute bottom-5 left-5 right-5">
            <span className="meta block text-[10px]">{c.offered}</span>
            <span className="display mt-2 block text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.9] text-cream">
              {c.videos}
              <span className="block text-fog">{c.specs}</span>
            </span>
          </figcaption>
        </figure>

        {/* Offre */}
        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <p className="meta">{c.kicker}</p>
            <button
              type="button"
              onClick={dismiss}
              className="meta -mr-2 -mt-2 flex h-11 items-center gap-2 px-2 text-fog transition-colors hover:text-cream"
              aria-label={c.close}
            >
              <span>{c.close}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden>
                <path d="M1 1l10 10M11 1L1 11" />
              </svg>
            </button>
          </div>

          <h2 id="formation-promo-title" className="mt-6 text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.02] tracking-[-0.025em] text-cream">
            {c.title}
          </h2>
          <p id="formation-promo-text" className="serif mt-4 text-[1.2rem] leading-[1.3] text-stone">
            {c.text}
          </p>

          <dl className="mt-6">
            {days.map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[4.25rem_minmax(0,1fr)] items-baseline gap-4 border-t border-line py-2.5 last:border-b"
              >
                <dt className="meta meta-strong">{k}</dt>
                <dd className="text-sm leading-snug text-stone">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={formationHref("modal")}
              onClick={dismiss}
              className="btn btn-primary flex-1"
              {...(locale === "en" ? { hrefLang: "fr" } : {})}
            >
              <span>{c.button}</span>
              <Arrow />
            </Link>
            <button type="button" onClick={dismiss} className="btn btn-quiet sm:flex-none">
              <span>{c.later}</span>
            </button>
          </div>
          <p className="mt-auto pt-6 text-xs text-fog">
            {c.note}
          </p>
        </div>
      </div>
    </div>
  );
}
