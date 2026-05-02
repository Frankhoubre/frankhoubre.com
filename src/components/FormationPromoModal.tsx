"use client";

import { useCallback, useEffect, useState } from "react";
import {
  FORMATION_PROMO_STORAGE_KEY,
  FORMATION_PROMO_URL,
  formationPromoTodayKey,
} from "@/lib/formation-promo";

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

export function FormationPromoModal() {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
    markShownToday();
  }, []);

  useEffect(() => {
    if (wasShownToday()) return;

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      <button
        type="button"
        className="absolute inset-0 bg-zinc-950/50 backdrop-blur-md transition-opacity"
        aria-label="Fermer la promotion"
        onClick={dismiss}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="formation-promo-title"
        className="relative max-h-[min(90vh,640px)] w-full max-w-[26rem] overflow-y-auto rounded-2xl border border-neutral-200/90 bg-gradient-to-br from-neutral-50 via-white to-neutral-50/95 p-6 shadow-[0_25px_50px_-12px_rgb(0_0_0/0.25)] sm:max-w-lg sm:p-8"
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
          aria-label="Fermer"
        >
          <span className="text-2xl leading-none" aria-hidden>
            ×
          </span>
        </button>
        <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em] text-neutral-500">
          Méthode offerte
        </p>
        <p
          id="formation-promo-title"
          className="mt-3 pr-8 text-xl font-semibold leading-snug tracking-tight text-neutral-950 sm:text-2xl"
        >
          Le film que vous imaginez
          <br className="sm:hidden" /> peut enfin exister.
        </p>
        <ul className="mt-4 space-y-2 text-[1.05rem] leading-relaxed text-neutral-900">
          <li className="flex gap-2.5">
            <span className="mt-0.5 shrink-0 font-semibold text-emerald-700">
              ✓
            </span>
            <span>
              Créez des séries, des films ou des publicités dans tous les
              styles
            </span>
          </li>
        </ul>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-neutral-800">
          Recevez gratuitement la méthode pour transformer une simple idée
          écrite en storyboard clair, puis en vidéo IA spectaculaire. Même si
          vous débutez.
        </p>
        <p className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={FORMATION_PROMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="ds-cta-dark flex-1 !py-3.5 text-center"
          >
            Recevoir la méthode gratuite
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="ds-button-secondary flex-1 !py-3.5 text-sm font-medium text-neutral-800"
          >
            Plus tard
          </button>
        </p>
        <p className="mt-4 text-center text-xs text-neutral-500">
          Pas de spam — accès et méthode envoyés par e-mail.
        </p>
      </div>
    </div>
  );
}
