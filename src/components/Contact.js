<div className="container mx-auto pt-28 px-6 pb-12 bg-white rounded-lg">
  <h1 className="text-4xl font-bold text-center text-[#1f3b6f] mb-6">{t.title}</h1>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
    
    {/* Contact Info */}
    <div className="space-y-6">
      <div className="flex items-center text-gray-700 gap-3">
        <FaMapMarkerAlt className="text-xl text-red-500" />
        <p className="text-sm">{t.address}</p>
      </div>
      <div className="flex items-center text-gray-700 gap-3">
        <FaPhone className="text-xl text-blue-700" />
        <p className="text-sm">{t.phone}</p>
      </div>
      <div className="flex items-center text-gray-700 gap-3">
        <FaEnvelope className="text-xl text-yellow-500" />
        <p className="text-sm">{t.email}</p>
      </div>
      <div className="flex items-center text-gray-700 gap-3">
        <FaClock className="text-xl text-purple-500" />
        <p className="text-sm">{t.hours}</p>
      </div>
      <div className="flex items-center text-gray-700 gap-3">
        <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
        <a
          href="https://www.linkedin.com/company/tekfin-teknoloji-limited-şti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-700 hover:underline"
        >
          LinkedIn
        </a>
      </div>

      <button
        onClick={handleWhatsAppClick}
        className="w-full flex items-center justify-center bg-green-500 text-white py-3 px-6 rounded-lg text-sm font-semibold hover:bg-green-600 transition duration-300 mt-4"
      >
        <FaWhatsapp className="text-xl mr-2" />
        {t.whatsappButton}
      </button>

      {/* Google Maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%"
        height="200"
        className="rounded-md mt-4 border"
        allowFullScreen=""
        loading="lazy"
        title="Map"
      ></iframe>
    </div>

    {/* Contact Form */}
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner w-full">
      <h2 className="text-2xl font-bold text-[#1f3b6f] mb-4 text-center">{t.formTitle}</h2>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder={t.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder={t.phonePlaceholder}
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="subject"
          placeholder={t.subjectPlaceholder}
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          rows="6"
          placeholder={t.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#1f3b6f] text-white py-2 px-4 rounded-md font-medium hover:bg-blue-800 transition"
        >
          {t.submitButton}
        </button>

        {status && (
          <p className="text-center mt-2 text-sm text-gray-700">{status}</p>
        )}
      </form>
    </div>
  </div>
</div>
