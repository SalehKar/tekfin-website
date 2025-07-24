import React, { useState } from 'react';
import './StorageAdvisor.css';

const StorageAdvisor = ({ language }) => {
  const [usage, setUsage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [speed, setSpeed] = useState('');
  const [portability, setPortability] = useState('');
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch('https://formsubmit.co/ajax/info@tekfingroup.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, usage, capacity, speed, portability }),
      });
      setShowThankYou(true);
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  const isTurkish = language === 'tr';

  return (
    <div className="storage-advisor">
      <h1 className="page-title">
        {isTurkish ? 'Depolama Danışmanı' : 'Storage Advisor'}
      </h1>
      <p className="advisor-description">
        {isTurkish
          ? 'İşletmeniz için en iyi depolama çözümünü bulmak adına birkaç kısa soruya cevap verin.'
          : 'Answer a few quick questions and get the best storage solution recommendation for your business.'}
      </p>

      {!showThankYou ? (
        <form onSubmit={handleEmailSubmit} className="advisor-form">
          <div className="form-group">
            <label>{isTurkish ? 'Kullanım Amacı' : 'Usage Purpose'}</label>
            <select value={usage} onChange={(e) => setUsage(e.target.value)} required>
              <option value="">--</option>
              <option value="personal">{isTurkish ? 'Kişisel Depolama' : 'Personal Storage'}</option>
              <option value="gaming">{isTurkish ? 'Oyun' : 'Gaming'}</option>
              <option value="video">{isTurkish ? 'Video Düzenleme' : 'Video Editing'}</option>
              <option value="backup">{isTurkish ? 'Yedekleme' : 'Backup'}</option>
              <option value="office">{isTurkish ? 'Ofis/İş' : 'Office/Business'}</option>
            </select>
          </div>

          <div className="form-group">
            <label>{isTurkish ? 'Kapasite' : 'Capacity'}</label>
            <select value={capacity} onChange={(e) => setCapacity(e.target.value)} required>
              <option value="">--</option>
              <option value="lt500">{isTurkish ? '500 GB altı' : 'Less than 500 GB'}</option>
              <option value="500_1tb">500 GB – 1 TB</option>
              <option value="1tb_4tb">1 TB – 4 TB</option>
              <option value="gt4tb">{isTurkish ? '4 TB üzeri' : 'More than 4 TB'}</option>
            </select>
          </div>

          <div className="form-group">
            <label>{isTurkish ? 'Hız' : 'Speed'}</label>
            <select value={speed} onChange={(e) => setSpeed(e.target.value)} required>
              <option value="">--</option>
              <option value="very_high">{isTurkish ? 'Çok Yüksek (NVMe SSD)' : 'Very High (NVMe SSD)'}</option>
              <option value="high">{isTurkish ? 'Yüksek (SATA SSD)' : 'High (SATA SSD)'}</option>
              <option value="medium">{isTurkish ? 'Orta (HDD)' : 'Medium (HDD)'}</option>
            </select>
          </div>

          <div className="form-group">
            <label>{isTurkish ? 'Taşınabilirlik' : 'Portability'}</label>
            <select value={portability} onChange={(e) => setPortability(e.target.value)} required>
              <option value="">--</option>
              <option value="portable">{isTurkish ? 'Taşınabilir' : 'Portable'}</option>
              <option value="fixed">{isTurkish ? 'Sabit' : 'Fixed'}</option>
            </select>
          </div>

          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="email">{isTurkish ? 'E-posta Adresi' : 'Email Address'}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <button type="submit" className="recommend-button">
            {isTurkish ? 'Tavsiyeyi Al' : 'Get Recommendation'}
          </button>
        </form>
      ) : (
        <div className="recommendation-result">
          <h2>{isTurkish ? 'Teşekkürler!' : 'Thank You!'}</h2>
          <p>{isTurkish ? 'E-postanızı aldık.' : 'We’ve received your email.'}</p>
          <div className="dev-alert">
            {isTurkish
              ? 'Tavsiye aracı şu anda geliştirilmektedir. Hazır olduğunda size bildirilecektir.'
              : 'The recommendation tool is currently under development. You’ll be notified as soon as it’s ready.'}
          </div>
        </div>
      )}
    </div>
  );
};

export default StorageAdvisor;
