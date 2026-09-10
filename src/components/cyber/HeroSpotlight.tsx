"use client";

import { useEffect } from "react";

type Props = {
  /** id de l'élément qui reçoit le masque radial (couche « reveal »). */
  targetId: string;
};

function radiusFor(width: number): number {
  if (width < 480) return 120;
  if (width < 720) return 160;
  return 260;
}

/**
 * Projecteur suivant le curseur (ou le doigt) : applique un masque radial
 * sur la couche image alternative pour la révéler autour du pointeur.
 */
export function HeroSpotlight({ targetId }: Props) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const paint = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const r = radiusFor(window.innerWidth);
      const mask = `radial-gradient(circle ${r}px at ${x}px ${y}px, #fff 0%, #fff 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, transparent 100%)`;
      el.style.webkitMaskImage = mask;
      el.style.maskImage = mask;
    };

    const onMouse = (e: MouseEvent) => paint(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) paint(t.clientX, t.clientY);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [targetId]);

  return null;
}
