import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFlask, FaTools, FaFileAlt, FaTruck } from "react-icons/fa";
import hddIcon from "../assets/external-icons/hdd.svg";
import ssdIcon from "../assets/external-icons/ssd.svg";
import usbIcon from "../assets/external-icons/usb.svg";
import raidIcon from "../assets/external-icons/raid.svg";
import ProcessTimeline from "./ProcessTimeline";

export default function DataRecovery({ language = "tr" }) {
  const content = {
    tr: {
      title: "Veri Kurtarma Hizmetleri",
      paragraph:
        "TekFin olarak, HDD, SSD, USB bellek gibi çeşitli veri depolama cihazlarından kaybolan verileri kurtarma konusunda uzmanız. İster bireysel ister kurumsal olun, profesyonel çözümlerimiz en yüksek başarı oranını sunar.",
      services: [
        { icon: hddIcon, text: "Hard Disk Kurtarma" },
        { icon: ssdIcon, text: "SSD Kurtarma" },
        { icon: usbIcon, text: "Flash Bellek Kurtarma" },
        { icon: raidIcon, text: "RAID ve Sunucu Kurtarma" }
      ],
      privacy: "🔒 Verilerinizin gizliliği önceliğimizdir.",
      whyTitle: "Neden Bizi Tercih Etmelisiniz?",
      whyList: [
        "✅ Bozuk disklerde yüksek başarı oranı",
        "💰 Şeffaf fiyat politikası",
        "👨‍💻 Doğrudan teknik destek"
      ],
      processTitle: "Sürecimiz",
      processSteps: [
        "Ücretsiz İlk Teşhis",
        "Güvenli Laboratuvar Ortamı",
        "Akıllı Söküm ve Veri Çekme",
        "Veri Kurtarma",
        "Yeni ortam veya güvenli bağlantıyla teslim"
      ],
      cta: {
        question: "Verinizi kaybettiniz mi?",
        action: "Bizimle İletişime Geçin"
      }
    },
    en: {
      title: "Data Recovery Services",
      paragraph:
        "At TekFin, we specialize in recovering lost data from various storage devices including HDDs, SSDs, USB drives, and more. Whether you are a business or an individual, our professional recovery solutions ensure the highest possible retrieval rates.",
      services: [
        { icon: hddIcon, text: "Hard Drive Recovery" },
        { icon: ssdIcon, text: "SSD Recovery" },
        { icon: usbIcon, text: "Flash Media Recovery" },
        { icon: raidIcon, text: "RAID and Server Recovery" }
      ],
      privacy: "🔒 Your data privacy is our priority.",
      whyTitle: "Why Choose Us?",
      whyList: [
        "✅ High success rate for damaged drives",
        "💰 Transparent pricing",
        "👨‍💻 Direct technical support"
      ],
      processTitle: "Our Process",
      processSteps: [
        "Free Initial Diagnosis",
        "Secure Lab Environment",
        "Smart Disassembly & Extraction",
        "File Recovery",
        "Delivery via new medium or secure download links"
      ],
      cta: {
        question: "Lost your data?",
        action: "Contact Us"
      }
    }
  };

  const t = content[language];

  const icons = [
    <FaSearch className="text-white w-5 h-5" />,
    <FaFlask className="text-white w-5 h-5" />,
    <FaTools className="text-white w-5 h-5" />,
    <FaFileAlt className="text-white w-5 h-5" />,
    <FaTruck className="text-white w-5 h-5" />
  ];

  return (
    <div className="bg-white text-[#1f3b6f] px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Title & Intro */}
        <h2 className="text-4xl font-bold text-center mb-8 text-[#002855]">{t.title}</h2>
        <p className="text-base text-gray-800 mb-10 text-center max-w-3xl mx-auto">{t.paragraph}</p>

        {/* Services */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {t.services.map((s, i) => (
            <div
              key={i}
              className="bg-[#f1f6fc] p-4 rounded-lg shadow hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <img src={s.icon} alt={s.text} className="w-16 h-16 mb-3" />
              <p className="text-sm font-medium text-[#002855]">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Privacy */}
        <p className="text-center font-semibold text-[#1f3b6f] mb-10">{t.privacy}</p>

        {/* Why Choose Us */}
        <div className="mb-10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-[#1f3b6f]">{t.whyTitle}</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {t.whyList.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-blue-100 p-4 rounded-lg shadow text-center hover:shadow-md transition"
              >
                <p className="text-blue-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline مع الحركات */}
        <ProcessTimeline steps={t.processSteps} icons={icons} title={t.processTitle} />

        {/* Call to Action */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 text-lg mb-4">{t.cta.question}</p>
          <Link
            to="/contact"
            className="inline-block bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            {t.cta.action}
          </Link>
        </div>
      </div>
    </div>
  );
}
