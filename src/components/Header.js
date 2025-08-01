import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ language, setLanguage }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // ✨ أغلق القائمة المنسدلة عند تغيير الصفحة
  useEffect(() => {
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
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="/images/tekfin-logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>
          <span className="text-xl font-bold text-blue-800 hidden sm:inline">
            TEKFİN TEKNOLOJİ LİMİTED ŞİT
          </span>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium">{t.home}</Link>
          <Link to="/about-us" className="text-gray-700 hover:text-blue-700 font-medium">{t.about}</Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-blue-700 font-medium focus:outline-none"
            >
              {t.services}
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                <Link to="/data-recovery" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t.dataRecovery}</Link>
                <Link to="/wireless-networks" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t.wirelessNetworks}</Link>
                <Link to="/other-services" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t.otherServices}</Link>
                <Link to="/storage-advisor" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t.storageAdvisor}</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="text-gray-700 hover:text-blue-700 font-medium">{t.contact}</Link>
        </nav>

        <div className="flex items-center space-x-2">
          <button onClick={() => setLanguage('tr')} className={`px-2 py-1 rounded text-sm ${language === 'tr' ? 'bg-blue-700 text-white' : 'text-gray-700'}`}>TR</button>
          <button onClick={() => setLanguage('en')} className={`px-2 py-1 rounded text-sm ${language === 'en' ? 'bg-blue-700 text-white' : 'text-gray-700'}`}>EN</button>
          <button
            className="md:hidden ml-4 focus:outline-none"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-white shadow px-4 py-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-700">{t.home}</Link>
          <Link to="/about-us" className="block text-gray-700 hover:text-blue-700">{t.about}</Link>
          <div>
            <span className="block text-gray-700 font-medium mb-1">{t.services}</span>
            <div className="pl-4 space-y-1">
              <Link to="/data-recovery" className="block text-gray-700 hover:text-blue-700 text-sm">{t.dataRecovery}</Link>
              <Link to="/wireless-networks" className="block text-gray-700 hover:text-blue-700 text-sm">{t.wirelessNetworks}</Link>
              <Link to="/other-services" className="block text-gray-700 hover:text-blue-700 text-sm">{t.otherServices}</Link>
              <Link to="/storage-advisor" className="block text-gray-700 hover:text-blue-700 text-sm">{t.storageAdvisor}</Link>
            </div>
          </div>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-700">{t.contact}</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
