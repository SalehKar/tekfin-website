import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Send, Linkedin, Youtube } from 'lucide-react';

const Footer = ({ language }) => {
  const tr = language === 'tr';
  return <footer className="bg-[#031b2f] text-white">
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <div className="grid gap-10 md:grid-cols-[1.35fr_.8fr_.9fr_1.2fr]">
        <div>
          <img src="/images/tekfin-logo.png" alt="TekFin Teknoloji" className="h-14 w-auto rounded bg-white px-2 py-1"/>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">{tr ? 'İşletmeniz için veri depolama, yedekleme ve iş sürekliliği çözümleri ortağınız.' : 'Your partner for data storage, backup and business continuity solutions.'}</p>
          <a href="https://t.me/TekfinGroup" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-blue-300"><Send className="h-4 w-4 text-blue-400"/>{tr ? 'Telegram kanalımız' : 'Telegram'}<ArrowUpRight className="h-4 w-4"/></a>
          <div className="mt-5 flex gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10"><Linkedin className="h-4 w-4"/></span><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10"><Youtube className="h-4 w-4"/></span><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10"><Send className="h-4 w-4"/></span></div>
        </div>
        <div><h4 className="font-bold">{tr ? 'Çözümler' : 'Solutions'}</h4><div className="mt-4 space-y-2 text-sm text-slate-300"><Link to="/data-storage" className="block hover:text-white">{tr ? 'Veri Depolama' : 'Data Storage'}</Link><Link to="/backup-services" className="block hover:text-white">{tr ? 'Yedekleme Hizmetleri' : 'Backup Services'}</Link><Link to="/data-recovery" className="block hover:text-white">{tr ? 'Veri Kurtarma' : 'Data Recovery'}</Link><Link to="/storage-advisor" className="block hover:text-white">{tr ? 'Depolama Danışmanı' : 'Storage Advisor'}</Link></div></div>
        <div><h4 className="font-bold">{tr ? 'Şirket' : 'Company'}</h4><div className="mt-4 space-y-2 text-sm text-slate-300"><Link to="/about-us" className="block hover:text-white">{tr ? 'Hakkımızda' : 'About TekFin'}</Link><Link to="/contact" className="block hover:text-white">{tr ? 'İletişim' : 'Contact'}</Link></div></div>
        <div><h4 className="font-bold">{tr ? 'Bülten' : 'Newsletter'}</h4><p className="mt-3 text-sm leading-6 text-slate-300">{tr ? 'Veri çözümleri ve iş sürekliliği hakkında yeni içerikler.' : 'Updates about data solutions and business continuity.'}</p><div className="mt-4 flex gap-2"><input type="email" placeholder={tr ? 'E-posta adresiniz' : 'Your email address'} className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"/><button type="button" className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold hover:bg-blue-500">{tr ? 'Abone Ol' : 'Subscribe'}</button></div></div>
      </div>
      <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} TEKFİN TEKNOLOJİ LİMİTED ŞTİ. {tr ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</p><p>İstanbul, Türkiye • info@tekfinteknoloji.com</p></div>
    </div>
  </footer>;
};
export default Footer;