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
    // ... المحتوى كما في كودك الحالي بالضبط
    // (استخدم نفس الـ tr و en دون تعديل)
    // اختصرته هنا للاختصار فقط
    tr: { /* كما هو */ },
    en: { /* كما هو */ }
  };

  const t = content[language];

  const getRecommendation = () => {
    if (!usage || !capacity || !speed || !budget || !portability) {
      setRecommendation(null);
      return;
    }
    setShowEmailModal(true); // نطلب البريد أولاً
  };

  const submitEmail = () => {
    if (!email.includes('@')) {
      alert("Please enter a valid email.");
      return;
    }

    // لاحقًا: ربط مع Google Sheet أو API
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
    } else if (speed === 'high' && budget === 'medium') {
      setRecommendation(t.sata_general_medium_budget);
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
          <div className="form-group">
            <label>{t.usageLabel}</label>
            <select value={usage} onChange={(e) => setUsage(e.target.value)}>
              <option value="">-- {language === 'tr' ? 'Seçiniz' : 'Select'} --</option>
              {t.usageOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.capacityLabel}</label>
            <select value={capacity} onChange={(e) => setCapacity(e.target.value)}>
              <option value="">-- {language === 'tr' ? 'Seçiniz' : 'Select'} --</option>
              {t.capacityOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.speedLabel}</label>
            <select value={speed} onChange={(e) => setSpeed(e.target.value)}>
              <option value="">-- {language === 'tr' ? 'Seçiniz' : 'Select'} --</option>
              {t.speedOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.budgetLabel}</label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">-- {language === 'tr' ? 'Seçiniz' : 'Select'} --</option>
              {t.budgetOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.portabilityLabel}</label>
            <select value={portability} onChange={(e) => setPortability(e.target.value)}>
              <option value="">-- {language === 'tr' ? 'Seçiniz' : 'Select'} --</option>
              {t.portabilityOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <button onClick={getRecommendation} className="recommend-button">
            {t.recommendButton}
          </button>
        </div>

        {showEmailModal && !emailSubmitted && (
          <div className="email-modal">
            <h3>{language === 'tr' ? "Tavsiyeyi görmek için e-posta adresinizi girin:" : "Enter your email to see the recommendation:"}</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
            <button onClick={submitEmail}>
              {language === 'tr' ? "Gönder" : "Submit"}
            </button>
          </div>
        )}

        {recommendation && (
          <div className="recommendation-result">
            <h2>{t.recommendationTitle}</h2>
            <h3>{recommendation.type}</h3>
            <p><strong>{language === 'tr' ? 'Neden:' : 'Reason:'}</strong> {recommendation.reason}</p>
            <p><strong>{language === 'tr' ? 'Tahmini Fiyat Aralığı:' : 'Estimated Price Range:'}</strong> {recommendation.price}</p>
            <p><strong>{language === 'tr' ? 'Önerilen Markalar:' : 'Recommended Brands:'}</strong> {recommendation.brands}</p>
            <p><strong>{language === 'tr' ? 'Bulunabileceği Mağazalar:' : 'Available at Stores:'}</strong> {recommendation.stores}</p>
          </div>
        )}

        {!recommendation && usage && capacity && speed && budget && portability && (
          <p className="no-recommendation">{t.noRecommendation}</p>
        )}
      </div>
    </div>
  );
};

export default StorageAdvisor;
