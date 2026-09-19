import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Database,
  HardDrive,
  CloudUpload,
  RotateCcw,
  ShieldCheck,
  Activity,
  Network,
  Check,
  LockKeyhole,
  Server,
  BookOpen
} from 'lucide-react';
import Newsletter from './Newsletter';

const HomePage = ({ language }) => {
  const navigate = useNavigate();
  const goContact = (intent) => navigate(`/contact?intent=${intent}`);

  const content = {
    tr: {
      eyebrow: 'TEKFİN • BUSINESS DATA INFRASTRUCTURE',
      title: 'İşletmeniz için daha sağlam bir veri altyapısı.',
      titleAccent: 'Veri altyapısı.',
      subtitle: 'Verilerinizi doğru yapılandırın, güvenilir şekilde yedekleyin ve ihtiyaç anında geri yükleyin.',
      intro: 'TekFin, büyüyen işletmeler için depolama, yedekleme ve veri kurtarma altyapısını birlikte tasarlar. Hedefimiz yalnızca veri saklamak değil, iş sürekliliğini destekleyen yönetilebilir bir yapı kurmaktır.',
      primary: 'Ücretsiz Veri Risk Analizi',
      secondary: 'Danışmanlık Talep Et',
      advisor: 'Depolama Danışmanı',
      advisorText: 'İhtiyacınıza uygun depolama yaklaşımını belirleyin.',
      advisorCta: 'Öneri Alın',
      solutionsEyebrow: 'ÇÖZÜMLER',
      solutionsTitle: 'Verinin yaşam döngüsünü tek bir yapı içinde yönetin.',
      solutionsText: 'Depolama, yedekleme ve kurtarma birbirinden bağımsız ürünler değil; birlikte tasarlanması gereken bir veri altyapısıdır.',
      storage: 'Veri Depolama',
      storageText: 'Performans, kapasite ve büyüme ihtiyacınıza göre doğru depolama mimarisi.',
      backup: 'Yedekleme Hizmetleri',
      backupText: 'Otomatik ve çok katmanlı yedekleme yaklaşımı, izleme ve raporlama.',
      recovery: 'Veri Kurtarma',
      recoveryText: 'RTO/RPO hedefleri, kurtarma senaryoları ve periyodik geri yükleme doğrulaması.',
      protectionEyebrow: 'BUILT-IN PROTECTION',
      protectionTitle: 'Koruma, çözümün üzerine eklenmez. İçine yerleştirilir.',
      protectionText: 'Güvenlik ve izleme, TekFin veri altyapısının tasarım katmanının parçasıdır.',
      protectionItems: ['Şifreleme ve güvenli veri işleme', 'Erişim kontrolü ve yetkilendirme', 'Yedekleme başarısızlığı için uyarılar', 'Disk / RAID sağlık takibi', 'Periyodik geri yükleme testi'],
      whyEyebrow: 'NEDEN TEKFİN',
      whyTitle: 'Teknik altyapıyı işletme ihtiyacıyla birleştiriyoruz.',
      whyItems: [
        ['Pratik uzmanlık', 'Depolama, yedekleme ve kurtarma süreçlerinde işletme odaklı yaklaşım.'],
        ['Güvenilirlik', 'Veri gizliliği, güvenli erişim ve doğrulanabilir süreçler tasarımın merkezindedir.'],
        ['Hızlı aksiyon', 'Kritik durumlarda net süreç ve uygulanabilir teknik çözüm.'],
        ['İş sürekliliği', 'Teknik bileşenlerden önce erişilebilirlik, kurtarılabilirlik ve sürekliliğe odaklanırız.']
      ],
      future: 'Gelecek hizmetler',
      futureText: 'Managed Backup, Cloud DR, Remote Monitoring ve Storage Advisor gibi hizmetleri zaman içinde veri altyapısı portföyümüze ekleyeceğiz.',
      newsletterEyebrow: 'TEKFİN INSIGHTS',
      newsletterTitle: 'Veri altyapısı hakkında bilimsel ve pratik içerikler.',
      newsletterText: 'Yeni içerikler, teknik analizler ve işletmeler için veri yönetimi notları yayınlandıkça haberdar olun.',
      newsletterCta: 'İçeriklerden haberdar olun',
      ctaTitle: 'Veri kaybı bir sürpriz olmak zorunda değil.',
      ctaText: 'Mevcut veri altyapınızı birlikte değerlendirelim ve işletmeniz için uygulanabilir bir yol haritası oluşturalım.',
      ctaPrimary: 'Ücretsiz Veri Risk Analizi',
      ctaSecondary: 'İletişime Geçin'
    },
    en: {
      eyebrow: 'TEKFİN • BUSINESS DATA INFRASTRUCTURE',
      title: 'A stronger data foundation for your business.',
      titleAccent: 'data foundation.',
      subtitle: 'Structure your data, back it up reliably, and restore it when your business needs it.',
      intro: 'TekFin designs storage, backup, and recovery infrastructure as one connected system for growing businesses. The goal is not simply to store data, but to build a manageable foundation that supports continuity.',
      primary: 'Free Data Risk Assessment',
      secondary: 'Request Consultation',
      advisor: 'Storage Advisor',
      advisorText: 'Find the storage approach that fits your requirements.',
      advisorCta: 'Get Recommendation',
      solutionsEyebrow: 'SOLUTIONS',
      solutionsTitle: 'Manage the data lifecycle as one system.',
      solutionsText: 'Storage, backup, and recovery are not isolated products; they are parts of one data infrastructure that should be designed together.',
      storage: 'Data Storage',
      storageText: 'Storage architecture aligned with performance, capacity, and growth requirements.',
      backup: 'Backup Services',
      backupText: 'Automated, multi-layer backup with monitoring and reporting.',
      recovery: 'Data Recovery',
      recoveryText: 'RTO/RPO objectives, recovery scenarios, and periodic restore verification.',
      protectionEyebrow: 'BUILT-IN PROTECTION',
      protectionTitle: 'Protection is not added on top. It is built in.',
      protectionText: 'Security and monitoring are part of the TekFin data infrastructure design layer.',
      protectionItems: ['Encryption and secure data handling', 'Access control and authorization', 'Alerts for backup failures', 'Disk / RAID health monitoring', 'Periodic restore testing'],
      whyEyebrow: 'WHY TEKFIN',
      whyTitle: 'We connect technical infrastructure to business requirements.',
      whyItems: [
        ['Practical expertise', 'Business-focused experience across storage, backup, and recovery workflows.'],
        ['Reliability', 'Confidentiality, secure access, and verifiable processes are built into the architecture.'],
        ['Fast response', 'Clear processes and practical technical action when it matters.'],
        ['Business continuity', 'We focus on availability, recoverability, and continuity before technical components.']
      ],
      future: 'Future services',
      futureText: 'Managed Backup, Cloud DR, Remote Monitoring, and Storage Advisor capabilities will expand the data infrastructure portfolio over time.',
      newsletterEyebrow: 'TEKFİN INSIGHTS',
      newsletterTitle: 'Scientific and practical content about data infrastructure.',
      newsletterText: 'Get updates when we publish technical analysis and practical data management insights for businesses.',
      newsletterCta: 'Stay informed',
      ctaTitle: 'Data loss does not have to be a surprise.',
      ctaText: 'Let us assess your current data infrastructure and define a practical path forward.',
      ctaPrimary: 'Free Data Risk Assessment',
      ctaSecondary: 'Contact TekFin'
    }
  };

  const t = content[language] || content.en;

  const solutions = [
    { icon: HardDrive, title: t.storage, text: t.storageText, tone: 'bg-orange-50 text-orange-600', href: '/data-storage' },
    { icon: CloudUpload, title: t.backup, text: t.backupText, tone: 'bg-blue-50 text-blue-600', href: '/backup-services' },
    { icon: RotateCcw, title: t.recovery, text: t.recoveryText, tone: 'bg-violet-50 text-violet-600', href: '/data-recovery' }
  ];

  return (
    <div className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-[#f7f7f4]">
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(15,23,42,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.045) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold tracking-[.16em] text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              {t.eyebrow}
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-.04em] sm:text-5xl lg:text-[4.6rem]">
              {t.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-slate-700 sm:text-xl">{t.subtitle}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">{t.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => goContact('assessment')} className="group inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                {t.primary}<ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button onClick={() => goContact('consultation')} className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-slate-950">
                {t.secondary}
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#111827] p-5 sm:p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[.2em] text-slate-500">DATA INFRASTRUCTURE</p>
                    <p className="mt-1 text-sm font-semibold text-white">Business Continuity Layer</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {language === 'tr' ? 'Koruma aktif' : 'Protection active'}
                  </div>
                </div>
                <div className="relative grid grid-cols-2 gap-3">
                  <div className="absolute left-1/2 top-[28%] h-px w-[47%] bg-gradient-to-r from-blue-400/70 to-transparent" />
                  <div className="absolute left-[25%] top-1/2 h-[34%] w-px bg-gradient-to-b from-orange-400/70 to-transparent" />
                  <div className="col-span-2 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-blue-500/15 p-3 text-blue-300"><Network className="h-5 w-5" /></div>
                      <div><p className="text-xs text-slate-400">CORE</p><p className="font-semibold text-white">Business Continuity</p></div>
                    </div>
                  </div>
                  {[
                    [Database, language === 'tr' ? 'Storage' : 'Storage', 'blue'],
                    [CloudUpload, language === 'tr' ? 'Backup' : 'Backup', 'orange'],
                    [RotateCcw, language === 'tr' ? 'Recovery' : 'Recovery', 'violet'],
                    [ShieldCheck, language === 'tr' ? 'Protection' : 'Protection', 'emerald']
                  ].map(([Icon, label, tone], i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                      <Icon className={`h-5 w-5 ${tone === 'orange' ? 'text-orange-300' : tone === 'violet' ? 'text-violet-300' : tone === 'emerald' ? 'text-emerald-300' : 'text-blue-300'}`} />
                      <p className="mt-5 text-sm font-semibold text-white">{label}</p>
                      <p className="mt-1 text-[11px] text-slate-500">{language === 'tr' ? 'Yönetilen katman' : 'Managed layer'}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    [Activity, language === 'tr' ? 'İzleme' : 'Monitoring'],
                    [LockKeyhole, language === 'tr' ? 'Erişim' : 'Access'],
                    [Check, language === 'tr' ? 'Doğrulama' : 'Verification']
                  ].map(([Icon, label], i) => (
                    <div key={i} className="flex items-center gap-2 rounded-xl bg-white/[.035] px-3 py-2.5 text-[11px] font-medium text-slate-400">
                      <Icon className="h-4 w-4 text-slate-300" /> {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3"><Server className="h-5 w-5 text-blue-600" /><div><p className="text-[10px] text-slate-400">TEKFİN</p><p className="text-xs font-bold text-slate-900">{language === 'tr' ? 'Veri altyapısı' : 'Data infrastructure'}</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid grid-cols-1 gap-3 rounded-3xl border border-slate-200 bg-white p-3 sm:grid-cols-3">
          {[
            [Database, language === 'tr' ? 'Depolama' : 'Storage'],
            [CloudUpload, language === 'tr' ? 'Yedekleme' : 'Backup'],
            [RotateCcw, language === 'tr' ? 'Kurtarma' : 'Recovery']
          ].map(([Icon, label], i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">
              <Icon className="h-5 w-5 text-slate-700" /><span className="text-sm font-semibold">{label}</span>
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-600" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-4 text-xs font-bold tracking-[.2em] text-blue-600">{t.solutionsEyebrow}</div>
          <h2 className="text-3xl font-bold tracking-[-.03em] sm:text-5xl">{t.solutionsTitle}</h2>
          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">{t.solutionsText}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, title, text, tone, href }, i) => (
            <button key={i} onClick={() => navigate(href)} className="group text-left rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className={`mb-14 flex h-12 w-12 items-center justify-center rounded-2xl ${tone}`}><Icon className="h-6 w-6" /></div>
              <div className="flex items-end justify-between gap-4">
                <div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></div>
                <span className="shrink-0 rounded-full border border-slate-200 p-2 transition group-hover:border-slate-950"><ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:py-28">
          <div>
            <div className="mb-4 text-xs font-bold tracking-[.2em] text-blue-300">{t.protectionEyebrow}</div>
            <h2 className="text-3xl font-bold tracking-[-.03em] sm:text-5xl">{t.protectionTitle}</h2>
            <p className="mt-5 max-w-xl text-slate-400 leading-7">{t.protectionText}</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.protectionItems.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
                <Check className="h-5 w-5 text-blue-300" />
                <p className="mt-6 text-sm font-semibold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="mb-4 text-xs font-bold tracking-[.2em] text-blue-600">{t.whyEyebrow}</div>
            <h2 className="text-3xl font-bold tracking-[-.03em] sm:text-5xl">{t.whyTitle}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.whyItems.map(([title, text], i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6">
                <div className="mb-8 text-sm font-bold text-slate-400">0{i + 1}</div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f4]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="flex flex-col gap-5 rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[.16em] text-slate-400"><BookOpen className="h-4 w-4" /> {t.future}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{t.futureText}</p>
            </div>
            <button onClick={() => navigate('/storage-advisor')} className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              {t.advisor}<ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Newsletter language={language} />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="overflow-hidden rounded-[2rem] bg-blue-600 px-7 py-14 text-white sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-[-.03em] sm:text-5xl">{t.ctaTitle}</h2>
            <p className="mt-5 max-w-2xl leading-7 text-blue-100">{t.ctaText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => goContact('assessment')} className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 hover:bg-blue-50">{t.ctaPrimary}</button>
              <button onClick={() => goContact('consultation')} className="rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15">{t.ctaSecondary}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
