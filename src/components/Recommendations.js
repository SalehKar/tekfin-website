import React from 'react';
import { useLocation } from 'react-router-dom';
import recommendations from './storageRecommendations';
import { CheckCircle, AlertTriangle, Sparkles } from 'lucide-react';

const Recommendations = () => {
  const location = useLocation();
  const { usage, capacity, speed, portability, email } = location.state || {};

  const language = email?.endsWith('.com.tr') ? 'tr' : 'en';
  const isTR = language === 'tr';

  if (!usage || !capacity || !speed || !portability) {
    return (
      <div className="p-6 text-center text-red-600">
        <AlertTriangle className="mx-auto mb-2" size={36} />
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
    <div className="max-w-3xl mx-auto px-4 py-12 text-primary font-sans">
      <h1 className="text-3xl font-heading font-bold mb-8 text-center flex items-center justify-center gap-2">
        <Sparkles className="text-accent" size={28} />
        {isTR ? 'Tavsiye Sonucu' : 'Your Recommendation'}
      </h1>

      {match ? (
        <div className="bg-secondary rounded-2xl shadow-md p-6">
          <p className="text-lg mb-4 text-gray-800 leading-relaxed">
            {match.recommendation[language]}
          </p>

          {match.brands.length > 0 && (
            <div className="mt-4">
              <h2 className="font-semibold text-primary flex items-center gap-2 mb-3">
                <CheckCircle className="text-green-600" size={20} />
                {isTR ? 'Önerilen Markalar:' : 'Recommended Brands:'}
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {match.brands.map((brand, index) => (
                  <li key={index}>{brand}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="text-red-700 text-center mt-6">
          <AlertTriangle className="mx-auto mb-2" size={32} />
          {isTR
            ? 'Bu kombinasyon için öneri bulunamadı. Lütfen farklı seçenekler deneyin.'
            : 'No recommendation found for this combination. Please try different options.'}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
