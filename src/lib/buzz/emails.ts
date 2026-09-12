import { Resend } from "resend";
import { SUPPORT_EMAIL } from "@/lib/funnel/config";
import { buzzContent } from "@/lib/buzz/content";

/** Email de livraison de la méthode (un seul, transactionnel, en anglais). */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isBuzzEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM);
}

export async function sendBuzzAccessEmail(input: {
  to: string;
  firstName: string;
  accessUrl: string;
}): Promise<{ ok: true; id?: string } | { ok: false; error: string }> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  if (!key || !from) return { ok: false, error: "resend_not_configured" };
  const resend = new Resend(key);
  const c = buzzContent.email;
  const greeting = c.greeting(input.firstName);
  const paragraph = (p: string) =>
    `<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#14100c;">${escapeHtml(p)}</p>`;

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#fbf7f1;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fbf7f1;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e4dcd2;border-radius:16px;">
<tr><td style="padding:32px 28px;font-family:Inter,-apple-system,Segoe UI,Helvetica,Arial,sans-serif;">
<p style="margin:0 0 20px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#6b5b4e;">Frank Houbre · Viral AI videos</p>
${paragraph(greeting)}
${c.body.map(paragraph).join("")}
<p style="margin:24px 0;"><a href="${input.accessUrl}" style="display:inline-block;background:#14100c;color:#fbdbaf;text-decoration:none;font-weight:600;font-size:16px;padding:14px 22px;border-radius:10px;">${escapeHtml(c.cta)}</a></p>
<p style="margin:0 0 16px;font-size:13px;line-height:1.6;color:#6b5b4e;"><a href="${input.accessUrl}" style="color:#c45a18;">${escapeHtml(input.accessUrl)}</a></p>
<p style="margin:24px 0 0;font-size:16px;line-height:1.6;color:#14100c;">Frank</p>
</td></tr>
<tr><td style="padding:18px 28px 26px;border-top:1px solid #e4dcd2;font-family:Inter,-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6b5b4e;">${escapeHtml(c.footer)}</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;

  const text = [
    greeting,
    "",
    ...c.body.flatMap((p) => [p, ""]),
    `${c.cta}: ${input.accessUrl}`,
    "",
    "Frank",
    "",
    c.footer,
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from,
    to: input.to,
    replyTo: process.env.RESEND_REPLY_TO ?? SUPPORT_EMAIL,
    subject: c.subject,
    html,
    text,
    tags: [{ name: "funnel", value: "viral-ai-videos" }],
  });
  if (error) return { ok: false, error: error.message };
  return { ok: true, id: data?.id };
}
