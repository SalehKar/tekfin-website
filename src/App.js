import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import DataRecovery from './components/DataRecovery';
import WirelessNetworks from './components/WirelessNetworks';
import OtherServices from './components/OtherServices';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import StorageAdvisor from './components/StorageAdvisor';

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [language, setLanguage] = useState('tr'); // 'tr' for Turkish, 'en' for English
  const location = useLocation();
  
  // Extract current page from location pathname
  const getCurrentPage = () => {
    const path = location.pathname.substring(1); // Remove leading slash
    if (path === '') return 'home';
    if (path === 'about-us') return 'about';
    if (path === 'data-recovery') return 'data-recovery';
    if (path === 'wireless-networks') return 'wireless-networks';
    if (path === 'other-services') return 'other-services';
    if (path === 'faq') return 'faq';
    if (path === 'contact') return 'contact';
    if (path === 'storage-advisor') return 'storage-advisor';
    return 'home';
  };

  const currentPage = getCurrentPage();

  return (
    <div className="App">
      <Header 
        currentPage={currentPage}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/about-us" element={<AboutUs language={language} />} />
          <Route path="/data-recovery" element={<DataRecovery language={language} />} />
          <Route path="/wireless-networks" element={<WirelessNetworks language={language} />} />
          <Route path="/other-services" element={<OtherServices language={language} />} />
          <Route path="/faq" element={<FAQ language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="/storage-advisor" element={<StorageAdvisor language={language} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer language={language} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

