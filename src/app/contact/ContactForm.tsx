"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Impossible d'envoyer le message.");
      }

      setStatus("success");
      setMessage("Merci, votre message a bien ete envoye.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="ds-card mt-8 space-y-4 p-5 sm:p-6">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-900">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={120}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-neutral-900">
          Sujet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={200}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          maxLength={5000}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex cursor-pointer items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </button>

      {message ? (
        <p
          className={`text-sm ${status === "success" ? "text-emerald-700" : "text-red-700"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
