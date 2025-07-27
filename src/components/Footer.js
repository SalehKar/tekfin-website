import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ language }) => {
  const translations = {
    tr: {
      company: 'TEKFİN TEKNOLOJİ LİMİTED ŞTİ',
      rights: 'Tüm hakları saklıdır.',
      navigation: 'Navigasyon',
      contact: 'İletişim',
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
        <div>
          <h3 className="text-lg font-semibold mb-2">{t.company}</h3>
          <p className="text-sm">{t.rights} &copy; {new Date().getFullYear()}</p>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-2">{t.navigation}</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about-us" className="hover:underline">About</Link></li>
            <li><Link to="/data-recovery" className="hover:underline">Data Recovery</Link></li>
            <li><Link to="/wireless-networks" className="hover:underline">Wireless Networks</Link></li>
            <li><Link to="/other-services" className="hover:underline">Other Services</Link></li>
            <li><Link to="/storage-advisor" className="hover:underline">{t.storageAdvisor}</Link></li>
            <li><Link to="/contact" className="hover:underline">{t.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-2">{t.contact}</h4>
          <ul className="space-y-1 text-sm">
            <li>{t.address}</li>
            <li>{t.phone}</li>
            <li>{t.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-2">Logo</h4>
          <img src="/images/tekfin-logo.png" alt="Logo" className="h-12" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
