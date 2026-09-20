import React from "react";
import { Link } from "react-router-dom";
import { FaDatabase, FaShieldAlt, FaSyncAlt, FaCloudUploadAlt, FaArrowRight } from "react-icons/fa";

export default function DataStorage({ language = "tr" }) {
  const tr = language === "tr";

  const t = tr
    ? {
        eyebrow: "VERİ DEPOLAMA",
        title: "İşletmeniz için düzenli, güvenilir ve ölçeklenebilir depolama.",
        intro: "TekFin, işletmenizin veri büyümesine ve günlük çalışma ihtiyaçlarına uygun depolama altyapısını tasarlar, kurar ve yönetilebilir hale getirir.",
        cards: [
          ["Yüksek Kapasiteli Depolama", "Büyüyen veri hacimleri için doğru kapasiteyi ve yapıyı planlayın.", FaDatabase],
          ["Güvenli Veri Koruma", "Verilerinizi erişim ve güvenlik ihtiyaçlarını dikkate alan bir altyapıyla yönetin.", FaShieldAlt],
          ["Kolay Erişim ve Senkronizasyon", "Ekiplerinizin ihtiyaç duyduğu verilere hızlı ve düzenli erişim sağlayın.", FaSyncAlt],
          ["Bulut Yedekleme Entegrasyonu", "Yerel depolamayı yedekleme ve gerektiğinde bulut seçenekleriyle birlikte planlayın.", FaCloudUploadAlt],
        ],
        processTitle: "TekFin ile depolama süreci",
        processIntro: "Her kurulum aynı değildir. Önce mevcut yapıyı ve ihtiyacı değerlendirir, ardından uygun mimariyi kurarız.",
        steps: ["İhtiyaç Analizi", "Çözüm Tasarımı", "Altyapı Kurulumu", "Veri Aktarımı", "Sürekli İzleme ve Destek"],
        valueTitle: "Depolama yalnızca kapasite değildir.",
        valueText: "Doğru yapı; erişilebilirlik, güvenlik, büyüme ve yedekleme ihtiyaçlarını birlikte ele alır. TekFin bu katmanları işletmenizin çalışma biçimine göre tasarlar.",
        ctaTitle: "İşinizle birlikte büyüyen bir depolama yapısı kurun.",
        ctaText: "Mevcut altyapınızı ve ihtiyaçlarınızı birlikte değerlendirelim.",
        cta: "Danışmanlık Talep Et",
      }
    : {
        eyebrow: "DATA STORAGE",
        title: "Structured, reliable, and scalable storage for your business.",
        intro: "TekFin designs storage infrastructure around your business growth and daily operational needs, then makes it manageable.",
        cards: [
          ["High-Capacity Storage", "Plan the right capacity and structure for growing business data.", FaDatabase],
          ["Secure Data Protection", "Manage your data with infrastructure aligned to access and security requirements.", FaShieldAlt],
          ["Easy Access & Synchronization", "Give teams fast and organized access to the data they need.", FaSyncAlt],
          ["Cloud Backup Integration", "Plan local storage together with backup and cloud options when needed.", FaCloudUploadAlt],
        ],
        processTitle: "The TekFin storage process",
        processIntro: "Every deployment is different. We assess the current environment first, then design and implement the right architecture.",
        steps: ["Needs Analysis", "Solution Design", "Infrastructure Setup", "Data Migration", "Continuous Monitoring & Support"],
        valueTitle: "Storage is more than capacity.",
        valueText: "The right architecture addresses availability, security, growth, and backup requirements together. TekFin designs these layers around how your business operates.",
        ctaTitle: "Build storage that grows with your business.",
        ctaText: "Let us review your current infrastructure and requirements together.",
        cta: "Request Consultation",
      };

  return (
    <div className="tk-modern-page">
      <section className="tk-page-hero">
        <div className="tk-modern-container">
          <div className="tk-page-hero-grid">
            <div>
              <span className="tk-eyebrow">{t.eyebrow}</span>
              <h1>{t.title}</h1>
              <p>{t.intro}</p>
            </div>
            <div className="tk-page-hero-mark">
              <FaDatabase aria-hidden="true" />
              <span>{tr ? "BUSINESS DATA SOLUTIONS" : "BUSINESS DATA SOLUTIONS"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tk-modern-section">
        <div className="tk-modern-container">
          <div className="tk-section-heading">
            <span className="tk-section-number">01</span>
            <div>
              <h2>{tr ? "Ne sunuyoruz?" : "What we provide"}</h2>
              <p>{tr ? "İşletmenizin depolama ihtiyacını tek bir kapasite seçimine indirgemeden, altyapının tamamı üzerinden ele alıyoruz." : "We address storage as an infrastructure decision, not simply a capacity purchase."}</p>
            </div>
          </div>

          <div className="tk-service-grid">
            {t.cards.map(([title, text, Icon], i) => (
              <article className="tk-service-card" key={title}>
                <div className="tk-card-icon"><Icon /></div>
                <span className="tk-card-index">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tk-process-section">
        <div className="tk-modern-container">
          <div className="tk-section-heading tk-section-heading-light">
            <span className="tk-section-number">02</span>
            <div>
              <h2>{t.processTitle}</h2>
              <p>{t.processIntro}</p>
            </div>
          </div>

          <div className="tk-process-grid">
            {t.steps.map((step, i) => (
              <div className="tk-process-step" key={step}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
                {i < t.steps.length - 1 && <div className="tk-process-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tk-modern-section tk-value-section">
        <div className="tk-modern-container tk-value-grid">
          <div>
            <span className="tk-eyebrow">{tr ? "YAKLAŞIMIMIZ" : "OUR APPROACH"}</span>
            <h2>{t.valueTitle}</h2>
          </div>
          <p>{t.valueText}</p>
        </div>
      </section>

      <section className="tk-modern-container tk-page-cta">
        <div>
          <span className="tk-eyebrow">{tr ? "SONRAKİ ADIM" : "NEXT STEP"}</span>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
        </div>
        <Link to="/contact?intent=consultation">
          {t.cta} <FaArrowRight />
        </Link>
      </section>
    </div>
  );
}
