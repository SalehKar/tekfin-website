import React, { useState } from 'react';
import './StorageAdvisor.css';

const StorageAdvisor = ({ language }) => {
  const [usage, setUsage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [speed, setSpeed] = useState('');
  const [budget, setBudget] = useState('');
  const [portability, setPortability] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [email, setEmail] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const content = {
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
      emailPrompt: "Enter your email to see the recommendation:",
      submit: "Submit",
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
        reason: "Offers ultra-high speed and performance for demanding tasks like video editing and graphic design.",
        price: "Over 1500 TL",
        brands: "Samsung 990 Pro, Crucial T705",
        stores: "Hepsiburada, Trendyol, Vatan Bilgisayar"
      },
      sata_office_medium_budget: {
        type: "SATA SSD",
        reason: "A fast and reliable solution for office use and business applications.",
        price: "500 - 1500 TL",
        brands: "Samsung 870 EVO, Kingston A400",
        stores: "Hepsiburada, Trendyol, MediaMarkt"
      },
      hdd_personal_low_budget: {
        type: "Internal/External HDD",
        reason: "A cost-effective option for personal document/photo storage.",
        price: "Under 500 TL",
        brands: "Seagate BarraCuda, WD Blue",
        stores: "Hepsiburada, Trendyol, Amazon.com.tr"
      },
      default_recommendation: {
        type: "Versatile SSD (SATA or NVMe)",
        reason: "A fast and reliable SSD is recommended for general use.",
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
    setShowEmailModal(true);
  };

  const submitEmail = () => {
    if (!email.includes('@')) {
      alert("Please enter a valid email.");
      return;
    }

    console.log("User Email Saved:", email);
    console.log("Selections:", { usage, capacity, speed, budget, portability });

    setEmailSubmitted(true);
    setShowEmailModal(false);
    matchRecommendation();
  };

  const matchRecommendation = () => {
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
              <option value="">-- Select --</option>
              {t.usageOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>{t.capacityLabel}</label>
            <select value={capacity} onChange={(e) => setCapacity(e.target.value)}>
              <option value="">-- Select --</option>
              {t.capacityOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>{t.speedLabel}</label>
            <select value={speed} onChange={(e) => setSpeed(e.target.value)}>
              <option value="">-- Select --</option>
              {t.speedOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>{t.budgetLabel}</label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">-- Select --</option>
              {t.budgetOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>{t.portabilityLabel}</label>
            <select value={portability} onChange={(e) => setPortability(e.target.value)}>
              <option value="">-- Select --</option>
              {t.portabilityOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <button onClick={getRecommendation} className="recommend-button">
            {t.recommendButton}
          </button>
        </div>

        {showEmailModal && !emailSubmitted && (
          <div className="email-modal">
            <h3>{t.emailPrompt}</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
            <button onClick={submitEmail}>{t.submit}</button>
          </div>
        )}

        {recommendation && (
          <div className="recommendation-result">
            <h2>{t.recommendationTitle}</h2>
            <h3>{recommendation.type}</h3>
            <p><strong>Reason:</strong> {recommendation.reason}</p>
            <p><strong>Estimated Price Range:</strong> {recommendation.price}</p>
            <p><strong>Recommended Brands:</strong> {recommendation.brands}</p>
            <p><strong>Available at Stores:</strong> {recommendation.stores}</p>
          </div>
        )}

        {!recommendation && usage && capacity && speed && budget && portability && emailSubmitted && (
          <p className="no-recommendation">{t.noRecommendation}</p>
        )}
      </div>
    </div>
  );
};

export default StorageAdvisor;
