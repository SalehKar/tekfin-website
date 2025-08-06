import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDatabase, FaWifi, FaHdd, FaCloudUploadAlt } from 'react-icons/fa';

const HomePage = ({ language }) => {
  const navigate = useNavigate();

  const content = {
    en: {
      mainTitle: "Business Data Solutions",
      subtitle: "Store, Protect, and Recover Your Business Data with Confidence.",
      intro: "We provide tailored data solutions that help businesses store, protect, and recover their most valuable asset — their data. Based in Istanbul, we combine expertise, advanced technology, and customer focus to ensure your data is always safe and accessible.",
      landingBtn: "Try Storage Advisor Tool",
      landingDescription: "Not sure what storage device you need? Use our smart advisor to get a tailored recommendation in seconds!",
      services: {
        title: "Our Services",
        dataSolutions: {
          title: "Business Data Solutions",
          description: "We understand the critical role of data in business success, which is why we offer advanced data solutions:",
          subServices: [
            { title: "Data Storage", description: "Secure and efficient storage solutions ensuring your data is always accessible.", icon: <FaHdd className="w-6 h-6 text-white" /> },
            { title: "Data Recovery", description: "Fast and reliable recovery of critical business data using cutting-edge technology.", icon: <FaDatabase className="w-6 h-6 text-white" /> },
            { title: "Backup Services", description: "Automated and secure backup systems to protect your data from loss or damage.", icon: <FaCloudUploadAlt className="w-6 h-6 text-white" /> }
          ]
        },
        wireless: {
          title: "Wireless Network Solutions (Future)",
          description: "We aim to provide secure, fast, and seamless solutions for your business wireless network needs. Stay tuned for updates."
        }
      },
      whyChooseUs: {
        title: "Why Choose Us?",
        expertise: "Expertise: Years of experience in data recovery and business data management.",
        reliability: "Reliability: The confidentiality and security of your data are our top priority.",
        fastSolutions: "Fast Solutions: Quick and effective intervention even in emergencies.",
        customerFocus: "Customer-Centric: We offer solutions tailored to your needs."
      },
      cta: {
        title: "Contact us today to protect and recover your business data!",
        button: "Contact Us Now!"
      }
    }
  };

  const t = content[language] || content.en;

  const iconColors = {
    storage: 'from-green-500 to-emerald-600',
    recovery: 'from-blue-500 to-indigo-600',
    backup: 'from-yellow-500 to-orange-500',
    wireless: 'from-cyan-500 to-sky-600'
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{t.mainTitle}</h1>
          <p className="text-xl md:text-2xl font-light mb-6">{t.subtitle}</p>
          <p className="text-base md:text-lg mb-8 text-white/90">{t.intro}</p>
          <div className="bg-white text-blue-800 p-4 rounded-lg shadow-lg inline-block">
            <p className="text-lg font-semibold mb-2">{t.landingDescription}</p>
            <button
              onClick={() => navigate('/storage-advisor')}
              className="mt-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-full transition"
            >
              {t.landingBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Business Data Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow">
                <FaDatabase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{t.services.dataSolutions.title}</h3>
              <p className="text-gray-700 text-sm mb-4 text-center">{t.services.dataSolutions.description}</p>
              <div className="space-y-4">
                {t.services.dataSolutions.subServices.map((service, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className={`flex justify-center items-center w-10 h-10 bg-gradient-to-br ${Object.values(iconColors)[i]} rounded-full`}>
                      {service.icon}
                    </div>
                    <div>
                      <strong>{service.title}</strong>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wireless Network Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-full shadow">
                <FaWifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.services.wireless.title}</h3>
              <p className="text-gray-700 text-sm">{t.services.wireless.description}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">{t.whyChooseUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.keys(t.whyChooseUs).filter(k => k !== 'title').map((key, index) => (
              <div key={index} className="text-center">
                <div className={`flex justify-center items-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${Object.values(iconColors)[index]} rounded-full shadow`}>
                  {/* Placeholder icon */}
                  <FaDatabase className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-800 font-medium text-sm">{t.whyChooseUs[key]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t.cta.title}</h2>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-red-600 transition"
          >
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
