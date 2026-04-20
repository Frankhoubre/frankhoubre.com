import type { Metadata } from "next";
import { baseUrl, siteName } from "@/lib/site";
import { ContactForm } from "./ContactForm";

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
        Une question, un besoin ou un projet ? Envoyez votre message via le
        formulaire ci-dessous.
      </p>
      <ContactForm />
    </div>
  );
}
