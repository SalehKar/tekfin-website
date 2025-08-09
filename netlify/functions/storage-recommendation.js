// Netlify Function (Node, CommonJS)
const OpenAI = require("openai");

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: HEADERS, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: HEADERS, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  const requirements = (body.requirements || "").trim();
  const language = (body.language || "en").trim().toLowerCase();
  if (!requirements) {
    return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: "Requirements field is required" }) };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, headers: HEADERS, body: JSON.stringify({ error: "Missing OPENAI_API_KEY" }) };
  }

  const client = new OpenAI({ apiKey });

  const system =
    language === "tr"
      ? "Sen bir depolama cihazı uzmanısın. Kullanıcının ihtiyacına göre en uygun çözümü öner. 1) Tür (SSD/HDD/NVMe) 2) Kapasite 3) Türkiye için tahmini fiyat (TRY) 4) Markalar 5) Kısa gerekçe. Kısa ve net yaz."
      : "You are a storage expert. Recommend the most suitable storage solution. Include: 1) Type (SSD/HDD/NVMe) 2) Capacity 3) Estimated price range (TRY for Turkey; USD otherwise) 4) Recommended brands 5) Brief rationale. Be concise.";

  try {
    const resp = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: language === "tr" ? `Kullanıcı ihtiyacı: ${requirements}` : `User requirements: ${requirements}` },
      ],
      max_tokens: 420,
      temperature: 0.7,
    });

    const recommendation = (resp.choices?.[0]?.message?.content || "").trim();
    return { statusCode: 200, headers: HEADERS, body: JSON.stringify({ success: true, recommendation, language }) };
  } catch (e) {
    const msg = String(e?.message || e);
    const code = /auth/i.test(msg) ? 401 : /rate limit/i.test(msg) ? 429 : 500;
    return { statusCode: code, headers: HEADERS, body: JSON.stringify({ error: msg }) };
  }
};
