import type { Metadata } from "next";
import { baseUrl, siteName } from "@/lib/site";

const contactEmail = "hello@businessdynamite.xyz";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contacter ${siteName}.`,
  alternates: { canonical: `${baseUrl}/contact` },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="ds-surface p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Parlons de ton projet
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
        <p className="mt-4 text-neutral-800">
          Une question, un besoin ou un projet ? Écrivez à :
        </p>
        <p className="mt-6">
          <a
            href={`mailto:${contactEmail}`}
            className="ds-link break-all text-xl font-semibold text-neutral-950"
          >
            {contactEmail}
          </a>
        </p>
      </div>
    </div>
  );
}
