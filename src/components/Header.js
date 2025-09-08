import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ language, setLanguage }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // desktop
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(true); // mobile accordion default open
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileOpen(false);
    setIsMobileSubOpen(true);
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
      contact: 'İletişim',
      menu: 'Menü',
      close: 'Kapat',
      language: 'Dil'
    },
    en: {
      home: 'Home',
      about: 'About',
      dataSolutions: 'Data Solutions',
      dataRecovery: 'Data Recovery',
      dataStorage: 'Data Storage',
      backupServices: 'Backup Services',
      storageAdvisor: 'Storage Advisor',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      language: 'Language'
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
            <Link to="/" className="text-blue-900 hover:text-blue-600 transition">{t.home}</Link>
            <Link to="/about-us" className="text-blue-900 hover:text-blue-600 transition">{t.about}</Link>

            {/* Data Solutions Dropdown (Desktop) */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-blue-900 hover:text-blue-600 transition flex items-center gap-1"
                aria-expanded={isDropdownOpen}
                aria-controls="data-solutions-menu"
              >
                {t.dataSolutions}
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div id="data-solutions-menu" className="absolute z-20 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 text-sm ring-1 ring-black/5">
                  <Link to="/data-storage" className="block px-4 py-2 text-blue-900 hover:bg-blue-50">{t.dataStorage}</Link>
                  <Link to="/backup-services" className="block px-4 py-2 text-blue-900 hover:bg-blue-50">{t.backupServices}</Link>
                  <Link to="/data-recovery" className="block px-4 py-2 text-blue-900 hover:bg-blue-50">{t.dataRecovery}</Link>
                  <Link to="/storage-advisor" className="block px-4 py-2 text-blue-900 hover:bg-blue-50">{t.storageAdvisor}</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-blue-900 hover:text-blue-600 transition">{t.contact}</Link>
          </nav>

          {/* Language + Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('tr')}
              className={`px-2 py-1 rounded text-xs font-medium ${
                language === 'tr' ? 'bg-blue-700 text-white' : 'text-blue-900 hover:text-blue-600'
              }`}
              aria-pressed={language === 'tr'}
            >
              TR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded text-xs font-medium ${
                language === 'en' ? 'bg-blue-700 text-white' : 'text-blue-900 hover:text-blue-600'
              }`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden ml-3 focus:outline-none p-2 rounded hover:bg-blue-50 active:scale-[0.98] transition"
              onClick={() => setIsMobileOpen(true)}
              aria-label={t.menu}
            >
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (overlay + sheet) */}
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px]"
              onClick={() => setIsMobileOpen(false)}
            />
            {/* Sheet */}
            <div
              className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="mx-3 mb-3 rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
                {/* Header Row */}
                <div className="flex items-center justify-between px-5 pt-4">
                  <div className="font-semibold text-blue-900">{t.menu}</div>
                  <button
                    className="p-2 rounded hover:bg-blue-50 active:scale-[0.98] transition"
                    onClick={() => setIsMobileOpen(false)}
                    aria-label={t.close}
                  >
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Language Quick Toggle */}
                <div className="px-5 pb-3 pt-1">
                  <div className="flex items-center gap-2 text-xs text-blue-900/70 mb-2">{t.language}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLanguage('tr')}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-medium border ${
                        language === 'tr'
                          ? 'bg-blue-700 text-white border-blue-700'
                          : 'border-blue-100 text-blue-900 hover:bg-blue-50'
                      }`}
                    >
                      TR
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-medium border ${
                        language === 'en'
                          ? 'bg-blue-700 text-white border-blue-700'
                          : 'border-blue-100 text-blue-900 hover:bg-blue-50'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                {/* Links */}
                <nav className="px-2 pb-4">
                  <MobileItem to="/" label={t.home} onNavigate={() => setIsMobileOpen(false)} />
                  <MobileItem to="/about-us" label={t.about} onNavigate={() => setIsMobileOpen(false)} />

                  {/* Accordion: Data Solutions */}
                  <div className="mx-3 my-2 rounded-xl border border-blue-100">
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-blue-900 font-medium"
                      onClick={() => setIsMobileSubOpen(v => !v)}
                      aria-expanded={isMobileSubOpen}
                      aria-controls="mobile-data-solutions"
                    >
                      <span>{t.dataSolutions}</span>
                      <svg className={`w-5 h-5 text-blue-400 transition-transform ${isMobileSubOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      id="mobile-data-solutions"
                      className={`${isMobileSubOpen ? 'block' : 'hidden'}`}
                    >
                      <div className="pb-2">
                        <MobileSubItem to="/data-storage" label={t.dataStorage} onNavigate={() => setIsMobileOpen(false)} />
                        <MobileSubItem to="/backup-services" label={t.backupServices} onNavigate={() => setIsMobileOpen(false)} />
                        <MobileSubItem to="/data-recovery" label={t.dataRecovery} onNavigate={() => setIsMobileOpen(false)} />
                        <MobileSubItem to="/storage-advisor" label={t.storageAdvisor} onNavigate={() => setIsMobileOpen(false)} />
                      </div>
                    </div>
                  </div>

                  <MobileItem to="/contact" label={t.contact} onNavigate={() => setIsMobileOpen(false)} />
                </nav>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Spacer لمنع تغطية العناوين */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

/* ---------- Small mobile components ---------- */
const MobileItem = ({ to, label, onNavigate }) => (
  <Link
    to={to}
    onClick={onNavigate}
    className="mx-3 my-1 flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-blue-900 hover:bg-blue-50 active:bg-blue-100 transition"
  >
    <span>{label}</span>
    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </Link>
);

const MobileSubItem = ({ to, label, onNavigate }) => (
  <Link
    to={to}
    onClick={onNavigate}
    className="mx-4 my-1 flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] text-blue-800 hover:bg-blue-50 active:bg-blue-100 transition"
  >
    <span>{label}</span>
    <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </Link>
);

export default Header;
