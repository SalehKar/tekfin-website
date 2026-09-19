import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Database, HardDrive, CloudUpload, RotateCcw, ShieldCheck, Activity, Network, LockKeyhole, Check, Server, BookOpen, Gauge } from 'lucide-react';
import Newsletter from './Newsletter';

const StorageAdvisorMark = () => (
  <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-blue-300/20 bg-blue-400/10 shadow-[0_0_50px_rgba(37,99,235,.18)]">
    <svg viewBox="0 0 120 120" className="h-20 w-20" aria-hidden="true">
      <defs>
        <linearGradient id="advisorBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7dd3fc"/>
          <stop offset="55%" stopColor="#2563eb"/>
          <stop offset="100%" stopColor="#0ea5e9"/>
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="39" rx="27" ry="10" fill="none" stroke="url(#advisorBlue)" strokeWidth="7"/>
      <path d="M33 39v19c0 6 12 11 27 11s27-5 27-11V39" fill="none" stroke="url(#advisorBlue)" strokeWidth="7"/>
      <path d="M33 58v19c0 6 12 11 27 11s27-5 27-11V58" fill="none" stroke="url(#advisorBlue)" strokeWidth="7"/>
      <path d="M24 82c14 14 39 18 61 9 10-4 18-11 23-20" fill="none" stroke="#e0f2fe" strokeWidth="5" strokeLinecap="round"/>
      <path d="M99 64l10 7-12 3" fill="#38bdf8"/>
      <path d="M18 43c7-14 22-23 39-25" fill="none" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" opacity=".8"/>
    </svg>
  </div>
);

