import React from 'react';
import './DataRecovery.css';

const DataRecovery = ({ language }) => {
  const content = {
    tr: {
      title: "Veri Kurtarma Hizmetleri",
      subtitle: "Kaybolan Verilerinizi Geri Getirin",
      about: "Her türlü depolama cihazından veri kurtarma hizmeti sunan profesyonel bir ekibiz:",
      devices: [
        "Hasar görmüş veya bozulmuş HDD / SSD",
        "Dahili / harici sabit sürücüler",
        "SD kartlar, USB bellek, RAID dizileri ve NAS sistemleri"
      ],
      stepsTitle: "İş Sürecimiz",
      steps: [
        "Ücretsiz Ön Tanı",
        "Temiz Oda (Cleanroom)",
        "Akıllı Parçalama ve Çözüm",
        "Dosya Kurtarma",
        "Teslimat – Yeni aygıt veya güvenli indirme linki ile"
      ],
      whyUsTitle: "Neden Bizi Seçmelisiniz?",
      whyUs: [
        "Fiziksel olarak hasar görmüş disklerde yüksek başarı oranı",
        "Gizli ücretler olmadan şeffaf fiyatlandırma",
        "Her zaman ulaşılabilir doğrudan teknik destek"
      ]
    },
    en: {
      title: "Data Recovery Services",
      subtitle: "Recover Your Lost Data",
      about: "We are a professional team offering data recovery services from various devices:",
      devices: [
        "Damaged or corrupted HDD / SSD",
        "Internal/external hard drives",
        "SD cards, USB flash drives, RAID arrays, and NAS systems"
      ],
      stepsTitle: "Our Process",
      steps: [
        "Free Initial Diagnosis",
        "Secure Lab Environment (Cleanroom)",
        "Smart Disassembly & Extraction",
        "File Recovery",
        "Delivery via new medium or secure download links"
      ],
      whyUsTitle: "Why Choose Us?",
      whyUs: [
        "High success rate, especially with physically damaged drives",
        "Transparent pricing with no hidden fees",
        "Direct technical support available at all times"
      ]
    }
  };

  const t = content[language || 'tr'];

  return (
    <section className="data-recovery">
      <h1>{t.title}</h1>
      <p className="subtitle">{t.subtitle}</p>
      <hr />

      <h2>{t.about}</h2>
      <ul>
        {t.devices.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2>{t.stepsTitle}</h2>
      <ol>
        {t.steps.map((item, i) => <li key={i}>{item}</li>)}
      </ol>

      <h2>{t.whyUsTitle}</h2>
      <ul>
        {t.whyUs.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
  );
};

export default DataRecovery;
