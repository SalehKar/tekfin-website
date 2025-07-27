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
          { icon: "\ud83d\udd12", text: "Reliability: We highly value our customers' data and trust." },
          { icon: "\ud83d\udca1", text: "Innovation: We constantly research new technologies and methods." },
          { icon: "\ud83d\ude0a", text: "Customer Satisfaction: We aim to exceed expectations." },
          { icon: "\ud83d\udd0d", text: "Transparency: We adopt open and honest communication." },
          { icon: "\ud83c\udfaf", text: "Expertise: We work with top experts, ensuring continuous growth." }
        ]
      }
    },
    tr: {
      title: "Hakk\u0131m\u0131zda",
      story: {
        title: "Hikayemiz",
        text: "\u0130stanbul merkezli \u015firketimiz, teknolojiye olan tutkumuz ve ak\u0131ll\u0131 \u00e7\u00f6z\u00fcmler \u00fcretme arzumuzla kuruldu. Veri kurtarma hizmetleriyle ba\u015flad\u0131k ve h\u0131zla g\u00fcvenilir bir marka haline geldik. Gelecekte kablosuz a\u011f ve yenilik\u00e7i teknoloji alanlar\u0131na da a\u00e7\u0131lmay\u0131 planl\u0131yoruz."
      },
      vision: {
        title: "Vizyonumuz",
        text: "Teknoloji d\u00fcnyas\u0131nda \u00f6nc\u00fc bir rol oynayarak, veri g\u00fcvenli\u011fi konusunda global bir referans noktas\u0131 olmak."
      },
      mission: {
        title: "Misyonumuz",
        text: "M\u00fc\u015fterilerimize y\u00fcksek kaliteli veri kurtarma ve teknoloji \u00e7\u00f6z\u00fcmleri sunmak, dijital varl\u0131klar\u0131n\u0131 korumak ve i\u015f s\u00fcreklili\u011fini sa\u011flamak."
      },
      values: {
        title: "De\u011ferlerimiz",
        items: [
          { icon: "\ud83d\udd12", text: "G\u00fcvenilirlik: Verilerinize en \u00fcst d\u00fczeyde de\u011fer veriyoruz." },
          { icon: "\ud83d\udca1", text: "Yenilik\u00e7ilik: Yeni teknolojileri s\u00fcrekli ara\u015ft\u0131r\u0131yor ve uyguluyoruz." },
          { icon: "\ud83d\ude0a", text: "M\u00fc\u015fteri Memnuniyeti: Beklentileri a\u015fmay\u0131 hedefliyoruz." },
          { icon: "\ud83d\udd0d", text: "\u015eeffafl\u0131k: A\u00e7\u0131k ve d\u00fcr\u00fcst ileti\u015fim benimsiyoruz." },
          { icon: "\ud83c\udfaf", text: "Uzmanl\u0131k: En iyi uzmanlarla \u00e7al\u0131\u015f\u0131yoruz." }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="about-us px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{t.title}</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">{t.story.title}</h2>
        <p className="text-gray-700 leading-relaxed">{t.story.text}</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">{t.vision.title}</h3>
          <p className="text-gray-700">{t.vision.text}</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">{t.mission.title}</h3>
          <p className="text-gray-700">{t.mission.text}</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">{t.values.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {t.values.items.map((val, idx) => (
            <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl">{val.icon}</div>
              <p className="text-gray-700">{val.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
