"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { BuzzEvent } from "@/lib/buzz/config";
import { sendBuzzEvent } from "@/components/buzz/buzzTrack";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: BuzzEvent;
  detail?: string;
  children: ReactNode;
};

/** Lien sortant (Instagram, Imaginode) dont le clic est compté. */
export function BuzzTrackedLink({ event, detail, children, onClick, ...rest }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
      onClick={(e) => {
        sendBuzzEvent(event, detail);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
