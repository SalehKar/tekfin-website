import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Send } from 'lucide-react';

const Footer = ({ language }) => {
  const t = language === 'tr'
    ? {
        company: 'İşletme veri çözümleri için teknoloji ortağınız.',
        nav: 'Navigasyon',
        solutions: 'Çözümler',
        contact: 'İletişim',
        telegram: 'Telegram kanalını takip edin',
        rights: 'Tüm hakları saklıdır.'
      }
    : {
        company: 'Your technology partner for business data solutions.',
        nav: 'Navigation',
        solutions: 'Solutions',
        contact: 'Contact',
        telegram: 'Follow our Telegram channel',
        rights: 'All rights reserved.'
      };

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <img src="/images/tekfin-logo.png" alt="TekFin Teknoloji" className="h-14 w-auto rounded-sm bg-white px-2 py-1" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">{t.company}</p>
            <a href="https://t.me/TekfinGroup" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-blue-300">
              <Send className="h-4 w-4 text-blue-400" />{t.telegram}<ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold">{t.nav}</h4>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <Link to="/" className="block hover:text-white">{language === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
              <Link to="/about-us" className="block hover:text-white">{language === 'tr' ? 'Hakkımızda' : 'About'}</Link>
              <Link to="/contact" className="block hover:text-white">{t.contact}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold">{t.solutions}</h4>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <Link to="/data-storage" className="block hover:text-white">{language === 'tr' ? 'Veri Depolama' : 'Data Storage'}</Link>
              <Link to="/backup-services" className="block hover:text-white">{language === 'tr' ? 'Yedekleme Hizmetleri' : 'Backup Services'}</Link>
              <Link to="/data-recovery" className="block hover:text-white">{language === 'tr' ? 'Veri Kurtarma' : 'Data Recovery'}</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TEKFİN TEKNOLOJİ LİMİTED ŞTİ. {t.rights}</p>
          <p>İstanbul, Türkiye • info@tekfinteknoloji.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
