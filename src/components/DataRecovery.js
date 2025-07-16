import React from 'react';

const DataRecovery = ({ language }) => {
  const content = {
    tr: {
      title: "Veri Kurtarma Hizmetleri",
      subtitle: "Kaybolan Verilerinizi Geri Getirin"
    },
    en: {
      title: "Data Recovery Services", 
      subtitle: "Recover Your Lost Data"
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

export default DataRecovery;

