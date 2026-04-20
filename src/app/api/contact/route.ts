import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "hellobusinessdynamite@gmail.com";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: ContactPayload) {
  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email);
  const subject = asTrimmedString(payload.subject);
  const message = asTrimmedString(payload.message);

  if (!name || !email || !subject || !message) {
    return { error: "Tous les champs sont obligatoires." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Veuillez fournir une adresse email valide." };
  }

  if (name.length > 120 || email.length > 200 || subject.length > 200 || message.length > 5000) {
    return { error: "Certains champs depassent la longueur autorisee." };
  }

  return { name, email, subject, message };
}

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variable d'environnement manquante: ${name}`);
  }
  return value;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Requete invalide." }, { status: 400 });
  }

  const validated = validate(payload);
  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  try {
    const host = getEnv("SMTP_HOST");
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = getEnv("SMTP_USER");
    const pass = getEnv("SMTP_PASSWORD");
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? user;
    const secure = process.env.SMTP_SECURE === "true";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: RECIPIENT_EMAIL,
      replyTo: validated.email,
      subject: `[Contact site] ${validated.subject}`,
      text: [
        `Nom: ${validated.name}`,
        `Email: ${validated.email}`,
        "",
        "Message:",
        validated.message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact mail error:", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 500 },
    );
  }
}
