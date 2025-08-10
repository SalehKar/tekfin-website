// Netlify Function: send-recommendation.js (CommonJS)
const nodemailer = require("nodemailer");
const path = require("path");

// ---------- helpers ----------
const parseAllowedOrigins = () =>
  (process.env.ALLOWED_ORIGINS || "")
    .split(",").map(s => s.trim()).filter(Boolean);

const corsHeaders = (origin) => {
  const allowed = parseAllowedOrigins();
  const allowOrigin =
    allowed.length === 0 ? "*" : (origin && allowed.includes(origin) ? origin : allowed[0]);
  return {
    "Access-Control-Allow-Origin": allowOrigin || "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };
};

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");
const clamp = (str, max = 6000) => (str || "").toString().slice(0, max);
const sanitizeMultiline = (str) => clamp(str, 8000).replace(/\r\n/g, "\n").trim();

// إزالة كل ** مع الحفاظ على النص
const stripBold = (s) => (s || "").replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*\*/g, "");

// Escape HTML
const esc = (s) =>
  (s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");

// يحسّن الفقرات والقوائم والعناوين الصغيرة
const formatRecommendationToHTML = (raw) => {
  const cleaned = stripBold(sanitizeMultiline(raw));
  const lines = cleaned.split("\n");

  const labelRegex = /^(Type|Capacity|Estimated Price Range|Price Range|Recommended Brands|Brands|Rationale|Notes|Speed|Portability)\s*:\s*/i;
  const numItem = /^\s*(\d+)[\.\)]\s+(.*)$/;     // 1. text  | 1) text
  const bulletItem = /^\s*[-•]\s+(.*)$/;         // - text   | • text
  const urlRegex = /(https?:\/\/[^\s)]+)|(www\.[^\s)]+)/ig;

  let htmlParts = [];
  let listMode = null; // 'ol' | 'ul'
  let buf = [];

  const flushParagraph = () => {
    if (!buf.length) return;
    const p = buf.join(" ").trim();
    if (p) htmlParts.push(`<p style="margin:0 0 10px 0;">${p}</p>`);
    buf = [];
  };

  const openList = (type) => {
    flushParagraph();
    if (listMode) closeList();
    listMode = type;
    htmlParts.push(type === "ol" ? "<ol style=\"margin:0 0 10px 20px;\">" : "<ul style=\"margin:0 0 10px 20px;\">");
  };

  const closeList = () => {
    if (!listMode) return;
    htmlParts.push(listMode === "ol" ? "</ol>" : "</ul>");
    listMode = null;
  };

  const linkify = (t) =>
    t.replace(urlRegex, (m) => {
      const href = m.startsWith("http") ? m : `https://${m}`;
      return `<a href="${href}" style="color:#0b5cab;text-decoration:none;">${m}</a>`;
    });

  for (let rawLine of lines) {
    const line = esc(rawLine).trim();

    if (!line) { // سطر فارغ
      closeList();
      flushParagraph();
      continue;
    }

    // عناصر مرقّمة
    let m;
    if ((m = numItem.exec(line))) {
      if (listMode !== "ol") openList("ol");
      htmlParts.push(`<li>${linkify(m[2])}</li>`);
      continue;
    }

    // عناصر نقطية
    if ((m = bulletItem.exec(line))) {
      if (listMode !== "ul") openList("ul");
      htmlParts.push(`<li>${linkify(m[1])}</li>`);
      continue;
    }

    // سطر يبدأ بتسمية معروفة → غامق
    if (labelRegex.test(line)) {
      closeList();
      const lbl = line.replace(labelRegex, (match) => {
        const label = match.replace(/\s*:\s*$/,"").trim();
        return `<strong>${label}:</strong> `;
      });
      buf.push(linkify(lbl));
      continue;
    }

    // سطر عادي → جزء من فقرة
    closeList();
    buf.push(linkify(line));
  }
  closeList();
  flushParagraph();

  return htmlParts.join("\n");
};

const cleanRecommendation = (s) => stripBold(sanitizeMultiline(s));

const toPlainText = (htmlish) =>
  sanitizeMultiline(htmlish)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|li)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const i18nPack = (lang = "en") => {
  const L = (lang || "en").toLowerCase();
  const packs = {
    ar: { subject:"توصيتك الذكية لتخزين البيانات", title:"توصية التخزين من مساعد الذكاء الاصطناعي", footerLine1:"Tekfin Group - إسطنبول، تركيا", websiteBtn:"زيارة موقعنا", greeting:"عميلنا العزيز", reason:"وصلك هذا البريد لأنك طلبت توصية تخزين من موقعنا." },
    tr: { subject:"Yapay Zekâ Depolama Öneriniz", title:"Yapay Zekâ Depolama Öneriniz", footerLine1:"Tekfin Group - İstanbul, Türkiye", websiteBtn:"Web sitemizi ziyaret edin", greeting:"Sayın", reason:"Bu e-postayı, sitemizden depolama önerisi talep ettiğiniz için aldınız." },
    en: { subject:"Your AI Storage Recommendation", title:"Your AI Storage Recommendation", footerLine1:"Tekfin Group - Istanbul, Turkey", websiteBtn:"Visit our website", greeting:"Dear", reason:"You received this email because you requested a storage recommendation from our site." },
  };
  return packs[L] || packs.en;
};

