import type { Metadata } from "next";
import { baseUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contacter ${siteName}.`,
  alternates: { canonical: `${baseUrl}/contact` },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:py-20 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-neutral-800">
        Cette page est un point de contact neutre. Remplacez ce texte par votre
        e-mail, un formulaire ou les liens de votre choix.
      </p>
    </div>
  );
}
