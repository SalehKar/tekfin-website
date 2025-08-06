import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import StorageAdvisor from './components/StorageAdvisor';
import Recommendations from './components/Recommendations';
import Header from './components/Header';
import Footer from './components/Footer';
import DataRecovery from './components/DataRecovery';
import AboutUs from './components/AboutUs';

import './App.css';

// صفحات مؤقتة
const DataStorage = ({ language }) => (
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold mb-4">{language === 'tr' ? 'Veri Depolama' : 'Data Storage'}</h1>
    <p>{language === 'tr' ? 'Yakında hizmetinizde.' : 'Coming soon.'}</p>
  </div>
);

const BackupServices = ({ language }) => (
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold mb-4">{language === 'tr' ? 'Yedekleme Hizmetleri' : 'Backup Services'}</h1>
    <p>{language === 'tr' ? 'Yakında hizmetinizde.' : 'Coming soon.'}</p>
  </div>
);

function App() {
  const [language, setLanguage] = useState('tr'); // 'en' or 'tr'

  return (
    <Router>
      <div className="App">
        <Header language={language} setLanguage={setLanguage} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage language={language} />} />
            <Route path="/data-recovery" element={<DataRecovery language={language} />} />
            <Route path="/data-storage" element={<DataStorage language={language} />} />
            <Route path="/backup-services" element={<BackupServices language={language} />} />
            <Route path="/about-us" element={<AboutUs language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="/storage-advisor" element={<StorageAdvisor language={language} />} />
            <Route path="/recommendations" element={<Recommendations language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
