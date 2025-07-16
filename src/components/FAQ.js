import React from 'react';

const FAQ = ({ language }) => {
  const content = {
    tr: {
      title: "Sıkça Sorulan Sorular",
      subtitle: "Merak Ettikleriniz"
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "What You Want to Know"
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

export default FAQ;

