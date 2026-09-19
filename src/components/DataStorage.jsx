import React from "react";
import { Link } from "react-router-dom";
import { FaDatabase, FaShieldAlt, FaSyncAlt, FaCloudUploadAlt, FaServer } from "react-icons/fa";
import ProcessTimeline from "./ProcessTimeline";

export default function DataStorage({ language = "tr" }) {
  const content = {
    tr: {
      title: "Veri Depolama Çözümleri",
      paragraph:
        "İşletmeniz veya kişisel verileriniz için verimli depolama çözümleri sunuyoruz. Verilerinizin her zaman erişilebilir olmasını sağlamak için en son teknolojileri kullanıyoruz.",
      services: [
        { icon: <FaDatabase className="text-blue-800 w-10 h-10" />, text: "Yüksek Kapasiteli Depolama" },
        { icon: <FaShieldAlt className="text-blue-800 w-10 h-10" />, text: "Güvenli Veri Koruma" },
        { icon: <FaSyncAlt className="text-blue-800 w-10 h-10" />, text: "Kolay Erişim ve Senkronizasyon" },
        { icon: <FaCloudUploadAlt className="text-blue-800 w-10 h-10" />, text: "Bulut Yedekleme Entegrasyonu" }
      ],
      privacy: "🔒 Verileriniz güvenli altyapımızda korunur.",
      processTitle: "Depolama Sürecimiz",
      processSteps: [
        "İhtiyaç Analizi",
        "Çözüm Tasarımı",
        "Altyapı Kurulumu",
        "Veri Aktarımı",
        "Sürekli İzleme ve Destek"
      ],
      cta: {
        question: "İşinizle birlikte büyüyen bir depolama mı arıyorsunuz?",
        action: "Bizimle İletişime Geçin"
      }
    },
    en: {
      title: "Data Storage Solutions",
      paragraph:
        "We provide efficient storage solutions for your business or personal data, ensuring your information is always accessible using the latest technologies.",
      services: [
        { icon: <FaDatabase className="text-blue-800 w-10 h-10" />, text: "High-Capacity Storage" },
        { icon: <FaShieldAlt className="text-blue-800 w-10 h-10" />, text: "Secure Data Protection" },
        { icon: <FaSyncAlt className="text-blue-800 w-10 h-10" />, text: "Easy Access & Synchronization" },
        { icon: <FaCloudUploadAlt className="text-blue-800 w-10 h-10" />, text: "Cloud Backup Integration" }
      ],
      privacy: "🔒 Your data is protected in our secure infrastructure.",
      processTitle: "Our Storage Process",
      processSteps: [
        "Needs Analysis",
        "Solution Design",
        "Infrastructure Setup",
        "Data Migration",
        "Continuous Monitoring & Support"
      ],
      cta: {
        question: "Looking for storage that grows with your business?",
        action: "Contact Us"
      }
    }
  };

  const t = content[language];

  const icons = [
    <FaDatabase className="text-white w-5 h-5" />,
    <FaShieldAlt className="text-white w-5 h-5" />,
    <FaSyncAlt className="text-white w-5 h-5" />,
    <FaCloudUploadAlt className="text-white w-5 h-5" />,
    <FaServer className="text-white w-5 h-5" />
  ];

  return (
    <div className="tk-service-page">
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
