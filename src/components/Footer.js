import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Send } from 'lucide-react';

const Footer = ({ language }) => {
  const tr = language === 'tr';

  return (
    <footer className="bg-[#031b2f] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 border-b border-white/10 py-8 md:grid-cols-[1.7fr_1fr_1fr]">
          <div>
            <div className="flex h-12 w-[150px] items-center overflow-hidden rounded-md bg-white">
              <img src="/images/tekfin-logo.png" alt="TekFin Teknoloji" className="h-full w-full object-cover object-center" />
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              {tr
                ? 'TekFin, işletmeler için veri depolama, yedekleme ve veri kurtarma altyapısını birlikte tasarlar.'
                : 'TekFin designs and manages data storage, backup, and recovery infrastructure for growing businesses.'}
            </p>
            <a
              href="https://t.me/TekfinGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-blue-300"
            >
              <Send className="h-4 w-4 text-blue-400" />
              {tr ? 'Telegram kanalımız' : 'Telegram'}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold">{tr ? 'Çözümler' : 'Solutions'}</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <Link to="/data-storage" className="block hover:text-white">{tr ? 'Veri Depolama' : 'Data Storage'}</Link>
              <Link to="/backup-services" className="block hover:text-white">{tr ? 'Yedekleme Hizmetleri' : 'Backup Services'}</Link>
              <Link to="/data-recovery" className="block hover:text-white">{tr ? 'Veri Kurtarma' : 'Data Recovery'}</Link>
              <Link to="/storage-advisor" className="block hover:text-white">{tr ? 'Depolama Danışmanı' : 'Storage Advisor'}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold">{tr ? 'Şirket' : 'Company'}</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <Link to="/about-us" className="block hover:text-white">{tr ? 'Hakkımızda' : 'About TekFin'}</Link>
              <Link to="/contact" className="block hover:text-white">{tr ? 'İletişim' : 'Contact'}</Link>
              <a href="mailto:info@tekfinteknoloji.com" className="block hover:text-white">info@tekfinteknoloji.com</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-4 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TEKFİN TEKNOLOJİ LİMİTED ŞTİ. {tr ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</p>
          <p>İstanbul, Türkiye</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;