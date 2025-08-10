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

  // Env vars from Netlify
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL) {
    return { statusCode: 500, headers: HEADERS, body: JSON.stringify({ error: "SMTP env vars missing" }) };
  }

  // Zoho يتطلب غالبًا أن يكون From نفس المستخدم أو alias مُفعل
  const fromAddr = FROM_EMAIL || SMTP_USER;

  // اضبط النقل حسب البورت
  const port = Number(SMTP_PORT);
  const secure = port === 465; // SSL لـ 465، أما 587 فهو TLS (secure:false + requireTLS)
  const transportOptions = {
    host: SMTP_HOST,
    port,
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    ...(port === 587 ? { requireTLS: true } : {}),
    connectionTimeout: 15000,
    socketTimeout: 15000,
  };

  try {
    const transporter = nodemailer.createTransport(transportOptions);

    // جرّب الاتصال أولاً لتوضيح الخطأ الحقيقي إن وجد
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
    // اطبع تفاصيل الخطأ في لوج نتلايفي واسرج الرسالة للواجهة للمساعدة
    console.error("send-recommendation error:", e && e.response ? e.response : e);
    const msg = e && (e.message || e.code || e.response && e.response.toString()) || "Unknown error";
    return { statusCode: 502, headers: HEADERS, body: JSON.stringify({ error: msg }) };
  }
};
