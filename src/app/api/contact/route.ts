import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const recipientEmail =
  process.env.CONTACT_TO_EMAIL ?? "rlatjfgml6471@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const name = normalize(payload.name);
  const email = normalize(payload.email);
  const subject = normalize(payload.subject);
  const message = normalize(payload.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: "Required fields are missing." },
      { status: 400 },
    );
  }

  const smtpUser = process.env.SMTP_USER;
  const rawSmtpPass = process.env.SMTP_PASS;
  const smtpPass = rawSmtpPass?.replace(/\s/g, "");

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      { message: "Email server is not configured." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"Casa Politica Intelligence Contact" <${smtpUser}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `[Casa Politica Intelligence] ${subject}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
        <h2 style="color: #001F5C;">Casa Politica Intelligence Contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb;" />
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
