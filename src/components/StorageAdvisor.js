import React from 'react';

import './StorageAdvisor.css';

const StorageAdvisor = ({ language }) => {
  const content = {
    tr: {
      title: "Depolama Cihazı Danışmanı",
      description: "İhtiyaçlarınıza en uygun depolama cihazını bulmanıza yardımcı olalım.",
      underConstruction: "Bu hizmet geliştirme aşamasındadır ve yakında aktif olacaktır.",
    },
    en: {
      title: "Storage Device Advisor",
      description: "Let us help you find the perfect storage device for your needs.",
      underConstruction: "This service is under development and will be available soon.",
    }
  };

  const t = content[language];

  return (
    <div className="storage-advisor">
      <div className="container">
        <h1 className="page-title">{t.title}</h1>
        <p className="advisor-description">{t.description}</p>

        {/* ⚠️ Development Notice */}
        <div className="development-notice" style={{ 
          backgroundColor: '#fff3cd', 
          padding: '1rem', 
          borderRadius: '8px', 
          border: '1px solid #ffeeba', 
          color: '#856404', 
          marginBottom: '2rem' 
        }}>
          <strong>ℹ️ {t.underConstruction}</strong>
        </div>

        {/* ✅ Embedded Tally Form */}
        <div className="tally-form-wrapper">
          <iframe
            title="Storage Assistant Form"
            src="https://tally.so/r/w2GBPb"
            loading="lazy"
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            style={{
              width: '100%',
              maxWidth: '800px',
              height: '700px',
              display: 'block',
              margin: '3rem auto 0',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StorageAdvisor;
