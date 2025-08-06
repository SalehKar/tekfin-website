import React, { useEffect, useRef, useState } from "react";

export default function ProcessTimeline({ steps, icons, title }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto" ref={sectionRef}>
      <h3 className="text-2xl font-semibold mb-10 text-center text-[#1f3b6f]">{title}</h3>

      {/* الكمبيوتر */}
      <div className="hidden md:flex justify-between items-center relative">
        {/* خط أغمق + حركة */}
        <div
          className={`absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-blue-900 ${
            isVisible ? "animate-lineGrow" : ""
          }`}
        ></div>

        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex flex-col items-center w-1/5 relative z-10 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{
              animationDelay: `${i * 0.3 + 0.5}s`,
              animationFillMode: "forwards"
            }}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 rounded-full shadow-lg mb-4 text-white">
              {icons[i]}
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center w-44">
              <span className="font-bold text-blue-800">{i + 1}.</span>
              <p className="text-gray-700 text-sm mt-1">{step}</p>
            </div>
          </div>
        ))}
      </div>

      {/* الموبايل */}
      <div className="md:hidden relative pl-8">
        <div
          className={`absolute left-5 top-0 w-1 h-full bg-gradient-to-b from-blue-700 to-blue-900 ${
            isVisible ? "animate-lineGrowVertical" : ""
          }`}
        ></div>

        {steps.map((step, i) => (
          <div
            key={i}
            className={`mb-8 relative ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
            style={{
              animationDelay: `${i * 0.3 + 0.5}s`,
              animationFillMode: "forwards"
            }}
          >
            <div className="absolute -left-1 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 rounded-full shadow-lg text-white">
              {icons[i]}
            </div>
            <div className="bg-white p-4 rounded-lg shadow ml-6">
              <span className="font-bold text-blue-800">{i + 1}.</span>
              <p className="text-gray-700 text-sm mt-1">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
