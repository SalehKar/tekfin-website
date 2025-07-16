import React from 'react';
import './Footer.css';

const Footer = ({ language }) => {
  const content = {
    tr: {
      company: 'TekFin Teknoloji',
      rights: 'Tüm hakları saklıdır.',
      address: 'İstanbul, Türkiye',
      phone: 'Telefon: +90 5XX XXX XX XX',
      email: 'E-posta: info@tekfin.com.tr'
    },
    en: {
      company: 'TekFin Teknoloji',
      rights: 'All rights reserved.',
      address: 'Istanbul, Turkey',
      phone: 'Phone: +90 5XX XXX XX XX',
      email: 'Email: info@tekfin.com.tr'
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

