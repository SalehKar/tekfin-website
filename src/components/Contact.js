import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin } from 'react-icons/fa';

const Contact = ({ language }) => {
  const [searchParams] = useSearchParams();
  const intent = (searchParams.get('intent') || 'consultation').toLowerCase();
  const isTR = language === 'tr';

  const content = {
    tr: {
      pageTitle: 'İletişim',
      address: 'Adres: İstanbul, Türkiye',
      email: 'E-posta: info@tekfinteknoloji.com',
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
      email: 'Email: info@tekfinteknoloji.com',
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
      const response = await fetch('https://api.tekfinteknoloji.com/.netlify/functions/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent,
          ...formData
        })
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
        const data = await response.json().catch(() => ({}));
        console.error('Contact submission failed:', data);
        setStatus(t.errorMessage);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus(t.errorMessage);
    }
  };

  const isSending = status === t.sending;

  const seoTitle = isTR ? 'İletişim | TekFin Teknoloji' : 'Contact | TekFin Teknoloji';
  const seoDescription = isTR ? 'TekFin Teknoloji ile işletmenizin veri depolama, yedekleme ve kurtarma ihtiyaçlarını görüşün.' : 'Contact TekFin Teknoloji about your business data storage, backup, and recovery needs.';
  const seoUrl = 'https://tekfinteknoloji.com/contact';

  return (
    <div className="tk-contact-page">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={seoUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:site_name" content="TekFin Teknoloji" />
        <meta property="og:locale" content={isTR || tr ? 'tr_TR' : 'en_US'} />
        <meta property="og:image" content="https://tekfinteknoloji.com/images/tekfin-logo-square.png?v=4" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://tekfinteknoloji.com/images/tekfin-logo-square.png?v=4" />
      </Helmet>
      
      <div className="tk-contact-container">
        <section className="tk-contact-hero">
          <div>
            <span className="tk-contact-eyebrow">{isTR ? 'TEKFIN TEKNOLOJİ' : 'TEKFIN TEKNOLOJİ'}</span>
            <h1>{intentCopy.title}</h1>
            <p>{intentCopy.description}</p>
          </div>
          <div className="tk-contact-hero-note">
            <span>{isTR ? 'İşletme Veri Altyapısı' : 'Business Data Infrastructure'}</span>
            <strong>{isTR ? 'Net kapsam. Doğru yaklaşım. Hızlı iletişim.' : 'Clear scope. Practical approach. Fast response.'}</strong>
          </div>
        </section>

        <section className="tk-contact-grid">
          <div className="tk-contact-info">
            <div className="tk-contact-info-header">
              <span className="tk-contact-section-label">{isTR ? 'İLETİŞİM' : 'CONTACT'}</span>
              <h2>{isTR ? 'İhtiyacınızı konuşalım.' : 'Let’s discuss your needs.'}</h2>
              <p>{isTR ? 'Depolama, yedekleme veya veri kurtarma ihtiyacınızı kısaca paylaşın.' : 'Tell us briefly about your storage, backup, or data recovery needs.'}</p>
            </div>

            <div className="tk-contact-details">
              <div className="tk-contact-detail">
                <FaMapMarkerAlt aria-hidden="true" />
                <div><span>{isTR ? 'Konum' : 'Location'}</span><p>{t.address.replace(/^.*?:\s*/, '')}</p></div>
              </div>
              <div className="tk-contact-detail">
                <FaEnvelope aria-hidden="true" />
                <div><span>{isTR ? 'E-posta' : 'Email'}</span><p>{t.email.replace(/^.*?:\s*/, '')}</p></div>
              </div>
              <div className="tk-contact-detail">
                <FaClock aria-hidden="true" />
                <div><span>{isTR ? 'Çalışma Saatleri' : 'Working Hours'}</span><p>{t.hours.replace(/^.*?:\s*/, '')}</p></div>
              </div>
              <div className="tk-contact-detail">
                <FaLinkedin aria-hidden="true" />
                <div><span>LinkedIn</span><a href="https://www.linkedin.com/company/tekfin-teknoloji-limited-sti" target="_blank" rel="noopener noreferrer">TekFin Teknoloji</a></div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4778.430377301186!2d28.945141497224295!3d41.02039129751813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1754528170081!5m2!1sen!2str"
              width="100%"
              height="210"
              className="tk-contact-map"
              allowFullScreen=""
              loading="lazy"
              title="TekFin Teknoloji Location"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="tk-contact-form-card">
            <div className="tk-contact-form-heading">
              <span className="tk-contact-section-label">{isTR ? 'MESAJINIZ' : 'YOUR MESSAGE'}</span>
              <h2>{t.formTitle}</h2>
              <p>{isTR ? 'Alanları doldurun; ekibimiz size geri dönüş yapacaktır.' : 'Complete the form and our team will get back to you.'}</p>
            </div>

            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="tk-contact-form">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="intent" value={intent} />

              <div className="tk-contact-field"><input type="text" name="name" placeholder={t.namePlaceholder} value={formData.name} onChange={handleChange} required /></div>
              <div className="tk-contact-field"><input type="email" name="email" placeholder={t.emailPlaceholder} value={formData.email} onChange={handleChange} required /></div>
              <div className="tk-contact-field"><input type="tel" name="phone" placeholder={t.phonePlaceholder} value={formData.phone} onChange={handleChange} /></div>
              <div className="tk-contact-field"><input type="text" name="company" placeholder={t.companyPlaceholder} value={formData.company} onChange={handleChange} /></div>
              <div className="tk-contact-field"><input type="text" name="size" placeholder={t.sizePlaceholder} value={formData.size} onChange={handleChange} /></div>
              <div className="tk-contact-field"><input type="text" name="subject" placeholder={t.subjectPlaceholder} value={formData.subject} onChange={handleChange} /></div>
              <div className="tk-contact-field tk-contact-field-full"><textarea name="message" rows="7" placeholder={t.messagePlaceholder} value={formData.message} onChange={handleChange} required /></div>

              <button type="submit" disabled={isSending} className="tk-contact-submit">
                {isSending ? t.sending : t.submitButton}
              </button>
              {status && <p className={status === t.successMessage ? 'tk-contact-status success' : 'tk-contact-status'} role="status">{status}</p>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
