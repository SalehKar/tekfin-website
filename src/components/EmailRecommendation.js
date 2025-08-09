import { useState } from "react";

function EmailRecommendation({ recommendation, defaultReplyTo }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const sendEmail = async () => {
    if (!recommendation) return;
    setStatus("sending");
    try {
      const res = await fetch("/.netlify/functions/send-recommendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          recommendation,
          replyTo: defaultReplyTo || "", // مثال: info@tekfingroup.com
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
        className="input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn-secondary" onClick={sendEmail} disabled={!email || !recommendation}>
        Email me
      </button>
      {status === "sending" && <span>Sending…</span>}
      {status === "sent" && <span className="text-green-600">Sent!</span>}
      {status === "error" && <span className="text-red-600">Failed. Try again.</span>}
    </div>
  );
}
