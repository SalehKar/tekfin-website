import React from 'react';
import './AboutUs.css';

const AboutUs = ({ language }) => {
  const content = {
    tr: {
      title: "Hakkımızda",
      vision: {
        title: "Vizyonumuz",
        text: "Teknoloji dünyasında öncü bir rol oynayarak, veri güvenliği ve erişilebilirliği konusunda global bir referans noktası olmak."
      },
      mission: {
        title: "Misyonumuz", 
        text: "Müşterilerimize en yüksek kalitede veri kurtarma ve teknoloji çözümleri sunarak, dijital varlıklarını korumak ve iş sürekliliklerini sağlamak."
      },
      story: {
        title: "Hikayemiz",
        text: "İstanbul merkezli şirketimiz, teknolojiye olan tutkumuz ve akıllı, pratik çözümler üretme arzumuzla kuruldu. Veri kurtarma hizmetleriyle başladık ve kısa sürede hızlı ve güvenilir destek arayan işletmelerin güvendiği bir isim haline geldik. Gelecekte, kablosuz ağ çözümleri ve diğer yenilikçi teknoloji alanlarında da hizmet yelpazemizi genişletmeyi planlıyoruz. Müşterilerimizin değişen ihtiyaçlarına uyum sağlamaya devam ediyoruz."
      },
      values: {
        title: "Değerlerimiz",
        reliability: "Güvenilirlik: Müşterilerimizin verilerine ve güvenlerine en üst düzeyde değer veriyoruz.",
        innovation: "Yenilikçilik: Sürekli olarak yeni teknolojileri ve yöntemleri araştırıyor, çözümlerimize entegre ediyoruz.",
        satisfaction: "Müşteri Memnuniyeti: Müşterilerimizin beklentilerini aşmayı ve onlara özel çözümler sunmayı hedefliyoruz.",
        transparency: "Şeffaflık: Tüm süreçlerimizde açık ve dürüst iletişimi benimsiyoruz.",
        expertise: "Uzmanlık: Alanımızdaki en iyi uzmanlarla çalışıyor, sürekli eğitim ve gelişim sağlıyoruz."
      }
    },
    en: {
      title: "About Us",
      vision: {
        title: "Our Vision",
        text: "To play a pioneering role in the world of technology, becoming a global reference point for data security and accessibility."
      },
      mission: {
        title: "Our Mission",
        text: "To provide our customers with the highest quality data recovery and technology solutions, protecting their digital assets and ensuring business continuity."
      },
      story: {
        title: "Our Story",
        text: "Our Istanbul-based company was founded out of a passion for technology and a drive to create smart, practical solutions. We began with data recovery services and quickly became a trusted name for businesses in need of fast and reliable support. Looking ahead, we plan to expand into wireless networking and other innovative tech fields, always adapting to our clients' evolving needs."
      },
      values: {
        title: "Our Values",
        reliability: "Reliability: We highly value our customers' data and trust.",
        innovation: "Innovation: We constantly research new technologies and methods, integrating them into our solutions.",
        satisfaction: "Customer Satisfaction: We aim to exceed our customers' expectations and provide them with tailored solutions.",
        transparency: "Transparency: We adopt open and honest communication in all our processes.",
        expertise: "Expertise: We work with the best experts in our field, ensuring continuous training and development."
      }
    }
  };

  const t = content[language];

  return (
    <div className="about-us">
      <div className="container">
        <h1 className="page-title">{t.title}</h1>
        
        <section className="vision-mission">
          <div className="vm-card">
            <h2>{t.vision.title}</h2>
            <p>{t.vision.text}</p>
          </div>
          <div className="vm-card">
            <h2>{t.mission.title}</h2>
            <p>{t.mission.text}</p>
          </div>
        </section>

        <section className="story">
          <h2>{t.story.title}</h2>
          <p>{t.story.text}</p>
        </section>

        <section className="values">
          <h2>{t.values.title}</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🔒</div>
              <p>{t.values.reliability}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <p>{t.values.innovation}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">😊</div>
              <p>{t.values.satisfaction}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🔍</div>
              <p>{t.values.transparency}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <p>{t.values.expertise}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

