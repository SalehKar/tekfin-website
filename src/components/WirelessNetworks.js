import React from 'react';

const WirelessNetworks = ({ language }) => {
  const content = {
    tr: {
      title: "Kablosuz Ağ Çözümleri",
      subtitle: "Geleceğin Bağlantısı Bugünden Başlıyor"
    },
    en: {
      title: "Wireless Network Solutions",
      subtitle: "The Future of Connectivity Starts Today"
    }
  };

  const t = content[language];

  return (
    <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <p>Bu sayfa geliştirilme aşamasındadır...</p>
    </div>
  );
};

export default WirelessNetworks;

