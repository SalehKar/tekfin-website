import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ language }) => {
  const translations = {
    tr: {
      company: 'TEKFİN TEKNOLOJİ LİMİTED ŞTİ',
      rights: 'Tüm hakları saklıdır.',
      navigation: 'Navigasyon',
      contact: 'İletişim',
      dataSolutions: 'Veri Çözümleri',
      dataRecovery: 'Veri Kurtarma',
      dataStorage: 'Veri Depolama',
      backupServices: 'Yedekleme Hizmetleri',
      storageAdvisor: 'Depolama Danışmanı',
      address: 'İstanbul, Türkiye',
      phone: 'Telefon: +90 552 809 55 56',
      email: 'E-posta: info@tekfingroup.com'
    },
    en: {
      company: 'TEKFİN TEKNOLOJİ LİMİTED ŞTİ',
      rights: 'All rights reserved.',
      navigation: 'Navigation',
      contact: 'Contact',
      dataSolutions: 'Data Solutions',
      dataRecovery: 'Data Recovery',
      dataStorage: 'Data Storage',
      backupServices: 'Backup Services',
      storageAdvisor: 'Storage Advisor',
      address: 'Istanbul, Turkey',
      phone: 'Phone: +90 552 809 55 56',
      email: 'Email: info@tekfingroup.com'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <footer className="bg-blue-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">{t.company}</h3>
          <p className="text-sm">
            {t.rights} &copy; {new Date().getFullYear()}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-md font-semibold mb-2">{t.navigation}</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">{language === 'tr' ? 'Ana Sayfa' : 'Home'}</Link></li>
            <li><Link to="/about-us" className="hover:underline">{language === 'tr' ? 'Hakkımızda' : 'About'}</Link></li>
            <li className="font-semibold mt-2">{t.dataSolutions}</li>
            <li className="pl-3"><Link to="/data-recovery" className="hover:underline">{t.dataRecovery}</Link></li>
            <li className="pl-3"><Link to="/data-storage" className="hover:underline">{t.dataStorage}</Link></li>
            <li className="pl-3"><Link to="/backup-services" className="hover:underline">{t.backupServices}</Link></li>
            <li className="pl-3"><Link to="/storage-advisor" className="hover:underline">{t.storageAdvisor}</Link></li>
            <li><Link to="/contact" className="hover:underline">{t.contact}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold mb-2">{t.contact}</h4>
          <ul className="space-y-1 text-sm">
            <li>{t.address}</li>
            <li>{t.phone}</li>
            <li>{t.email}</li>
          </ul>
        </div>

        {/* Logo */}
        <div>
          <img src="/images/tekfin-logo.png" alt="Logo" className="h-12" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
