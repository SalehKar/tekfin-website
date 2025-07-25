// recommendations.js

const recommendations = [
  // --- VIDEO USAGE: lt500 ---
  {
    conditions: { usage: 'video', capacity: 'lt500', speed: 'high', portability: 'portable' },
    recommendation: {
      en: 'A 500GB USB 3.2 external SSD (e.g., Samsung T5 or Crucial X6) offers a compact solution for light video work on the go.',
      tr: 'Hafif video işleri için 500GB USB 3.2 harici SSD (örneğin Samsung T5 veya Crucial X6) taşınabilir ve kompakt bir çözümdür.'
    },
    brands: ['Samsung T5', 'Crucial X6'],

  },
  {
    conditions: { usage: 'video', capacity: 'lt500', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'For basic fixed setups, a 500GB SATA SSD (e.g., Kingston A400 or WD Green) provides modest speed for video playback and light edits.',
      tr: 'Temel sabit kurulumlar için, 500GB SATA SSD (örneğin Kingston A400 veya WD Green) video oynatma ve hafif düzenlemeler için makul hız sunar.'
    },
    brands: ['Kingston A400', 'WD Green'],

  },
  {
    conditions: { usage: 'video', capacity: 'lt500', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'For ultra-speed in tight capacity, a 500GB Thunderbolt SSD (e.g., Samsung X5) ensures top-notch transfer rates in a compact size.',
      tr: 'Küçük kapasitede ultra hız için, 500GB Thunderbolt SSD (örneğin Samsung X5) kompakt boyutta üst düzey aktarım hızları sunar.'
    },
    brands: ['Samsung X5'],

  },
  {
    conditions: { usage: 'video', capacity: 'lt500', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: 'Although limited in capacity, a 500GB NVMe SSD (e.g., WD Black SN770) installed internally offers excellent speed for short-form video work.',
      tr: 'Kapasitesi sınırlı olsa da, dahili takılmış 500GB NVMe SSD (örneğin WD Black SN770) kısa video projeleri için mükemmel hız sunar.'
    },
    brands: ['WD Black SN770'],

  },
  {
    conditions: { usage: 'video', capacity: 'lt500', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'Low-speed and low-capacity combo is unsuitable for video usage. Please consider increasing either speed or capacity.',
      tr: 'Düşük hız ve düşük kapasite kombinasyonu video kullanımı için uygun değildir. Lütfen hızı veya kapasiteyi artırmayı düşünün.'
    },
    brands: [],

  },
  {
    conditions: { usage: 'video', capacity: 'lt500', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'For portable low-speed use, a 500GB USB 2.0 HDD might work, but performance will be poor for video. Upgrade suggested.',
      tr: 'Taşınabilir düşük hızlı kullanım için 500GB USB 2.0 HDD çalışabilir ancak video performansı zayıf olur. Yükseltme önerilir.'
    },
    brands: ['Toshiba Canvio Basics'],
  
  },

  // --- VIDEO USAGE: 500_1tb ---
  {
    conditions: { usage: 'video', capacity: '500_1tb', speed: 'high', portability: 'portable' },
    recommendation: {
      en: '1TB external SSD (e.g., SanDisk Extreme Portable) is ideal for editing videos on laptops or in mobile workflows.',
      tr: '1TB harici SSD (örneğin SanDisk Extreme Portable) dizüstü bilgisayarlarda veya mobil iş akışlarında video düzenlemek için idealdir.'
    },
    brands: ['SanDisk Extreme Portable'],

  },
  {
    conditions: { usage: 'video', capacity: '500_1tb', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: 'A 1TB PCIe NVMe Gen3 SSD (e.g., WD Black SN750) ensures high-speed read/write for 4K editing in desktop setups.',
      tr: '1TB PCIe NVMe Gen3 SSD (örneğin WD Black SN750), masaüstü kurulumlarda 4K düzenleme için yüksek hızlı okuma/yazma sunar.'
    },
    brands: ['WD Black SN750'],

  },
  {
    conditions: { usage: 'video', capacity: '500_1tb', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'Avoid using low-speed storage for video. Even at 1TB, it may bottleneck performance.',
      tr: 'Video için düşük hızlı depolama kullanımından kaçının. 1TB olsa bile performans sınırlayıcı olabilir.'
    },
    brands: [],

  },
  {
    conditions: { usage: 'video', capacity: '500_1tb', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'Consider switching to SSDs. Low-speed HDDs aren’t optimal for video editing, even at 1TB.',
      tr: '1TB olsa bile, düşük hızlı HDD\'ler video düzenleme için uygun değildir. SSD\'ye geçmeniz önerilir.'
    },
    brands: ['Seagate Barracuda HDD'],
  
  },
  {
    conditions: { usage: 'video', capacity: '500_1tb', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'For fixed systems, a 1TB SATA SSD (e.g., Crucial MX500) balances price and performance for video editing.',
      tr: 'Sabit sistemler için 1TB SATA SSD (örneğin Crucial MX500) video düzenleme için fiyat ve performansı dengeler.'
    },
    brands: ['Crucial MX500'],

  },
  {
    conditions: { usage: 'video', capacity: '500_1tb', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'A 1TB Thunderbolt 3 SSD (e.g., SanDisk Professional G-Drive) is perfect for high-speed mobile editing needs.',
      tr: 'Yüksek hızlı mobil düzenleme ihtiyaçları için 1TB Thunderbolt 3 SSD (örneğin SanDisk Professional G-Drive) mükemmeldir.'
    },
    brands: ['SanDisk Professional G-Drive'],

  },

  // --- VIDEO USAGE: 1tb_4tb ---
  {
    conditions: { usage: 'video', capacity: '1tb_4tb', speed: 'high', portability: 'portable' },
    recommendation: {
      en: '2TB USB 3.2 rugged SSD (e.g., LaCie Rugged) combines durability and speed for outdoor video work.',
      tr: '2TB USB 3.2 dayanıklı SSD (örneğin LaCie Rugged), dış mekan video işleri için dayanıklılık ve hızı birleştirir.'
    },
    brands: ['LaCie Rugged'],
 
  },
  {
    conditions: { usage: 'video', capacity: '1tb_4tb', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'A 2TB SATA SSD (e.g., Samsung 870 EVO) is great for high-quality 1080p/4K video editing on a desktop.',
      tr: '2TB SATA SSD (örneğin Samsung 870 EVO), masaüstünde yüksek kaliteli 1080p/4K video düzenleme için uygundur.'
    },
    brands: ['Samsung 870 EVO'],

  },
  {
    conditions: { usage: 'video', capacity: '1tb_4tb', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'For ultra-fast 4K/8K editing, use a 4TB Thunderbolt 4 SSD (e.g., Glyph Atom Pro).',
      tr: 'Ultra hızlı 4K/8K düzenleme için 4TB Thunderbolt 4 SSD (örneğin Glyph Atom Pro) kullanın.'
    },
    brands: ['Glyph Atom Pro'],
  
  },
  {
    conditions: { usage: 'video', capacity: '1tb_4tb', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: 'For workstation power, a 4TB PCIe Gen4 NVMe SSD (e.g., Sabrent Rocket 4 Plus) ensures blazing-fast editing.',
      tr: 'İş istasyonu gücü için 4TB PCIe Gen4 NVMe SSD (örneğin Sabrent Rocket 4 Plus) son derece hızlı düzenleme sağlar.'
    },
    brands: ['Sabrent Rocket 4 Plus'],

  },
  {
    conditions: { usage: 'video', capacity: '1tb_4tb', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'Portable HDDs (e.g., 2TB Seagate Backup Plus) are not ideal for editing but work for raw footage storage.',
      tr: 'Taşınabilir HDD\'ler (örneğin 2TB Seagate Backup Plus), düzenleme için ideal olmasa da ham görüntü depolaması için uygundur.'
    },
    brands: ['Seagate Backup Plus'],
 
  },
  {
    conditions: { usage: 'video', capacity: '1tb_4tb', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'For archiving, a 4TB 5400RPM desktop HDD (e.g., WD Blue) is acceptable, but avoid for editing.',
      tr: 'Arşivleme için 4TB 5400RPM masaüstü HDD (örneğin WD Blue) kabul edilebilir, ancak düzenleme için önerilmez.'
    },
    brands: ['WD Blue'],
   
  },
   // --- VIDEO USAGE: gt4tb ---
  {
    conditions: { usage: 'video', capacity: 'gt4tb', speed: 'high', portability: 'portable' },
    recommendation: {
      en: 'A 5TB USB 3.2 external HDD (e.g., WD My Passport) offers solid performance and capacity for field video storage.',
      tr: '5TB USB 3.2 harici HDD (örneğin WD My Passport), saha video depolama için iyi performans ve kapasite sunar.'
    },
    brands: ['WD My Passport'],
  },
  {
    conditions: { usage: 'video', capacity: 'gt4tb', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'A 6TB SATA HDD (e.g., Seagate IronWolf) is suited for high-capacity archiving and occasional video edits.',
      tr: '6TB SATA HDD (örneğin Seagate IronWolf), yüksek kapasiteli arşivleme ve ara sıra video düzenleme için uygundur.'
    },
    brands: ['Seagate IronWolf'],
  },
  {
    conditions: { usage: 'video', capacity: 'gt4tb', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'A 4TB Thunderbolt 3 SSD (e.g., G-Drive Pro SSD) enables fast video editing in mobile workflows with large files.',
      tr: '4TB Thunderbolt 3 SSD (örneğin G-Drive Pro SSD), büyük dosyalarla mobil iş akışlarında hızlı video düzenlemeye olanak tanır.'
    },
    brands: ['G-Drive Pro SSD'],

  },
  {
    conditions: { usage: 'video', capacity: 'gt4tb', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: 'A 8TB PCIe Gen4 NVMe SSD array or RAID (e.g., Samsung 990 PRO RAID) is ideal for 8K+ editing on high-end workstations.',
      tr: '8TB PCIe Gen4 NVMe SSD dizisi veya RAID (örneğin Samsung 990 PRO RAID), üst düzey iş istasyonlarında 8K+ düzenleme için idealdir.'
    },
    brands: ['Samsung 990 PRO RAID'],
   
  },
  {
    conditions: { usage: 'video', capacity: 'gt4tb', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'Portable drives over 4TB with low speed (e.g., 5400RPM HDDs) are only suitable for backup, not editing.',
      tr: '4TB üzeri düşük hızlı taşınabilir sürücüler (örneğin 5400RPM HDD'ler) yalnızca yedekleme için uygundur, düzenleme için değil.'
    },
    brands: ['WD Elements 5TB'],
  
  },
  {
    conditions: { usage: 'video', capacity: 'gt4tb', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'Fixed 6–8TB 5400RPM HDDs (e.g., Seagate Archive) are viable for long-term video archiving, not active projects.',
      tr: 'Sabit 6–8TB 5400RPM HDD'ler (örneğin Seagate Archive), uzun vadeli video arşivleme için uygundur, aktif projeler için değil.'
    },
    brands: ['Seagate Archive HDD'],
 
  },
    // --- BACKUP USAGE: lt500 ---
  {
    conditions: { usage: 'backup', capacity: 'lt500', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'For basic portable backups, a 320GB external HDD may suffice, but consider upgrading for long-term use.',
      tr: 'Temel taşınabilir yedeklemeler için 320GB harici HDD yeterli olabilir, ancak uzun vadeli kullanım için yükseltme düşünülmelidir.'
    },
    brands: ['WD Elements 320GB'],

  },
  {
    conditions: { usage: 'backup', capacity: 'lt500', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'For occasional backups, a 500GB 5400RPM internal HDD can be used, but lacks performance for frequent tasks.',
      tr: 'Ara sıra yedekleme için 500GB 5400RPM dahili HDD kullanılabilir, ancak sık işlemler için performansı yetersizdir.'
    },
    brands: ['Seagate Barracuda 500GB'],

  },
  {
    conditions: { usage: 'backup', capacity: 'lt500', speed: 'high', portability: 'portable' },
    recommendation: {
      en: 'A 500GB USB 3.0 SSD improves backup speed and reliability in compact size.',
      tr: '500GB USB 3.0 SSD, kompakt boyutta yedekleme hızını ve güvenilirliğini artırır.'
    },
    brands: ['Crucial X6'],

  },
  {
    conditions: { usage: 'backup', capacity: 'lt500', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'Use a 500GB SATA SSD in a desktop for faster routine backups and better longevity.',
      tr: 'Daha hızlı rutin yedeklemeler ve daha uzun ömür için masaüstünde 500GB SATA SSD kullanın.'
    },
    brands: ['Kingston A400'],

  },
  {
    conditions: { usage: 'backup', capacity: 'lt500', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'Ultra-fast portable SSDs (e.g., Thunderbolt) at 500GB are ideal for small but frequent backup jobs.',
      tr: '500GB boyutundaki ultra hızlı taşınabilir SSD'ler (örneğin Thunderbolt), küçük ancak sık yapılan yedeklemeler için idealdir.'
    },
    brands: ['Samsung X5'],

  },
  {
    conditions: { usage: 'backup', capacity: 'lt500', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: '500GB NVMe SSDs in fixed setups offer excellent backup speed, though larger capacity is often recommended.',
      tr: 'Sabit kurulumlarda 500GB NVMe SSD'ler mükemmel yedekleme hızı sunar, ancak genellikle daha büyük kapasite önerilir.'
    },
    brands: ['WD Black SN770'],

  },
    // --- BACKUP USAGE: 500_1tb ---
  {
    conditions: { usage: 'backup', capacity: '500_1tb', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'A 1TB external HDD is an affordable option for infrequent personal backups.',
      tr: '1TB harici HDD, seyrek kişisel yedeklemeler için uygun maliyetli bir seçenektir.'
    },
    brands: ['WD My Passport']
  },
  {
    conditions: { usage: 'backup', capacity: '500_1tb', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'A 1TB 5400RPM internal HDD provides basic backup capacity but lacks performance for rapid recovery needs.',
      tr: '1TB 5400RPM dahili HDD, temel yedekleme kapasitesi sunar ancak hızlı kurtarma ihtiyaçları için yeterli performans sağlamaz.'
    },
    brands: ['Seagate Barracuda']
  },
  {
    conditions: { usage: 'backup', capacity: '500_1tb', speed: 'high', portability: 'portable' },
    recommendation: {
      en: 'For daily backups, a 1TB USB 3.1 portable SSD (e.g., SanDisk Extreme) offers good speed and reliability.',
      tr: 'Günlük yedeklemeler için 1TB USB 3.1 taşınabilir SSD (örneğin SanDisk Extreme) iyi hız ve güvenilirlik sunar.'
    },
    brands: ['SanDisk Extreme']
  },
  {
    conditions: { usage: 'backup', capacity: '500_1tb', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'A 1TB SATA SSD in desktop environments ensures faster backups and smoother access to saved files.',
      tr: 'Masaüstü ortamlarında 1TB SATA SSD, daha hızlı yedeklemeler ve kaydedilen dosyalara daha sorunsuz erişim sağlar.'
    },
    brands: ['Kingston A400']
  },
  {
    conditions: { usage: 'backup', capacity: '500_1tb', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: '1TB Thunderbolt portable SSDs are great for professionals who value backup speed and mobility.',
      tr: '1TB Thunderbolt taşınabilir SSD\'ler, yedekleme hızı ve taşınabilirliğe önem veren profesyoneller için harikadır.'
    },
    brands: ['Samsung X5']
  },
  {
    conditions: { usage: 'backup', capacity: '500_1tb', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: 'A 1TB NVMe SSD is excellent for power users needing fast automated backups on a desktop.',
      tr: '1TB NVMe SSD, masaüstünde hızlı otomatik yedekleme gereksinimi olan ileri düzey kullanıcılar için mükemmeldir.'
    },
    brands: ['WD Black SN770']
  },
    // --- BACKUP USAGE: 1tb_4tb ---
  {
    conditions: { usage: 'backup', capacity: '1tb_4tb', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'A 2TB portable HDD is ideal for affordable mass backups but may be slow for frequent usage.',
      tr: 'Uygun maliyetli toplu yedeklemeler için 2TB taşınabilir HDD idealdir, ancak sık kullanımda yavaş kalabilir.'
    },
    brands: ['WD Elements 2TB']
  },
  {
    conditions: { usage: 'backup', capacity: '1tb_4tb', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'A 4TB 5400RPM desktop HDD offers cost-effective storage for archival and infrequent backups.',
      tr: '4TB 5400RPM masaüstü HDD, arşivleme ve seyrek yedeklemeler için uygun maliyetli depolama sunar.'
    },
    brands: ['Seagate Desktop HDD 4TB']
  },
  {
    conditions: { usage: 'backup', capacity: '1tb_4tb', speed: 'high', portability: 'portable' },
    recommendation: {
      en: '2TB USB 3.1 portable SSDs offer a good balance between speed, size, and mobility for daily backups.',
      tr: '2TB USB 3.1 taşınabilir SSD'ler günlük yedeklemeler için hız, boyut ve taşınabilirlik arasında iyi bir denge sunar.'
    },
    brands: ['SanDisk Extreme 2TB']
  },
  {
    conditions: { usage: 'backup', capacity: '1tb_4tb', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'A 2TB SATA SSD in desktop ensures fast, frequent backups with better endurance over HDDs.',
      tr: 'Masaüstü kullanımında 2TB SATA SSD, HDD'lere göre daha iyi dayanıklılık ile hızlı ve sık yedeklemeler sağlar.'
    },
    brands: ['Kingston A400 2TB']
  },
  {
    conditions: { usage: 'backup', capacity: '1tb_4tb', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'A 4TB Thunderbolt SSD gives professionals ultra-fast portable backups for large datasets.',
      tr: '4TB Thunderbolt SSD, büyük veri kümeleri için profesyonellere ultra hızlı taşınabilir yedekleme sağlar.'
    },
    brands: ['Samsung X5 4TB']
  },
  {
    conditions: { usage: 'backup', capacity: '1tb_4tb', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: '3TB or 4TB NVMe SSDs provide unmatched backup speeds in workstation environments.',
      tr: '3TB veya 4TB NVMe SSD'ler, iş istasyonu ortamlarında rakipsiz yedekleme hızları sunar.'
    },
    brands: ['WD Black SN850X']
  },

  // --- BACKUP USAGE: gt4tb ---
  {
    conditions: { usage: 'backup', capacity: 'gt4tb', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'A 5TB external HDD offers large volume at low cost, ideal for cold storage or archival backups.',
      tr: '5TB harici HDD düşük maliyetle büyük hacim sunar, soğuk depolama veya arşiv yedeklemeleri için idealdir.'
    },
    brands: ['Seagate Backup Plus 5TB']
  },
  {
    conditions: { usage: 'backup', capacity: 'gt4tb', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: '6TB or larger 5400RPM HDDs suit archival storage with minimal access needs.',
      tr: '6TB veya daha büyük 5400RPM HDD\'ler, nadiren erişilen arşiv depolama için uygundur.'
    },
    brands: ['WD Blue 6TB']
  },
  {
    conditions: { usage: 'backup', capacity: 'gt4tb', speed: 'high', portability: 'portable' },
    recommendation: {
      en: 'A 5TB USB 3.2 portable HDD provides large backup space with decent transfer speed for mobile users.',
      tr: '5TB USB 3.2 taşınabilir HDD, mobil kullanıcılar için iyi aktarım hızıyla geniş yedekleme alanı sunar.'
    },
    brands: ['Toshiba Canvio Advance 5TB']
  },
  {
    conditions: { usage: 'backup', capacity: 'gt4tb', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: '8TB SATA HDDs are suitable for home servers and NAS backup storage.',
      tr: '8TB SATA HDD\'ler ev sunucuları ve NAS yedekleme depolaması için uygundur.'
    },
    brands: ['Seagate IronWolf 8TB']
  },
  {
    conditions: { usage: 'backup', capacity: 'gt4tb', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'Portable 4TB or 8TB Thunderbolt SSDs offer lightning-fast large-capacity mobile backups for professionals.',
      tr: 'Taşınabilir 4TB veya 8TB Thunderbolt SSD\'ler profesyoneller için yıldırım hızında yüksek kapasiteli mobil yedekleme sunar.'
    },
    brands: ['G-Drive Mobile Pro 4TB']
  },
  {
    conditions: { usage: 'backup', capacity: 'gt4tb', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: 'Enterprise-grade NVMe storage arrays with 6TB+ capacity ensure top backup speed and reliability in data centers.',
      tr: '6TB+ kapasiteli kurumsal sınıf NVMe depolama dizileri, veri merkezlerinde en yüksek yedekleme hızı ve güvenilirlik sağlar.'
    },
    brands: ['Intel DC P4510 8TB']
  },
    // --- PERSONAL USAGE: lt500 ---
  {
    conditions: { usage: 'personal', capacity: 'lt500', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'For storing documents and photos on the go, a 320GB USB 2.0 flash drive or external HDD is sufficient.',
      tr: 'Belgeleri ve fotoğrafları taşımak için 320GB USB 2.0 flash bellek veya harici HDD yeterlidir.'
    },
    brands: ['SanDisk Cruzer Glide 256GB', 'WD Elements 320GB']
  },
  {
    conditions: { usage: 'personal', capacity: 'lt500', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'A 500GB 5400RPM internal HDD is enough for basic offline media and document storage.',
      tr: 'Temel çevrimdışı medya ve belge saklama için 500GB 5400RPM dahili HDD yeterlidir.'
    },
    brands: ['Toshiba P300 500GB']
  },
  {
    conditions: { usage: 'personal', capacity: 'lt500', speed: 'high', portability: 'portable' },
    recommendation: {
      en: 'Portable SSDs with 500GB capacity are good for storing files across devices with decent speed.',
      tr: '500GB kapasiteli taşınabilir SSD\'ler, cihazlar arası dosya saklama için iyi hız sunar.'
    },
    brands: ['Crucial X6']
  },
  {
    conditions: { usage: 'personal', capacity: 'lt500', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'A 500GB SATA SSD in a desktop improves file access and system responsiveness for personal use.',
      tr: 'Masaüstü bilgisayarda 500GB SATA SSD, dosya erişimini ve sistem yanıt hızını artırır.'
    },
    brands: ['Kingston A400']
  },
  {
    conditions: { usage: 'personal', capacity: 'lt500', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'If portability and speed matter, consider a 500GB Thunderbolt SSD for top-tier file access performance.',
      tr: 'Taşınabilirlik ve hız önemliyse, üst düzey dosya erişimi için 500GB Thunderbolt SSD değerlendirin.'
    },
    brands: ['Samsung X5']
  },
  {
    conditions: { usage: 'personal', capacity: 'lt500', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: 'Install a 500GB NVMe SSD on your PC for snappy performance in everyday personal tasks.',
      tr: 'Günlük kişisel görevlerde hızlı performans için PC\'nize 500GB NVMe SSD kurun.'
    },
    brands: ['WD Blue SN570']
  },
  // --- PERSONAL USAGE: 500_1tb ---
  {
    conditions: { usage: 'personal', capacity: '500_1tb', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'A 1TB external HDD is sufficient for general storage needs like photos, documents, and movies.',
      tr: 'Fotoğraflar, belgeler ve filmler gibi genel depolama ihtiyaçları için 1TB harici HDD yeterlidir.'
    },
    brands: ['WD My Passport 1TB']
  },
  {
    conditions: { usage: 'personal', capacity: '500_1tb', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'A 1TB 5400RPM internal HDD can serve well for archival and offline media.',
      tr: '1TB 5400RPM dahili HDD, arşivleme ve çevrimdışı medya için iyi bir tercihtir.'
    },
    brands: ['Toshiba P300 1TB']
  },
  {
    conditions: { usage: 'personal', capacity: '500_1tb', speed: 'high', portability: 'portable' },
    recommendation: {
      en: '1TB USB 3.2 external SSDs are a reliable choice for fast, portable storage across multiple devices.',
      tr: '1TB USB 3.2 harici SSD'ler, birden çok cihaz arasında hızlı, taşınabilir depolama için güvenilir bir tercihtir.'
    },
    brands: ['SanDisk Extreme Portable']
  },
  {
    conditions: { usage: 'personal', capacity: '500_1tb', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'A 1TB SATA SSD will provide fast and silent performance in desktop environments.',
      tr: '1TB SATA SSD, masaüstü ortamlarda hızlı ve sessiz performans sağlar.'
    },
    brands: ['Kingston A400 1TB']
  },
  {
    conditions: { usage: 'personal', capacity: '500_1tb', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'A 1TB Thunderbolt SSD is ideal for those needing the fastest portable storage for personal use.',
      tr: 'Kişisel kullanım için en hızlı taşınabilir depolamaya ihtiyaç duyanlar için 1TB Thunderbolt SSD idealdir.'
    },
    brands: ['Samsung X5 1TB']
  },
  {
    conditions: { usage: 'personal', capacity: '500_1tb', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: 'Install a 1TB NVMe SSD for blazing-fast load times and superior multitasking performance.',
      tr: 'Çok hızlı yükleme süreleri ve üstün çoklu görev performansı için 1TB NVMe SSD kurun.'
    },
    brands: ['WD Black SN770 1TB']
  },
   // --- PERSONAL USAGE: 1tb_4tb ---
  {
    conditions: { usage: 'personal', capacity: '1tb_4tb', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'A 2TB external HDD is ideal for storing personal media libraries like movies and music collections.',
      tr: '2TB harici HDD, filmler ve müzik koleksiyonları gibi kişisel medya arşivlerini depolamak için idealdir.'
    },
    brands: ['Seagate Expansion 2TB']
  },
  {
    conditions: { usage: 'personal', capacity: '1tb_4tb', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'Use a 3TB 5400RPM internal HDD for archiving and infrequent data access at home.',
      tr: 'Evde arşivleme ve nadir veri erişimi için 3TB 5400RPM dahili HDD kullanın.'
    },
    brands: ['WD Blue 3TB']
  },
  {
    conditions: { usage: 'personal', capacity: '1tb_4tb', speed: 'high', portability: 'portable' },
    recommendation: {
      en: 'A 2TB USB 3.2 external SSD gives fast and flexible storage across all personal devices.',
      tr: '2TB USB 3.2 harici SSD, tüm kişisel cihazlar arasında hızlı ve esnek depolama sunar.'
    },
    brands: ['Crucial X8 2TB']
  },
  {
    conditions: { usage: 'personal', capacity: '1tb_4tb', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'A 2TB SATA SSD is a balanced option for personal desktops offering speed and affordability.',
      tr: '2TB SATA SSD, hız ve uygun fiyat sunarak kişisel masaüstü bilgisayarlar için dengeli bir seçenektir.'
    },
    brands: ['Kingston A400 2TB']
  },
  {
    conditions: { usage: 'personal', capacity: '1tb_4tb', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'A 4TB Thunderbolt SSD is great for personal media professionals needing speed and size in one.',
      tr: '4TB Thunderbolt SSD, hız ve kapasiteyi bir arada isteyen kişisel medya profesyonelleri için mükemmeldir.'
    },
    brands: ['G-Drive Mobile Pro SSD 4TB']
  },
  {
    conditions: { usage: 'personal', capacity: '1tb_4tb', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: 'Install a 2TB NVMe SSD for extremely fast app launches and system responsiveness.',
      tr: 'Uygulamaların çok hızlı açılması ve sistemin hızlı tepki vermesi için 2TB NVMe SSD kurun.'
    },
    brands: ['Samsung 980 PRO 2TB']
  },
  // --- PERSONAL USAGE: gt4tb ---
  {
    conditions: { usage: 'personal', capacity: 'gt4tb', speed: 'low', portability: 'portable' },
    recommendation: {
      en: 'For massive movie or photo libraries, a 5TB external HDD offers ample storage at a reasonable price.',
      tr: 'Büyük film veya fotoğraf arşivleri için 5TB harici HDD uygun fiyata geniş depolama alanı sunar.'
    },
    brands: ['WD Elements 5TB']
  },
  {
    conditions: { usage: 'personal', capacity: 'gt4tb', speed: 'low', portability: 'fixed' },
    recommendation: {
      en: 'A 6TB 5400RPM internal HDD is a cost-effective solution for long-term personal data archiving.',
      tr: '6TB 5400RPM dahili HDD, uzun vadeli kişisel veri arşivleme için uygun maliyetli bir çözümdür.'
    },
    brands: ['Toshiba X300 6TB']
  },
  {
    conditions: { usage: 'personal', capacity: 'gt4tb', speed: 'high', portability: 'portable' },
    recommendation: {
      en: 'A 5TB USB 3.2 external SSD balances capacity and performance for power users on the go.',
      tr: '5TB USB 3.2 harici SSD, hareket halindeki ileri düzey kullanıcılar için kapasite ve performansı dengeler.'
    },
    brands: ['SanDisk Extreme Portable 5TB']
  },
  {
    conditions: { usage: 'personal', capacity: 'gt4tb', speed: 'high', portability: 'fixed' },
    recommendation: {
      en: 'Install a 4TB SATA SSD for fast and silent large-volume storage in a home PC setup.',
      tr: 'Ev tipi bilgisayarlarda hızlı ve sessiz büyük hacimli depolama için 4TB SATA SSD kurun.'
    },
    brands: ['Samsung 870 QVO 4TB']
  },
  {
    conditions: { usage: 'personal', capacity: 'gt4tb', speed: 'very_high', portability: 'portable' },
    recommendation: {
      en: 'A 4TB Thunderbolt SSD delivers exceptional speed for large-scale personal media workflows.',
      tr: '4TB Thunderbolt SSD, büyük ölçekli kişisel medya iş akışları için olağanüstü hız sunar.'
    },
    brands: ['LaCie Rugged Thunderbolt 4TB']
  },
  {
    conditions: { usage: 'personal', capacity: 'gt4tb', speed: 'very_high', portability: 'fixed' },
    recommendation: {
      en: 'For enthusiast users, a 4TB NVMe Gen4 SSD provides unbeatable speed for demanding personal tasks.',
      tr: 'Tutkulu kullanıcılar için 4TB NVMe Gen4 SSD, zorlu kişisel görevler için rakipsiz hız sunar.'
    },
    brands: ['Sabrent Rocket 4 Plus 4TB']
  }
];

export default recommendations;
