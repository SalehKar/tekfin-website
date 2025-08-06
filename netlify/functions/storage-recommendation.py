import os
import json
from openai import OpenAI

def handler(event, context):
    """
    Netlify Function to provide AI-powered storage recommendations.
    """
    if event["httpMethod"] != "POST":
        return {
            "statusCode": 405,
            "body": json.dumps({"error": "Method Not Allowed"})
        }

    try:
        body = json.loads(event["body"])
        user_requirements = body.get("requirements", "")
        language = body.get("language", "en")

        if not user_requirements:
            return {
                "statusCode": 400,
                "body": json.dumps({"error": "Requirements field is required"})
            }

        # Initialize OpenAI client
        client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

        if language == "tr":
            system_prompt = """Sen bir depolama cihazı uzmanısın. Kullanıcının ihtiyaçlarına göre en uygun depolama çözümünü öner. 
            Yanıtın şu bilgileri içermeli:
            1. Önerilen depolama türü (SSD, HDD, NVMe, vb.)
            2. Önerilen kapasite
            3. Tahmini fiyat aralığı (Türkiye pazarı için)
            4. Önerilen markalar
            5. Kullanım senaryosuna uygunluk açıklaması
            
            Yanıtını Türkçe ver ve teknik terimler için açıklama ekle."""
            user_prompt = f"Kullanıcı ihtiyacı: {user_requirements}"
        else:
            system_prompt = """You are a storage device expert. Recommend the most suitable storage solution based on user needs.
            Your response should include:
            1. Recommended storage type (SSD, HDD, NVMe, etc.)
            2. Recommended capacity
            3. Estimated price range (for Turkey market)
            4. Recommended brands
            5. Explanation of suitability for the use case
            
            Provide your response in English and explain technical terms."""
            user_prompt = f"User requirements: {user_requirements}"

        response = client.chat.completions.create(
            model="gpt-4.1-mini", # Using the supported model
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            max_tokens=500,
            temperature=0.7
        )

        recommendation = response.choices[0].message.content.strip()

        return {
            "statusCode": 200,
            "body": json.dumps({
                "success": True,
                "recommendation": recommendation,
                "language": language
            })
        }

    except Exception as e:
        error_message = str(e)
        status_code = 500
        if "authentication" in error_message.lower():
            status_code = 401
        elif "rate limit" in error_message.lower():
            status_code = 429
        
        return {
            "statusCode": status_code,
            "body": json.dumps({"error": f"Internal server error: {error_message}"})
        }

