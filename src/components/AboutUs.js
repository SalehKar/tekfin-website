```jsx
import React from 'react';

const AboutUs = ({ language }) => {
  const content = {
    en: {
      title: "About TekFin",
      story: {
        title: "Who We Are",
        text:
          "TekFin is an Istanbul-based company focused on Business Data Solutions. We help growing businesses build reliable data foundations through structured storage, automated backup strategies, and verified recovery planning. We started with data recovery — where precision and trust matter most — and expanded our scope to cover end-to-end data continuity."
      },
      vision: {
        title: "Our Vision",
        text:
          "To become a trusted reference for practical, business-first data solutions that improve reliability and long-term operational resilience."
      },
      mission: {
        title: "Our Mission",
        text:
          "To design and implement data architectures that keep critical business information organized, protected, and recoverable — with clear processes and measurable outcomes."
      },
      values: {
        title: "Our Principles",
        items: [
          { icon: "🔒", text: "Trust & Confidentiality: We treat business data as a critical asset and handle it with strict confidentiality." },
          { icon: "🧩", text: "Structured Thinking: We focus on architecture, clarity, and documentation — not quick fixes." },
          { icon: "✅", text: "Verification: Backups are only valuable when recovery is tested and confirmed." },
          { icon: "🔍", text: "Transparency: Clear communication, clear scope, and clear expectations." },
          { icon: "🎯", text: "Business Outcomes: Our work is measured by continuity, reliability, and reduced operational risk." },
          { icon: "📈", text: "Continuous Improvement: We stay current with modern tools and methods to serve evolving needs." }
        ]
      }
    },
    tr: {
      title: "TekFin Hakkında",
      story: {
        title: "Biz Kimiz",
        text:
          "TekFin, İstanbul merkezli bir Business Data Solutions şirketidir. Büyüyen işletmeler için yapılandırılmış depolama, otomatik yedekleme stratejileri ve doğrulanmış kurtarma planlaması ile güvenilir veri altyapıları kurarız. Veri kurtarma ile başladık — güven ve hassasiyetin kritik olduğu bir alanda — ve zamanla veri sürekliliğini kapsayan uçtan uca çözümlere genişledik."
      },
      vision: {
        title: "Vizyonumuz",
        text:
          "İşletme odaklı, pratik ve güvenilir veri çözümleri ile operasyonel dayanıklılığı artıran güvenilir bir referans noktası olmak."
      },
      mission: {
        title: "Misyonumuz",
        text:
          "Kritik işletme verilerini düzenli, korumalı ve geri kazanılabilir hale getiren veri mimarileri tasarlamak ve uygulamak — net süreçler ve ölçülebilir çıktılarla."
      },
      values: {
        title: "İlkelerimiz",
        items: [
          { icon: "🔒", text: "Güven & Gizlilik: İşletme verilerini kritik varlık olarak görür, yüksek gizlilikle yönetiriz." },
          { icon: "🧩", text: "Yapılandırılmış Yaklaşım: Geçici çözümler yerine mimari, açıklık ve dokümantasyon odaklı çalışırız." },
          { icon: "✅", text: "Doğrulama: Yedek, ancak geri yükleme test edilip doğrulandığında anlamlıdır." },
          { icon: "🔍", text: "Şeffaflık: Net iletişim, net kapsam ve net beklenti." },
          { icon: "🎯", text: "İş Sonuçları: Süreklilik, güvenilirlik ve risk azaltımı üzerinden değer üretiriz." },
          { icon: "📈", text: "Sürekli Gelişim: Değişen ihtiyaçlar için güncel araç ve yöntemlerle çalışırız." }
        ]
      }
    }
  };

  const t = content[language] || content.en;

  return (
    <div className="bg-white text-[#1f3b6f] px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#002855]">{t.title}</h1>

        <div className="mb-14">
          <h2 className="text-2xl font-semibold mb-3 text-[#1f3b6f]">{t.story.title}</h2>
          <p className="text-base leading-relaxed text-gray-800">{t.story.text}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="bg-[#e9f0fa] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-[#002855]">{t.vision.title}</h3>
            <p className="text-gray-700">{t.vision.text}</p>
          </div>
          <div className="bg-[#e9f0fa] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-[#002855]">{t.mission.title}</h3>
            <p className="text-gray-700">{t.mission.text}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-[#1f3b6f]">{t.values.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {t.values.items.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#f1f6fc] p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-start gap-3"
              >
                <div className="text-2xl text-[#002855]">{val.icon}</div>
                <p className="text-sm text-gray-800 leading-snug">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
