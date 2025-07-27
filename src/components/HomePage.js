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
