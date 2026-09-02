exports.handler = async (event, context) => {
  const { path } = event;

  const defaultOG = {
    title: "TekFin Teknoloji – İşletme Veri Çözümleri | Business Data Solutions",
    description: "İşletmeler için uzman veri depolama ve kurtarma çözümleri. / Specialized data storage and recovery solutions for businesses.",
    image: "https://tekfinteknoloji.com/images/tekfin-logo-square.png?v=4",
    url: "https://tekfinteknoloji.com/"
  };

  const storageAdvisorOG = {
    title: "TekFin Teknoloji – Yapay Zeka Destekli Depolama Danışmanı | AI-Powered Storage Advisor",
    description: "İhtiyaçlarınıza özel depolama çözümleri için yapay zeka destekli TekFin Teknoloji aracını kullanın. / Get personalized storage recommendations with TekFin Teknoloji's AI-powered tool.",
    image: "https://tekfinteknoloji.com/images/ai-storage-tool-logo.png?v=1",
    url: "https://tekfinteknoloji.com/storage-advisor"
  };

  let ogData = defaultOG;
  if (path && path.includes("/storage-advisor")) ogData = storageAdvisorOG;

  const html = `<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link href="/css/styles.css" rel="stylesheet" />
    <title>${ogData.title}</title>
    <meta name="description" content="${ogData.description}" />
    <link rel="canonical" href="${ogData.url}" />
    <meta property="og:title" content="${ogData.title}" />
    <meta property="og:description" content="${ogData.description}" />
    <meta property="og:url" content="${ogData.url}" />
    <meta property="og:image" content="${ogData.image}" />
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="600" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${ogData.title}" />
    <meta name="twitter:description" content="${ogData.description}" />
    <meta name="twitter:image" content="${ogData.image}" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TekFin Teknoloji",
      "url": "https://tekfinteknoloji.com/",
      "logo": "${ogData.image}",
      "sameAs": []
    }
    </script>
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <script>window.dataLayer = window.dataLayer || [];</script>
  </head>
  <body>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFRHB9GB" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <noscript>Bu uygulamayı çalıştırmak için JavaScript'i etkinleştirmeniz gerekir.</noscript>
    <div id="root"></div>
    <form name="contact" netlify hidden><input type="text" name="name" /><input type="email" name="email" /><input type="tel" name="phone" /><input type="text" name="subject" /><textarea name="message"></textarea></form>
    <script src="/js/scripts.js"></script>
  </body>
</html>`;

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-cache, no-store, must-revalidate' },
    body: html
  };
};
