import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardCheck, FaCloudUploadAlt, FaSyncAlt, FaShieldAlt, FaArrowRight } from "react-icons/fa";

export default function BackupServices({ language = "tr" }) {
  const tr = language === "tr";
  const t = tr ? {
    eyebrow:"YEDEKLEME HİZMETLERİ", title:"İşletmeniz için düzenli, güvenilir ve doğrulanabilir yedekleme.",
    intro:"Veri kaybı riskini azaltmak için otomatik, güvenilir ve işletmenizin çalışma düzenine uygun yedekleme altyapıları tasarlıyoruz.",
    cards:[
      ["Otomatik Yedekleme Planları","İşletmenizin çalışma düzenine göre düzenli ve otomatik yedekleme planları oluşturun."],
      ["Bulut Yedekleme","Yerel yapıyı gerektiğinde bulut seçenekleriyle destekleyerek dayanıklılığı artırın."],
      ["Gerçek Zamanlı Senkronizasyon","Kritik veriler için ihtiyaç duyulan senkronizasyon ve erişim modelini planlayın."],
      ["Veri Şifreleme ve Güvenlik","Yedeklerin erişim ve güvenlik gereksinimlerini altyapının bir parçası olarak ele alın."]
    ],
    process:"Yedekleme sürecimiz", processIntro:"Yedekleme yalnızca kopya oluşturmak değildir; doğru planlama, izleme ve geri yükleme doğrulaması gerekir.",
    steps:["İhtiyaç Analizi","Yedekleme Stratejisinin Belirlenmesi","Altyapı Kurulumu","Otomatik Yedekleme Başlatma","Düzenli Kontrol ve Güncelleme"],
    value:"Yedekleme ancak geri yüklenebiliyorsa değerlidir.", valueText:"TekFin, yedekleme altyapısını kapasite, sıklık, saklama politikası, erişim ve geri yükleme doğrulaması birlikte düşünülerek tasarlar.",
    cta:"Verilerinizi düzenli ve doğrulanabilir şekilde koruyun.", ctaText:"Mevcut yedekleme yapınızı birlikte değerlendirelim.", button:"Danışmanlık Talep Et"
  } : {
    eyebrow:"BACKUP SERVICES", title:"Reliable, structured, and verifiable backup for your business.",
    intro:"We design automated, reliable backup infrastructure aligned with how your business operates and designed to reduce data-loss risk.",
    cards:[
      ["Automated Backup Plans","Create regular automated backup schedules around how your business operates."],
      ["Cloud Backup","Extend local infrastructure with cloud options when additional resilience or access is required."],
      ["Real-Time Synchronization","Plan the synchronization and access model required for critical business data."],
      ["Data Encryption & Security","Treat backup access and security requirements as part of the infrastructure design."]
    ],
    process:"The TekFin backup process", processIntro:"Backup is more than creating copies; it requires planning, monitoring, and verified recovery.",
    steps:["Needs Analysis","Backup Strategy Definition","Infrastructure Setup","Start Automatic Backup","Regular Check & Update"],
    value:"Backup only matters when it can be restored.", valueText:"TekFin designs backup around capacity, frequency, retention, access, and verified restoration rather than treating backup as a standalone task.",
    cta:"Protect your business data with a structured, verifiable backup system.", ctaText:"Let us review your current backup setup together.", button:"Request Consultation"
  };
  const icons=[FaClipboardCheck,FaCloudUploadAlt,FaSyncAlt,FaShieldAlt];
  return <div className="tk-modern-page">
    <section className="tk-page-hero"><div className="tk-modern-container"><div className="tk-page-hero-grid"><div><span className="tk-eyebrow">{t.eyebrow}</span><h1>{t.title}</h1><p>{t.intro}</p></div><div className="tk-page-hero-mark"><FaClipboardCheck aria-hidden="true"/><span>BUSINESS DATA SOLUTIONS</span></div></div></div></section>
    <section className="tk-modern-section"><div className="tk-modern-container"><div className="tk-section-heading"><span className="tk-section-number">01</span><div><h2>{tr?"Ne sunuyoruz?":"What we provide"}</h2><p>{tr?"İşletmenizin veri sürekliliğini destekleyen yapıyı hizmetin tamamı üzerinden ele alıyoruz.":"We address the full infrastructure required to support business data continuity."}</p></div></div><div className="tk-service-grid">{t.cards.map(([title,text],i)=>{const Icon=icons[i];return <article className="tk-service-card" key={title}><div className="tk-card-icon"><Icon/></div><span className="tk-card-index">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>})}</div></div></section>
    <section className="tk-process-section"><div className="tk-modern-container"><div className="tk-section-heading tk-section-heading-light"><span className="tk-section-number">02</span><div><h2>{t.process}</h2><p>{t.processIntro}</p></div></div><div className="tk-process-grid">{t.steps.map((step,i)=><div className="tk-process-step" key={step}><span>{String(i+1).padStart(2,"0")}</span><h3>{step}</h3></div>)}</div></div></section>
    <section className="tk-modern-section tk-value-section"><div className="tk-modern-container tk-value-grid"><div><span className="tk-eyebrow">{tr?"YAKLAŞIMIMIZ":"OUR APPROACH"}</span><h2>{t.value}</h2></div><p>{t.valueText}</p></div></section>
    <section className="tk-modern-container tk-page-cta"><div><span className="tk-eyebrow">{tr?"SONRAKİ ADIM":"NEXT STEP"}</span><h2>{t.cta}</h2><p>{t.ctaText}</p></div><Link to="/contact?intent=consultation">{t.button}<FaArrowRight/></Link></section>
  </div>;
}