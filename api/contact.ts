import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  clinic?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const recipients = [
  process.env.CONTACT_EMAIL_PRIMARY,
  process.env.CONTACT_EMAIL_SECONDARY,
].filter(Boolean) as string[];

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

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email service is not configured" },
      { status: 500 },
    );
  }

  if (recipients.length === 0) {
    return Response.json(
      { error: "Contact recipients are not configured" },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const clinic = String(payload.clinic || "").trim();
  const message = String(payload.message || "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email and message are required" },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (name.length > 120 || email.length > 160 || clinic.length > 160) {
    return Response.json({ error: "Input is too long" }, { status: 400 });
  }

  if (message.length > 3000) {
    return Response.json({ error: "Message is too long" }, { status: 400 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeClinic = escapeHtml(clinic || "-");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
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

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Resend contact error:", error);
    return Response.json({ error: "Email could not be sent" }, { status: 500 });
  }
}
