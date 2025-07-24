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
    },
    en: {
      title: "Storage Device Advisor",
      description: "Let us help you find the perfect storage device for your needs.",
      usageLabel: "Main Usage:",
      usageOptions: [
        { value: 'personal', label: 'Personal Storage (photos, documents)' },
        { value: 'gaming', label: 'Gaming (fast loading, high capacity)' },
        { value: 'video_editing', label: 'Video Editing/Graphic Design (high speed, high capacity)' },
        { value: 'backup', label: 'Backup (high capacity, reliability)' },
        { value: 'office', label: 'Office/Business (balanced performance, security)' },
      ],
      capacityLabel: "Required Capacity:",
      capacityOptions: [
        { value: 'lt500gb', label: 'Less than 500 GB' },
        { value: '500gb_1tb', label: '500 GB - 1 TB' },
        { value: '1tb_4tb', label: '1 TB - 4 TB' },
        { value: 'gt4tb', label: 'More than 4 TB' },
      ],
      speedLabel: "Desired Speed:",
      speedOptions: [
        { value: 'very_high', label: 'Very High (NVMe SSD)' },
        { value: 'high', label: 'High (SATA SSD)' },
        { value: 'medium', label: 'Medium (HDD)' },
      ],
      budgetLabel: "Approximate Budget:",
      budgetOptions: [
        { value: 'low', label: 'Economical (Under 500 TL)' },
        { value: 'medium', label: 'Medium (500 - 1500 TL)' },
        { value: 'high', label: 'High (Over 1500 TL)' },
      ],
      portabilityLabel: "Portability:",
      portabilityOptions: [
        { value: 'portable', label: 'Portable (external)' },
        { value: 'fixed', label: 'Fixed (internal/desktop)' },
      ],
      recommendButton: "Get Recommendation",
      recommendationTitle: "Recommended Storage Device:",
      noRecommendation: "No storage device found matching your selections. Please adjust your choices.",
      emailPrompt: "Enter your email to see the recommendation:",
      submit: "Submit",
    }
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
      alert(t.emailPrompt);
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
      setRecommendation({
        type: "NVMe SSD",
        reason: "Ideal for gaming and high-performance apps.",
        price: "Over 1500 TL",
        brands: "Samsung 990 Pro, WD Black SN850X",
        stores: "Hepsiburada, Trendyol, Vatan"
      });
    } else {
      setRecommendation({
        type: "SATA SSD",
        reason: "Great balance for daily use.",
        price: "500 - 1500 TL",
        brands: "Kingston A400, Samsung 870 EVO",
        stores: "Trendyol, Amazon"
      });
    }
  };

  return (
    <div className="storage-advisor">
      <div className="container">
        <h1 className="page-title">{t.title}</h1>
        <p className="advisor-description">{t.description}</p>

        <div className="advisor-form">
          <div className="form-group">
            <label>{t.usageLabel}</label>
            <select value={usage} onChange={(e) => setUsage(e.target.value)}>
              <option value="">--</option>
              {t.usageOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.capacityLabel}</label>
            <select value={capacity} onChange={(e) => setCapacity(e.target.value)}>
              <option value="">--</option>
              {t.capacityOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.speedLabel}</label>
            <select value={speed} onChange={(e) => setSpeed(e.target.value)}>
              <option value="">--</option>
              {t.speedOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.budgetLabel}</label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">--</option>
              {t.budgetOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.portabilityLabel}</label>
            <select value={portability} onChange={(e) => setPortability(e.target.value)}>
              <option value="">--</option>
              {t.portabilityOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <button onClick={getRecommendation} className="recommend-button">
            {t.recommendButton}
          </button>
        </div>

        {showEmailModal && !emailSubmitted && (
          <div className="modal-overlay">
            <div className="email-modal">
              <button className="close-modal" onClick={() => setShowEmailModal(false)}>×</button>
              <h3>{t.emailPrompt}</h3>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="example@email.com"
              />
              <button onClick={submitEmail}>{t.submit}</button>
            </div>
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
