import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Target, ShieldCheck, Server } from 'lucide-react';

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

  const seoTitle = isTR ? 'TekFin Hakkında | TekFin Teknoloji' : 'About TekFin | TekFin Teknoloji';
  const seoDescription = isTR ? 'TekFin Teknoloji hakkında: işletmeler için veri depolama, yedekleme ve veri kurtarma çözümleri.' : 'About TekFin Teknoloji: business data storage, backup, and data recovery solutions.';
  const seoUrl = 'https://tekfinteknoloji.com/about-us';

  return (
    <div className="tk-about-page">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={seoUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:site_name" content="TekFin Teknoloji" />
        <meta property="og:locale" content={isTR || tr ? 'tr_TR' : 'en_US'} />
        <meta property="og:image" content="https://tekfinteknoloji.com/images/tekfin-logo-square.png?v=4" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://tekfinteknoloji.com/images/tekfin-logo-square.png?v=4" />
      </Helmet>
      
      <div className="tk-about-container">
        <section className="tk-about-hero">
          <div className="tk-about-hero-copy">
            <span className="tk-about-eyebrow">{isTR ? 'HAKKIMIZDA' : 'ABOUT US'}</span>
            <h1>{isTR ? 'TekFin Teknoloji' : 'TekFin Teknoloji'}</h1>
            <p>{isTR
              ? 'İşletmeler için güvenilir veri altyapısı ve süreklilik çözümleri geliştiriyoruz.'
              : 'We build reliable data infrastructure and continuity solutions for growing businesses.'}</p>
          </div>
          <div className="tk-about-hero-visual" aria-hidden="true">
            <div className="tk-about-server-stack">
              <div className="tk-about-server"><Server /></div>
              <div className="tk-about-server"><Server /></div>
              <div className="tk-about-server"><Server /></div>
            </div>
            <div className="tk-about-shield"><ShieldCheck /></div>
          </div>
        </section>

        <section className="tk-about-direction tk-about-direction-three">
          <article className="tk-about-direction-card">
            <div className="tk-about-card-icon"><Eye /></div>
            <span className="tk-about-section-label">{isTR ? 'VİZYONUMUZ' : 'OUR VISION'}</span>
            <h2>{isTR ? 'Güvenilir Bir Referans Noktası' : 'A Trusted Reference Point'}</h2>
            <p>{t.vision.text}</p>
          </article>

          <article className="tk-about-direction-card">
            <div className="tk-about-card-icon"><Target /></div>
            <span className="tk-about-section-label">{isTR ? 'MİSYONUMUZ' : 'OUR MISSION'}</span>
            <h2>{isTR ? 'Değer Yaratan Çözümler' : 'Solutions That Create Value'}</h2>
            <p>{t.mission.text}</p>
          </article>

          <article className="tk-about-direction-card">
            <div className="tk-about-card-icon"><ShieldCheck /></div>
            <span className="tk-about-section-label">{isTR ? 'DEĞERLERİMİZ' : 'OUR VALUES'}</span>
            <h2>{isTR ? 'Güven, Uzmanlık, Sürdürülebilirlik' : 'Trust, Expertise, Sustainability'}</h2>
            <p>{isTR
              ? 'Müşterilerimizle uzun vadeli iş ortaklıkları kurarak, uzmanlığımız ve sorumluluk bilincimizle sürdürülebilir değer yaratırız.'
              : 'We build long-term partnerships and create sustainable value through expertise, responsibility, and dependable execution.'}</p>
          </article>
        </section>

        <section className="tk-about-why">
          <div className="tk-about-section-heading">
            <span>{isTR ? 'NEDEN TEKFIN?' : 'WHY TEKFIN?'}</span>
            <h2>{isTR ? 'İşletmeler İçin Gerçek Çözümler' : 'Real Solutions for Businesses'}</h2>
            <p>{isTR
              ? 'Veri depolama, yedekleme ve kurtarma alanındaki uzmanlığımızla iş sürekliliğinizi destekliyoruz.'
              : 'We support business continuity through practical expertise in storage, backup, and data recovery.'}</p>
          </div>
          <div className="tk-about-values-grid">
            {t.values.items.slice(0, 6).map((val, idx) => (
              <article key={idx} className="tk-about-value-card">
                <div className="tk-about-value-icon" aria-hidden="true">{val.icon}</div>
                <p>{val.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );};

export default AboutUs;
