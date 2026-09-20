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
  const isTR = language === 'tr';

  return (
    <div className="tk-about-page">
      <div className="tk-about-container">
        <section className="tk-about-hero">
          <div>
            <span className="tk-about-eyebrow">TEKFIN TEKNOLOJİ</span>
            <h1>{t.title}</h1>
            <p>{t.story.text}</p>
          </div>
          <div className="tk-about-hero-note">
            <span>{isTR ? 'Business Data Solutions' : 'Business Data Solutions'}</span>
            <strong>{isTR ? 'Güvenilir veri altyapısı. Ölçülebilir süreklilik.' : 'Reliable data foundations. Measurable continuity.'}</strong>
          </div>
        </section>

        <section className="tk-about-story">
          <div className="tk-about-section-heading">
            <span>{isTR ? 'BİZ KİMİZ' : 'WHO WE ARE'}</span>
            <h2>{t.story.title}</h2>
          </div>
          <p>{t.story.text}</p>
        </section>

        <section className="tk-about-direction">
          <article className="tk-about-direction-card">
            <span className="tk-about-section-label">{isTR ? 'VİZYON' : 'VISION'}</span>
            <h2>{t.vision.title}</h2>
            <p>{t.vision.text}</p>
          </article>
          <article className="tk-about-direction-card">
            <span className="tk-about-section-label">{isTR ? 'MİSYON' : 'MISSION'}</span>
            <h2>{t.mission.title}</h2>
            <p>{t.mission.text}</p>
          </article>
        </section>

        <section className="tk-about-principles">
          <div className="tk-about-section-heading">
            <span>{isTR ? 'ÇALIŞMA YAKLAŞIMIMIZ' : 'HOW WE WORK'}</span>
            <h2>{t.values.title}</h2>
          </div>
          <div className="tk-about-values-grid">
            {t.values.items.map((val, idx) => (
              <article key={idx} className="tk-about-value-card">
                <div className="tk-about-value-icon" aria-hidden="true">{val.icon}</div>
                <p>{val.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
  );
};

export default AboutUs;
