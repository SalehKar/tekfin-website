import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = ({ language }) => {
  const translations = {
    tr: {
      company: 'TEKFİN TEKNOLOJİ LİMİTED ŞTİ',
      rights: 'Tüm hakları saklıdır.',
      navigation: 'Navigasyon',
      contact: 'İletişim',
      dataSolutions: 'Çözümler',
      dataRecovery: 'Veri Kurtarma',
      dataStorage: 'Veri Depolama',
      backupServices: 'Yedekleme Hizmetleri',
      storageAdvisor: 'Depolama Danışmanı',
      address: 'İstanbul, Türkiye',
      email: 'info@tekfingroup.com',
      phone: '+90 533 386 68 41',
      followUs: 'Bizi takip edin'
    },
    en: {
      company: 'TEKFİN TEKNOLOJİ LİMİTED ŞTİ',
      rights: 'All rights reserved.',
      navigation: 'Navigation',
      contact: 'Contact',
      dataSolutions: 'Solutions',
      dataRecovery: 'Data Recovery',
      dataStorage: 'Data Storage',
      backupServices: 'Backup Services',
      storageAdvisor: 'Storage Advisor',
      address: 'Istanbul, Turkey',
      email: 'info@tekfingroup.com',
      phone: '+90 533 386 68 41',
      followUs: 'Follow us'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <footer className="mt-12 border-t border-blue-100 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold tracking-wide">{t.company}</h3>
          <p className="mt-3 text-sm text-blue-100">
            {t.rights} &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-200">{t.navigation}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-blue-50/95 hover:text-white">{language === 'tr' ? 'Ana Sayfa' : 'Home'}</Link></li>
            <li><Link to="/about-us" className="text-blue-50/95 hover:text-white">{language === 'tr' ? 'Hakkımızda' : 'About'}</Link></li>
            <li className="pt-1 text-blue-200">{t.dataSolutions}</li>
            <li className="pl-3"><Link to="/data-storage" className="text-blue-50/95 hover:text-white">{t.dataStorage}</Link></li>
            <li className="pl-3"><Link to="/backup-services" className="text-blue-50/95 hover:text-white">{t.backupServices}</Link></li>
            <li className="pl-3"><Link to="/data-recovery" className="text-blue-50/95 hover:text-white">{t.dataRecovery}</Link></li>
            <li className="pl-3"><Link to="/storage-advisor" className="text-blue-50/95 hover:text-white">{t.storageAdvisor}</Link></li>
            <li><Link to="/contact" className="text-blue-50/95 hover:text-white">{t.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-200">{t.contact}</h4>
          <ul className="space-y-2 text-sm text-blue-50/95">
            <li>{t.address}</li>
            <li>
              <a href={`tel:${t.phone.replace(/\s+/g, '')}`} className="hover:text-white">{t.phone}</a>
            </li>
            <li>
              <a href={`mailto:${t.email}`} className="hover:text-white">{t.email}</a>
            </li>
          </ul>

          <div className="mt-4">
            <p className="mb-2 text-xs uppercase tracking-wider text-blue-200">{t.followUs}</p>
            <a
              href="https://t.me/TekfinGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              <FaTelegramPlane className="h-4 w-4" />
              Telegram
            </a>
          </div>
        </div>

        <div className="flex items-start md:justify-end">
          <img src="/images/tekfin-logo.png" alt="TekFin logo" className="h-12 w-auto rounded bg-white/10 p-1" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
