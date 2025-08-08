import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async'; // ✅ استيراد المكتبة

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider> {/* ✅ تغليف التطبيق */}
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
