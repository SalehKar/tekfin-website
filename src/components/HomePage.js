import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaDatabase,
  FaWifi,
  FaHdd,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaCheckCircle
} from 'react-icons/fa';

const HomePage = ({ language }) => {
  const navigate = useNavigate();
  const goContact = (intent) => navigate(`/contact?intent=${intent}`);

  const content = {
    tr: {
      mainTitle: "İşletme Veri Çözümleri",
      subtitle: "Verilerinizi yapılandırın, yedekleyin ve ihtiyaç anında güvenle geri yükleyin.",
      intro:
        "TekFin, büyüyen işletmeler için veri altyapısını uçtan uca tasarlar: doğru depolama mimarisi, otomatik yedekleme katmanları ve doğrulanmış kurtarma planı. Amaç; sadece veri saklamak değil, iş sürekliliğini garanti altına almaktır.",

      heroCtas: {
        primary: "Ücretsiz Veri Risk Analizi",
        secondary: "Danışmanlık Talep Et"
      },

      // Storage Advisor
      landingTitle: "Depolama Danışmanı",
      landingDescription:
        "Hangi depolama çözümünün size uygun olduğundan emin değil misiniz? Akıllı danışmanımızla saniyeler içinde kişiselleştirilmiş öneri alın!",
      landingCta: "Öneri Alın",

      solutions: {
        title: "Çözümler",
        dataSolutions: {
          title: "Business Data Solutions",
          description:
            "Üç temel çözüm katmanı ile veri altyapınızı kurar ve yönetilebilir hale getiririz:",
          subServices: [
            {
              title: "Veri Depolama",
              description:
                "Güvenli, verimli ve ölçeklenebilir depolama mimarisi: erişilebilirlik, performans ve büyüme planınıza uygun kapasite.",
              icon: <FaHdd className="w-6 h-6 text-white" />
            },
            {
              title: "Yedekleme Hizmetleri",
              description:
                "Otomatik ve çok katmanlı yedekleme stratejisi: yerel + offsite/sıfır sürpriz için izleme ve raporlama.",
              icon: <FaCloudUploadAlt className="w-6 h-6 text-white" />
            },
            {
              title: "Veri Kurtarma",
              description:
                "Hızlı ve güvenilir kurtarma çerçevesi: kurtarma hedefleri (RTO/RPO), senaryolar ve periyodik geri yükleme doğrulaması.",
              icon: <FaDatabase className="w-6 h-6 text-white" />
            }
          ]
        },

        protectionLayer: {
          title: "Entegre Koruma Katmanı",
          description:
            "Güvenlik ayrı bir ürün değil; tasarladığımız her çözümün içinde yer alır:",
          bullets: [
            "Şifreleme ve güvenli veri işleme",
            "Erişim kontrolü ve yetkilendirme yaklaşımı",
            "Yedekleme başarısızlığı için izleme ve uyarılar",
            "Depolama sağlığı takibi (disk/RAID durumları)",
            "Periyodik geri yükleme testi ve doğrulama"
          ]
        },

        wireless: {
          title: "Kablosuz Ağ Çözümleri (Gelecekte)",
          description:
            "İşletmenizin kablosuz ağ ihtiyaçları için güvenli, hızlı ve kesintisiz çözümler sunmayı hedefliyoruz. Gelecek hizmetlerimiz için bizi takip edin."
        }
      },

      whyChooseUs: {
        title: "Neden TekFin?",
        expertise:
          "Uzmanlık: Veri depolama, yedekleme ve kurtarma süreçlerinde pratik, işletme odaklı yaklaşım.",
        reliability:
          "Güvenilirlik: Veri gizliliği ve güvenliği tasarımın merkezindedir.",
        fastSolutions:
          "Hız: Kritik durumlarda net süreç ve hızlı aksiyon.",
        customerFocus:
          "İş Odaklılık: Teknik değil sonuç konuşuruz — süreklilik ve erişilebilirlik."
      },

      cta: {
        title: "Veri kaybı bir ihtimal değil, bir risk yönetimi konusudur. Bugün başlayın.",
        primary: "Ücretsiz Veri Risk Analizi",
        secondary: "İletişime Geçin"
      }
    },

    en: {
      mainTitle: "Business Data Solutions",
      subtitle: "Structured storage, automated backups, and verified recovery — built for growing businesses.",
      intro:
        "TekFin designs end-to-end data foundations for growing teams: the right storage architecture, multi-layer automated backups, and a verified recovery framework. The goal isn’t just storing data — it’s business continuity.",

      heroCtas: {
        primary: "Free Data Risk Assessment",
        secondary: "Request Consultation"
      },

      // Storage Advisor
      landingTitle: "Storage Advisor",
      landingDescription:
        "Not sure which storage fits your needs? Get a tailored recommendation in seconds with our smart advisor!",
      landingCta: "Get Recommendation",

      solutions: {
        title: "Solutions",
        dataSolutions: {
          title: "Business Data Solutions",
          description:
            "We build a reliable data foundation through three solution layers:",
          subServices: [
            {
              title: "Data Storage",
              description:
                "Secure, efficient, and scalable storage architecture aligned with your capacity and growth needs.",
              icon: <FaHdd className="w-6 h-6 text-white" />
            },
            {
              title: "Backup Services",
              description:
                "Automated, multi-layer backup strategy with monitoring and reporting to prevent silent failures.",
              icon: <FaCloudUploadAlt className="w-6 h-6 text-white" />
            },
            {
              title: "Data Recovery",
              description:
                "A fast and reliable recovery framework with defined objectives (RTO/RPO) and periodic restore verification.",
              icon: <FaDatabase className="w-6 h-6 text-white" />
            }
          ]
        },

        protectionLayer: {
          title: "Built-in Protection Layer",
          description:
            "Protection is embedded into every solution — not sold as a separate product:",
          bullets: [
            "Encryption & secure data handling",
            "Access control & authorization approach",
            "Monitoring & alerts for backup failures",
            "Storage health monitoring (disk/RAID status)",
            "Periodic restore testing & verification"
          ]
        },

        wireless: {
          title: "Wireless Network Solutions (Future)",
          description:
            "We aim to provide secure, fast, and seamless solutions for your business wireless network needs. Stay tuned for updates."
        }
      },

      whyChooseUs: {
        title: "Why TekFin?",
        expertise:
          "Practical expertise: storage, backup, and recovery designed for real business operations.",
        reliability:
          "Reliability: confidentiality and security are built into the architecture.",
        fastSolutions:
          "Fast response: clear process and quick action when it matters.",
        customerFocus:
          "Business-first: we sell outcomes — continuity, access, and recoverability."
      },

      cta: {
        title: "Data loss isn’t a surprise. It’s a risk you can control. Start today.",
        primary: "Free Data Risk Assessment",
        secondary: "Request Consultation"
      }
    }
  };

  const t = content[language] || content.en;

  // Icons gradient colors for the three solution layers
  const iconColors = {
    storage: 'from-green-500 to-emerald-600',
    backup: 'from-yellow-500 to-orange-500',
    recovery: 'from-blue-500 to-indigo-600',
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
{/* Hero CTAs */}
<div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
  <button
    onClick={() => goContact('assessment')}
    className="px-7 py-3.5 bg-white text-blue-900 font-bold rounded-full hover:bg-white/90 transition"
  >
    {t.heroCtas.primary}
  </button>

  <button
    onClick={() => goContact('consultation')}
    className="px-7 py-3.5 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/15 transition"
  >
    {t.heroCtas.secondary}
  </button>
</div>
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-600 hover:to-sky-700 text-white font-semibold rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
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

      {/* Solutions Section (was Services) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">{t.solutions.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Data Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow">
                <FaDatabase className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-center">{t.solutions.dataSolutions.title}</h3>
              <p className="text-gray-700 text-sm mb-5 text-center">{t.solutions.dataSolutions.description}</p>

              <div className="space-y-4">
                {t.solutions.dataSolutions.subServices.map((service, i) => {
                  const gradients = [iconColors.storage, iconColors.backup, iconColors.recovery];
                  return (
                    <div key={i} className="flex items-start space-x-3">
                      <div className={`flex justify-center items-center w-10 h-10 bg-gradient-to-br ${gradients[i]} rounded-full`}>
                        {service.icon}
                      </div>
                      <div>
                        <strong>{service.title}</strong>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Built-in Protection Layer (embedded, not a headline product) */}
             <div className="mt-4 flex flex-col sm:flex-row gap-2">
  <button
    onClick={() => goContact('assessment')}
    className="w-full sm:w-auto px-5 py-2.5 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-950 transition"
  >
    {t.heroCtas.primary}
  </button>

  <button
    onClick={() => goContact('consultation')}
    className="w-full sm:w-auto px-5 py-2.5 bg-white border border-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition"
  >
    {t.heroCtas.secondary}
  </button>
</div>

            {/* Wireless Network Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className={`flex justify-center items-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${iconColors.wireless} rounded-full shadow`}>
                <FaWifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.solutions.wireless.title}</h3>
              <p className="text-gray-700 text-sm">{t.solutions.wireless.description}</p>
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

      {/* Telegram Channel Section */}
      <section className="py-14 bg-blue-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            {language === 'tr' ? 'Telegram kanalımızı takip edin' : 'Follow our Telegram channel'}
          </h2>

          <p className="text-gray-700 text-sm mb-6">
            {language === 'tr'
              ? 'Güncellemeler, duyurular ve veri çözümleriyle ilgili içerikler için'
              : 'For updates, announcements, and insights about data solutions'}
          </p>

          <a
            href="https://t.me/TekfinGroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-7 py-3 text-white font-semibold hover:opacity-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
              <path d="M9.04 15.44l-.39 5.53c.56 0 .8-.24 1.1-.53l2.64-2.52 5.48 4.01c1 .55 1.72.26 1.97-.92l3.57-16.76c.3-1.39-.5-1.94-1.5-1.56L1.27 9.76c-1.36.53-1.34 1.29-.24 1.63l5.46 1.7L18.1 5.6c.55-.34 1.05-.15.64.21" />
            </svg>
            Telegram
          </a>
        </div>
      </section>

{/* Call to Action Section */}
<section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-700 text-white text-center">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t.cta.title}</h2>

    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <button
        onClick={() => navigate('/contact?intent=assessment')}
        className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-white/90 transition"
      >
        {t.cta.primary}
      </button>

      <button
        onClick={() => navigate('/contact?intent=consultation')}
        className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/15 transition"
      >
        {t.cta.secondary}
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;
