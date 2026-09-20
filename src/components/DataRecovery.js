import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFlask, FaTools, FaFileAlt, FaArrowRight } from "react-icons/fa";

export default function DataRecovery({ language = "tr" }) {
  const tr=language==="tr";
  const t=tr?{
    eyebrow:"VERİ KURTARMA",title:"Kayıp veriler için kontrollü ve güvenli kurtarma süreci.",
    intro:"HDD, SSD, USB bellek, RAID ve sunucu ortamlarında kaybolan veriler için kontrollü teşhis ve kurtarma süreci sunuyoruz.",
    cards:[
      ["Hard Disk Kurtarma","HDD arızaları ve erişim sorunlarında kontrollü teşhis ve veri kurtarma süreci."],
      ["SSD Kurtarma","SSD ve flash tabanlı ortamlarda uygun teknik yaklaşımı belirleyerek çalışırız."],
      ["Flash Bellek Kurtarma","USB ve benzeri taşınabilir ortamlarda veri kaybının nedenini değerlendiririz."],
      ["RAID ve Sunucu Kurtarma","Kurumsal depolama ve RAID yapılarına uygun kontrollü kurtarma süreci."]
    ],
    process:"Kurtarma sürecimiz",processIntro:"Her veri kaybı vakası farklıdır. Önce teşhis eder, ardından güvenli ve kontrollü bir kurtarma yolu belirleriz.",
    steps:["Ücretsiz İlk Teşhis","Güvenli Laboratuvar Ortamı","Kontrollü Söküm ve Veri Çekme","Veri Kurtarma","Güvenli Teslim"],
    value:"Veri kurtarmada ilk kural: kaynağı korumak.",valueText:"Başarılı bir kurtarma süreci, cihaz üzerindeki mevcut veriye daha fazla zarar vermeden doğru teşhis ve kontrollü işlem gerektirir.",
    cta:"Veri kaybı yaşadıysanız önce durumu değerlendirelim.",ctaText:"Cihazı yeniden kullanmadan önce uzman değerlendirmesi alın.",button:"Kurtarma Talebi Oluştur"
  }:{
    eyebrow:"DATA RECOVERY",title:"A controlled and secure recovery process for lost data.",
    intro:"We provide controlled diagnosis and recovery processes for lost data from HDD, SSD, USB, RAID, and server environments.",
    cards:[
      ["Hard Drive Recovery","Controlled diagnosis and recovery for HDD failures and access problems."],
      ["SSD Recovery","We determine the appropriate technical approach for SSD and flash-based storage."],
      ["Flash Media Recovery","We assess the cause of data loss on USB and similar portable media."],
      ["RAID & Server Recovery","A controlled recovery process for business storage and RAID environments."]
    ],
    process:"Our recovery process",processIntro:"Every data-loss case is different. We diagnose first, then determine a safe and controlled recovery path.",
    steps:["Free Initial Diagnosis","Secure Lab Environment","Controlled Disassembly & Extraction","File Recovery","Secure Delivery"],
    value:"The first rule of data recovery: protect the source.",valueText:"A successful recovery process requires accurate diagnosis and controlled handling without causing further damage to the source media.",
    cta:"If you have lost data, let us assess the situation first.",ctaText:"Get an expert assessment before continuing to use the affected device.",button:"Request Recovery"
  };
  const icons=[FaSearch,FaFlask,FaTools,FaFileAlt];
  return <div className="tk-modern-page tk-recovery-page">
    <section className="tk-page-hero"><div className="tk-modern-container"><div className="tk-page-hero-grid"><div><span className="tk-eyebrow">{t.eyebrow}</span><h1>{t.title}</h1><p>{t.intro}</p></div><div className="tk-page-hero-mark tk-recovery-mark"><div className="tk-hero-scan"><FaSearch aria-hidden="true"/></div><span>BUSINESS DATA SOLUTIONS</span></div></div></div></section>
    <section className="tk-modern-section"><div className="tk-modern-container"><div className="tk-section-heading"><span className="tk-section-number">01</span><div><h2>{tr?"Ne sunuyoruz?":"What we provide"}</h2><p>{tr?"İşletmenizin veri sürekliliğini destekleyen kurtarma seçeneklerini kontrollü bir süreç içinde ele alıyoruz.":"We address recovery options within a controlled process designed to support business data continuity."}</p></div></div><div className="tk-service-grid">{t.cards.map(([title,text],i)=>{const Icon=icons[i];return <article className="tk-service-card" key={title}><div className="tk-card-icon"><Icon/></div><span className="tk-card-index">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>})}</div></div></section>
    <section className="tk-process-section"><div className="tk-modern-container"><div className="tk-section-heading tk-section-heading-light"><span className="tk-section-number">02</span><div><h2>{t.process}</h2><p>{t.processIntro}</p></div></div><div className="tk-process-grid">{t.steps.map((step,i)=><div className="tk-process-step" key={step}><span>{String(i+1).padStart(2,"0")}</span><div className="tk-process-node" aria-hidden="true"></div><h3>{step}</h3></div>)}</div></div></section>
    <section className="tk-modern-section tk-value-section"><div className="tk-modern-container tk-value-grid"><div><span className="tk-eyebrow">{tr?"YAKLAŞIMIMIZ":"OUR APPROACH"}</span><h2>{t.value}</h2></div><p>{t.valueText}</p></div></section>
    <section className="tk-modern-container tk-page-cta"><div><span className="tk-eyebrow">{tr?"SONRAKİ ADIM":"NEXT STEP"}</span><h2>{t.cta}</h2><p>{t.ctaText}</p></div><Link to="/contact?intent=recovery">{t.button}<FaArrowRight/></Link></section>
  </div>;
}