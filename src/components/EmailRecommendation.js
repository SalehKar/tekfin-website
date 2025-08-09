import { useState } from "react";

function EmailRecommendation({ recommendation, defaultReplyTo, lang = "en" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const t = {
    send: lang === "tr" ? "E-postama gönder" : "Email me",
    placeholder: lang === "tr" ? "E-posta adresiniz" : "Enter your email",
    sending: lang === "tr" ? "Gönderiliyor…" : "Sending…",
    sent: lang === "tr" ? "Gönderildi!" : "Sent!",
    failed: lang === "tr" ? "Hata! Tekrar deneyin." : "Failed. Try again.",
  };

  const sendEmail = async () => {
    if (!recommendation || !email) return;
    setStatus("sending");
    try {
      const res = await fetch("/.netlify/functions/send-recommendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          recommendation,
          replyTo: defaultReplyTo || "", // örn: storage-advisor@tekfingroup.com
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-3 flex flex-wrap gap-2 items-center">
      <input
        type="email"
        className="border rounded px-3 py-2"
        placeholder={t.placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={sendEmail}
        disabled={!email || !recommendation || status === "sending"}
      >
        {t.send}
      </button>
      {status === "sending" && <span>{t.sending}</span>}
      {status === "sent" && <span className="text-green-600">{t.sent}</span>}
      {status === "error" && <span className="text-red-600">{t.failed}</span>}
    </div>
  );
}

export default EmailRecommendation;
