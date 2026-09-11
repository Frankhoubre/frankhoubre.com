"use client";

import { useEffect, useState } from "react";
import { Arrow } from "@/components/ui/Cta";

/**
 * Barre d'appel à l'action collée en bas de l'écran sur mobile : elle
 * apparaît une fois le formulaire du haut sorti de l'écran et ramène vers lui.
 */
export function StickyCta({ targetId, label }: { targetId: string; label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-charcoal/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a href={`#${targetId}`} tabIndex={visible ? 0 : -1} className="btn btn-primary w-full">
        <span>{label}</span>
        <Arrow />
      </a>
    </div>
  );
}
