// src/components/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = ({ language }) => {
  const content = {
    tr: {
      mainTitle: "Veri Kurtarma ve İleri Teknoloji Çözümleri",
      subtitle: "Kaybolan Verilerinizi Geri Getiriyor, Geleceğin Teknolojilerini Bugünden Sunuyoruz.",
      intro: "İstanbul merkezli şirketimiz, veri kurtarma alanında uzmanlaşmış olup, gelecekte kablosuz ağlar ve diğer ileri teknoloji hizmetleriyle de yanınızda olacaktır. İşletmenizin veya kişisel verilerinizin güvenliği ve erişilebilirliği bizim önceliğimizdir.",
      landingDescription: "Doğru depolama cihazını mı arıyorsunuz? Akıllı Storage Advisor aracımızla ihtiyacınıza uygun öneriyi birkaç adımda alın.",
      landingBtn: "Storage Advisor'ı Dene",
      services: {
        title: "Hizmetlerimiz",
        dataRecovery: {
          title: "Veri Kurtarma",
          description: "Sabit diskler, SSD'ler ve daha fazlasından kaybolan verilerinizi güvenle kurtarıyoruz."
        },
        wireless: {
          title: "Kablosuz Ağlar (Yakında)",
          description: "İşletmeniz için hızlı ve güvenilir kablosuz ağ çözümleri sunmayı hedefliyoruz."
        }
      },
      cta: {
        title: "Kaybolan verilerinizi geri almak için bizimle iletişime geçin.",
        button: "Hemen İletişime Geçin"
      }
    },
    en: {
      mainTitle: "Data Recovery and Advanced Tech Solutions",
      subtitle: "We recover your lost data and deliver tomorrow's technologies today.",
      intro: "Based in Istanbul, we specialize in data recovery and soon will offer wireless networking and advanced tech services. Your data's security is our priority.",
      landingDescription: "Looking for the right storage device? Let our smart advisor guide you in a few simple steps.",
      landingBtn: "Try Storage Advisor",
      services: {
        title: "Our Services",
        dataRecovery: {
          title: "Data Recovery",
          description: "We recover data securely from hard drives, SSDs, and more."
        },
        wireless: {
          title: "Wireless Networks (Coming Soon)",
          description: "We aim to provide fast and secure wireless networking solutions for businesses."
        }
      },
      cta: {
        title: "Contact us today to recover your lost data.",
        button: "Contact Us Now"
      }
    }
  };

  const t = content[language];

  return (
    <div className="homepage">
      <section className="hero bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900">
        <div className="container relative z-10 text-center text-white py-16 px-6 sm:px-12">
          <h1 className="text-5xl font-bold mb-4 leading-tight drop-shadow-md sm:text-6xl">{t.mainTitle}</h1>
          <p className="text-xl mb-6 font-medium opacity-95 max-w-3xl mx-auto drop-shadow-sm sm:text-2xl">{t.subtitle}</p>
          <p className="mb-10 max-w-4xl mx-auto text-white/90 text-base leading-relaxed drop-shadow-sm sm:text-lg">{t.intro}</p>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-white border border-white/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="text-left sm:w-2/3">
                <h2 className="text-lg font-semibold text-white/90 mb-2 leading-snug sm:text-xl">{t.landingDescription}</h2>
              </div>
              <div className="text-center sm:w-1/3">
                <a
                  href="/storage-advisor"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {t.landingBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">...</section>
      <section className="why-choose-us">...</section>
      <section className="cta-section">...</section>
    </div>
  );
};

export default HomePage;
