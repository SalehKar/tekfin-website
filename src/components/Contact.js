
import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const isTR = language === 'tr';

  const content = {
    tr: {
      title: 'Bize Ulaşın',
      subtitle: 'İletişim Bilgileri',
      address: 'Adres: İstanbul, Türkiye',
      phone: 'Telefon: +90 552 809 5556',
      email: 'E-posta: info@tekfingroup.com',
      hours: 'Çalışma Saatleri: Pazartesi - Cuma: 09:00 - 18:00',
      formTitle: 'Bize Mesaj Gönderin',
      namePlaceholder: 'Adınız Soyadınız',
      emailPlaceholder: 'E-posta Adresiniz',
      phonePlaceholder: 'Telefon Numaranız',
      subjectPlaceholder: 'Konu',
      messagePlaceholder: 'Mesajınız',
      submitButton: 'Gönder',
      whatsappButton: 'WhatsApp ile İletişime Geç',
      successMessage: 'Mesajınız başarıyla gönderildi!',
      errorMessage: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
      requiredField: 'Bu alan zorunludur.',
      invalidEmail: 'Geçersiz e-posta adresi.',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Contact Information',
      address: 'Address: Istanbul, Turkey',
      phone: 'Phone: +90 552 809 5556',
      email: 'Email: info@tekfingroup.com',
      hours: 'Working Hours: Monday - Friday: 09:00 - 18:00',
      formTitle: 'Send Us a Message',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      phonePlaceholder: 'Your Phone Number',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Your Message',
      submitButton: 'Send',
      whatsappButton: 'Contact via WhatsApp',
      successMessage: 'Your message has been sent successfully!',
      errorMessage: 'An error occurred while sending your message. Please try again.',
      requiredField: 'This field is required.',
      invalidEmail: 'Invalid email address.',
    },
  };

  const t = content[language];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = t.requiredField;
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = t.requiredField;
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = t.requiredField;
      isValid = false;
    }
    // Add more validation rules as needed

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus(isTR ? 'Lütfen tüm gerekli alanları doldurun.' : 'Please fill in all required fields.');
      return;
    }

    setStatus(isTR ? 'Gönderiliyor...' : 'Sending...');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...formData }).toString(),
      });

      if (response.ok) {
        setStatus(t.successMessage);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus(t.errorMessage);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus(t.errorMessage);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+905528095556';
    const message = isTR ? 'Merhaba, TekFin Teknoloji ile iletişime geçmek istiyorum.' : 'Hello, I would like to contact TekFin Teknoloji.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg my-8">
      <h1 className="text-4xl font-bold text-center text-[#1f3b6f] mb-4">{t.title}</h1>
      <p className="text-xl text-center text-gray-600 mb-8">{t.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <div className="space-y-6">
          <div className="flex items-center text-gray-700">
            <FaMapMarkerAlt className="text-2xl text-red-500 mr-4" />
            <p>{t.address}</p>
          </div>
          <div className="flex items-center text-gray-700">
            <FaPhone className="text-2xl text-blue-700 mr-4" />
            <p>{t.phone}</p>
          </div>
          <div className="flex items-center text-gray-700">
            <FaEnvelope className="text-2xl text-yellow-500 mr-4" />
            <p>{t.email}</p>
          </div>
          <div className="flex items-center text-gray-700">
            <FaClock className="text-2xl text-purple-500 mr-4" />
            <p>{t.hours}</p>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center justify-center bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp className="text-2xl mr-3" />
            {t.whatsappButton}
          </button>

          {/* Google Maps Embed */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.9380960000004!2d29.00891231540674!3d41.01225397929971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7d8f8f8f8f8%3A0x123456789abcdef!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2str!4v1678901234567!5m2!1sen!2str"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-[#1f3b6f] mb-6 text-center">{t.formTitle}</h2>
          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="sr-only">{t.namePlaceholder}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{t.emailPlaceholder}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">{t.phonePlaceholder}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.phonePlaceholder}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">{t.subjectPlaceholder}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.subjectPlaceholder}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">{t.messagePlaceholder}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1f3b6f] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              {t.submitButton}
            </button>
            {status && <p className="text-center mt-4 text-sm font-medium text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


