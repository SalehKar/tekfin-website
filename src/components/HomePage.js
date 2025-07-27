import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ language }) => {
  const navigate = useNavigate();

  const content = {
    tr: {
      mainTitle: "Veri Kurtarma ve İleri Teknoloji Çözümleri",
      subtitle: "Kaybolan Verilerinizi Geri Getiriyor, Geleceğin Teknolojilerini Bugünden Sunuyoruz.",
      intro: "İstanbul merkezli şirketimiz, veri kurtarma alanında uzmanlaşmış olup, gelecekte kablosuz ağlar ve diğer ileri teknoloji hizmetleriyle de yanınızda olacaktır. İşletmenizin veya kişisel verilerinizin güvenliği ve erişilebilirliği bizim önceliğimizdir.",
      landingBtn: "Storage Advisor'ı Dene",
      landingDescription: "Doğru depolama cihazını mı arıyorsunuz? Akıllı Storage Advisor aracımızla ihtiyacınıza uygun öneriyi birkaç adımda alın.",
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
          description: "Sürekli gelişen teknoloji dünyasında، ihtiyaçlarınıza yönelik yenilikçi ve kapsamlı IT çözümleri sunmak için çalışıyoruz. Gelecekteki hizmet yelpazemizle ilgili detaylar çok yakında."
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
      landingBtn: "Try Storage Advisor Tool",
      landingDescription: "Not sure what storage device you need? Use our smart advisor to get a tailored recommendation in seconds!",
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

  const t = content[language] || content.en;

  const iconColors = {
    dataRecovery: 'from-green-500 to-emerald-600',
    wireless: 'from-cyan-500 to-sky-600',
    other: 'from-yellow-500 to-orange-500'
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{t.mainTitle}</h1>
          <p className="text-xl md:text-2xl font-light mb-6">{t.subtitle}</p>
          <p className="text-base md:text-lg mb-8 text-white/90">{t.intro}</p>
          <div className="bg-white text-blue-800 p-4 rounded-lg shadow-lg inline-block">
            <p className="text-lg font-semibold mb-2">{t.landingDescription}</p>
            <button
              onClick={() => navigate('/storage-advisor')}
              className="mt-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-full transition"
            >
              {t.landingBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['dataRecovery', 'wireless', 'other'].map((key, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className={`flex justify-center items-center w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${iconColors[key]} rounded-full shadow overflow-hidden`}>
                  <img
                    src={`/images/icons/${key === 'dataRecovery'
                      ? 'data-recovery-icon'
                      : key === 'wireless'
                        ? 'wireless-network-icon'
                        : 'other-tech-services-icon'}.png`}
                    alt={t.services[key].title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.services[key].title}</h3>
                <p className="text-gray-700 text-sm">{t.services[key].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">{t.whyChooseUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'expertise', icon: 'data-recovery-icon', color: 'from-green-500 to-emerald-600' },
              { key: 'reliability', icon: 'storage-advisor-icon', color: 'from-blue-500 to-purple-600' },
              { key: 'fastSolutions', icon: 'wireless-network-icon', color: 'from-cyan-500 to-sky-600' },
              { key: 'customerFocus', icon: 'contact-us-icon', color: 'from-pink-500 to-red-500' }
            ].map(({ key, icon, color }, index) => (
              <div key={index} className="text-center">
                <div className={`flex justify-center items-center w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${color} rounded-full shadow overflow-hidden`}>
                  <img src={`/images/icons/${icon}.png`} alt={key} className="w-10 h-10 object-contain" />
                </div>
                <p className="text-gray-800 font-medium text-sm">{t.whyChooseUs[key]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t.cta.title}</h2>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-red-600 transition"
          >
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
