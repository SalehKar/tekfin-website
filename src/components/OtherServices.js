import React from 'react';

const OtherServices = ({ language }) => {
  const content = {
    tr: {
      title: "Diğer Teknoloji Hizmetleri",
      subtitle: "Kapsamlı Teknoloji Çözümleri"
    },
    en: {
      title: "Other Technology Services",
      subtitle: "Comprehensive Technology Solutions"
    }
  };

  const t = content[language];

  return (
    <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <p>Bu sayfa geliştirilme aşamasındadır...</p>
    </div>
  );
};

export default OtherServices;

