import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaDatabase, FaWifi, FaHdd, FaCloudUploadAlt, FaShieldAlt, FaBolt, FaUsers } from 'react-icons/fa';

const HomePage = ({ language }) => {
  const navigate = useNavigate();

  const content = {
    tr: {
      metaTitle: "TekFin Teknoloji – Veri Kurtarma, Veri Depolama ve Kablosuz Ağ Çözümleri",
      metaDescription: "TekFin Teknoloji, İstanbul merkezli olarak işletmelere profesyonel veri kurtarma, güvenli veri depolama ve kablosuz ağ çözümleri sunar. İşletme verilerinizi güvenle saklayın, koruyun ve geri kazanın.",
      ogTitle: "TekFin Teknoloji – Veri Kurtarma ve Depolama Hizmetleri",
      ogDescription: "İşletmenizin verilerini güvenle saklayın, koruyun ve hızlıca geri kazanın.",

      mainTitle: "İşletmeler için Veri Kurtarma ve Depolama Çözümleri",
      subtitle: "Veri kurtarma, güvenli depolama ve yedekleme çözümleriyle işletmenizin dijital güvenliğini sağlayın.",
      intro: "İstanbul merkezli TekFin Teknoloji olarak, işletmelerin en değerli varlığı olan verilerini koruma, kurtarma ve güvenli bir şekilde depolama konularında profesyonel çözümler sunuyoruz. Modern teknolojiler, uzman ekip ve müşteri odaklı yaklaşımımızla verilerinizin her zaman güvende ve erişilebilir olmasını sağlıyoruz.",

      landingTitle: "Depolama Danışmanı – En Uygun Çözümü Bulun",
      landingDescription: "Hangi veri depolama çözümünün işletmeniz için en uygun olduğunu bilmiyor musunuz? Akıllı depolama danışmanımızla saniyeler içinde kişiselleştirilmiş öneriler alın.",
      landingCta: "Öneri Alın",

      services: {
        title: "Hizmetlerimiz – Veri Kurtarma ve Depolama",
        dataSolutions: {
          title: "Profesyonel Veri Çözümleri",
          description: "Veri kurtarma, veri depolama ve yedekleme hizmetlerimizle işletmenizin dijital güvenliğini sağlıyoruz:",
          subServices: [
            { title: "Veri Depolama", description: "İşletme verileriniz için güvenli, hızlı ve verimli depolama çözümleri.", icon: <FaHdd className="w-6 h-6 text-white" /> },
            { title: "Veri Kurtarma", description: "Kritik verilerinizi en son teknolojilerle hızlı ve güvenilir şekilde kurtarıyoruz.", icon: <FaDatabase className="w-6 h-6 text-white" /> },
            { title: "Yedekleme Hizmetleri", description: "Veri kaybına karşı otomatik ve güvenli yedekleme sistemleri.", icon: <FaCloudUploadAlt className="w-6 h-6 text-white" /> }
          ]
        },
        wireless: {
          title: "Kablosuz Ağ Çözümleri (Yakında)",
          description: "İşletmenizin kablosuz ağ ihtiyaçları için güvenli, hızlı ve kesintisiz çözümler sunmayı hedefliyoruz."
        }
      },
      whyChooseUs: {
        title: "Neden TekFin Teknoloji’yi Seçmelisiniz?",
        expertise: "Uzmanlık: Veri kurtarma ve veri yönetimi alanında uzun yıllara dayanan tecrübe.",
        reliability: "Güvenilirlik: Verilerinizin gizliliği ve güvenliği önceliğimizdir.",
        fastSolutions: "Hızlı Müdahale: Acil durumlarda bile hızlı ve etkili çözümler.",
        customerFocus: "Müşteri Odaklı: İşletmenize özel çözümler üretiyoruz."
      },
      cta: {
        title: "Veri kurtarma ve depolama çözümleri için hemen bizimle iletişime geçin!",
        button: "Hemen İletişime Geçin"
      }
    },
    en: {
      metaTitle: "TekFin Teknoloji – Business Data Recovery, Storage & Wireless Solutions",
      metaDescription: "TekFin Teknoloji, based in Istanbul, provides professional business data recovery, secure storage, and wireless network solutions. Protect, store, and recover your business data with confidence.",
      ogTitle: "TekFin Teknoloji – Business Data Recovery & Storage Services",
      ogDescription: "Securely store, protect, and recover your business data with confidence.",

      mainTitle: "Business Data Recovery and Storage Solutions",
      subtitle: "Data recovery, secure storage, and backup solutions to safeguard your business.",
      intro: "At TekFin Teknoloji, based in Istanbul, we deliver professional solutions to protect, recover, and securely store your company's most valuable asset – its data. Combining modern technologies, expert teams, and a customer-focused approach, we ensure your data is always safe and accessible.",

      landingTitle: "Storage Advisor – Find Your Best Fit",
      landingDescription: "Not sure which storage solution fits your business? Get tailored recommendations in seconds with our smart storage advisor.",
      landingCta: "Get Recommendation",

      services: {
        title: "Our Services – Data Recovery & Storage",
        dataSolutions: {
          title: "Professional Data Solutions",
          description: "We provide data recovery, storage, and backup services to safeguard your business:",
          subServices: [
            { title: "Data Storage", description: "Secure, fast, and efficient storage solutions for your business data.", icon: <FaHdd className="w-6 h-6 text-white" /> },
            { title: "Data Recovery", description: "Recover critical business data quickly and reliably with the latest technologies.", icon: <FaDatabase className="w-6 h-6 text-white" /> },
            { title: "Backup Services", description: "Automated, secure backup systems to protect against data loss.", icon: <FaCloudUploadAlt className="w-6 h-6 text-white" /> }
          ]
        },
        wireless: {
          title: "Wireless Network Solutions (Coming Soon)",
          description: "We aim to deliver secure, fast, and seamless wireless network solutions for your business."
        }
      },
      whyChooseUs: {
        title: "Why Choose TekFin Teknoloji?",
        expertise: "Expertise: Years of experience in data recovery and management.",
        reliability: "Reliability: Your data privacy and security are our top priorities.",
        fastSolutions: "Fast Intervention: Quick and effective solutions even in emergencies.",
        customerFocus: "Customer-Centric: Solutions tailored to your business."
      },
      cta: {
        title: "Contact us today for professional data recovery and storage solutions!",
        button: "Contact Us Now"
      }
    }
  };

  // Language selection with fallback
  let t;
  if (language && content.hasOwnProperty(language)) {
    t = content[language];
  } else {
    console.warn(`⚠️ Language "${language}" is not supported. Falling back to English.`);
    t = content.en;
  }

  const iconColors = {
    storage: 'from-green-500 to-emerald-600',
    recovery: 'from-blue-500 to-indigo-600',
    backup: 'from-yellow-500 to-orange-500',
    wireless: 'from-cyan-500 to-sky-600'
  };

  const whyChooseIcons = {
    expertise: <FaDatabase className="w-8 h-8 text-white" />,
    reliability: <FaShieldAlt className="w-8 h-8 text-white" />,
    fastSolutions: <FaBolt className="w-8 h-8 text-white" />,
    customerFocus: <FaUsers className="w-8 h-8 text-white" />
  };

  const whyColors = {
    expertise: 'from-green-500 to-emerald-600',
    reliability: 'from-blue-500 to-purple-600',
    fastSolutions: 'from-yellow-500 to-orange-500',
    customerFocus: 'from-pink-500 to-red-500'
  };

  return (
    <div className="homepage">
      {/* Helmet for SEO */}
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta property="og:title" content={t.ogTitle} />
        <meta property="og:description" content={t.ogDescription} />
        <meta property="og:url" content="https://tekfingroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{t.mainTitle}</h1>
          <p className="text-xl md:text-2xl font-light mb-6">{t.subtitle}</p>
          <p className="text-base md:text-lg mb-8 text-white/90">{t.intro}</p>

          {/* Storage Advisor Card */}
          <div className="bg-white/95 backdrop-blur p-6 md:p-7 rounded-2xl shadow-xl inline-block max-w-md text-left ring-1 ring-black/5 transform hover:scale-105 transition">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-sky-600 rounded-full shadow">
                <FaHdd className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-blue-900 mb-1">{t.landingTitle}</h3>
                <p className="text-gray-600 text-sm mb-3">{t.landingDescription}</p>
                <button
                  onClick={() => navigate('/storage-advisor')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-600 hover:to-sky-700 text-white font-semibold rounded-full transition"
                  aria-label={t.landingTitle}
                >
                  <span>{t.landingCta}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Data Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow">
                <FaDatabase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{t.services.dataSolutions.title}</h3>
              <p className="text-gray-700 text-sm mb-4 text-center">{t.services.dataSolutions.description}</p>
              <div className="space-y-4">
                {t.services.dataSolutions.subServices.map((service, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className={`flex justify-center items-center w-10 h-10 bg-gradient-to-br ${Object.values(iconColors)[i]} rounded-full`}>
                      {service.icon}
                    </div>
                    <div>
                      <strong>{service.title}</strong>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wireless Network Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-full shadow">
                <FaWifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.services.wireless.title}</h3>
              <p className="text-gray-700 text-sm">{t.services.wireless.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">{t.whyChooseUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.keys(t.whyChooseUs)
              .filter(k => k !== 'title')
              .map((key, index) => (
                <div key={index} className="text-center">
                  <div className={`flex justify-center items-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${whyColors[key]} rounded-full shadow`}>
                    {whyChooseIcons[key]}
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
