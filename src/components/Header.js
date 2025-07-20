import React, { useState } from 'react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage, language, setLanguage }) => {
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

  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close menu on navigation
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <img src="/images/tekfin-logo.png" alt="TEKFİN TEKNOLOJİ LİMİTED ŞTİ" className="logo" />
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
              <button 
                className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavLinkClick('home')}
              >
                {t.home}
              </button>
            </li>
            <li>
              <button 
                className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavLinkClick('about')}
              >
                {t.about}
              </button>
            </li>
            <li className="dropdown">
              <span className="nav-link">{t.services}</span>
              <ul className="dropdown-menu">
                <li>
                  <button 
                    className="dropdown-link"
                    onClick={() => handleNavLinkClick('data-recovery')}
                  >
                    {t.dataRecovery}
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-link"
                    onClick={() => handleNavLinkClick('wireless-networks')}
                  >
                    {t.wirelessNetworks}
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-link"
                    onClick={() => handleNavLinkClick('other-services')}
                  >
                    {t.otherServices}
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-link"
                    onClick={() => handleNavLinkClick('storage-advisor')}
                  >
                    {t.storageAdvisor}
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button 
                className={currentPage === 'faq' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavLinkClick('faq')}
              >
                {t.faq}
              </button>
            </li>
            <li>
              <button 
                className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavLinkClick('contact')}
              >
                {t.contact}
              </button>
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