// ---------- handler ----------
exports.handler = async (event) => {
  const headers = corsHeaders(event.headers?.origin || event.headers?.Origin);

  try {
    if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
    if (event.httpMethod !== "POST")
      return { statusCode: 405, headers, body: JSON.stringify({ error: "Method Not Allowed" }) };

    let body = {};
    try { body = JSON.parse(event.body || "{}"); }
    catch { return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) }; }

    // inputs
    const email = (body.email || "").trim();
    const rawReco = body.recommendation || "";
    const recommendation = cleanRecommendation(rawReco);
    const recommendationHTML = formatRecommendationToHTML(rawReco); // تنسيق محسّن
    const subjectIn = clamp((body.subject || "").trim(), 200);
    const replyTo = clamp((body.replyTo || body.email || "").trim(), 200);
    const customerName = clamp((body.name || "").trim(), 200);
    const lang = (body.lang || body.language || "en").toLowerCase();

    if (!isEmail(email))
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Valid email required" }) };
    if (!recommendation)
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing recommendation" }) };

    // env
    const {
      SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL,
      FROM_NAME = "Tekfin Group",
      WEBSITE_URL = "https://www.tekfingroup.com",
      SUPPORT_EMAIL = "info@tekfingroup.com",
      LOGO_URL = "https://www.tekfingroup.com/logo.png",
      DKIM_DOMAIN, DKIM_KEY_SELECTOR, DKIM_PRIVATE_KEY,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL)
      return { statusCode: 500, headers, body: JSON.stringify({ error: "SMTP env vars missing" }) };

    const { subject, title, footerLine1, websiteBtn, greeting, reason } = i18nPack(lang);
    const finalSubject = subjectIn || subject;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      dkim: (DKIM_DOMAIN && DKIM_KEY_SELECTOR && DKIM_PRIVATE_KEY)
        ? { domainName: DKIM_DOMAIN, keySelector: DKIM_KEY_SELECTOR, privateKey: DKIM_PRIVATE_KEY }
        : undefined,
    });

    const preheader = clamp((recommendation.split("\n")[0] || title).trim(), 140);

    const html = `
<!doctype html><html lang="${lang}">
<head>
  <meta charset="utf-8"><title>${finalSubject}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">${preheader}</span>
</head>
<body style="margin:0;padding:0;background:#f0f2f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f0f2f5;padding:24px 0;">
    <tr><td>
      <table role="presentation" width="600" align="center" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e6e6e6;">
        <tr>
          <td style="background:#f5f5f5">
            <img src="cid:cover" alt="Cover" width="100%" style="display:block;border:0;">
          </td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
              <img src="${LOGO_URL}" alt="Tekfin Group" height="36" style="display:block;border:0;">
              <div style="font:600 16px/1.2 Arial,Helvetica,sans-serif;color:#222;">Tekfin Group</div>
            </div>
            <h2 style="margin:0 0 12px 0;font:700 20px/1.3 Arial,Helvetica,sans-serif;color:#2c3e50;">${title}</h2>
            ${customerName ? `<p style="margin:0 0 10px 0;font:400 14px/1.6 Arial,Helvetica,sans-serif;color:#333;">${greeting} ${customerName},</p>` : ""}
            <div style="font:400 14px/1.8 Arial,Helvetica,sans-serif;color:#333;">
              ${recommendationHTML}
            </div>
            <div style="height:16px;"></div>
            <a href="${WEBSITE_URL}" style="display:inline-block;padding:10px 16px;border-radius:6px;text-decoration:none;font:600 14px Arial,Helvetica,sans-serif;background:#111;color:#fff;">
              ${websiteBtn}
            </a>
          </td>
        </tr>
        <tr>
          <td style="background:#f7f7f7;padding:16px 20px;text-align:center;">
            <p style="margin:0 0 6px 0;font:400 12px/1.6 Arial,Helvetica,sans-serif;color:#666;">${footerLine1}</p>
            <p style="margin:0;font:400 12px/1.6 Arial,Helvetica,sans-serif;color:#666;">
              <a href="${WEBSITE_URL}" style="color:#2c3e50;text-decoration:none;">${WEBSITE_URL.replace(/^https?:\/\//,"")}</a>
              &nbsp;•&nbsp; <a href="mailto:${SUPPORT_EMAIL}" style="color:#2c3e50;text-decoration:none;">${SUPPORT_EMAIL}</a>
            </p>
          </td>
        </tr>
      </table>
      <div style="text-align:center;font:400 11px/1.6 Arial,Helvetica,sans-serif;color:#8a8a8a;margin-top:10px;">${reason}</div>
    </td></tr>
  </table>
</body>
</html>`.trim();

    const text = toPlainText(`${title}\n\n${recommendationHTML}\n\n${WEBSITE_URL} • ${SUPPORT_EMAIL}`);

    const attachments = [
      { filename: "email-cover.png", path: path.join(__dirname, "assets", "email-cover.png"), cid: "cover" },
    ];

    await transporter.sendMail({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: email,
      subject: finalSubject,
      html,
      text,
      replyTo: isEmail(replyTo) ? replyTo : undefined,
      headers: { "X-Tekfin-Lang": lang, "X-Tekfin-Website": WEBSITE_URL },
      attachments,
    });

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("send-recommendation error:", err);
    return { statusCode: 502, headers, body: JSON.stringify({ error: "Email send failed" }) };
  }
};
