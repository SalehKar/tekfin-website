import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Server, RotateCcw, ShieldCheck, LockKeyhole, UserRoundCheck, BellRing, HardDrive, RotateCw } from 'lucide-react';

const StorageAdvisorMark = () => (
  <svg viewBox="0 0 120 120" className="h-28 w-28" aria-hidden="true">
    <defs>
      <linearGradient id="advisorBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7dd3fc" />
        <stop offset="55%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="39" rx="27" ry="10" fill="none" stroke="url(#advisorBlue)" strokeWidth="7" />
    <path d="M33 39v19c0 6 12 11 27 11s27-5 27-11V39M33 58v19c0 6 12 11 27 11s27-5 27-11V58" fill="none" stroke="url(#advisorBlue)" strokeWidth="7" />
    <path d="M24 82c14 14 39 18 61 9 10-4 18-11 23-20" fill="none" stroke="#e0f2fe" strokeWidth="5" strokeLinecap="round" />
    <path d="M99 64l10 7-12 3" fill="#38bdf8" />
    <path d="M18 43c7-14 22-23 39-25" fill="none" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" opacity=".8" />
  </svg>
);

const HomePage = ({ language }) => {
  const navigate = useNavigate();
  const goContact = intent => navigate(`/contact?intent=${intent}`);
  const tr = language === 'tr';

  const t = tr ? {
    eyebrow: 'İŞLETME VERİ ÇÖZÜMLERİ',
    title: 'İşletmeniz için daha sağlam bir veri altyapısı.',
    accent: 'Verilerinizi yapılandırın, güvenilir şekilde yedekleyin ve ihtiyaç anında geri yükleyin.',
    subtitle: 'TekFin, büyüyen işletmeler için depolama, yedekleme ve veri kurtarma altyapısını birlikte tasarlar. Hedefimiz yalnızca veri saklamak değil, iş sürekliliğini destekleyen yönetilebilir bir yapı kurmaktır.',
    solutions: 'Çözümlerimiz',
    contact: 'Danışmanlık Talep Et',
    advisor: 'Depolama Danışmanı',
    advisorText: 'İşletmeniz için doğru depolama çözümünü bulun.',
    tryAdvisor: 'Depolama Danışmanını Deneyin',
    expert: 'Uzman öneriler',
    save: 'Zaman ve maliyet tasarrufu',
    future: 'Geleceğe hazır yapı',
    cards: [
      ['Veri Depolama', 'İşletmeniz için ölçeklenebilir ve güvenilir depolama.', Server, '/data-storage'],
      ['Yedekleme Hizmetleri', 'Verilerinizi güvenilir yedekleme çözümleriyle koruyun.', ShieldCheck, '/backup-services'],
      ['Veri Kurtarma', 'İhtiyaç anında hızlı ve kontrollü veri kurtarma.', RotateCcw, '/data-recovery']
    ]
  } : {
    eyebrow: 'BUSINESS DATA SOLUTIONS',
    title: 'A stronger data foundation for your business.',
    accent: 'Structured storage, automated backups, and verified recovery — built for growing businesses.',
    subtitle: 'TekFin designs and manages data storage, backup, and recovery infrastructure for growing businesses. The goal is not simply to store data, but to build a manageable foundation for business continuity.',
    solutions: 'Our Solutions',
    contact: 'Request Consultation',
    advisor: 'Storage Advisor',
    advisorText: 'Find the right storage solution for your business.',
    tryAdvisor: 'Try Storage Advisor',
    expert: 'Expert recommendations',
    save: 'Save time and cost',
    future: 'Get future-ready',
    cards: [
      ['Data Storage', 'Scalable and reliable storage for your business.', Server, '/data-storage'],
      ['Backup Services', 'Protect your data with reliable backup solutions.', ShieldCheck, '/backup-services'],
      ['Data Recovery', 'Fast and controlled data recovery when needed.', RotateCcw, '/data-recovery']
    ]
  };

  const protectionItems = tr
    ? [
        ['Şifreleme ve güvenli veri işleme', LockKeyhole],
        ['Erişim kontrolü ve yetkilendirme', UserRoundCheck],
        ['Yedekleme hataları için izleme ve uyarılar', BellRing],
        ['Disk / RAID sağlık takibi', HardDrive],
        ['Periyodik geri yükleme testi ve doğrulama', RotateCw]
      ]
    : [
        ['Encryption and secure data handling', LockKeyhole],
        ['Access control and authorization', UserRoundCheck],
        ['Backup failure monitoring and alerts', BellRing],
        ['Disk / RAID health monitoring', HardDrive],
        ['Periodic restore testing and verification', RotateCw]
      ];

  return (
    <div className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-[#031b2f] text-white">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              'radial-gradient(circle at 78% 45%,rgba(14,165,233,.2),transparent 25%),linear-gradient(90deg,rgba(3,27,47,.98) 0%,rgba(3,27,47,.9) 45%,rgba(3,27,47,.48) 100%),repeating-linear-gradient(90deg,transparent 0 34px,rgba(96,165,250,.08) 35px 37px),repeating-linear-gradient(0deg,transparent 0 20px,rgba(96,165,250,.045) 21px 22px)'
          }}
        />

        <div className="relative mx-auto grid min-h-[500px] max-w-7xl lg:grid-cols-[1.55fr_.85fr]">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 lg:py-14">
            <div className="mb-5 text-xs font-bold tracking-[.24em] text-blue-300">{t.eyebrow}</div>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[.98] tracking-[-.045em] sm:text-5xl lg:text-[4.25rem]">
              {tr ? t.title : <>A stronger data foundation<br /><span className="text-blue-400">for your business.</span></>}
            </h1>
            <h2 className="mt-4 max-w-4xl text-2xl font-extrabold leading-tight tracking-[-.035em] text-blue-400 sm:text-3xl">
              {t.accent}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">{t.subtitle}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-blue-500"
              >
                {t.solutions}<ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                onClick={() => goContact('consultation')}
                className="inline-flex items-center justify-center rounded-lg border border-white/60 bg-white/5 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10"
              >
                {t.contact}
              </button>
            </div>
          </div>

          <div className="relative flex items-center border-l border-white/10 bg-[#041526]/80 px-6 py-8 sm:px-10">
            <div className="w-full">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold">{tr ? 'YENİ' : 'NEW'}</span>
                <span className="text-[9px] font-bold tracking-[.2em] text-slate-500">{tr ? 'TEKFİN HİZMETİ' : 'TEKFİN SERVICE'}</span>
              </div>

              <div className="grid items-center gap-5 sm:grid-cols-[1fr_auto]">
                <div>
                  <h2 className="text-3xl font-bold leading-none sm:text-[2.35rem]">{t.advisor}</h2>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">{t.advisorText}</p>
                  <div className="mt-5 space-y-2.5 text-xs text-slate-200">
                    {[t.expert, t.save, t.future].map(x => (
                      <div key={x} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        {x}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate('/storage-advisor')}
                    className="mt-6 inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-blue-50"
                  >
                    {t.tryAdvisor}<ArrowRight className="ml-2 h-4 w-4 text-blue-600" />
                  </button>
                </div>

                <div className="border-l border-white/10 pl-5 text-center">
                  <StorageAdvisorMark />
                  <div className="mt-2 text-[11px] font-extrabold tracking-[.3em]">{tr ? 'DEPOLAMA' : 'STORAGE'}</div>
                  <div className="text-[11px] font-extrabold tracking-[.3em] text-blue-400">{tr ? 'DANIŞMANI' : 'ADVISOR'}</div>
                  <div className="mt-2 text-[9px] tracking-[.25em] text-slate-400">BY TEKFIN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:px-8 md:grid-cols-3">
          {t.cards.map(([title, text, Icon, href]) => (
            <button
              key={href}
              onClick={() => navigate(href)}
              className="group min-h-[156px] rounded-xl border border-blue-100 bg-white p-6 text-left shadow-[0_5px_20px_rgba(15,23,42,.04)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-5 text-slate-500">{text}</p>
              <span className="mt-4 inline-flex items-center text-xs font-bold text-blue-600">
                {tr ? 'Çözümü İncele' : 'View solution'} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f4] py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 rounded-3xl bg-white p-7 shadow-sm sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <div className="text-xs font-bold tracking-[.2em] text-blue-600">{tr ? 'İŞ SÜREKLİLİĞİ' : 'BUSINESS CONTINUITY'}</div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-.03em] sm:text-4xl">
                {tr ? 'Veri altyapınız tek bir sistem olarak çalışmalı.' : 'Your data infrastructure should work as one system.'}
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-500 sm:text-base">
              {tr
                ? 'Depolama, yedekleme ve kurtarma katmanlarını birlikte tasarlayarak işletmenizin veriye erişimini ve geri dönebilirliğini güçlendiriyoruz.'
                : 'We connect storage, backup and recovery so your business has a manageable foundation for availability and recoverability.'}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#031b2f] py-8 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-6 max-w-2xl">
            <div className="text-xs font-bold tracking-[.2em] text-blue-300">{tr ? 'KORUMA KATMANI' : 'BUILT-IN PROTECTION'}</div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-.03em] sm:text-4xl">
              {tr ? 'Koruma, altyapının içine gömülüdür.' : 'Protection is built into the infrastructure.'}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {protectionItems.map(([label, Icon]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[.035] p-4">
                <Icon className="h-5 w-5 text-blue-300" />
                <p className="mt-4 text-sm font-semibold leading-5 text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 rounded-2xl bg-blue-600 px-7 py-7 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold">{tr ? 'Veri riskinizi bugün değerlendirin.' : 'Assess your data risk today.'}</h2>
              <p className="mt-2 text-sm text-blue-100">{tr ? 'Mevcut altyapınızı birlikte inceleyelim.' : 'Let us review your current infrastructure.'}</p>
            </div>
            <button
              onClick={() => goContact('assessment')}
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-blue-700 hover:bg-blue-50"
            >
              {tr ? 'Ücretsiz Veri Risk Analizi' : 'Free Data Risk Assessment'}<ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
