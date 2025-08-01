import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ language, setLanguage }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // إغلاق القوائم عند الانتقال بين الصفحات
    setIsDropdownOpen(false);
    setIsMobileOpen(false);
  }, [location]);

  const translations = {
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      dataRecovery: 'Veri Kurtarma',
      wirelessNetworks: 'Kablosuz Ağlar',
      otherServices: 'Diğer Hizmetler',
      storageAdvisor: 'Depolama Danışmanı',
      contact: 'İletişim'
    },
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      dataRecovery: 'Data Recovery',
      wirelessNetworks: 'Wireless Networks',
      otherServices: 'Other Services',
      storageAdvisor: 'Storage Advisor',
      contact: 'Contact'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="/images/tekfin-logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>
          <span className="text-xl font-bold text-blue-900 hidden sm:inline tracking-wide">
            TEKFİN TEKNOLOJİ LİMİTED ŞİT
          </span>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-[15px]">
          <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium transition duration-150">{t.home}</Link>
          <Link to="/about-us" className="text-gray-700 hover:text-blue-700 font-medium transition duration-150">{t.about}</Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-blue-700 font-medium transition duration-150"
            >
              {t.services}
            </button>
            {isDropdownOpen && (
              <div className="absolute z-20 mt-2 w-52 bg-white rounded-xl shadow-lg py-2 text-sm">
                <Link to="/data-recovery" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">{t.dataRecovery}</Link>
                <Link to="/wireless-networks" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">{t.wirelessNetworks}</Link>
                <Link to="/other-services" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">{t.otherServices}</Link>
                <Link to="/storage-advisor" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">{t.storageAdvisor}</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="text-gray-700 hover:text-blue-700 font-medium transition duration-150">{t.contact}</Link>
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setLanguage('tr')} className={`px-2 py-1 rounded text-sm ${language === 'tr' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:text-blue-700'}`}>TR</button>
          <button onClick={() => setLanguage('en')} className={`px-2 py-1 rounded text-sm ${language === 'en' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:text-blue-700'}`}>EN</button>
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

      {isMobileOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-3 text-sm">
          <Link to="/" className="block text-gray-700 hover:text-blue-700">{t.home}</Link>
          <Link to="/about-us" className="block text-gray-700 hover:text-blue-700">{t.about}</Link>
          <div>
            <span className="block text-gray-700 font-medium mb-1">{t.services}</span>
            <div className="pl-4 space-y-1">
              <Link to="/data-recovery" className="block text-gray-700 hover:text-blue-700">{t.dataRecovery}</Link>
              <Link to="/wireless-networks" className="block text-gray-700 hover:text-blue-700">{t.wirelessNetworks}</Link>
              <Link to="/other-services" className="block text-gray-700 hover:text-blue-700">{t.otherServices}</Link>
              <Link to="/storage-advisor" className="block text-gray-700 hover:text-blue-700">{t.storageAdvisor}</Link>
            </div>
          </div>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-700">{t.contact}</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
