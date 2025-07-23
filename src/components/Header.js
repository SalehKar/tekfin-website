import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ currentPage, language, setLanguage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const translations = {
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetlerimiz',
      dataRecovery: 'Veri Kurtarma',
      wirelessNetworks: 'Kablosuz Ağlar',
      otherServices: 'Diğer Hizmetler',
      storageAdvisor: 'Depolama Danışmanı',
      faq: 'SSS',
      contact: 'İletişim'
    },
    en: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      dataRecovery: 'Data Recovery',
      wirelessNetworks: 'Wireless Networks',
      otherServices: 'Other Services',
      storageAdvisor: 'Storage Advisor',
      faq: 'FAQ',
      contact: 'Contact'
    }
  };

  const t = translations[language];

  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <Link to="/">
            <img src="/images/tekfin-logo.png" alt="TEKFİN TEKNOLOJİ LİMİTED ŞTİ" className="logo" />
          </Link>
          <h1 className="company-name">TEKFİN TEKNOLOJİ LİMİTED ŞTİ</h1>
        </div>
        
        <button className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-menu">
            <li>
              <Link 
                to="/"
                className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.home}
              </Link>
            </li>
            <li>
              <Link 
                to="/about-us"
                className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.about}
              </Link>
            </li>
            <li className="dropdown">
              <span className="nav-link">{t.services}</span>
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    to="/data-recovery"
                    className="dropdown-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.dataRecovery}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/wireless-networks"
                    className="dropdown-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.wirelessNetworks}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/other-services"
                    className="dropdown-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.otherServices}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/storage-advisor"
                    className="dropdown-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.storageAdvisor}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link 
                to="/faq"
                className={currentPage === 'faq' ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.faq}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.contact}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="language-switcher">
          <button 
            className={language === 'tr' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => setLanguage('tr')}
          >
            TR
          </button>
          <button 
            className={language === 'en' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

