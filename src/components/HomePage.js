import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaDatabase, FaWifi, FaHdd, FaCloudUploadAlt, FaShieldAlt, FaBolt, FaUsers } from 'react-icons/fa';

const HomePage = ({ language }) => {
  const navigate = useNavigate();

  const content = {
    tr: {
      metaTitle: "TekFin Teknoloji – Veri Kurtarma, Veri Depolama ve Kablosuz Ağ Çözümleri",
      metaDescription: "İstanbul merkezli TekFin Teknoloji, işletmelere profesyonel veri kurtarma, güvenli veri depolama ve kablosuz ağ çözümleri sunar. Verilerinizi güvenle saklayın, koruyun ve kurtarın.",
      ogTitle: "TekFin Teknoloji – Veri Kurtarma ve Depolama Çözümleri",
      ogDescription: "Veri kurtarma, yedekleme ve kablosuz ağ çözümlerinde uzmanız. İstanbul'da işletmelere güvenilir hizmetler sunuyoruz.",

      mainTitle: "Profesyonel Veri Kurtarma ve Depolama Çözümleri",
      subtitle: "İşletme Verilerinizi Güvenle Saklayın, Koruyun ve Geri Kazanın",
      intro: "TekFin Teknoloji, İstanbul merkezli olarak işletmelere veri kurtarma, güvenli veri depolama ve yedekleme hizmetleri sunar. Kritik verilerinizin korunması, kurtarılması ve yönetilmesi için son teknoloji çözümler geliştiriyoruz.",

      landingTitle: "Depolama Danışmanı",
      landingDescription: "Hangi depolama çözümünün size uygun olduğundan emin değil misiniz? Akıllı danışmanımızla saniyeler içinde kişiselleştirilmiş öneri alın!",
      landingCta: "Öneri Alın",

      services: {
        title: "Hizmetlerimiz",
        dataSolutions: {
          title: "Veri Kurtarma ve Depolama",
          description: "Verinin iş başarısındaki kritik rolünü biliyoruz, bu yüzden gelişmiş veri çözümleri sunuyoruz:",
          subServices: [
            { title: "Veri Depolama", description: "Verilerinize her zaman kolay erişim sağlayan güvenli ve verimli depolama çözümleri.", icon: <FaHdd className="w-6 h-6 text-white" /> },
            { title: "Veri Kurtarma", description: "En son teknolojilerle kritik işletme verilerinizin hızlı ve güvenilir kurtarılması.", icon: <FaDatabase className="w-6 h-6 text-white" /> },
            { title: "Yedekleme Hizmetleri", description: "Verilerinizi kayıp veya hasara karşı koruyan otomatik ve güvenli yedekleme sistemleri.", icon: <FaCloudUploadAlt className="w-6 h-6 text-white" /> }
          ]
        },
        wireless: {
          title: "Kablosuz Ağ Çözümleri (Gelecekte)",
          description: "İşletmenizin kablosuz ağ ihtiyaçları için güvenli, hızlı ve kesintisiz çözümler sunmayı hedefliyoruz. Gelecek hizmetlerimiz için bizi takip edin."
        }
      },
      whyChooseUs: {
        title: "Neden TekFin Teknoloji?",
        expertise: "Uzmanlık: Veri kurtarma ve veri yönetiminde yılların deneyimi.",
        reliability: "Güvenilirlik: Verilerinizin gizliliği ve güvenliği önceliğimizdir.",
        fastSolutions: "Hızlı Çözümler: Acil durumlarda bile hızlı müdahale.",
        customerFocus: "Müşteri Odaklı: İhtiyaçlarınıza özel çözümler."
      },
      cta: {
        title: "Verilerinizi korumak ve kurtarmak için hemen bizimle iletişime geçin!",
        button: "Hemen İletişime Geçin"
      }
    },
    en: {
      metaTitle: "TekFin Teknoloji – Data Recovery, Storage & Wireless Solutions",
      metaDescription: "TekFin Teknoloji, based in Istanbul, provides professional data recovery, secure data storage, and wireless network solutions for businesses. Protect, store, and recover your data with confidence.",
      ogTitle: "TekFin Teknoloji – Data Recovery & Storage Solutions",
      ogDescription: "We specialize in data recovery, backup, and wireless network solutions. Trusted by businesses in Istanbul.",

      mainTitle: "Professional Data Recovery & Storage Solutions",
      subtitle: "Store, Protect, and Recover Your Business Data with Confidence",
      intro: "TekFin Teknoloji, based in Istanbul, delivers secure data storage, professional data recovery, and backup solutions to businesses. We use advanced technology to protect, recover, and manage your critical data.",

      landingTitle: "Storage Advisor",
      landingDescription: "Not sure which storage fits your needs? Get a tailored recommendation in seconds with our smart advisor!",
      landingCta: "Get Recommendation",

      services: {
        title: "Our Services",
        dataSolutions: {
          title: "Data Recovery & Storage",
          description: "We understand the critical role of data in business success, which is why we offer advanced data solutions:",
          subServices: [
            { title: "Data Storage", description: "Secure and efficient storage solutions ensuring your data is always accessible.", icon: <FaHdd className="w-6 h-6 text-white" /> },
            { title: "Data Recovery", description: "Fast and reliable recovery of critical business data using cutting-edge technology.", icon: <FaDatabase className="w-6 h-6 text-white" /> },
            { title: "Backup Services", description: "Automated and secure backup systems to protect your data from loss or damage.", icon: <FaCloudUploadAlt className="w-6 h-6 text-white" /> }
          ]
        },
        wireless: {
          title: "Wireless Network Solutions (Future)",
          description: "We aim to provide secure, fast, and seamless solutions for your business wireless network needs. Stay tuned for updates."
        }
      },
      whyChooseUs: {
        title: "Why TekFin Teknoloji?",
        expertise: "Expertise: Years of experience in data recovery and management.",
        reliability: "Reliability: Your data security and privacy are our top priority.",
        fastSolutions: "Fast Solutions: Quick response even in emergencies.",
        customerFocus: "Customer-Centric: Solutions tailored to your needs."
      },
      cta: {
        title: "Contact us today to protect and recover your business data!",
        button: "Contact Us Now"
      }
    }
  };

  const t = content[language] || content.en;

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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* CTA */}
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
