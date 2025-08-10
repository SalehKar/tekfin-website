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

  const to = (body.email || "").trim();
  const recommendation = (body.recommendation || "").trim();
  const subject = (body.subject || "Your AI Storage Recommendation").trim();
  const replyTo = (body.replyTo || "").trim();

  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to))
    return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: "Valid email required" }) };
  if (!recommendation)
    return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: "Missing recommendation" }) };

  // Env vars
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, ZOHO_DC } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    return { statusCode: 500, headers: HEADERS, body: JSON.stringify({ error: "Missing SMTP_USER/SMTP_PASS" }) };
  }

  // حدّد الهوست تلقائياً:
  // 1) لو SMTP_HOST موجود -> استعمله
  // 2) غير ذلك: استخدم ZOHO_DC (eu|com) لتحديد نطاق Zoho
  const dc = String(ZOHO_DC || "").toLowerCase(); // "eu" أو "com"
  const resolvedHost =
    SMTP_HOST?.trim() ||
    (dc === "eu" ? "smtp.zoho.eu" : "smtp.zoho.com");

  // المنفذ: إن ما تعيّن، افتراض 465
  const port = Number(SMTP_PORT || 465);
  const secure = port === 465; // SSL على 465، STARTTLS على 587

  const transportOptions = {
    host: resolvedHost,
    port,
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    ...(port === 587 ? { requireTLS: true } : {}),
    connectionTimeout: 15000,
    socketTimeout: 15000,
  };

  // Zoho يشترط أن يكون المرسِل نفس المستخدم أو Alias مفعّل
  const fromAddr = (FROM_EMAIL && FROM_EMAIL.trim()) || SMTP_USER;

  try {
    const transporter = nodemailer.createTransport(transportOptions);

    // فحص الاتصال قبل الإرسال لإخراج خطأ واضح بدلاً من 502 عام
    await transporter.verify();

    const text = [
      "AI Storage Recommendation",
      "-------------------------",
      recommendation,
      "",
      `Sent: ${new Date().toISOString()}`
    ].join("\n");

    const info = await transporter.sendMail({
      from: fromAddr,
      to,
      subject,
      text,
      ...(replyTo ? { replyTo } : {}),
    });

    return { statusCode: 200, headers: HEADERS, body: JSON.stringify({ ok: true, id: info.messageId }) };
  } catch (e) {
    console.error("send-recommendation error:", e && e.response ? e.response : e);
    const msg = e?.message || e?.code || (e?.response && String(e.response)) || "Unknown error";
    return { statusCode: 502, headers: HEADERS, body: JSON.stringify({ error: msg }) };
  }
};
