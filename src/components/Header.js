import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ language, setLanguage }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      dataSolutions: 'Veri Çözümleri',
      dataRecovery: 'Veri Kurtarma',
      dataStorage: 'Veri Depolama',
      backupServices: 'Yedekleme Hizmetleri',
      storageAdvisor: 'Depolama Danışmanı',
      contact: 'İletişim'
    },
    en: {
      home: 'Home',
      about: 'About',
      dataSolutions: 'Data Solutions',
      dataRecovery: 'Data Recovery',
      dataStorage: 'Data Storage',
      backupServices: 'Backup Services',
      storageAdvisor: 'Storage Advisor',
      contact: 'Contact'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur'
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src="/images/tekfin-logo.png" alt="Logo" className="h-10 w-auto" />
            </Link>
            <span className="text-lg font-bold text-blue-900 hidden sm:inline tracking-wide">
              TEKFİN TEKNOLOJİ LİMİTED ŞTİ
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-blue-700 transition">{t.home}</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-blue-700 transition">{t.about}</Link>

            {/* Data Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-blue-700 transition flex items-center gap-1"
              >
                {t.dataSolutions}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-20 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 text-sm">
                  <Link to="/data-recovery" className="block px-4 py-2 hover:bg-gray-100">{t.dataRecovery}</Link>
                  <Link to="/data-storage" className="block px-4 py-2 hover:bg-gray-100">{t.dataStorage}</Link>
                  <Link to="/backup-services" className="block px-4 py-2 hover:bg-gray-100">{t.backupServices}</Link>
                  <Link to="/storage-advisor" className="block px-4 py-2 hover:bg-gray-100">{t.storageAdvisor}</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-blue-700 transition">{t.contact}</Link>
          </nav>

          {/* Language + Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('tr')}
              className={`px-2 py-1 rounded text-xs font-medium ${
                language === 'tr' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded text-xs font-medium ${
                language === 'en' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              EN
            </button>
            <button
              className="md:hidden ml-3 focus:outline-none"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden bg-white shadow px-6 py-4 space-y-3 text-sm">
            <Link to="/" className="block text-gray-700 hover:text-blue-700">{t.home}</Link>
            <Link to="/about-us" className="block text-gray-700 hover:text-blue-700">{t.about}</Link>
            <div>
              <span className="block text-gray-700 font-medium mb-1">{t.dataSolutions}</span>
              <div className="pl-4 space-y-1">
                <Link to="/data-recovery" className="block text-gray-700 hover:text-blue-700">{t.dataRecovery}</Link>
                <Link to="/data-storage" className="block text-gray-700 hover:text-blue-700">{t.dataStorage}</Link>
                <Link to="/backup-services" className="block text-gray-700 hover:text-blue-700">{t.backupServices}</Link>
                <Link to="/storage-advisor" className="block text-gray-700 hover:text-blue-700">{t.storageAdvisor}</Link>
              </div>
            </div>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-700">{t.contact}</Link>
          </div>
        )}
      </header>

      {/* Spacer لمنع تغطية العناوين */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;
