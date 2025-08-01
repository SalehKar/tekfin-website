import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import recommendations from './storageRecommendations';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Recommendations = ({ language }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    usage,
    capacity,
    speed,
    portability,
    email,
  } = location.state || {};

  const isTR = language === 'tr';

  if (!usage || !capacity || !speed || !portability) {
    return (
      <div className="p-6 text-center text-red-600 flex flex-col items-center">
        <FaExclamationTriangle className="text-3xl mb-2" />
        {isTR
          ? 'Veriler eksik. Lütfen formu tekrar doldurun.'
          : 'Missing data. Please fill the form again.'}
      </div>
    );
  }

  const match = recommendations.find(
    (item) =>
      item.conditions.usage === usage &&
      item.conditions.capacity === capacity &&
      item.conditions.speed === speed &&
      item.conditions.portability === portability
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-[#1f3b6f]">
      <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <FaCheckCircle className="text-green-600" />
        {isTR ? 'Tavsiye Sonucu' : 'Your Recommendation'}
      </h1>

      {match && match.recommendation && match.recommendation[language] ? (
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg mb-4">{match.recommendation[language]}</p>

          {match.brands?.length > 0 && (
            <div className="mt-4">
              <h2 className="font-semibold mb-2">
                {isTR ? 'Önerilen Markalar:' : 'Recommended Brands:'}
              </h2>
              <ul className="list-disc pl-5 text-gray-700">
                {match.brands.map((brand, index) => (
                  <li key={index}>{brand}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => navigate('/storage-advisor')}
            className="mt-6 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            {isTR ? 'Forma Geri Dön' : 'Back to Form'}
          </button>
        </div>
      ) : (
        <div className="text-red-700 text-center mt-6 flex flex-col items-center">
          <FaExclamationTriangle className="text-3xl mb-2" />
          {isTR
            ? 'Bu kombinasyon için öneri bulunamadı. Lütfen farklı seçenekler deneyin.'
            : 'No recommendation found for this combination. Please try different options.'}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
