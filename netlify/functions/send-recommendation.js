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

// تحويل النص الخام إلى HTML منسق (قوائم، فقرات، عناوين غامقة)
const formatRecommendation = (raw) => {
  const cleaned = stripBold(raw || "").trim();
  if (!cleaned) return "";

  const lines = cleaned.split("\n").map(l => l.trim()).filter(Boolean);
  let html = "";
  let listType = null; // "ul" أو "ol"

  // regex لتحديد السطور التي تبدأ بعناوين معروفة
  const labelRegex = /^(Type|Capacity|Estimated Price Range|Price Range|Recommended Brands|Brands|Rationale|Notes|Speed|Portability)\s*:\s*/i;

  const closeList = () => {
    if (listType) {
      html += `</${listType}>`;
      listType = null;
    }
  };

  for (let line of lines) {
    if (/^\d+[\.\)]\s+/.test(line)) {
      // قائمة مرتبة
      if (listType !== "ol") {
        closeList();
        listType = "ol";
        html += "<ol>";
      }
      html += `<li>${line.replace(/^\d+[\.\)]\s+/, "")}</li>`;
    } else if (/^[-•]\s+/.test(line)) {
      // قائمة نقطية
      if (listType !== "ul") {
        closeList();
        listType = "ul";
        html += "<ul>";
      }
      html += `<li>${line.replace(/^[-•]\s+/, "")}</li>`;
    } else if (labelRegex.test(line)) {
      // سطر يبدأ بعنوان معروف → غامق
      closeList();
      html += `<p><strong>${line.replace(labelRegex, (m) => m.trim())}</strong>${line.replace(labelRegex, "")}</p>`;
    } else {
      // فقرة عادية
      closeList();
      html += `<p>${line}</p>`;
    }
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
  const recommendationHTML = formatRecommendation(rawRecommendation);
  const subject = (body.subject || "Your AI Storage Recommendation").trim();

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

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL } = process.env;

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
        <!-- صورة الغلاف -->
        <div style="background-color: #f5f5f5;">
          <img src="https://www.tekfingroup.com/email-cover.png" alt="Cover" style="width: 100%; display: block;" />
        </div>

        <div style="padding: 20px;">
          <h2 style="color: #2c3e50; margin-bottom: 10px;">Your AI Storage Recommendation</h2>
          <div style="line-height: 1.6; color: #333;">${recommendationHTML}</div>
        </div>

        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 13px; color: #666;">
          <p>Tekfin Group - Istanbul, Turkey</p>
          <p>
            <a href="https://www.tekfingroup.com" style="color: #2c3e50; text-decoration: none;">Visit our website</a>
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: email,
      subject,
      html,
    });

    return { statusCode: 200, headers: HEADERS, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    console.error("send-recommendation error:", e);
    return {
      statusCode: 502,
      headers: HEADERS,
      body: JSON.stringify({ error: "Email send failed" }),
    };
  }
};
