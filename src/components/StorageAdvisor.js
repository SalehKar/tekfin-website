import React, { useState } from 'react';
import './StorageAdvisor.css';

const StorageAdvisor = ({ language }) => {
  const [usage, setUsage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [speed, setSpeed] = useState('');
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
      portabilityLabel: "Taşınabilirlik:",
      portabilityOptions: [
        { value: 'portable', label: 'Taşınabilir (harici)' },
        { value: 'fixed', label: 'Sabit (dahili/masaüstü)' },
      ],
      recommendButton: "Tavsiye Al",
      recommendationTitle: "Önerilen Depolama Cihazı:",
      underDevelopment: "Teşekkür ederiz! Bu hizmet şu anda geliştirme aşamasındadır ve yakında aktif olacaktır.",
      emailPrompt: "Tavsiyeyi görmek için e-posta adresinizi girin:",
      submit: "Gönder"
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
      portabilityLabel: "Portability:",
      portabilityOptions: [
        { value: 'portable', label: 'Portable (external)' },
        { value: 'fixed', label: 'Fixed (internal/desktop)' },
      ],
      recommendButton: "Get Recommendation",
      recommendationTitle: "Recommended Storage Device:",
      underDevelopment: "Thank you! This service is currently under development and will be available soon.",
      emailPrompt: "Enter your email to see the recommendation:",
      submit: "Submit"
    }
  };

  const t = content[language];

  const getRecommendation = () => {
    if (!usage || !capacity || !speed || !portability) {
      setRecommendation(null);
      return;
    }
    setShowEmailModal(true);
  };

  const submitEmail = async () => {
    if (!email.includes('@')) {
      alert(t.emailPrompt);
      return;
    }

    try {
      await fetch('https://formsubmit.co/ajax/info@tekfingroup.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Email: email,
          Usage: usage,
          Capacity: capacity,
          Speed: speed,
          Portability: portability
        })
      });
    } catch (err) {
      console.error('Failed to send email:', err);
    }

    setEmailSubmitted(true);
    setShowEmailModal(false);
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

        {emailSubmitted && (
          <div className="recommendation-result">
            <h2>{t.recommendationTitle}</h2>
            <p>{t.underDevelopment}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default StorageAdvisor;
