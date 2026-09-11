"use client";

import { useEffect } from "react";

type Props = {
  /** id de l'élément qui reçoit le masque radial (couche « reveal »). */
  targetId: string;
};

/**
 * Projecteur suivant le curseur : révèle la scène alternative autour du
 * pointeur par un masque radial doux. Desktop avec pointeur fin uniquement ;
 * sur mobile et en mouvement réduit, la couche reste invisible.
 */
export function HeroSpotlight({ targetId }: Props) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const r = Math.max(180, Math.min(320, window.innerWidth * 0.16));
      const mask = `radial-gradient(circle ${r}px at ${x - rect.left}px ${y - rect.top}px, #fff 0%, #fff 35%, rgba(255,255,255,0.7) 55%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,0.08) 90%, transparent 100%)`;
      el.style.webkitMaskImage = mask;
      el.style.maskImage = mask;
    };

    const onMouse = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = window.requestAnimationFrame(paint);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [targetId]);

  return null;
}
