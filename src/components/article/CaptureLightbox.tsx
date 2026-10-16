"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  remote: boolean;
  enlargeLabel: string;
  closeLabel: string;
  children: ReactNode;
};

/**
 * Agrandissement d'une capture dans un <dialog> modal natif : Échap ferme,
 * le focus va sur « Fermer » à l'ouverture et revient sur la vignette à la
 * fermeture, un clic hors de l'image ferme aussi. L'image pleine taille n'est
 * chargée qu'à la première ouverture.
 */
export function CaptureLightbox({ src, alt, width, height, remote, enlargeLabel, closeLabel, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [opened, setOpened] = useState(false);

  const open = useCallback(() => {
    setOpened(true);
    const d = dialogRef.current;
    if (d && !d.open) {
      d.showModal();
      document.documentElement.classList.add("lightbox-open");
    }
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => {
      document.documentElement.classList.remove("lightbox-open");
      triggerRef.current?.focus();
    };
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={open}
        className="capture-trigger group relative block w-full cursor-zoom-in text-left"
        aria-label={`${enlargeLabel} : ${alt}`}
        aria-haspopup="dialog"
      >
        {children}
        <span className="capture-zoom meta" aria-hidden>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M1 4.5V1h3.5M11 4.5V1H7.5M1 7.5V11h3.5M11 7.5V11H7.5" />
          </svg>
        </span>
      </button>
      <dialog
        ref={dialogRef}
        className="capture-dialog"
        aria-modal="true"
        aria-label={alt}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="capture-dialog-inner" onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}>
          <button type="button" className="capture-close btn btn-sm" onClick={close} autoFocus>
            <span>{closeLabel}</span>
          </button>
          {opened ? (
            remote ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={alt} width={width} height={height} className="capture-full" />
            ) : (
              <Image src={src} alt={alt} width={width} height={height} sizes="100vw" quality={80} className="capture-full" />
            )
          ) : null}
        </div>
      </dialog>
    </>
  );
}
