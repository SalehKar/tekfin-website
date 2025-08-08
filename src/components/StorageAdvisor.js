import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaRobot, FaWpforms, FaQuestionCircle } from 'react-icons/fa';
import { MdStorage } from 'react-icons/md';

const StorageAdvisor = ({ language }) => {
  const [usage, setUsage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [speed, setSpeed] = useState('');
  const [portability, setPortability] = useState('');
  const [email, setEmail] = useState('');
  const [customRequirements, setCustomRequirements] = useState('');
  const [aiRecommendation, setAiRecommendation] = useState('');
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [showAISection, setShowAISection] = useState(false);

  const navigate = useNavigate();
  const isTR = language === 'tr';

  const copy = {
    tr: {
      metaTitle: 'Depolama Danışmanı – Akıllı Depolama Seçenekleri | TekFin Teknoloji',
      metaDescription:
        'Akıllı Depolama Danışmanı ile işletmeniz için en uygun veri depolama çözümünü bulun. SSD/HDD, kapasite, hız ve taşınabilirlik için kişisel tavsiyeler – TekFin Teknoloji İstanbul.',
      ogTitle: 'TekFin Depolama Danışmanı – İşletmeler için Veri Depolama Tavsiyesi',
      ogDescription:
        'Kullanım amacınıza göre en iyi SSD/HDD, kapasite ve hız önerisini saniyeler içinde alın. Veri depolama, yedekleme ve performans odaklı çözümler.',
      h1: 'Depolama Danışmanı – Akıllı Depolama Seçenekleri',
      intro:
        'Akıllı aracımız, kullanım amacınız, kapasite ihtiyacınız, performans beklentiniz ve taşınabilirlik gereksiniminize göre en uygun veri depolama çözümünü önerir. SSD/HDD, NVMe/SATA ve yedekleme seçeneklerini karşılaştırarak güvenli ve performanslı bir tercih yapmanıza yardımcı olur.',
      aiH2: '🤖 Yapay Zekâ Destekli Özel Öneri',
      aiLead:
        'İhtiyaçlarınızı detaylı açıklayın; yapay zekâ, kullanım senaryonuza uygun SSD/HDD, kapasite ve hız kombinasyonunu önersin.',
      formH2: '📋 Geleneksel Form – Hızlı Depolama Tavsiyesi',
      navH2: 'İlgili Hizmetler ve Kaynaklar',
      faqH2: 'Sık Sorulan Sorular',
      faq: [
        {
          q: 'Hangi durumlarda NVMe SSD tercih etmeliyim?',
          a: 'Video düzenleme, 3D tasarım ve yüksek I/O gerektiren iş yüklerinde NVMe SSD en iyi seçimdir. Ofis ve genel kullanımda SATA SSD çoğu zaman yeterlidir.'
        },
        {
          q: 'Yedekleme için harici HDD mi, bulut mu?',
          a: '3-2-1 yedekleme kuralını öneriyoruz: 3 kopya, 2 farklı ortam, 1 tanesi off-site. Harici HDD + bulut kombinasyonu idealdir.'
        },
        {
          q: 'Kurumsal depolama için nereden başlamalıyım?',
          a: 'Kapasite büyüme hızı, erişim performansı ve bütçeyi belirleyin. Ardından NAS/SAN ve SSD/HDD katmanlamasını planlayın.'
        }
      ],
      advisorLead: 'Akıllı aracımız, verileriniz için en uygun depolama seçeneğini önersin.',
      showForm: 'Formu Göster',
      hideForm: 'Formu Gizle',
      placeholders: {
        example:
          'Örnek: "Video düzenleme için hızlı bir NVMe SSD arıyorum, 1 TB kapasite, bütçem 2000 TL"'
      },
      labels: {
        usage: 'Kullanım Amacı',
        capacity: 'Kapasite',
        speed: 'Hız',
        portability: 'Taşınabilirlik',
        email: 'E-posta Adresi'
      },
      select: {
        personal: 'Kişisel Depolama',
        gaming: 'Oyun',
        video: 'Video Düzenleme',
        backup: 'Yedekleme',
        office: 'Ofis/İş',
        lt500: '500 GB altı',
        between: '500 GB – 1 TB',
        between2: '1 TB – 4 TB',
        gt4: '4 TB üzeri',
        nvme: 'Çok Yüksek (NVMe SSD)',
        sata: 'Yüksek (SATA SSD)',
        hdd: 'Düşük (HDD)',
        portable: 'Taşınabilir',
        fixed: 'Sabit'
      },
      buttons: {
        aiGet: '✨ AI Önerisi Al',
        aiBusy: '🔄 AI Analiz Ediyor...',
        getRec: 'Tavsiyeyi Al'
      },
      links: {
        dataStorage: 'Veri Depolama Hizmetleri',
        dataRecovery: 'Veri Kurtarma',
        contact: 'İletişim'
      },
      moreInfo: 'Daha fazla bilgi için:'
    },
    en: {
      metaTitle: 'Storage Advisor – Smart Storage Picks | TekFin Teknoloji',
      metaDescription:
        'Use our Storage Advisor to find the best data storage solution for your business. Personalized SSD/HDD, capacity, speed & portability recommendations – TekFin Teknoloji Istanbul.',
      ogTitle: 'TekFin Storage Advisor – Business Data Storage Recommendation',
      ogDescription:
        'Get tailored suggestions for SSD/HDD, capacity and speed in seconds. Compare NVMe/SATA and backup options for secure, high-performance storage.',
      h1: 'Storage Advisor – Smart Storage Picks',
      intro:
        'Our smart tool recommends the right data storage solution based on your use case, capacity needs, performance requirements and portability. Compare SSD/HDD, NVMe/SATA and backup options to choose a secure, high-performance setup.',
      aiH2: '🤖 AI-Powered Custom Recommendation',
      aiLead:
        'Describe your needs; the AI suggests the best SSD/HDD, capacity and performance mix for your scenario.',
      formH2: '📋 Traditional Form – Quick Storage Recommendation',
      navH2: 'Related Services & Resources',
      faqH2: 'Frequently Asked Questions',
      faq: [
        {
          q: 'When should I choose NVMe SSD?',
          a: 'For video editing, 3D design and high I/O workloads NVMe SSD is ideal. For office/general use, SATA SSD is often sufficient.'
        },
        {
          q: 'External HDD vs Cloud for backups?',
          a: 'Follow the 3-2-1 rule: 3 copies, 2 media, 1 off-site. A mix of external HDD + cloud is a solid baseline.'
        },
        {
          q: 'Where to start for corporate storage?',
          a: 'Define growth rate, performance and budget, then plan NAS/SAN and SSD/HDD tiering accordingly.'
        }
      ],
      advisorLead: 'Let our smart tool recommend the best storage option for your data.',
      showForm: 'Show Form',
      hideForm: 'Hide Form',
      placeholders: {
        example:
          'Example: "I need a fast NVMe SSD for video editing, 1TB capacity, budget is 2000 TL"'
      },
      labels: {
        usage: 'Usage Purpose',
        capacity: 'Capacity',
        speed: 'Speed',
        portability: 'Portability',
        email: 'Email Address'
      },
      select: {
        personal: 'Personal Storage',
        gaming: 'Gaming',
        video: 'Video Editing',
        backup: 'Backup',
        office: 'Office/Business',
        lt500: 'Less than 500 GB',
        between: '500 GB – 1 TB',
        between2: '1 TB – 4 TB',
        gt4: 'More than 4 TB',
        nvme: 'Very High (NVMe SSD)',
        sata: 'High (SATA SSD)',
        hdd: 'Low (HDD)',
        portable: 'Portable',
        fixed: 'Fixed'
      },
      buttons: {
        aiGet: '✨ Get AI Recommendation',
        aiBusy: '🔄 AI Analyzing...',
        getRec: 'Get Recommendation'
      },
      links: {
        dataStorage: 'Data Storage Services',
        dataRecovery: 'Data Recovery',
        contact: 'Contact'
      },
      moreInfo: 'For more details:'
    }
  };

  const t = copy[language] || copy.en;

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch('https://formsubmit.co/ajax/info@tekfingroup.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ email, usage, capacity, speed, portability })
      });

      navigate('/recommendations', {
        state: { usage, capacity, speed, portability, email, language }
      });
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  const handleAIRecommendation = async () => {
    if (!customRequirements.trim()) {
      alert(isTR ? 'Lütfen ihtiyaçlarınızı açıklayın.' : 'Please describe your requirements.');
      return;
    }

    setIsLoadingAI(true);
    setAiRecommendation('');

    try {
      const response = await fetch('/.netlify/functions/storage-recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requirements: customRequirements, language })
      });
      const data = await response.json();

      if (data.success) {
        setAiRecommendation(data.recommendation);
      } else {
        setAiRecommendation(
          isTR
            ? 'Üzgünüz, şu anda AI önerisi alınamıyor. Lütfen daha sonra tekrar deneyin.'
            : 'Sorry, AI recommendation is not available right now. Please try again later.'
        );
      }
    } catch (error) {
      console.error('Error getting AI recommendation:', error);
      setAiRecommendation(
        isTR
          ? 'Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.'
          : 'Connection error. Please check your internet connection.'
      );
    } finally {
      setIsLoadingAI(false);
    }
  };

  const canonical = 'https://tekfingroup.com/storage-advisor';
  const ogLocale = isTR ? 'tr_TR' : 'en_US';
  const ogImage = 'https://tekfingroup.com/assets/storage-advisor-og.png';

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (t.faq || []).map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  };

  // WebApplication Schema JSON-LD (تعريف الأداة)
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: isTR ? 'Depolama Danışmanı' : 'Storage Advisor',
    url: canonical,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
    inLanguage: isTR ? 'tr' : 'en'
  };

  // Breadcrumb Schema
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tekfingroup.com/" },
      { "@type": "ListItem", "position": 2, "name": isTR ? "Hizmetler" : "Services", "item": "https://tekfingroup.com/services" },
      { "@type": "ListItem", "position": 3, "name": t.h1, "item": canonical }
    ]
  };

  return (
    <div className="bg-white text-[#1f3b6f] px-4 py-12">
      {/* Page SEO */}
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href={canonical} />
        {/* hreflang */}
        <link rel="alternate" href="https://tekfingroup.com/storage-advisor" hrefLang="tr" />
        <link rel="alternate" href="https://tekfingroup.com/en/storage-advisor" hrefLang="en" />
        <link rel="alternate" href="https://tekfingroup.com/storage-advisor" hrefLang="x-default" />
        {/* Open Graph */}
        <meta property="og:title" content={t.ogTitle} />
        <meta property="og:description" content={t.ogDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:site_name" content="TekFin Teknoloji" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={isTR ? 'Depolama Danışmanı' : 'Storage Advisor'} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.ogTitle} />
        <meta name="twitter:description" content={t.ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        {/* Schemas */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <div className="max-w-3xl mx-auto text-center">
        {/* H1 محسن بالكلمات المفتاحية مع أيقونة */}
        <h1 className="text-4xl font-bold mb-4 text-[#002855] flex items-center gap-3">
          <MdStorage className="text-blue-700" aria-hidden="true" />
          {t.h1}
        </h1>

        <p className="text-base text-gray-700 mb-6">{t.intro}</p>

        {/* روابط داخلية لتعزيز السيو والزحف */}
        <nav aria-label={isTR ? 'İç bağlantılar' : 'Internal links'} className="mb-10">
          <h2 className="sr-only">{t.navH2}</h2>
          <ul className="flex flex-wrap gap-4 justify-center text-sm">
            <li>
              <Link to="/data-storage" className="text-blue-700 hover:underline">
                {t.links.dataStorage}
              </Link>
            </li>
            <li>
              <Link to="/data-recovery" className="text-blue-700 hover:underline">
                {t.links.dataRecovery}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-700 hover:underline">
                {t.links.contact}
              </Link>
            </li>
          </ul>
        </nav>

        {/* AI-Powered Custom Recommendation Section */}
        <section className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 text-left">
          <h2 className="text-2xl font-bold mb-4 text-[#002855] flex items-center gap-2">
            <FaRobot className="text-blue-600" aria-hidden="true" />
            {t.aiH2}
          </h2>
          <p className="text-gray-700 mb-4">{t.aiLead}</p>

          <div>
            <label htmlFor="customReq" className="sr-only">
              {isTR ? 'Özel gereksinimler' : 'Custom requirements'}
            </label>
            <textarea
              id="customReq"
              value={customRequirements}
              onChange={(e) => setCustomRequirements(e.target.value)}
              placeholder={t.placeholders.example}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              rows="4"
              aria-describedby="ai-helper"
            />
            <div id="ai-helper" className="text-xs text-gray-500 mt-1">
              {isTR
                ? 'İpucu: Kullanım senaryosu, kapasite (GB/TB), performans (NVMe/SATA/HDD) ve bütçeyi belirtin.'
                : 'Tip: Include use case, capacity (GB/TB), performance (NVMe/SATA/HDD) and budget.'}
            </div>

            <button
              onClick={handleAIRecommendation}
              disabled={isLoadingAI}
              className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-live="polite"
            >
              {isLoadingAI ? t.buttons.aiBusy : t.buttons.aiGet}
            </button>
          </div>

          {aiRecommendation && (
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-[#002855]">
                {isTR ? '🎯 AI Önerisi:' : '🎯 AI Recommendation:'}
              </h3>
              <div className="text-gray-700 whitespace-pre-line">{aiRecommendation}</div>
            </div>
          )}
        </section>

        {/* Traditional Form Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-[#002855] flex items-center gap-2">
            <FaWpforms className="text-blue-600" aria-hidden="true" />
            {t.formH2}
          </h2>
          <p className="text-gray-700 mb-4">{t.advisorLead}</p>
          <button
            onClick={() => setShowAISection(!showAISection)}
            className="mb-4 text-blue-600 hover:text-blue-800 underline"
            aria-expanded={showAISection}
            aria-controls="advisor-form"
          >
            {showAISection ? t.hideForm : t.showForm}
          </button>
        </section>

        {showAISection && (
          <form
            id="advisor-form"
            onSubmit={handleEmailSubmit}
            className="grid grid-cols-1 gap-6 text-left"
          >
            <div>
              <label className="block mb-1 font-medium">{t.labels.usage}</label>
              <select
                value={usage}
                onChange={(e) => setUsage(e.target.value)}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">--</option>
                <option value="personal">{t.select.personal}</option>
                <option value="gaming">{t.select.gaming}</option>
                <option value="video">{t.select.video}</option>
                <option value="backup">{t.select.backup}</option>
                <option value="office">{t.select.office}</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">{t.labels.capacity}</label>
              <select
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">--</option>
                <option value="lt500">{t.select.lt500}</option>
                <option value="500_1tb">{t.select.between}</option>
                <option value="1tb_4tb">{t.select.between2}</option>
                <option value="gt4tb">{t.select.gt4}</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">{t.labels.speed}</label>
              <select
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">--</option>
                <option value="very_high">{t.select.nvme}</option>
                <option value="high">{t.select.sata}</option>
                <option value="low">{t.select.hdd}</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">{t.labels.portability}</label>
              <select
                value={portability}
                onChange={(e) => setPortability(e.target.value)}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">--</option>
                <option value="portable">{t.select.portable}</option>
                <option value="fixed">{t.select.fixed}</option>
              </select>
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                {t.labels.email}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder={isTR ? 'ornek@firma.com' : 'name@company.com'}
                required
                className="w-full border rounded px-3 py-2"
                autoComplete="email"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 mt-2"
            >
              {isTR ? 'Tavsiyeyi Al' : 'Get Recommendation'}
            </button>
          </form>
        )}

        {/* FAQ Section */}
        <section className="mt-12 text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#002855] flex items-center gap-2">
            <FaQuestionCircle className="text-blue-600" aria-hidden="true" />
            {t.faqH2}
          </h2>
          <div className="space-y-4">
            {(t.faq || []).map((item, idx) => (
              <details key={idx} className="border rounded p-4 bg-white">
                <summary className="font-semibold cursor-pointer">{item.q}</summary>
                <p className="mt-2 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>

          {/* External reference link (improves "External Links" metric) */}
          <p className="text-sm text-gray-600 mt-6">
            {t.moreInfo}{' '}
            <a
              href="https://www.backblaze.com/blog/the-3-2-1-backup-strategy/"
              target="_blank"
              rel="noopener"
              className="text-blue-700 underline"
            >
              3-2-1 backup best practices
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default StorageAdvisor;
