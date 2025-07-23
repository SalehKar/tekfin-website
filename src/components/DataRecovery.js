import React from "react";
import "./DataRecovery.css";
import hddIcon from "../assets/icons/hdd.png";
import ssdIcon from "../assets/icons/ssd.png";
import usbIcon from "../assets/icons/usb.png";
import serverIcon from "../assets/icons/server.png";
import phoneIcon from "../assets/icons/phone.png";

export default function DataRecovery({ language = "tr" }) {
  const content = {
    tr: {
      title: "Veri Kurtarma Hizmetleri",
      paragraph: "TekFin olarak, HDD, SSD, USB bellek gibi çeşitli veri depolama cihazlarından kaybolan verileri kurtarma konusunda uzmanız. İster bireysel ister kurumsal olun, profesyonel çözümlerimiz en yüksek başarı oranını sunar.",
      services: [
        { icon: hddIcon, text: "Hard Disk Kurtarma" },
        { icon: ssdIcon, text: "SSD Kurtarma" },
        { icon: usbIcon, text: "Flash Bellek Kurtarma" },
        { icon: serverIcon, text: "RAID ve Sunucu Kurtarma" },
        { icon: phoneIcon, text: "Telefon ve Tablet Kurtarma" }
      ],
      privacy: "🔒 Verilerinizin gizliliği önceliğimizdir.",
      whyTitle: "Neden Bizi Tercih Etmelisiniz?",
      whyList: [
        "✅ Bozuk disklerde yüksek başarı oranı",
        "💰 Şeffaf fiyat politikası",
        "👨‍💻 Doğrudan teknik destek"
      ]
    },
    en: {
      title: "Data Recovery Services",
      paragraph: "At TekFin, we specialize in recovering lost data from various storage devices including HDDs, SSDs, USB drives, and more. Whether you are a business or an individual, our professional recovery solutions ensure the highest possible retrieval rates.",
      services: [
        { icon: hddIcon, text: "Hard Drive Recovery" },
        { icon: ssdIcon, text: "SSD Recovery" },
        { icon: usbIcon, text: "Flash Media Recovery" },
        { icon: serverIcon, text: "RAID and Server Recovery" },
        { icon: phoneIcon, text: "Phone and Tablet Data Recovery" }
      ],
      privacy: "🔒 Your data privacy is our priority.",
      whyTitle: "Why Choose Us?",
      whyList: [
        "✅ High success rate for damaged drives",
        "💰 Transparent pricing",
        "👨‍💻 Direct technical support"
      ]
    }
  };

  const t = content[language];

  return (
    <div className="container">
      <h2>{t.title}</h2>
      <p>{t.paragraph}</p>
      <div className="services-grid">
        {t.services.map((s, i) => (
          <div key={i} className="card">
            <img src={s.icon} alt={s.text} />
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <p className="privacy-note">{t.privacy}</p>
      <div className="why-choose">
        <h3>{t.whyTitle}</h3>
        <ul>
          {t.whyList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
