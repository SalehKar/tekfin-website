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
      portabil
