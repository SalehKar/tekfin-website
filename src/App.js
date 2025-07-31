import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import StorageAdvisor from './components/StorageAdvisor';
import Recommendations from './components/Recommendations'; // ✅ أضفناه هنا
import Header from './components/Header';
import Footer from './components/Footer';
import DataRecovery from './components/DataRecovery';
import AboutUs from './components/AboutUs';

import './App.css';

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
