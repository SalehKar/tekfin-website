import React from 'react';

const AboutUs = ({ language }) => {
  const content = {
    en: {
      title: "About Us",
      story: {
        title: "Our Story",
        text: "Our Istanbul-based company was founded out of a passion for technology and a drive to create smart, practical solutions. We began with data recovery services and quickly became a trusted name for businesses in need of fast and reliable support. Looking ahead, we plan to expand into wireless networking and other innovative tech fields, always adapting to our clients' evolving needs."
      },
      vision: {
        title: "Our Vision",
        text: "To play a pioneering role in the world of technology, becoming a global reference point for data security and accessibility."
      },
      mission: {
        title: "Our Mission",
        text: "To provide our customers with the highest quality data recovery and technology solutions, protecting their digital assets and ensuring business continuity."
      },
      values: {
        title: "Our Values",
        items: [
          { icon: "🔒", text: "Reliability: We highly value our customers' data and trust." },
          { icon: "💡", text: "Innovation: We constantly research new technologies and methods." },
          { icon: "😊", text: "Customer Satisfaction: We aim to exceed expectations." },
          { icon: "🔍", text: "Transparency: We adopt open and honest communication." },
          { icon: "🎯", text: "Expertise: We work with top experts, ensuring continuous growth." }
        ]
      }
    },
    tr: {
      title: "Hakkımızda",
      story: {
        title: "Hikayemiz",
        text: "İstanbul merkezli şirketimiz, teknolojiye olan tutkumuz ve akıllı çözümler üretme arzumuzla kuruldu. Veri kurtarma hizmetleriyle başladık ve hızla güvenilir bir marka haline geldik. Gelecekte kablosuz ağ ve yenilikçi teknoloji alanlarına da açılmayı planlıyoruz."
      },
      vision: {
        title: "Vizyonumuz",
        text: "Teknoloji dünyasında öncü bir rol oynayarak, veri güvenliği konusunda global bir referans noktası olmak."
      },
      mission: {
        title: "Misyonumuz",
        text: "Müşterilerimize yüksek kaliteli veri kurtarma ve teknoloji çözümleri sunmak, dijital varlıklarını korumak ve iş sürekliliğini sağlamak."
      },
      values: {
        title: "Değerlerimiz",
        items: [
          { icon: "🔒", text: "Güvenilirlik: Verilerinize en üst düzeyde değer veriyoruz." },
          { icon: "💡", text: "Yenilikçilik: Yeni teknolojileri sürekli araştırıyor ve uyguluyoruz." },
          { icon: "😊", text: "Müşteri Memnuniyeti: Beklentileri aşmayı hedefliyoruz." },
          { icon: "🔍", text: "Şeffaflık: Açık ve dürüst iletişim benimsiyoruz." },
          { icon: "🎯", text: "Uzmanlık: En iyi uzmanlarla çalışıyoruz." }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="bg-white text-[#1f4e79] px-4 md:px-20 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">{t.title}</h1>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-2">{t.story.title}</h2>
        <p className="text-md leading-relaxed">{t.story.text}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-[#f4f7fb] p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-2">{t.vision.title}</h3>
          <p>{t.vision.text}</p>
        </div>
        <div className="bg-[#f4f7fb] p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-2">{t.mission.title}</h3>
          <p>{t.mission.text}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">{t.values.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {t.values.items.map((val, idx) => (
            <div key={idx} className="bg-[#f4f7fb] p-4 rounded-lg shadow-sm flex items-start gap-2">
              <div className="text-2xl">{val.icon}</div>
              <p className="text-sm leading-snug">{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
