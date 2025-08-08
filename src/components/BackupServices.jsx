import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardCheck, FaCloudUploadAlt, FaSyncAlt, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import ProcessTimeline from "./ProcessTimeline";

export default function BackupServices({ language = "tr" }) {
  const content = {
    tr: {
      title: "Yedekleme Hizmetleri",
      paragraph:
        "Veri kaybını önlemek için otomatik yedekleme çözümleri sunuyoruz. Güvenli, hızlı ve iş sürekliliğini sağlayan sistemler ile verileriniz her zaman koruma altında.",
      services: [
        { icon: <FaClipboardCheck className="text-blue-800 w-10 h-10" />, text: "Otomatik Yedekleme Planları" },
        { icon: <FaCloudUploadAlt className="text-blue-800 w-10 h-10" />, text: "Bulut Yedekleme" },
        { icon: <FaSyncAlt className="text-blue-800 w-10 h-10" />, text: "Gerçek Zamanlı Senkronizasyon" },
        { icon: <FaShieldAlt className="text-blue-800 w-10 h-10" />, text: "Veri Şifreleme ve Güvenlik" }
      ],
      privacy: "🔒 Yedekleme verileriniz güvenli bir şekilde saklanır.",
      processTitle: "Yedekleme Sürecimiz",
      processSteps: [
        "İhtiyaç Analizi",
        "Yedekleme Stratejisinin Belirlenmesi",
        "Altyapı Kurulumu",
        "Otomatik Yedekleme Başlatma",
        "Düzenli Kontrol ve Güncelleme"
      ],
      cta: {
        question: "Verilerinizi yedeklemek mi istiyorsunuz?",
        action: "Bizimle İletişime Geçin"
      }
    },
    en: {
      title: "Backup Services",
      paragraph:
        "We offer automated backup solutions to prevent data loss. With secure, fast, and business continuity-focused systems, your data is always protected.",
      services: [
        { icon: <FaClipboardCheck className="text-blue-800 w-10 h-10" />, text: "Automated Backup Plans" },
        { icon: <FaCloudUploadAlt className="text-blue-800 w-10 h-10" />, text: "Cloud Backup" },
        { icon: <FaSyncAlt className="text-blue-800 w-10 h-10" />, text: "Real-Time Synchronization" },
        { icon: <FaShieldAlt className="text-blue-800 w-10 h-10" />, text: "Data Encryption & Security" }
      ],
      privacy: "🔒 Your backup data is stored securely.",
      processTitle: "Our Backup Process",
      processSteps: [
        "Needs Analysis",
        "Backup Strategy Definition",
        "Infrastructure Setup",
        "Start Automatic Backup",
        "Regular Check & Update"
      ],
      cta: {
        question: "Want to backup your data?",
        action: "Contact Us"
      }
    }
  };

  const t = content[language];

  const icons = [
    <FaClipboardCheck className="text-white w-5 h-5" />,
    <FaCloudUploadAlt className="text-white w-5 h-5" />,
    <FaSyncAlt className="text-white w-5 h-5" />,
    <FaShieldAlt className="text-white w-5 h-5" />,
    <FaCheckCircle className="text-white w-5 h-5" />
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
              {s.icon}
              <p className="text-sm font-medium text-[#002855] mt-3">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Privacy */}
        <p className="text-center font-semibold text-[#1f3b6f] mb-10">{t.privacy}</p>

        {/* Process Timeline */}
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
