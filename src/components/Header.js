import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight, Send, Mail } from 'lucide-react';

const Header = ({ language, setLanguage }) => {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); setSolutionsOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = language === 'tr'
    ? { home:'Ana Sayfa', about:'Hakkımızda', solutions:'Çözümler', storage:'Veri Depolama', backup:'Yedekleme Hizmetleri', recovery:'Veri Kurtarma', advisor:'Depolama Danışmanı', contact:'İletişim', menu:'Menü', telegram:'Telegram' }
    : { home:'Home', about:'About', solutions:'Solutions', storage:'Data Storage', backup:'Backup Services', recovery:'Data Recovery', advisor:'Storage Advisor', contact:'Contact', menu:'Menu', telegram:'Telegram' };

  const links = [[t.storage,'/data-storage'],[t.backup,'/backup-services'],[t.recovery,'/data-recovery'],[t.advisor,'/storage-advisor']];

  return (
    <>
      <div className="hidden bg-[#06213a] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs">
          <span className="text-slate-300">{language === 'tr' ? 'İşletmeniz için veri çözümleri ortağınız' : 'Your partner in business data solutions'}</span>
          <div className="flex items-center gap-5 text-slate-300">
            <button onClick={() => setLanguage('tr')} className={language === 'tr' ? 'font-bold text-white' : 'hover:text-white'}>Türkçe</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => setLanguage('en')} className={language === 'en' ? 'font-bold text-white' : 'hover:text-white'}>English</button>
            <a href="https://t.me/TekfinGroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white"><Send className="h-3.5 w-3.5 text-blue-400"/>{t.telegram}</a>
            <Link to="/contact" className="flex items-center gap-1 hover:text-white"><Mail className="h-3.5 w-3.5 text-blue-400"/>{t.contact}</Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl">
        <div className={`mx-auto flex max-w-7xl items-center justify-between border-b px-5 py-3 transition-all sm:px-8 ${scrolled ? 'border-slate-200 shadow-sm' : 'border-slate-100'}`}>
          <Link to="/" className="flex h-14 w-[165px] shrink-0 items-center sm:h-16 sm:w-[180px]">
            <img src="/images/tekfin-logo.png" alt="TekFin Teknoloji" className="h-full w-full object-cover object-center" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <Link to="/" className="rounded-full px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50">{t.home}</Link>
            <Link to="/about-us" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">{t.about}</Link>
            <div className="relative">
              <button onClick={() => setSolutionsOpen(v => !v)} className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {t.solutions}<ChevronDown className={`h-4 w-4 transition ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                {links.map(([label,href]) => <Link key={href} to={href} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50">{label}<ArrowUpRight className="h-4 w-4 text-slate-400"/></Link>)}
              </div>}
            </div>
            <Link to="/contact" className="ml-3 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-700">{t.contact}<ArrowUpRight className="ml-1 inline h-4 w-4"/></Link>
          </nav>

          <div className="flex items-center gap-1.5 md:hidden">
            <button onClick={() => setLanguage('tr')} className={`rounded-full px-2.5 py-1.5 text-[11px] font-bold ${language === 'tr' ? 'bg-slate-950 text-white' : 'text-slate-500'}`}>TR</button>
            <button onClick={() => setLanguage('en')} className={`rounded-full px-2.5 py-1.5 text-[11px] font-bold ${language === 'en' ? 'bg-slate-950 text-white' : 'text-slate-500'}`}>EN</button>
            <button className="ml-1 rounded-full p-2 text-slate-800 hover:bg-slate-100" onClick={() => setOpen(true)} aria-label={t.menu}><Menu className="h-5 w-5"/></button>
          </div>
        </div>
      </header>

      {open && <div className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
        <div className="absolute right-3 top-3 w-[calc(100%-1.5rem)] max-w-md rounded-3xl bg-white p-5 shadow-2xl" onClick={e => e.stopPropagation()}>
          <div className="flex items-center justify-between"><div className="flex h-14 w-[165px] items-center"><img src="/images/tekfin-logo.png" alt="TekFin Teknoloji" className="h-full w-full object-cover object-center" /></div><button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-slate-100"><X className="h-5 w-5"/></button></div>
          <nav className="mt-6 space-y-1">
            <Link to="/" className="block rounded-xl px-4 py-3 font-semibold hover:bg-slate-50">{t.home}</Link>
            <Link to="/about-us" className="block rounded-xl px-4 py-3 font-semibold hover:bg-slate-50">{t.about}</Link>
            <button onClick={() => setSolutionsOpen(v => !v)} className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold hover:bg-slate-50">{t.solutions}<ChevronDown className={`h-4 w-4 ${solutionsOpen ? 'rotate-180' : ''}`}/></button>
            {solutionsOpen && <div className="ml-3 border-l border-slate-200 pl-3">{links.map(([label,href]) => <Link key={href} to={href} className="block rounded-xl px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50">{label}</Link>)}</div>}
            <Link to="/contact" className="mt-3 flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white">{t.contact}</Link>
          </nav>
        </div>
      </div>}
    </>
  );
};
export default Header;