import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Send } from 'lucide-react';

const Footer = ({ language }) => {
  const tr = language === 'tr';

  return (
    <footer className="bg-[#031b2f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.35fr_.8fr_.8fr_1.1fr]">
          <div>
            <div className="flex h-16 w-[165px] items-center rounded bg-white">
              <img
                src="/images/tekfin-logo.png"
                alt="TekFin Teknoloji"
                className="h-full w-full scale-[1.45] object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              {tr
                ? 'TekFin, işletmeler için veri depolama, yedekleme ve veri kurtarma altyapısını birlikte tasarlar.'
                : 'TekFin designs and manages data storage, backup, and recovery infrastructure for growing businesses.'}
            </p>
            <a
              href="https://t.me/TekfinGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-blue-300"
            >
              <Send className="h-4 w-4 text-blue-400" />
              {tr ? 'Telegram kanalımız' : 'Telegram'}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h4 className="font-bold">{tr ? 'Çözümler' : 'Solutions'}</h4>
            <div className="mt-4 space-y-2.5 text-sm text-slate-300">
              <Link to="/data-storage" className="block hover:text-white">{tr ? 'Veri Depolama' : 'Data Storage'}</Link>
              <Link to="/backup-services" className="block hover:text-white">{tr ? 'Yedekleme Hizmetleri' : 'Backup Services'}</Link>
              <Link to="/data-recovery" className="block hover:text-white">{tr ? 'Veri Kurtarma' : 'Data Recovery'}</Link>
              <Link to="/storage-advisor" className="block hover:text-white">{tr ? 'Depolama Danışmanı' : 'Storage Advisor'}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold">{tr ? 'Şirket' : 'Company'}</h4>
            <div className="mt-4 space-y-2.5 text-sm text-slate-300">
              <Link to="/about-us" className="block hover:text-white">{tr ? 'Hakkımızda' : 'About TekFin'}</Link>
              <Link to="/contact" className="block hover:text-white">{tr ? 'İletişim' : 'Contact'}</Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <div className="text-xs font-bold tracking-[.18em] text-blue-300">{tr ? 'VERİ ALTYAPISI' : 'DATA INFRASTRUCTURE'}</div>
            <h4 className="mt-3 text-lg font-bold">
              {tr ? 'Verileriniz için doğru yapıyı birlikte kuralım.' : 'Build the right foundation for your data.'}
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {tr ? 'İhtiyacınızı paylaşın, uygun yaklaşımı birlikte değerlendirelim.' : 'Tell us what you need and let us review the right approach.'}
            </p>
            <Link
              to="/contact?intent=consultation"
              className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-500"
            >
              {tr ? 'Danışmanlık Talep Et' : 'Request Consultation'}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TEKFİN TEKNOLOJİ LİMİTED ŞTİ. {tr ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</p>
          <p>İstanbul, Türkiye • info@tekfinteknoloji.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
