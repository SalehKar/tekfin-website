import React, { useState } from 'react';
import './StorageAdvisor.css';

const StorageAdvisor = ({ language }) => {
  const [usage, setUsage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [speed, setSpeed] = useState('');
  const [budget, setBudget] = useState('');
  const [portability, setPortability] = useState('');
  const [recommendation, setRecommendation] = useState(null);

  const content = {
    tr: {
      title: "Depolama Cihazı Danışmanı",
      description: "İhtiyaçlarınıza en uygun depolama cihazını bulmanıza yardımcı olalım.",
      usageLabel: "Ana Kullanım Amacı:",
      usageOptions: [
        { value: 'personal', label: 'Kişisel Depolama (fotoğraf, belge)' },
        { value: 'gaming', label: 'Oyun (hızlı yükleme, yüksek kapasite)' },
        { value: 'video_editing', label: 'Video Düzenleme/Grafik Tasarım (yüksek hız, yüksek kapasite)' },
        { value: 'backup', label: 'Yedekleme (yüksek kapasite, güvenilirlik)' },
        { value: 'office', label: 'Ofis/İş (dengeli performans, güvenlik)' },
      ],
      capacityLabel: "İhtiyaç Duyulan Kapasite:",
      capacityOptions: [
        { value: 'lt500gb', label: '500 GB altı' },
        { value: '500gb_1tb', label: '500 GB - 1 TB' },
        { value: '1tb_4tb', label: '1 TB - 4 TB' },
        { value: 'gt4tb', label: '4 TB üzeri' },
      ],
      speedLabel: "İstenen Hız:",
      speedOptions: [
        { value: 'very_high', label: 'Çok Yüksek (NVMe SSD)' },
        { value: 'high', label: 'Yüksek (SATA SSD)' },
        { value: 'medium', label: 'Orta (HDD)' },
      ],
      budgetLabel: "Yaklaşık Bütçe:",
      budgetOptions: [
        { value: 'low', label: 'Ekonomik (500 TL altı)' },
        { value: 'medium', label: 'Orta (500 - 1500 TL)' },
        { value: 'high', label: 'Yüksek (1500 TL üzeri)' },
      ],
      portabilityLabel: "Taşınabilirlik:",
      portabilityOptions: [
        { value: 'portable', label: 'Taşınabilir (harici)' },
        { value: 'fixed', label: 'Sabit (dahili/masaüstü)' },
      ],
      recommendButton: "Tavsiye Al",
      recommendationTitle: "Önerilen Depolama Cihazı:",
      noRecommendation: "Seçimlerinize uygun bir depolama cihazı bulunamadı. Lütfen seçimlerinizi değiştirin.",
      // Recommendations
      nvme_gaming_high_budget: {
        type: "NVMe SSD",
        reason: "Oyun ve yüksek performanslı uygulamalar için en hızlı çözümdür. Yüksek bütçenizle en iyi deneyimi yaşayabilirsiniz.",
        price: "1500 TL üzeri",
        brands: "Samsung 990 Pro, WD Black SN850X, Crucial T705",
        stores: "Hepsiburada, Trendyol, Vatan Bilgisayar"
      },
      sata_general_medium_budget: {
        type: "SATA SSD",
        reason: "Günlük kullanım ve genel performans artışı için idealdir. Orta bütçenizle iyi bir denge sunar.",
        price: "500 - 1500 TL",
        brands: "Samsung 870 EVO, Kingston A400",
        stores: "Hepsiburada, Trendyol, MediaMarkt"
      },
      hdd_backup_low_budget: {
        type: "Harici HDD",
        reason: "Büyük miktarda veri yedeklemek için en uygun maliyetli çözümdür. Düşük bütçenizle yüksek kapasite elde edebilirsiniz.",
        price: "500 TL altı",
        brands: "Seagate Expansion, WD My Passport",
        stores: "Hepsiburada, Trendyol, Amazon.com.tr"
      },
      nvme_video_editing_high_budget: {
        type: "NVMe SSD",
        reason: "Video düzenleme ve grafik tasarım gibi yoğun işlemler için ultra yüksek hız ve performans sunar. Yüksek bütçenizle iş akışınızı hızlandırın.",
        price: "1500 TL üzeri",
        brands: "Samsung 990 Pro, Crucial T705",
        stores: "Hepsiburada, Trendyol, Vatan Bilgisayar"
      },
      sata_office_medium_budget: {
        type: "SATA SSD",
        reason: "Ofis kullanımı ve iş uygulamaları için hızlı ve güvenilir bir çözümdür. Dengeli performans ve orta bütçe için idealdir.",
        price: "500 - 1500 TL",
        brands: "Samsung 870 EVO, Kingston A400",
        stores: "Hepsiburada, Trendyol, MediaMarkt"
      },
      hdd_personal_low_budget: {
        type: "Dahili/Harici HDD",
        reason: "Kişisel fotoğraf ve belge depolama için uygun maliyetli ve geniş kapasiteli bir seçenektir. Düşük bütçenizle yeterli alan sağlar.",
        price: "500 TL altı",
        brands: "Seagate BarraCuda, WD Blue",
        stores: "Hepsiburada, Trendyol, Amazon.com.tr"
      },
      // Default recommendation if no specific match
      default_recommendation: {
        type: "Çok Yönlü SSD (SATA veya NVMe)",
        reason: "Genel kullanım için hızlı ve güvenilir bir SSD önerilir. İhtiyaçlarınıza göre kapasite ve hız seçimi yapabilirsiniz.",
        price: "500 - 1500 TL",
        brands: "Samsung, WD, Kingston",
        stores: "Hepsiburada, Trendyol, Vatan Bilgisayar"
      }
    },
    en: {
      title: "Storage Device Advisor",
      description: "Let us help you find the perfect storage device for your needs.",
      usageLabel: "Main Usage:",
      usageOptions: [
        { value: 'personal', label: 'Personal Storage (photos, documents)' },
        { value: 'gaming', label: 'Gaming (fast loading, high capacity)' },
        { value: 'video_editing', label: 'Video Editing/Graphic Design (high speed, high capacity)' },
        { value: 'backup', label: 'Backup (high capacity, reliability)' },
        { value: 'office', label: 'Office/Business (balanced performance, security)' },
      ],
      capacityLabel: "Required Capacity:",
      capacityOptions: [
        { value: 'lt500gb', label: 'Less than 500 GB' },
        { value: '500gb_1tb', label: '500 GB - 1 TB' },
        { value: '1tb_4tb', label: '1 TB - 4 TB' },
        { value: 'gt4tb', label: 'More than 4 TB' },
      ],
      speedLabel: "Desired Speed:",
      speedOptions: [
        { value: 'very_high', label: 'Very High (NVMe SSD)' },
        { value: 'high', label: 'High (SATA SSD)' },
        { value: 'medium', label: 'Medium (HDD)' },
      ],
      budgetLabel: "Approximate Budget:",
      budgetOptions: [
        { value: 'low', label: 'Economical (Under 500 TL)' },
        { value: 'medium', label: 'Medium (500 - 1500 TL)' },
        { value: 'high', label: 'High (Over 1500 TL)' },
      ],
      portabilityLabel: "Portability:",
      portabilityOptions: [
        { value: 'portable', label: 'Portable (external)' },
        { value: 'fixed', label: 'Fixed (internal/desktop)' },
      ],
      recommendButton: "Get Recommendation",
      recommendationTitle: "Recommended Storage Device:",
      noRecommendation: "No storage device found matching your selections. Please adjust your choices.",
      // Recommendations
      nvme_gaming_high_budget: {
        type: "NVMe SSD",
        reason: "The fastest solution for gaming and high-performance applications. With your high budget, you can get the best experience.",
        price: "Over 1500 TL",
        brands: "Samsung 990 Pro, WD Black SN850X, Crucial T705",
        stores: "Hepsiburada, Trendyol, Vatan Bilgisayar"
      },
      sata_general_medium_budget: {
        type: "SATA SSD",
        reason: "Ideal for daily use and general performance improvement. Offers a good balance with your medium budget.",
        price: "500 - 1500 TL",
        brands: "Samsung 870 EVO, Kingston A400",
        stores: "Hepsiburada, Trendyol, MediaMarkt"
      },
      hdd_backup_low_budget: {
        type: "External HDD",
        reason: "The most cost-effective solution for backing up large amounts of data. You can get high capacity with your low budget.",
        price: "Under 500 TL",
        brands: "Seagate Expansion, WD My Passport",
        stores: "Hepsiburada, Trendyol, Amazon.com.tr"
      },
      nvme_video_editing_high_budget: {
        type: "NVMe SSD",
        reason: "Offers ultra-high speed and performance for demanding tasks like video editing and graphic design. Accelerate your workflow with your high budget.",
        price: "Over 1500 TL",
        brands: "Samsung 990 Pro, Crucial T705",
        stores: "Hepsiburada, Trendyol, Vatan Bilgisayar"
      },
      sata_office_medium_budget: {
        type: "SATA SSD",
        reason: "A fast and reliable solution for office use and business applications. Ideal for balanced performance and a medium budget.",
        price: "500 - 1500 TL",
        brands: "Samsung 870 EVO, Kingston A400",
        stores: "Hepsiburada, Trendyol, MediaMarkt"
      },
      hdd_personal_low_budget: {
        type: "Internal/External HDD",
        reason: "A cost-effective and high-capacity option for personal photo and document storage. Provides sufficient space with your low budget.",
        price: "Under 500 TL",
        brands: "Seagate BarraCuda, WD Blue",
        stores: "Hepsiburada, Trendyol, Amazon.com.tr"
      },
      // Default recommendation if no specific match
      default_recommendation: {
        type: "Versatile SSD (SATA or NVMe)",
        reason: "A fast and reliable SSD is recommended for general use. You can choose capacity and speed according to your needs.",
        price: "500 - 1500 TL",
        brands: "Samsung, WD, Kingston",
        stores: "Hepsiburada, Trendyol, Vatan Bilgisayar"
      }
    }
  };

  const t = content[language];

  const getRecommendation = () => {
    if (!usage || !capacity || !speed || !budget || !portability) {
      setRecommendation(null);
      return;
    }

    // Logic for recommendations based on selected criteria
    if (usage === 'gaming' && speed === 'very_high' && budget === 'high') {
      setRecommendation(t.nvme_gaming_high_budget);
    } else if (usage === 'video_editing' && speed === 'very_high' && budget === 'high') {
      setRecommendation(t.nvme_video_editing_high_budget);
    } else if (usage === 'backup' && speed === 'medium' && budget === 'low') {
      setRecommendation(t.hdd_backup_low_budget);
    } else if (usage === 'office' && speed === 'high' && budget === 'medium') {
      setRecommendation(t.sata_office_medium_budget);
    } else if (usage === 'personal' && speed === 'medium' && budget === 'low') {
      setRecommendation(t.hdd_personal_low_budget);
    } else if (speed === 'high' && budget === 'medium') {
      setRecommendation(t.sata_general_medium_budget);
    } else {
      setRecommendation(t.default_recommendation);
    }
  };

  return (
    <div className="storage-advisor">
      <div className="container">
        <h1 className="page-title">{t.title}</h1>
        <p className="advisor-description">{t.description}</p>

        <div className="advisor-form">
          <div className="form-group">
            <label>{t.usageLabel}</label>
            <select value={usage} onChange={(e) => setUsage(e.target.value)}>
              <option value="">-- {language === 'tr' ? 'Seçiniz' : 'Select'} --</option>
              {t.usageOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.capacityLabel}</label>
            <select value={capacity} onChange={(e) => setCapacity(e.target.value)}>
              <option value="">-- {language === 'tr' ? 'Seçiniz' : 'Select'} --</option>
              {t.capacityOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.speedLabel}</label>
            <select value={speed} onChange={(e) => setSpeed(e.target.value)}>
              <option value="">-- {language === 'tr' ? 'Seçiniz' : 'Select'} --</option>
              {t.speedOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.budgetLabel}</label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">-- {language === 'tr' ? 'Seçiniz' : 'Select'} --</option>
              {t.budgetOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t.portabilityLabel}</label>
            <select value={portability} onChange={(e) => setPortability(e.target.value)}>
              <option value="">-- {language === 'tr' ? 'Seçiniz' : 'Select'} --</option>
              {t.portabilityOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <button onClick={getRecommendation} className="recommend-button">
            {t.recommendButton}
          </button>
        </div>

        {recommendation && (
          <div className="recommendation-result">
            <h2>{t.recommendationTitle}</h2>
            <h3>{recommendation.type}</h3>
            <p><strong>{language === 'tr' ? 'Neden:' : 'Reason:'}</strong> {recommendation.reason}</p>
            <p><strong>{language === 'tr' ? 'Tahmini Fiyat Aralığı:' : 'Estimated Price Range:'}</strong> {recommendation.price}</p>
            <p><strong>{language === 'tr' ? 'Önerilen Markalar:' : 'Recommended Brands:'}</strong> {recommendation.brands}</p>
            <p><strong>{language === 'tr' ? 'Bulunabileceği Mağazalar:' : 'Available at Stores:'}</strong> {recommendation.stores}</p>
          </div>
        )}

        {!recommendation && usage && capacity && speed && budget && portability && (
          <p className="no-recommendation">{t.noRecommendation}</p>
        )}
      </div>
    </div>
  );
};

export default StorageAdvisor;

