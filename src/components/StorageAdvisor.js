import React, { useState } from 'react';
import './StorageAdvisor.css';

const StorageAdvisor = ({ language }) => {
  const [usage, setUsage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [speed, setSpeed] = useState('');
  const [budget, setBudget] = useState('');
  const [portability, setPortability] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [email, setEmail] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const content = {
    tr: {
      title: "Depolama Cihazı Danışmanı",
      description: "İhtiyaçlarınıza en uygun depolama cihazını bulmanıza yardımcı olalım.",
      usageLabel: "Ana Kullanım Amacı:",
      usageOptions: [
        { value: 'personal', label: 'Kişisel Depolama (fotoğraf, belge)' },
        { value: 'gaming', label: 'Oyun (hızlı yükleme, yüksek kapasite)' },
        { value: 'video_editing', label: 'Video Düzenleme/Grafik Tasarım (yüksek hız, yüksek kapasite)' },
        { value: 'backup', label: 'Yedekleme (yüksek kapasite, güvenilirlik)' },
        { value: 'office', label: 'Ofis/İş (dengeli performans, güvenlik)' },
      ],
      capacityLabel: "İhtiyaç Duyulan Kapasite:",
      capacityOptions: [
        { value: 'lt500gb', label: '500 GB altı' },
        { value: '500gb_1tb', label: '500 GB - 1 TB' },
        { value: '1tb_4tb', label: '1 TB - 4 TB' },
        { value: 'gt4tb', label: '4 TB üzeri' },
      ],
      speedLabel: "İstenen Hız:",
      speedOptions: [
        { value: 'very_high', label: 'Çok Yüksek (NVMe SSD)' },
        { value: 'high', label: 'Yüksek (SATA SSD)' },
        { value: 'medium', label: 'Orta (HDD)' },
      ],
      budgetLabel: "Yaklaşık Bütçe:",
      budgetOptions: [
        { value: 'low', label: 'Ekonomik (500 TL altı)' },
        { value: 'medium', label: 'Orta (500 - 1500 TL)' },
        { value: 'high', label: 'Yüksek (1500 TL üzeri)' },
      ],
      portabilityLabel: "Taşınabilirlik:",
      portabilityOptions: [
        { value: 'portable', label: 'Taşınabilir (harici)' },
        { value: 'fixed', label: 'Sabit (dahili/masaüstü)' },
      ],
      recommendButton: "Tavsiye Al",
      recommendationTitle: "Önerilen Depolama Cihazı:",
      noRecommendation: "Seçimlerinize uygun bir depolama cihazı bulunamadı. Lütfen seçimlerinizi değiştirin.",
      emailPrompt: "Tavsiyeyi görmek için e-posta adresinizi girin:",
      submit: "Gönder",
      nvme_gaming_high_budget: {
        type: "NVMe SSD",
        reason: "Oyun ve yüksek performanslı uygulamalar için en hızlı çözüm.",
        price: "1500 TL üzeri",
        brands: "Samsung 990 Pro, WD Black SN850X, Crucial T705",
        stores: "Hepsiburada, Trendyol, Vatan Bilgisayar"
      },
      sata_general_medium_budget: {
        type: "SATA SSD",
        reason: "Günlük kullanım için dengeli performans.",
        price: "500 - 1500 TL",
        brands: "Samsung 870 EVO, Kingston A400",
        stores: "Hepsiburada, Trendyol, MediaMarkt"
      },
      hdd_backup_low_budget: {
        type: "Harici HDD",
        reason: "Yüksek kapasite yedekleme için ekonomik çözüm.",
        price: "500 TL altı",
        brands: "Seagate Expansion, WD My Passport",
        stores: "Hepsiburada, Trendyol, Amazon.com.tr"
      },
      nvme_video_editing_high_budget: {
        type: "NVMe SSD",
        reason: "Video düzenleme için ultra hızlı performans.",
        price: "1500 TL üzeri",
        brands: "Samsung 990 Pro, Crucial T705",
        stores: "Hepsiburada, Trendyol, Vatan Bilgisayar"
      },
      sata_office_medium_budget: {
        type: "SATA SSD",
        reason: "Ofis kullanımı için hızlı ve güvenilir.",
        price: "500 - 1500 TL",
        brands: "Samsung 870 EVO, Kingston A400",
        stores: "Hepsiburada, Trendyol, MediaMarkt"
      },
      hdd_personal_low_budget: {
        type: "Dahili/Harici HDD",
        reason: "Belgeler ve fotoğraflar için ekonomik depolama.",
        price: "500 TL altı",
        brands: "Seagate BarraCuda, WD Blue",
        stores: "Hepsiburada, Trendyol, Amazon.com.tr"
      },
      default_recommendation: {
        type: "Çok Yönlü SSD (SATA veya NVMe)",
        reason: "Genel kullanım için hızlı ve güvenilir çözüm.",
        price: "500 - 1500 TL",
        brands: "Samsung, WD, Kingston",
        stores: "Hepsiburada, Trendyol, Vatan Bilgisayar"
      }
    },
    en: { /* تمام محتوى en كما في النسخة السابقة كاملة */ }
  };

  const t = content[language];

  const getRecommendation = () => {
    if (!usage || !capacity || !speed || !budget || !portability) {
      setRecommendation(null);
      return;
    }
    setShowEmailModal(true);
  };

  const submitEmail = () => {
    if (!email.includes('@')) {
      alert(language === 'tr' ? "Lütfen geçerli bir e-posta girin." : "Please enter a valid email.");
      return;
    }
    console.log("User Email Saved:", email);
    console.log("Selections:", { usage, capacity, speed, budget, portability });
    setEmailSubmitted(true);
    setShowEmailModal(false);
    matchRecommendation();
  };

  const matchRecommendation = () => {
    if (usage === 'gaming' && speed === 'very_high' && budget === 'high') {
      setRecommendation(t.nvme_gaming_high_budget);
    } else if (usage === 'video_editing' && speed === 'very_high' && budget === 'high') {
      setRecommendation(t.nvme_video_editing_high_budget);
    } else if (usage === 'backup' && speed === 'medium' && budget === 'low') {
      setRecommendation(t.hdd_backup_low_budget);
    } else if (usage === 'office' && speed === 'high' && budget === 'medium') {
      setRecommendation(t.sata_office_medium_budget);
    } else if (usage === 'personal' && speed === 'medium' && budget === 'low') {
      setRecommendation(t.hdd_personal_low_budget);
    } else {
      setRecommendation(t.default_recommendation);
    }
  };

  return (
    <div className="storage-advisor">
      <div className="container">
        <h1 className="page-title">{t.title}</h1>
        <p className="advisor-description">{t.description}</p>

        <div className="advisor-form">
          {/* النموذج كما هو، لكن كل الوسوم نصوصها تعتمد على t.xx */}
        </div>

        {showEmailModal && !emailSubmitted && (
          <div className="email-modal">
            <h3>{t.emailPrompt}</h3>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@email.com"/>
            <button onClick={submitEmail}>{t.submit}</button>
          </div>
        )}

        {recommendation && (
          <div className="recommendation-result">
            <h2>{t.recommendationTitle}</h2>
            <h3>{recommendation.type}</h3>
            <p><strong>{language === 'tr' ? 'Neden:' : 'Reason:'}</strong> {recommendation.reason}</p>
            <p><strong>{language === 'tr' ? 'Fiyat Aralığı:' : 'Estimated Price Range:'}</strong> {recommendation.price}</p>
            <p><strong>{language === 'tr' ? 'Markalar:' : 'Recommended Brands:'}</strong> {recommendation.brands}</p>
            <p><strong>{language === 'tr' ? 'Mağazalar:' : 'Available at Stores:'}</strong> {recommendation.stores}</p>
          </div>
        )}

        {!recommendation && usage && capacity && speed && budget && portability && emailSubmitted && (
          <p className="no-recommendation">{t.noRecommendation}</p>
        )}
      </div>
    </div>
  );
};

export default StorageAdvisor;
