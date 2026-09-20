const nodemailer = require("nodemailer");

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: HEADERS, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: HEADERS,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: HEADERS,
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const company = String(body.company || "").trim();
  const size = String(body.size || "").trim();
  const subject = String(body.subject || "TekFin Contact Request").trim();
  const message = String(body.message || "").trim();
  const intent = String(body.intent || "consultation").trim();

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: HEADERS,
      body: JSON.stringify({ error: "Name, email and message are required" }),
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      headers: HEADERS,
      body: JSON.stringify({ error: "Valid email required" }),
    };
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_FROM_EMAIL,
    FROM_NAME = "TekFin Teknoloji",
  } = process.env;

  const contactFromEmail = CONTACT_FROM_EMAIL || "info@tekfinteknoloji.com";
  const recipient = "info@tekfinteknoloji.com";

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: "SMTP configuration is incomplete" }),
    };
  }

  const text = [
    "New contact request from TekFin website",
    "",
    `Intent: ${intent}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Company: ${company || "-"}`,
    `Company size: ${size || "-"}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#1f2937">
      <h2 style="color:#1f3b6f">New TekFin Website Contact Request</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px;font-weight:700">Intent</td><td style="padding:8px">${escapeHtml(intent)}</td></tr>
        <tr><td style="padding:8px;font-weight:700">Name</td><td style="padding:8px">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px;font-weight:700">Email</td><td style="padding:8px">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:8px;font-weight:700">Phone</td><td style="padding:8px">${escapeHtml(phone || "-")}</td></tr>
        <tr><td style="padding:8px;font-weight:700">Company</td><td style="padding:8px">${escapeHtml(company || "-")}</td></tr>
        <tr><td style="padding:8px;font-weight:700">Company size</td><td style="padding:8px">${escapeHtml(size || "-")}</td></tr>
        <tr><td style="padding:8px;font-weight:700">Subject</td><td style="padding:8px">${escapeHtml(subject)}</td></tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#f5f7fa;border-radius:8px">
        <strong>Message</strong>
        <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const info = await transporter.sendMail({
      from: `${FROM_NAME} <${contactFromEmail}>`,
      to: recipient,
      replyTo: email,
      subject,
      text,
      html,
    });

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ ok: true, accepted: info.accepted }),
    };
  } catch (error) {
    console.error("send-contact error:", error);
    return {
      statusCode: 502,
      headers: HEADERS,
      body: JSON.stringify({ error: "Email send failed" }),
    };
  }
};
