import React from 'react';
import { Link } from 'react-router-dom';
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
          description: "Sabit diskler, SSD'ler ve daha fazlasından kaybolan verilerinizi güvenle kurtarıyoruz. Uzman ekibimiz ve son teknoloji ekipmanlarımızla, en zorlu veri kaybı senaryolarında bile size yardımcı olmaya hazırız."
        },
        wireless: {
          title: "Kablosuz Ağ Çözümleri (Gelecekte)",
          description: "İşletmenizin kablosuz ağ ihtiyaçları için güvenli, hızlı ve kesintisiz çözümler sunmayı hedefliyoruz. Gelecekteki hizmetlerimizle ilgili güncellemeler için bizi takip edin."
        },
        other: {
          title: "Diğer Teknoloji Hizmetleri (Gelecekte)",
          description: "Sürekli gelişen teknoloji dünyasında, ihtiyaçlarınıza yönelik yenilikçi ve kapsamlı IT çözümleri sunmak için çalışıyoruz. Gelecekteki hizmet yelpazemizle ilgili detaylar çok yakında."
        }
      },
      whyChooseUs: {
        title: "Neden Bizi Seçmelisiniz?",
        expertise: "Uzmanlık: Veri kurtarma ve teknoloji alanında yılların deneyimi.",
        reliability: "Güvenilirlik: Verilerinizin gizliliği ve güvenliği en büyük önceliğimizdir.",
        fastSolutions: "Hızlı Çözümler: Acil durumlarda bile hızlı ve etkili müdahale.",
        customerFocus: "Müşteri Odaklılık: İhtiyaçlarınıza özel çözümler sunuyoruz."
      },
      cta: {
        title: "Kaybolan verilerinizi geri almak veya teknoloji çözümlerimiz hakkında daha fazla bilgi edinmek için bugün bizimle iletişime geçin!",
        button: "Hemen İletişime Geçin!"
      }
    },
    en: {
      mainTitle: "Data Recovery and Advanced Technology Solutions",
      subtitle: "We Recover Your Lost Data, Providing Tomorrow's Technologies Today.",
      intro: "Our Istanbul-based company specializes in data recovery, and in the future, we will also be by your side with wireless networks and other advanced technology services. The security and accessibility of your business or personal data are our priority.",
      landingDescription: "Not sure what storage device you need? Use our smart advisor to get a tailored recommendation in seconds!",
      landingBtn: "Try Storage Advisor Tool",
      services: {
        title: "Our Services",
        dataRecovery: {
          title: "Data Recovery",
          description: "We securely recover lost data from hard drives, SSDs, and more. With our expert team and state-of-the-art equipment, we are ready to assist you even in the most challenging data loss scenarios."
        },
        wireless: {
          title: "Wireless Network Solutions (Future)",
          description: "We aim to provide secure, fast, and seamless solutions for your business wireless network needs. Stay tuned for updates on our future services."
        },
        other: {
          title: "Other Technology Services (Future)",
          description: "In the constantly evolving world of technology, we strive to offer innovative and comprehensive IT solutions tailored to your needs. Details about our future service range will be available very soon."
        }
      },
      whyChooseUs: {
        title: "Why Choose Us?",
        expertise: "Expertise: Years of experience in data recovery and technology.",
        reliability: "Reliability: The confidentiality and security of your data are our top priority.",
        fastSolutions: "Fast Solutions: Quick and effective intervention even in emergencies.",
        customerFocus: "Customer-Centric: We offer solutions tailored to your needs."
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
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700">
        <div className="container relative z-10 text-center text-white">
          <h1 className="hero-title text-4xl font-bold mb-4">{t.mainTitle}</h1>
          <p className="hero-subtitle text-lg mb-2">{t.subtitle}</p>
          <p className="hero-intro mb-6 relative z-20 max-w-3xl mx-auto">{t.intro}</p>

          <div className="promo-card bg-white/10 backdrop-blur-md p-6 rounded-xl mt-10 shadow-lg max-w-2xl mx-auto text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-left">
                <h2 className="text-xl font-semibold mb-2">{t.landingDescription}</h2>
              </div>
              <div className="text-center">
                <Link
                  to="/storage-advisor"
                  className="cta-button px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow hover:shadow-lg transition"
                >
                  {t.landingBtn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Sections Below */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">{t.services.title}</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/icons/data-recovery-icon.png" alt="Data Recovery" />
              </div>
              <h3>{t.services.dataRecovery.title}</h3>
              <p>{t.services.dataRecovery.description}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/icons/wireless-network-icon.png" alt="Wireless Networks" />
              </div>
              <h3>{t.services.wireless.title}</h3>
              <p>{t.services.wireless.description}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/icons/other-tech-services-icon.png" alt="Other IT Services" />
              </div>
              <h3>{t.services.other.title}</h3>
              <p>{t.services.other.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">{t.whyChooseUs.title}</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <img src="/images/icons/data-recovery-icon.png" alt="Expertise" />
              </div>
              <p>{t.whyChooseUs.expertise}</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src="/images/icons/storage-advisor-icon.png" alt="Reliability" />
              </div>
              <p>{t.whyChooseUs.reliability}</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src="/images/icons/wireless-network-icon.png" alt="Fast Solutions" />
              </div>
              <p>{t.whyChooseUs.fastSolutions}</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src="/images/icons/contact-us-icon.png" alt="Customer Focus" />
              </div>
              <p>{t.whyChooseUs.customerFocus}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{t.cta.title}</h2>
          <button className="cta-button-large" onClick={() => navigate('/contact')}>{t.cta.button}</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
