
import React from 'react';
import './HomePage.css';

const HomePage = ({ language, setCurrentPage }) => {
  const content = {
    tr: {
      mainTitle: "Veri Kurtarma ve İleri Teknoloji Çözümleri",
      subtitle: "Kaybolan Verilerinizi Geri Getiriyor, Geleceğin Teknolojilerini Bugünden Sunuyoruz.",
      intro: "İstanbul merkezli şirketimiz, veri kurtarma alanında uzmanlaşmış olup, gelecekte kablosuz ağlar ve diğer ileri teknoloji hizmetleriyle de yanınızda olacaktır.",
      storageHighlight: {
        title: "Doğru depolama cihazını mı arıyorsunuz?",
        description: "Akıllı Storage Advisor aracımızla ihtiyacınıza uygun öneriyi birkaç adımda alın.",
        button: "Storage Advisor’ı Dene"
      },
      cta: {
        title: "Kaybolan verilerinizi geri almak veya teknoloji çözümlerimiz hakkında daha fazla bilgi edinmek için bugün bizimle iletişime geçin!",
        button: "Hemen İletişime Geçin!"
      }
    },
    en: {
      mainTitle: "Data Recovery and Advanced Technology Solutions",
      subtitle: "We Recover Your Lost Data, Providing Tomorrow's Technologies Today.",
      intro: "Our Istanbul-based company specializes in data recovery and will also be by your side with wireless networks and other advanced tech services.",
      storageHighlight: {
        title: "Not sure what storage device you need?",
        description: "Use our smart advisor to get a tailored recommendation in seconds!",
        button: "Try Storage Advisor Tool"
      },
      cta: {
        title: "Contact us today to recover your lost data or learn more about our technology solutions!",
        button: "Contact Us Now!"
      }
    }
  };

  const t = content[language];

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>{t.mainTitle}</h1>
          <p>{t.subtitle}</p>
          <p>{t.intro}</p>
          <button className="cta-button">{t.cta.button}</button>
        </div>
      </section>

      <section className="promo-card">
        <div className="promo-icon">
          <img src="/usb-icon.png" alt="USB Icon" />
        </div>
        <div className="promo-content">
          <h2>{t.storageHighlight.title}</h2>
          <p>{t.storageHighlight.description}</p>
          <button onClick={() => setCurrentPage('storage-advisor')}>
            {t.storageHighlight.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
