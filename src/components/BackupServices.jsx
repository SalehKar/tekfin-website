import React from "react";
import { Link } from "react-router-dom";
import { FaCloudUploadAlt, FaServer, FaSyncAlt, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export default function BackupServices({ language = "tr" }) {
  const content = {
    tr: {
      title: "Yedekleme Hizmetleri",
      paragraph:
        "Verilerinizin güvenliği ve sürekliliği için otomatik ve güvenilir yedekleme çözümleri sunuyoruz. İster bulut tabanlı, ister yerinde yedekleme olsun, ihtiyacınıza uygun çözümleri tasarlıyoruz.",
      services: [
        { icon: <FaCloudUploadAlt className="w-8 h-8 text-blue-700" />, text: "Bulut Yedekleme" },
        { icon: <FaServer className="w-8 h-8 text-blue-700" />, text: "Yerinde (On-Premises) Yedekleme" },
        { icon: <FaSyncAlt className="w-8 h-8 text-blue-700" />, text: "Gerçek Zamanlı Yedekleme" },
        { icon: <FaShieldAlt className="w-8 h-8 text-blue-700" />, text: "Şifreli Yedekleme" }
      ],
      processTitle: "Sürecimiz",
      processSteps: [
        "İhtiyaç Analizi",
        "Çözüm Tasarımı",
        "Kurulum ve Yapılandırma",
        "Test ve Doğrulama",
        "Sürekli İzleme ve Destek"
      ],
      cta: {
        question: "Verilerinizi güvence altına almak ister misiniz?",
        action: "Bizimle İletişime Geçin"
      }
    },
    en: {
      title: "Backup Services",
      paragraph:
        "We provide automated and reliable backup solutions to ensure the safety and continuity of your data. Whether cloud-based or on-premises, we design backup systems tailored to your needs.",
      services: [
        { icon: <FaCloudUploadAlt className="w-8 h-8 text-blue-700" />, text: "Cloud Backup" },
        { icon: <FaServer className="w-8 h-8 text-blue-700" />, text: "On-Premises Backup" },
        { icon: <FaSyncAlt className="w-8 h-8 text-blue-700" />, text: "Real-Time Backup" },
        { icon: <FaShieldAlt className="w-8 h-8 text-blue-700" />, text: "Encrypted Backup" }
      ],
      processTitle: "Our Process",
      processSteps: [
        "Needs Assessment",
        "Solution Design",
        "Implementation & Configuration",
        "Testing & Validation",
        "Continuous Monitoring & Support"
      ],
      cta: {
        question: "Want to secure your data?",
        action: "Contact Us"
      }
    }
  };

  const t = content[language];

  const processIcons = [
    <FaCheckCircle className="text-white w-5 h-5" />,
    <FaSyncAlt className="text-white w-5 h-5" />,
    <FaServer className="text-white w-5 h-5" />,
    <FaShieldAlt className="text-white w-5 h-5" />,
    <FaCloudUploadAlt className="text-white w-5 h-5" />
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

        {/* Process - Timeline Style */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-[#1f3b6f]">{t.processTitle}</h3>
          <div className="space-y-6">
            {t.processSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 mx-auto max-w-2xl">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg">
                  {processIcons[i]}
                </div>
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition w-full">
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold text-blue-800 mr-2">{i + 1}.</span> {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

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
