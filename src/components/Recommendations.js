import React from 'react';
import { useLocation } from 'react-router-dom';
import recommendations from './storageRecommendations';

import {
  FaLightbulb,
  FaListCheck,
  FaExclamationCircle,
} from 'react-icons/fa6';

const Recommendations = () => {
  const location = useLocation();
  const { usage, capacity, speed, portability, email } = location.state || {};

  const language = email?.endsWith('.com.tr') ? 'tr' : 'en';
  const isTR = language === 'tr';

  if (!usage || !capacity || !speed || !portability) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-red-600 text-center px-4">
        <FaExclamationCircle className="w-10 h-10 text-red-500 mb-2" />
        <p className="text-lg font-semibold">
          {isTR
            ? 'Veriler eksik. Lütfen formu tekrar doldurun.'
            : 'Missing data. Please fill the form again.'}
        </p>
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
      <div className="flex items-center justify-center gap-3 mb-8">
        <FaLightbulb className="w-8 h-8 text-yellow-400" />
        <h1 className="text-3xl font-bold">
          {isTR ? 'Tavsiye Sonucu' : 'Your Recommendation'}
        </h1>
      </div>

      {match ? (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transition hover:shadow-xl">
          <p className="text-lg leading-relaxed mb-4 text-gray-800">
            {match.recommendation[language]}
          </p>

          {match.brands.length > 0 && (
            <div className="mt-6">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-2">
                <FaListCheck className="text-green-600 w-5 h-5" />
                {isTR ? 'Önerilen Markalar:' : 'Recommended Brands:'}
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {match.brands.map((brand, index) => (
                  <li key={index} className="text-base">{brand}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center text-red-700 text-center mt-6 gap-2">
          <FaExclamationCircle className="w-8 h-8 text-red-500" />
          <p className="text-lg font-medium">
            {isTR
              ? 'Bu kombinasyon için öneri bulunamadı. Lütfen farklı seçenekler deneyin.'
              : 'No recommendation found for this combination. Please try different options.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
