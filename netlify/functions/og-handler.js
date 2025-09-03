exports.handler = async (event, context) => {
  const { path } = event;
  
  // تحديد البيانات الافتراضية للشركة
  const defaultOG = {
    title: "TekFin Teknoloji – Veri Depolama ve Kurtarma | Data Recovery & Storage Solutions",
    description: "İşletmelere özel veri kurtarma, güvenli depolama çözümleri. / Specialized recovery and storage for businesses.",
    image: "https://tekfingroup.com/images/tekfin-logo-square.png?v=4",
    url: "https://tekfingroup.com/"
  };
  
  // تحديد البيانات الخاصة بأداة اختيار جهاز التخزين
  const storageAdvisorOG = {
    title: "TekFin Teknoloji – Yapay Zeka Destekli Depolama Danışmanı | AI-Powered Storage Advisor",
    description: "İhtiyaçlarınıza özel depolama çözümleri için yapay zeka destekli TekFin Teknoloji aracını kullanın. / Get personalized storage recommendations with TekFin Teknoloji's AI-powered tool.",
    image: "https://tekfingroup.com/images/ai-storage-tool-logo.png?v=1",
    url: "https://tekfingroup.com/storage-advisor"
  };
  
  // تحديد البيانات المناسبة بناءً على المسار
  let ogData = defaultOG;
  if (path && path.includes("/storage-advisor")) {
    ogData = storageAdvisorOG;
  }
  
  // إنشاء HTML مع Open Graph meta tags المناسبة
  const html = `<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />

    <!-- Styles -->
    <link href="/css/styles.css" rel="stylesheet" />

    <!-- Primary SEO -->
    <title>${ogData.title}</title>
    <meta name="description" content="${ogData.description}" />
    <link rel="canonical" href="${ogData.url}" />

    <!-- Open Graph -->
    <meta property="og:title" content="${ogData.title}" />
    <meta property="og:description" content="${ogData.description}" />
    <meta property="og:url" content="${ogData.url}" />
    <meta property="og:image" content="${ogData.image}" />
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="600" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:locale:alternate" content="en_US" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${ogData.title}" />
    <meta name="twitter:description" content="${ogData.description}" />
    <meta name="twitter:image" content="${ogData.image}" />

    <!-- JSON-LD: Organization -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TekFin Teknoloji",
      "url": "https://tekfingroup.com/",
      "logo": "${ogData.image}",
      "sameAs": []
    }
    </script>

    <!-- PWA -->
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':
    new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=
    \'https://www.googletagmanager.com/gtm.js?id=GTM-TFRHB9GB\'+dl;f.parentNode.insertBefore(j,f);
    })(window,document,\'script\',\'dataLayer\',\'GTM-TFRHB9GB\');</script>
    <!-- End Google Tag Manager -->

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6ZNDT746CM"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag(\'js\', new Date());
      gtag(\'config\', \'G-6ZNDT746CM\');
    </script>
  </head>
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFRHB9GB"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <noscript>Bu uygulamayı çalıştırmak için JavaScript\'i etkinleştirmeniz gerekir.</noscript>

    <div id="root"></div>

    <!-- Netlify form (invisible) -->
    <form name="contact" netlify hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="tel" name="phone" />
      <input type="text" name="subject" />
      <textarea name="message"></textarea>
    </form>

    <!-- Scripts -->
    <script src="/js/scripts.js"></script>
  </body>
</html>`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    },
    body: html
  };
};

