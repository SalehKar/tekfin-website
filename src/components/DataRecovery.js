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

  const t = content[language] || content['tr'];

  const styles = {
    section: {
      maxWidth: '960px',
      margin: '0 auto',
      padding: '3rem 1rem',
      fontFamily: '"Segoe UI", sans-serif',
      color: '#222',
    },
    title: {
      fontSize: '2.25rem',
      color: '#003366',
      marginBottom: '0.5rem',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#666',
      marginBottom: '2rem',
    },
    heading: {
      fontSize: '1.4rem',
      marginTop: '2rem',
      marginBottom: '1rem',
      color: '#003366',
      fontWeight: 600,
    },
    list: {
      paddingLeft: '1.5rem',
      marginBottom: '1.5rem',
      lineHeight: '1.8',
    },
    item: {
      marginBottom: '0.5rem',
    }
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.title}>{t.title}</h1>
      <p style={styles.subtitle}>{t.subtitle}</p>
      <hr />

      <h2 style={styles.heading}>{t.about}</h2>
      <ul style={styles.list}>
        {t.devices.map((item, i) => <li key={i} style={styles.item}>{item}</li>)}
      </ul>

      <h2 style={styles.heading}>{t.stepsTitle}</h2>
      <ol style={styles.list}>
        {t.steps.map((item, i) => <li key={i} style={styles.item}>{item}</li>)}
      </ol>

      <h2 style={styles.heading}>{t.whyUsTitle}</h2>
      <ul style={styles.list}>
        {t.whyUs.map((item, i) => <li key={i} style={styles.item}>{item}</li>)}
      </ul>
    </section>
  );
};

export default DataRecovery;
