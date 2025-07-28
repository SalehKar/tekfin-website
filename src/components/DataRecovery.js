import React from "react";
import { Link } from "react-router-dom";
import { FaHdd, FaUsb } from "react-icons/fa";
import { RiHardDrive2Line } from "react-icons/ri";
import { BiServer } from "react-icons/bi";

export default function DataRecovery({ language = "tr" }) {
  const content = {
    tr: {
      title: "Veri Kurtarma Hizmetleri",
      paragraph:
        "TekFin olarak, HDD, SSD, USB bellek gibi çeşitli veri depolama cihazlarından kaybolan verileri kurtarma konusunda uzmanız. İster bireysel ister kurumsal olun, profesyonel çözümlerimiz en yüksek başarı oranını sunar.",
      services: [
        { icon: <FaHdd />, text: "Hard Disk Kurtarma" },
        { icon: <RiHardDrive2Line />, text: "SSD Kurtarma" },
        { icon: <FaUsb />, text: "Flash Bellek Kurtarma" },
        { icon: <BiServer />, text: "RAID ve Sunucu Kurtarma" }
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
        "1. Ücretsiz İlk Teşhis",
        "2. Güvenli Laboratuvar Ortamı",
        "3. Akıllı Söküm ve Veri Çekme",
        "4. Veri Kurtarma",
        "5. Yeni ortam veya güvenli bağlantıyla teslim"
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
        { icon: <FaHdd />, text: "Hard Drive Recovery" },
        { icon: <RiHardDrive2Line />, text: "SSD Recovery" },
        { icon: <FaUsb />, text: "Flash Media Recovery" },
        { icon: <BiServer />, text: "RAID and Server Recovery" }
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
        "1. Free Initial Diagnosis",
        "2. Secure Lab Environment",
        "3. Smart Disassembly & Extraction",
        "4. File Recovery",
        "5. Delivery via new medium or secure download links"
      ],
      cta: {
        question: "Lost your data?",
        action: "Contact Us"
      }
    }
  };

  const t = content[language];

  return (
    <div className="bg-white text-[#1f3b6f] px-4 md:px-20 py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#002855]">{t.title}</h2>
      <p className="text-base text-gray-800 mb-10 text-center max-w-3xl mx-auto">{t.paragraph}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {t.services.map((s, i) => (
          <div key={i} className="bg-[#f1f6fc] p-4 rounded-lg shadow hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="text-4xl text-[#002855] mb-3">{s.icon}</div>
            <p className="text-sm font-medium text-[#002855]">{s.text}</p>
          </div>
        ))}
      </div>

      <p className="text-center font-semibold text-[#1f3b6f] mb-10">{t.privacy}</p>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-[#1f3b6f]">{t.whyTitle}</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {t.whyList.map((item, i) => (
            <div key={i} className="bg-white border border-blue-100 p-4 rounded-lg shadow text-center hover:shadow-md transition">
              <p className="text-blue-800 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-[#1f3b6f]">{t.processTitle}</h3>
        <ul className="space-y-3">
          {t.processSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-blue-700 font-bold">{i + 1}.</span>
              <p className="text-gray-800">{step}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 text-center">
        <p className="text-gray-600 text-lg mb-4">{t.cta.question}</p>
        <Link to="/contact" className="inline-block bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
          {t.cta.action}
        </Link>
      </div>
    </div>
  );
}
