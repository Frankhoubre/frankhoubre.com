"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SUBSCRIBED_COOKIE } from "@/lib/funnel/config";
import {
  FORMATION_PROMO_STORAGE_KEY,
  FORMATION_PROMO_URL,
  formationPromoTodayKey,
} from "@/lib/formation-promo";
import { Arrow } from "@/components/ui/Cta";

const DELAY_MS = 30_000;

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
 * Fenêtre promo (une fois par jour, après 30 s) : fiche sombre cadrée,
 * un seul bouton plein, fermeture au clic hors cadre ou à Échap.
 */
export function FormationPromoModal() {
  const [open, setOpen] = useState(false);

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
    <div className="fixed inset-0 z-[var(--z-modal)] flex items-end justify-center p-4 sm:items-center sm:p-8">
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
        aria-label="Fermer la promotion"
        onClick={dismiss}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="formation-promo-title"
        className="relative w-full max-w-lg border border-line-strong bg-charcoal-2 p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <p className="meta">Méthode offerte · 3 vidéos · 24 min</p>
          <button
            type="button"
            onClick={dismiss}
            className="meta -mr-2 -mt-2 flex h-10 items-center px-2 text-fog transition-colors hover:text-cream"
            aria-label="Fermer"
          >
            Fermer
          </button>
        </div>
        <p id="formation-promo-title" className="h-block mt-6 text-cream">
          Le film que vous imaginez peut enfin exister.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-fog">
          Recevez gratuitement la méthode pour transformer une simple idée
          écrite en storyboard clair, puis en vidéo IA crédible. Même si vous
          débutez. Séries, films ou publicités, dans tous les styles.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href={FORMATION_PROMO_URL} onClick={dismiss} className="btn btn-primary flex-1">
            <span>Recevoir la méthode</span>
            <Arrow />
          </Link>
          <button type="button" onClick={dismiss} className="btn btn-quiet flex-1 sm:flex-none">
            <span>Plus tard</span>
          </button>
        </div>
        <p className="meta mt-5 text-[10px] text-fog/70">
          Pas de spam. Accès et méthode envoyés par email.
        </p>
      </div>
    </div>
  );
}