const HomePage = ({ language }) => {
  const navigate = useNavigate();
  const goContact = (intent) => navigate(`/contact?intent=${intent}`);

  const t = language === 'tr'
    ? {
        eyebrow: 'TEKFİN • BUSINESS DATA SOLUTIONS',
        title: 'İşletmeniz için daha sağlam bir veri altyapısı.',
        subtitle: 'Verilerinizi doğru yapılandırın, güvenilir şekilde yedekleyin ve ihtiyaç anında geri yükleyin.',
        intro: 'TekFin, büyüyen işletmeler için depolama, yedekleme ve veri kurtarma altyapısını birlikte tasarlar. Hedefimiz yalnızca veri saklamak değil, iş sürekliliğini destekleyen yönetilebilir bir yapı kurmaktır.',
        primary: 'Ücretsiz Veri Risk Analizi',
        secondary: 'Danışmanlık Talep Et',
        advisor: 'Depolama Danışmanı',
        advisorCta: 'Öneri Alın',
        solutionsTitle: 'Verinin yaşam döngüsünü tek bir yapı içinde yönetin.',
        solutionsText: 'Depolama, yedekleme ve kurtarma birlikte tasarlanması gereken tek bir veri altyapısının parçalarıdır.',
        protectionTitle: 'Koruma, çözümün üzerine eklenmez. İçine yerleştirilir.',
        protectionText: 'Güvenlik ve izleme, TekFin veri altyapısının tasarım katmanının parçasıdır.',
        whyTitle: 'Teknik altyapıyı işletme ihtiyacıyla birleştiriyoruz.',
        ctaTitle: 'Veri kaybı bir sürpriz olmak zorunda değil.',
        ctaText: 'Mevcut veri altyapınızı birlikte değerlendirelim ve işletmeniz için uygulanabilir bir yol haritası oluşturalım.'
      }
    : {
        eyebrow: 'TEKFİN • BUSINESS DATA SOLUTIONS',
        title: 'A stronger data foundation for your business.',
        subtitle: 'Structure your data, back it up reliably, and restore it when your business needs it.',
        intro: 'TekFin designs storage, backup, and recovery infrastructure as one connected system for growing businesses. The goal is not simply to store data, but to build a manageable foundation that supports continuity.',
        primary: 'Free Data Risk Assessment',
        secondary: 'Request Consultation',
        advisor: 'Storage Advisor',
        advisorCta: 'Get Recommendation',
        solutionsTitle: 'Manage the data lifecycle as one system.',
        solutionsText: 'Storage, backup, and recovery are parts of one data infrastructure that should be designed together.',
        protectionTitle: 'Protection is not added on top. It is built in.',
        protectionText: 'Security and monitoring are part of the TekFin data infrastructure design layer.',
        whyTitle: 'We connect technical infrastructure to business requirements.',
        ctaTitle: 'Data loss does not have to be a surprise.',
        ctaText: 'Let us assess your current data infrastructure and define a practical path forward.'
      };

  const solutions = language === 'tr'
    ? [
        ['Veri Depolama', 'Performans, kapasite ve büyüme ihtiyacınıza göre doğru depolama mimarisi.', HardDrive, '/data-storage'],
        ['Yedekleme Hizmetleri', 'Otomatik ve çok katmanlı yedekleme yaklaşımı, izleme ve raporlama.', CloudUpload, '/backup-services'],
        ['Veri Kurtarma', 'RTO/RPO hedefleri, kurtarma senaryoları ve geri yükleme doğrulaması.', RotateCcw, '/data-recovery']
      ]
    : [
        ['Data Storage', 'Storage architecture aligned with performance, capacity, and growth requirements.', HardDrive, '/data-storage'],
        ['Backup Services', 'Automated, multi-layer backup with monitoring and reporting.', CloudUpload, '/backup-services'],
        ['Data Recovery', 'RTO/RPO objectives, recovery scenarios, and restore verification.', RotateCcw, '/data-recovery']
      ];

  const protection = language === 'tr'
    ? ['Şifreleme ve güvenli veri işleme', 'Erişim kontrolü ve yetkilendirme', 'Yedekleme başarısızlığı için uyarılar', 'Disk / RAID sağlık takibi', 'Periyodik geri yükleme testi']
    : ['Encryption and secure data handling', 'Access control and authorization', 'Alerts for backup failures', 'Disk / RAID health monitoring', 'Periodic restore testing'];

  const why = language === 'tr'
    ? [
        ['Pratik uzmanlık', 'Depolama, yedekleme ve kurtarma süreçlerinde işletme odaklı yaklaşım.'],
        ['Güvenilirlik', 'Veri gizliliği ve doğrulanabilir süreçler tasarımın merkezindedir.'],
        ['Hızlı aksiyon', 'Kritik durumlarda net süreç ve uygulanabilir teknik çözüm.'],
        ['İş sürekliliği', 'Erişilebilirlik, kurtarılabilirlik ve sürekliliğe odaklanırız.']
      ]
    : [
        ['Practical expertise', 'Business-focused experience across storage, backup, and recovery.'],
        ['Reliability', 'Confidentiality and verifiable processes are built into the architecture.'],
        ['Fast response', 'Clear processes and practical technical action when it matters.'],
        ['Business continuity', 'We focus on availability, recoverability, and continuity.']
      ];

  return (
    <div className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-[#f7f7f4]">
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(15,23,42,.045) 1px, transparent 1px),linear-gradient(90deg,rgba(15,23,42,.045) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative mx-auto grid max-w-7xl items-stretch gap-0 px-5 pt-16 sm:px-8 lg:grid-cols-[1.5fr_.75fr] lg:pt-20">
          <div className="flex flex-col justify-center pb-14 pr-0 lg:pr-10 lg:pb-16">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold tracking-[.16em] text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />{t.eyebrow}
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-.04em] sm:text-5xl lg:text-[4.2rem]">{t.title}</h1>
            <p className="mt-7 max-w-2xl text-[1.05rem] font-medium leading-7 text-slate-700 sm:text-xl">{t.subtitle}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">{t.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => goContact('assessment')} className="group inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-700">
                {t.primary}<ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button onClick={() => goContact('consultation')} className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 hover:border-slate-950">{t.secondary}</button>
            </div>
          </div>

          <div className="relative flex min-h-[430px] items-stretch overflow-hidden rounded-t-[2rem] bg-slate-950 text-white lg:rounded-t-none lg:rounded-l-[2rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(37,99,235,.24),transparent_45%)]" />
            <div className="relative flex w-full flex-col justify-between border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-500 px-3 py-1 text-[10px] font-bold tracking-[.12em] text-white">NEW</span>
                <span className="text-[10px] font-semibold tracking-[.2em] text-slate-500">TEKFİN SERVICE</span>
              </div>
              <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
                <div>
                  <h2 className="text-3xl font-bold leading-none tracking-[-.03em] sm:text-[2.2rem]">{t.advisor}</h2>
                  <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
                    {language === 'tr' ? 'İhtiyacınıza göre doğru depolama çözümünü belirleyin.' : 'Find the right storage solution for your business needs.'}
                  </p>
                  <div className="mt-5 space-y-2.5 text-xs text-slate-300">
                    {[language === 'tr' ? 'Doğru kapasite ve performans' : 'Right sizing and performance', language === 'tr' ? 'Maliyet optimizasyonu' : 'Cost optimization', language === 'tr' ? 'Geleceğe hazır yapı' : 'Future-ready planning'].map((item) => (
                      <div key={item} className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white"><Check className="h-3 w-3" /></span>{item}</div>
                    ))}
                  </div>
                  <button onClick={() => navigate('/storage-advisor')} className="mt-6 inline-flex items-center rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-blue-50">
                    {t.advisorCta}<ArrowRight className="ml-2 h-4 w-4 text-blue-600" />
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-white/10 pl-6">
                  <StorageAdvisorMark />
                  <div className="mt-4 text-center">
                    <p className="text-[11px] font-bold tracking-[.35em] text-white">STORAGE</p>
                    <p className="text-[11px] font-bold tracking-[.35em] text-blue-400">ADVISOR</p>
                    <p className="mt-2 text-[9px] tracking-[.3em] text-slate-500">BY TEKFIN</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-medium text-slate-500">
                <Gauge className="h-4 w-4 text-blue-400" /> {language === 'tr' ? 'Veri depolama ihtiyaç analizi' : 'Storage needs assessment'}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-3 sm:grid-cols-3">
          {[['Storage', Database], ['Backup', CloudUpload], ['Recovery', RotateCcw]].map(([label, I], i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">
              <I className="h-5 w-5 text-slate-700" />
              <span className="text-sm font-semibold">{language === 'tr' ? ['Depolama', 'Yedekleme', 'Kurtarma'][i] : label}</span>
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-600" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-4 text-xs font-bold tracking-[.2em] text-blue-600">SOLUTIONS</div>
          <h2 className="text-3xl font-bold tracking-[-.03em] sm:text-[2.65rem]">{t.solutionsTitle}</h2>
          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">{t.solutionsText}</p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {solutions.map(([title, text, I, href], i) => (
            <button key={i} onClick={() => navigate(href)} className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-14 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-blue-600"><I className="h-6 w-6" /></div>
              <div className="flex items-end justify-between gap-4">
                <div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></div>
                <ArrowRight className="h-5 w-5 shrink-0 transition group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:py-28">
          <div>
            <div className="mb-4 text-xs font-bold tracking-[.2em] text-blue-300">BUILT-IN PROTECTION</div>
            <h2 className="text-3xl font-bold tracking-[-.03em] sm:text-[2.65rem]">{t.protectionTitle}</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">{t.protectionText}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {protection.map((x, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><Check className="h-5 w-5 text-blue-300" /><p className="mt-6 text-sm font-semibold text-slate-100">{x}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><div className="mb-4 text-xs font-bold tracking-[.2em] text-blue-600">WHY TEKFIN</div><h2 className="text-3xl font-bold tracking-[-.03em] sm:text-[2.65rem]">{t.whyTitle}</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {why.map(([a, b], i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6"><div className="mb-8 text-sm font-bold text-slate-400">0{i + 1}</div><h3 className="font-bold">{a}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{b}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f4]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="flex flex-col gap-5 rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[.16em] text-slate-400"><BookOpen className="h-4 w-4" /> FUTURE SERVICES</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{language === 'tr' ? 'Managed Backup, Cloud DR ve Remote Monitoring gibi hizmetleri zaman içinde veri altyapısı portföyümüze ekleyeceğiz.' : 'Managed Backup, Cloud DR and Remote Monitoring capabilities will expand the data infrastructure portfolio over time.'}</p>
            </div>
            <button onClick={() => goContact('consultation')} className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              {t.secondary}<ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Newsletter language={language} />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="overflow-hidden rounded-[2rem] bg-blue-600 px-7 py-14 text-white sm:px-12 lg:px-16">
          <h2 className="max-w-3xl text-3xl font-bold tracking-[-.03em] sm:text-[2.65rem]">{t.ctaTitle}</h2>
          <p className="mt-5 max-w-2xl leading-7 text-blue-100">{t.ctaText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => goContact('assessment')} className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 hover:bg-blue-50">{t.primary}</button>
            <button onClick={() => goContact('consultation')} className="rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white">{t.secondary}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
