import React from 'react';
import { useLocation } from 'react-router-dom';
import recommendations from './storageRecommendations';
import { CheckCircle, AlertTriangle, PackageSearch, Star } from 'lucide-react';

const Recommendations = () => {
  const location = useLocation();
  const { usage, capacity, speed, portability, email } = location.state || {};

  const language = email?.endsWith('.com.tr') ? 'tr' : 'en';
  const isTR = language === 'tr';

  if (!usage || !capacity || !speed || !portability) {
    return (
      <div className="bg-red-100 text-red-700 text-center mt-6 p-4 rounded flex items-center justify-center gap-2">
        <AlertTriangle className="w-5 h-5" />
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
        <Star className="w-6 h-6 text-yellow-500" />
        {isTR ? 'Tavsiye Sonucu' : 'Your Recommendation'}
      </h1>

      {match ? (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <p className="text-xl font-medium text-gray-800 leading-relaxed mb-6 flex items-start gap-2">
            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            {match.recommendation[language]}
          </p>

          {match.brands.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-[#1f3b6f] mb-3 flex items-center gap-2">
                <PackageSearch className="w-5 h-5 text-blue-700" />
                {isTR ? 'Önerilen Markalar:' : 'Recommended Brands:'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {match.brands.map((brand, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-red-100 text-red-700 text-center mt-6 p-4 rounded flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          {isTR
            ? 'Bu kombinasyon için öneri bulunamadı. Lütfen farklı seçenekler deneyin.'
            : 'No recommendation found for this combination. Please try different options.'}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
