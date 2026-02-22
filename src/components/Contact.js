import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin } from 'react-icons/fa';

const Contact = ({ language }) => {
  const [searchParams] = useSearchParams();
  const intent = (searchParams.get('intent') || 'consultation').toLowerCase();

  const content = {
    tr: {
      pageTitle: 'İletişim',
      address: 'Adres: İstanbul, Türkiye',
      email: 'E-posta: info@tekfingroup.com',
      hours: 'Çalışma Saatleri: Pazartesi - Cuma: 09:00 - 18:00',

      intents: {
        assessment: {
          title: 'Ücretsiz Veri Risk Analizi',
          description:
            'Kısa bir değerlendirme ile mevcut depolama/yedekleme yapınızı anlamaya yardımcı oluruz. Uygun bir yaklaşım ve sonraki adımları netleştiririz.',
          defaultSubject: 'Ücretsiz Veri Risk Analizi Talebi'
        },
        consultation: {
          title: 'Danışmanlık Talebi',
          description:
            'İhtiyacınızı ve önceliklerinizi anlayalım. Ardından kapsam, yaklaşım ve olası zaman planını paylaşalım.',
          defaultSubject: 'Danışmanlık Talebi'
        }
      },

      formTitle: 'Formu Doldurun',
      namePlaceholder: 'Adınız Soyadınız',
      emailPlaceholder: 'E-posta Adresiniz',
      phonePlaceholder: 'Telefon Numaranız',
      companyPlaceholder: 'Şirket Adı (opsiyonel)',
      sizePlaceholder: 'Çalışan Sayısı (opsiyonel)',
      subjectPlaceholder: 'Konu',
      messagePlaceholder: 'Kısa açıklama (mevcut yapı, ihtiyaç, öncelik)',
      submitButton: 'Gönder',
      successMessage: 'Mesajınız başarıyla gönderildi!',
      errorMessage: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
      requiredField: 'Bu alan zorunludur.',
      invalidEmail: 'Geçersiz e-posta adresi.',
      sending: 'Gönderiliyor...'
    },

    en: {
      pageTitle: 'Contact',
      address: 'Address: Istanbul, Turkey',
      email: 'Email: info@tekfingroup.com',
      hours: 'Working Hours: Monday - Friday: 09:00 - 18:00',

      intents: {
        assessment: {
          title: 'Free Data Risk Assessment',
          description:
            'A short evaluation to understand your current storage/backup setup. We clarify the right approach and next steps.',
          defaultSubject: 'Request: Free Data Risk Assessment'
        },
        consultation: {
          title: 'Request Consultation',
          description:
            'We’ll understand your priorities, then propose a clear scope, approach, and possible timeline.',
          defaultSubject: 'Request: Consultation'
        }
      },

      formTitle: 'Fill the Form',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      phonePlaceholder: 'Your Phone Number',
      companyPlaceholder: 'Company Name (optional)',
      sizePlaceholder: 'Company Size (optional)',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Brief notes (current setup, needs, priorities)',
      submitButton: 'Send',
      successMessage: 'Your message has been sent successfully!',
      errorMessage: 'An error occurred while sending your message. Please try again.',
      requiredField: 'This field is required.',
      invalidEmail: 'Invalid email address.',
      sending: 'Sending...'
    }
  };

  const t = content[language] || content.en;

  const intentCopy = useMemo(() => {
    return t.intents[intent] || t.intents.consultation;
  }, [t, intent]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    size: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Pre-fill subject based on intent (only if subject is empty)
  useEffect(() => {
    setFormData(prev => {
      if (prev.subject?.trim()) return prev;
      return { ...prev, subject: intentCopy.defaultSubject };
    });
  }, [intentCopy.defaultSubject]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus(t.requiredField);
      return false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      setStatus(t.invalidEmail);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus(t.sending);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          intent, // capture intent in submissions
          ...formData
        }).toString()
      });

      if (response.ok) {
        setStatus(t.successMessage);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          size: '',
          subject: intentCopy.defaultSubject,
          message: ''
        });
      } else {
        setStatus(t.errorMessage);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus(t.errorMessage);
    }
  };

  const isSending = status === t.sending;

  return (
    <div className="container mx-auto pt-28 px-6 pb-12 bg-white rounded-lg">
      <h1 className="text-4xl font-bold text-center text-[#1f3b6f] mb-3">
        {intentCopy.title}
      </h1>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
        {intentCopy.description}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start text-gray-700 gap-3">
            <FaMapMarkerAlt className="text-xl text-red-500 mt-1" />
            <p className="text-sm">{t.address}</p>
          </div>

          <div className="flex items-start text-gray-700 gap-3">
            <FaEnvelope className="text-xl text-yellow-500 mt-1" />
            <p className="text-sm">{t.email}</p>
          </div>

          <div className="flex items-start text-gray-700 gap-3">
            <FaClock className="text-xl text-purple-500 mt-1" />
            <p className="text-sm">{t.hours}</p>
          </div>

          <div className="flex items-start text-gray-700 gap-3">
            <FaLinkedin className="text-xl text-blue-700 mt-1" />
            <a
              href="https://www.linkedin.com/company/tekfin-teknoloji-limited-sti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-700 hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4778.430377301186!2d28.945141497224295!3d41.02039129751813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1754528170081!5m2!1sen!2str"
            width="100%"
            height="200"
            className="rounded-md mt-4 border"
            allowFullScreen=""
            loading="lazy"
            title="TekFin Teknoloji Location"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner w-full max-w-lg mx-auto lg:mx-0">
          <h2 className="text-2xl font-bold text-[#1f3b6f] mb-4 text-center">{t.formTitle}</h2>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="intent" value={intent} />

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

            {/* Light B2B qualifiers (optional) */}
            <input
              type="text"
              name="company"
              placeholder={t.companyPlaceholder}
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="size"
              placeholder={t.sizePlaceholder}
              value={formData.size}
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
              rows="8"
              placeholder={t.messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-2 px-4 rounded-md font-medium transition ${
                isSending
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#1f3b6f] text-white hover:bg-blue-800'
              }`}
            >
              {isSending ? t.sending : t.submitButton}
            </button>

            {status && <p className="text-center mt-2 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
