import React from 'react';
import './Footer.css';

const Footer = ({ language }) => {
  const content = {
    tr: {
      company: 'TekFin Teknoloji',
      rights: 'Tüm hakları saklıdır.',
      address: 'İstanbul, Türkiye',
      phone: 'Telefon: +90 552 809 55 56',
      email: 'E-posta: info@tekfingroup.com'
    },
    en: {
      company: 'TekFin Teknoloji',
      rights: 'All rights reserved.',
      address: 'Istanbul, Turkey',
      phone: 'Phone: +90 552 809 55 56',
      email: 'Email: info@tekfingroup.com'
    }
  };

  const t = content[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t.company}</h3>
            <p>{t.address}</p>
            <p>{t.phone}</p>
            <p>{t.email}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {t.company}. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

