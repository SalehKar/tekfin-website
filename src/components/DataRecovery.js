import React from 'react';

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
    <div style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <hr />

      <h3>{t.about}</h3>
      <ul>
        {t.devices.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h3>{t.stepsTitle}</h3>
      <ol>
        {t.steps.map((item, i) => <li key={i}>{item}</li>)}
      </ol>

      <h3>{t.whyUsTitle}</h3>
      <ul>
        {t.whyUs.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default DataRecovery;
