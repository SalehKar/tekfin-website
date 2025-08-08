import os
import json
from openai import OpenAI

HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
}

def handler(event, context):
    # السماح لطلبات الـ OPTIONS (preflight)
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": HEADERS, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": HEADERS,
                "body": json.dumps({"error": "Method Not Allowed"})}

    try:
        raw_body = event.get("body") or "{}"
        body = json.loads(raw_body)
    except json.JSONDecodeError:
        return {"statusCode": 400, "headers": HEADERS,
                "body": json.dumps({"error": "Invalid JSON body"})}

    user_requirements = body.get("requirements", "").strip()
    language = body.get("language", "en").strip().lower()

    if not user_requirements:
        return {"statusCode": 400, "headers": HEADERS,
                "body": json.dumps({"error": "Requirements field is required"})}

    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        return {"statusCode": 500, "headers": HEADERS,
                "body": json.dumps({"error": "Missing OPENAI_API_KEY"})}

    # تهيئة العميل
    client = OpenAI(api_key=api_key)

    # البرومبت
    if language == "tr":
        system_prompt = (
            "Sen bir depolama cihazı uzmanısın. Kullanıcının ihtiyaçlarına göre en uygun depolama çözümünü öner.\n"
            "Yanıtın şunları içersin:\n"
            "1) Tür (SSD/HDD/NVMe)\n2) Kapasite\n3) Türkiye pazarı için tahmini fiyat aralığı (TRY)\n"
            "4) Önerilen markalar\n5) Neden uygun olduğunun kısa açıklaması.\n"
            "Kısa, net ve anlaşılır yaz."
        )
        user_prompt = f"Kullanıcı ihtiyacı: {user_requirements}"
    else:
        system_prompt = (
            "You are a storage expert. Recommend the most suitable storage solution based on the user's needs.\n"
            "Include: 1) Type (SSD/HDD/NVMe) 2) Capacity 3) Estimated price range "
            "(default TRY for Turkey; use USD otherwise) 4) Recommended brands 5) Brief rationale.\n"
            "Be concise and practical."
        )
        user_prompt = f"User requirements: {user_requirements}"

    try:
        resp = client.chat.completions.create(
            model="gpt-4o-mini",          # متوافق مع chat.completions
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            max_tokens=420,               # تقليل بسيط لتفادي المهلة
            temperature=0.7,
        )
        recommendation = resp.choices[0].message.content.strip()

        return {"statusCode": 200, "headers": HEADERS,
                "body": json.dumps({"success": True,
                                    "recommendation": recommendation,
                                    "language": language})}

    except Exception as e:
        msg = str(e)
        code = 500
        if "authentication" in msg.lower():
            code = 401
        elif "rate limit" in msg.lower():
            code = 429
        return {"statusCode": code, "headers": HEADERS,
                "body": json.dumps({"error": f"Internal server error: {msg}"})}
