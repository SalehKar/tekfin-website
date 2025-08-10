const nodemailer = require("nodemailer");

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

// إزالة كل ** من النص
const stripBold = (text) =>
  (text || "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*\*/g, "");

// تنسيق التوصية مع القوائم والعناوين وBrief Rationale
const formatRecommendation = (raw) => {
  const cleaned = stripBold((raw || "").trim());
  if (!cleaned) return "";

  const lines = cleaned.split("\n").map(l => l.trim());
  let html = "";
  let listType = null;

  const closeList = () => {
    if (listType) {
      html += `</${listType}>`;
      listType = null;
    }
  };

  const labelOnly = /^(Type|Capacity|Estimated Price Range|Price Range|Recommended Brands|Brands|Rationale|Notes|Speed|Portability|Brief Rationale)\s*:\s*(.*)$/i;
  const boldifyLabel = (text) => {
    const m = labelOnly.exec(text);
    if (!m) return text;
    const label = m[1].trim();
    const rest = m[2] || "";
    if (/^Brief Rationale$/i.test(label)) {
      return `<strong style="color:#d35400; text-decoration:underline;">${label}:</strong> ${rest}`;
    }
    return `<strong>${label}:</strong> ${rest}`;
  };

  for (let line of lines) {
    if (!line) { closeList(); continue; }

    // عناوين Markdown (#, ##, ###)
    const h = /^(#{1,3})\s+(.*)$/.exec(line);
    if (h) {
      closeList();
      const level = h[1].length;
      html += `<h${level} style="margin:0 0 10px 0;font-weight:700;">${h[2].trim()}</h${level}>`;
      continue;
    }

    // قائمة مرتبة
    const num = /^\d+[\.\)]\s+(.*)$/.exec(line);
    if (num) {
      if (listType !== "ol") { closeList(); listType = "ol"; html += "<ol>"; }
      html += `<li>${boldifyLabel(num[1].trim())}</li>`;
      continue;
    }

    // قائمة نقطية
    const bul = /^[-•]\s+(.*)$/.exec(line);
    if (bul) {
      if (listType !== "ul") { closeList(); listType = "ul"; html += "<ul>"; }
      html += `<li>${boldifyLabel(bul[1].trim())}</li>`;
      continue;
    }

    // فقرة عادية
    closeList();
    html += `<p>${boldifyLabel(line)}</p>`;
  }

  closeList();
  return html;
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS")
    return { statusCode: 200, headers: HEADERS, body: "" };

  if (event.httpMethod !== "POST")
    return {
      statusCode: 405,
      headers: HEADERS,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };

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

  const email = (body.email || "").trim();
  const rawRecommendation = (body.recommendation || "").trim();

  // نصوص تأتي من الـ frontend أو fallback للإنجليزية
  const subject = (body.subject || "Your AI Storage Recommendation").trim();
  const title = (body.title || "Your AI Storage Recommendation").trim();
  const footer1 = (body.footer1 || "Tekfin Group - Istanbul, Turkey").trim();
  const btn = (body.btn || "Visit our website").trim();

  const recommendationHTML = formatRecommendation(rawRecommendation);
  const textVersion = stripBold(rawRecommendation);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return {
      statusCode: 400,
      headers: HEADERS,
      body: JSON.stringify({ error: "Valid email required" }),
    };

  if (!rawRecommendation)
    return {
      statusCode: 400,
      headers: HEADERS,
      body: JSON.stringify({ error: "Missing recommendation" }),
    };

  const {
    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS,
    FROM_EMAIL, FROM_NAME = "Tekfin Group"
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL)
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: "SMTP env vars missing" }),
    };

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #f5f5f5;">
          <img src="https://www.tekfingroup.com/email-cover.png" alt="Cover" style="width: 100%; display: block;" />
        </div>
        <div style="padding: 20px;">
          <h2 style="color: #2c3e50; margin-bottom: 10px;">${title}</h2>
          <div style="line-height: 1.6; color: #333;">${recommendationHTML}</div>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 13px; color: #666;">
          <p>${footer1}</p>
          <p><a href="https://www.tekfingroup.com" style="color: #2c3e50; text-decoration: none;">${btn}</a></p>
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: email,
      subject,
      html,
      text: textVersion,
    });

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ ok: true, accepted: info.accepted, rejected: info.rejected }),
    };
  } catch (e) {
    console.error("send-recommendation error:", e);
    return {
      statusCode: 502,
      headers: HEADERS,
      body: JSON.stringify({ error: "Email send failed", details: e.message }),
    };
  }
};
