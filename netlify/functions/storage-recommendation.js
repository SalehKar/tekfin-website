// Netlify Function (Node, CommonJS) — /.netlify/functions/storage-recommendation
const OpenAI = require("openai");

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: HEADERS, body: "" };
  }

  // Enforce POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: HEADERS,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  // Parse body safely
  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: HEADERS,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const requirements = String(body.requirements || "").trim();
  const language = String(body.language || "en").trim().toLowerCase();

  if (!requirements) {
    return {
      statusCode: 400,
      headers: HEADERS,
      body: JSON.stringify({ error: "Requirements field is required" }),
    };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // لا تُظهر سبب داخلي للمستخدم النهائي
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: "Service temporarily unavailable" }),
    };
  }

  // Optional: short timeout via AbortController
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25_000);

  try {
    const client = new OpenAI({ apiKey });

    // Avoid multi-line template literals to prevent syntax issues in deployment.
    const system =
      language === "tr"
        ? [
            "Sen bir depolama cihazı uzmanısın.",
            "ÇIKTIYI SADECE Markdown olarak ver (HTML yok).",
            "Aşağıdaki formatı AYNEN uygula (başlıklar ve sıralama dahil):",
            "",
            "## Önerilen Depolama Çözümü",
            "",
            "1. **Type:** ...",
            "2. **Capacity:** ...",
            "3. **Estimated Price Range (TRY):** ...",
            "4. **Recommended Brands:** ...",
            "5. **Brief Rationale:** ...",
            "",
            "Kurallar:",
            "- Her madde mutlaka olsun, boş bırakma.",
            "- Fiyatı Türkiye için TRY olarak ver (yaklaşık aralık).",
            "- Markaları virgülle ayır.",
            "- Kısa, net, iş odaklı yaz.",
          ].join("\n")
        : [
            "You are a storage expert.",
            "OUTPUT MUST BE Markdown only (no HTML).",
            "Follow this EXACT format (including headings and order):",
            "",
            "## Recommended Storage Solution",
            "",
            "1. **Type:** ...",
            "2. **Capacity:** ...",
            "3. **Estimated Price Range (TRY):** ...",
            "4. **Recommended Brands:** ...",
            "5. **Brief Rationale:** ...",
            "",
            "Rules:",
            "- Include every item; do not omit any.",
            "- Price must be in TRY (approximate range) for Turkey.",
            "- Separate brands with commas.",
            "- Keep it concise, practical, business-focused.",
          ].join("\n");

    const userPrompt =
      language === "tr"
        ? `Kullanıcı ihtiyacı: ${requirements}`
        : `User requirements: ${requirements}`;

    const resp = await client.chat.completions.create(
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: system },
          { role: "user", content: userPrompt },
        ],
        max_tokens: 420,
        temperature: 0.7,
      },
      { signal: controller.signal }
    );

    const recommendation = String(resp.choices?.[0]?.message?.content || "").trim();

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ success: true, recommendation, language }),
    };
  } catch (e) {
    // Log for you (Netlify logs) without exposing internals to the public
    console.error("storage-recommendation error:", e);

    // لا تُظهر السبب الحقيقي للجمهور
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: "Service temporarily unavailable" }),
    };
  } finally {
    clearTimeout(timeout);
  }
};
