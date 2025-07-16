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
        text: "İstanbul merkezli şirketimiz, teknolojiye olan tutku ve veri güvenliğine olan inançla kurulmuştur. Başlangıçta veri kurtarma hizmetlerine odaklanarak, kısa sürede sektörde güvenilir bir isim haline geldik. Gelecekte kablosuz ağ çözümleri ve diğer yenilikçi teknoloji hizmetleriyle de portföyümüzü genişletmeyi hedefliyoruz. Amacımız, müşterilerimizin değişen ihtiyaçlarına ayak uydurarak, onlara her zaman en iyi ve en güncel çözümleri sunmaktır."
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
        text: "Our Istanbul-based company was founded with a passion for technology and a belief in data security. Initially focusing on data recovery services, we quickly became a trusted name in the industry. In the future, we aim to expand our portfolio with wireless network solutions and other innovative technology services. Our goal is to keep pace with the changing needs of our customers, always offering them the best and most up-to-date solutions."
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

