import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StorageAdvisor = ({ language }) => {
  const [usage, setUsage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [speed, setSpeed] = useState('');
  const [portability, setPortability] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const isTR = language === 'tr';

  const handleEmailChange = (e) => setEmail(e.target.value);

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

      // ✅ الانتقال إلى صفحة التوصيات مع تمرير البيانات
    navigate('/recommendations', {
  state: { usage, capacity, speed, portability, email, language },
      });
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  return (
    <div className="bg-white text-[#1f3b6f] px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#002855]">
          {isTR ? 'Depolama Danışmanı' : 'Storage Advisor'}
        </h1>
        <p className="text-base text-gray-700 mb-10">
          {isTR
            ? 'Akıllı aracımız, verileriniz için en uygun depolama seçeneğini önersin.'
            : 'Let our smart tool recommend the best storage option for your data.'}
        </p>

        <form
          onSubmit={handleEmailSubmit}
          className="grid grid-cols-1 gap-6 text-left"
        >
          <div>
            <label className="block mb-1 font-medium">
              {isTR ? 'Kullanım Amacı' : 'Usage Purpose'}
            </label>
            <select
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">--</option>
              <option value="personal">
                {isTR ? 'Kişisel Depolama' : 'Personal Storage'}
              </option>
              <option value="gaming">{isTR ? 'Oyun' : 'Gaming'}</option>
              <option value="video">{isTR ? 'Video Düzenleme' : 'Video Editing'}</option>
              <option value="backup">{isTR ? 'Yedekleme' : 'Backup'}</option>
              <option value="office">{isTR ? 'Ofis/İş' : 'Office/Business'}</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              {isTR ? 'Kapasite' : 'Capacity'}
            </label>
            <select
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">--</option>
              <option value="lt500">{isTR ? '500 GB altı' : 'Less than 500 GB'}</option>
              <option value="500_1tb">500 GB – 1 TB</option>
              <option value="1tb_4tb">1 TB – 4 TB</option>
              <option value="gt4tb">{isTR ? '4 TB üzeri' : 'More than 4 TB'}</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              {isTR ? 'Hız' : 'Speed'}
            </label>
        <select
  value={speed}
  onChange={(e) => setSpeed(e.target.value)}
  required
  className="w-full border rounded px-3 py-2"
>
  <option value="">--</option>
  <option value="very_high">{isTR ? 'Çok Yüksek (NVMe SSD)' : 'Very High (NVMe SSD)'}</option>
  <option value="high">{isTR ? 'Yüksek (SATA SSD)' : 'High (SATA SSD)'}</option>
  <option value="low">{isTR ? 'Düşük (HDD)' : 'Low (HDD)'}</option> {/* ← عدل هنا */}
</select>

          </div>

          <div>
            <label className="block mb-1 font-medium">
              {isTR ? 'Taşınabilirlik' : 'Portability'}
            </label>
            <select
              value={portability}
              onChange={(e) => setPortability(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">--</option>
              <option value="portable">{isTR ? 'Taşınabilir' : 'Portable'}</option>
              <option value="fixed">{isTR ? 'Sabit' : 'Fixed'}</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              {isTR ? 'E-posta Adresi' : 'Email Address'}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 mt-4"
          >
            {isTR ? 'Tavsiyeyi Al' : 'Get Recommendation'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StorageAdvisor;
