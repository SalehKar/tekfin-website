// CommonJS
const nodemailer = require("nodemailer");

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers: HEADERS, body: "" };
  if (event.httpMethod !== "POST")
    return { statusCode: 405, headers: HEADERS, body: JSON.stringify({ error: "Method Not Allowed" }) };

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch { return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: "Invalid JSON" }) }; }

  const email = (body.email || "").trim();
  const recommendation = (body.recommendation || "").trim();
  const subject = (body.subject || "Your AI Storage Recommendation").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: "Valid email required" }) };
  if (!recommendation)
    return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: "Missing recommendation" }) };

  // بيئة SMTP من إعدادات Netlify → Environment variables
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL)
    return { statusCode: 500, headers: HEADERS, body: JSON.stringify({ error: "SMTP env vars missing" }) };

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true للمنفذ 465
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const text = [
      "AI Storage Recommendation",
      "-------------------------",
      recommendation,
      "",
      `Sent: ${new Date().toISOString()}`
    ].join("\n");

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: email,
      subject,
      text,
    });

    return { statusCode: 200, headers: HEADERS, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    console.error("send-recommendation error:", e);
    return { statusCode: 502, headers: HEADERS, body: JSON.stringify({ error: "Email send failed" }) };
  }
};
