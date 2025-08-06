import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StorageAdvisor = ({ language }) => {
  const [usage, setUsage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [speed, setSpeed] = useState('');
  const [portability, setPortability] = useState('');
  const [email, setEmail] = useState('');
  const [customRequirements, setCustomRequirements] = useState('');
  const [aiRecommendation, setAiRecommendation] = useState('');
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [showAISection, setShowAISection] = useState(false);

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

  const handleAIRecommendation = async () => {
    if (!customRequirements.trim()) {
      alert(isTR ? 'Lütfen ihtiyaçlarınızı açıklayın.' : 'Please describe your requirements.');
      return;
    }

    setIsLoadingAI(true);
    setAiRecommendation('');

    try {
      const response = await fetch("/.netlify/functions/storage-recommendation", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requirements: customRequirements,
          language: language
        }),
      });

      const data = await response.json();

      if (data.success) {
        setAiRecommendation(data.recommendation);
      } else {
        setAiRecommendation(
          isTR 
            ? 'Üzgünüz, şu anda AI önerisi alınamıyor. Lütfen daha sonra tekrar deneyin.' 
            : 'Sorry, AI recommendation is not available right now. Please try again later.'
        );
      }
    } catch (error) {
      console.error('Error getting AI recommendation:', error);
      setAiRecommendation(
        isTR 
          ? 'Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.' 
          : 'Connection error. Please check your internet connection.'
      );
    } finally {
      setIsLoadingAI(false);
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

        {/* AI-Powered Custom Recommendation Section */}
        <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-[#002855]">
            {isTR ? '🤖 AI Destekli Özel Öneri' : '🤖 AI-Powered Custom Recommendation'}
          </h2>
          <p className="text-gray-700 mb-4">
            {isTR
              ? 'İhtiyaçlarınızı detaylı olarak açıklayın, yapay zeka size özel öneriler sunacak.'
              : 'Describe your needs in detail, and our AI will provide personalized recommendations.'}
          </p>
          
          <div className="text-left">
            <textarea
              value={customRequirements}
              onChange={(e) => setCustomRequirements(e.target.value)}
              placeholder={
                isTR
                  ? 'Örnek: "Video düzenleme için hızlı bir SSD arıyorum, 1TB kapasiteli, bütçem 2000 TL"'
                  : 'Example: "I need a fast SSD for video editing, 1TB capacity, budget is 2000 TL"'
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              rows="4"
            />
            
            <button
              onClick={handleAIRecommendation}
              disabled={isLoadingAI}
              className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingAI
                ? (isTR ? '🔄 AI Analiz Ediyor...' : '🔄 AI Analyzing...')
                : (isTR ? '✨ AI Önerisi Al' : '✨ Get AI Recommendation')
              }
            </button>
          </div>

          {aiRecommendation && (
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 text-left">
              <h3 className="font-bold text-lg mb-3 text-[#002855]">
                {isTR ? '🎯 AI Önerisi:' : '🎯 AI Recommendation:'}
              </h3>
              <div className="text-gray-700 whitespace-pre-line">
                {aiRecommendation}
              </div>
            </div>
          )}
        </div>

        {/* Traditional Form Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#002855]">
            {isTR ? '📋 Geleneksel Form' : '📋 Traditional Form'}
          </h2>
          <button
            onClick={() => setShowAISection(!showAISection)}
            className="mb-4 text-blue-600 hover:text-blue-800 underline"
          >
            {showAISection 
              ? (isTR ? 'Formu Gizle' : 'Hide Form')
              : (isTR ? 'Formu Göster' : 'Show Form')
            }
          </button>
        </div>

        {showAISection && (
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
                <option value="low">{isTR ? 'Düşük (HDD)' : 'Low (HDD)'}</option>
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
        )}
      </div>
    </div>
  );
};

export default StorageAdvisor;
