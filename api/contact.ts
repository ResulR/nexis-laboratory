import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  clinic?: string;
  message?: string;
};

function getRecipients() {
  return [
    process.env.CONTACT_EMAIL_PRIMARY,
    process.env.CONTACT_EMAIL_SECONDARY,
  ].filter(Boolean) as string[];
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parsePayload(req: VercelRequest): ContactPayload {
  if (!req.body) {
    return {};
  }

  if (typeof req.body === "string") {
    return JSON.parse(req.body) as ContactPayload;
  }

  return req.body as ContactPayload;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      endpoint: "contact",
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({
      error: "Email service is not configured",
    });
  }

  const recipients = getRecipients();

  if (recipients.length === 0) {
    return res.status(500).json({
      error: "Contact recipients are not configured",
    });
  }

  let payload: ContactPayload;

  try {
    payload = parsePayload(req);
  } catch {
    return res.status(400).json({
      error: "Invalid JSON body",
    });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const clinic = String(payload.clinic || "").trim();
  const message = String(payload.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email and message are required",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      error: "Invalid email address",
    });
  }

  if (name.length > 120 || email.length > 160 || clinic.length > 160) {
    return res.status(400).json({
      error: "Input is too long",
    });
  }

  if (message.length > 3000) {
    return res.status(400).json({
      error: "Message is too long",
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeClinic = escapeHtml(clinic || "-");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "NEXIS Laboratory <onboarding@resend.dev>",
      to: recipients,
      replyTo: email,
      subject: `Kërkesë e re nga ${name} - NEXIS Laboratory`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #102033;">
          <h2>Kërkesë e re nga faqja NEXIS Laboratory</h2>
          <p><strong>Emri:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Klinika / Praktika:</strong> ${safeClinic}</p>
          <hr />
          <p><strong>Mesazhi:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return res.status(200).json({
      ok: true,
    });
  } catch (error) {
    console.error("Resend contact error:", error);

    return res.status(500).json({
      error: "Email could not be sent",
    });
  }
}
