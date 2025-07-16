import React from 'react';

const Contact = ({ language }) => {
  const content = {
    tr: {
      title: "Bize Ulaşın",
      subtitle: "İletişim Bilgileri"
    },
    en: {
      title: "Contact Us",
      subtitle: "Contact Information"
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

export default Contact;

