import React, { useState } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('tr'); // 'tr' for Turkish, 'en' for English

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage language={language} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs language={language} />;
      case 'data-recovery':
        return <DataRecovery language={language} />;
      case 'wireless-networks':
        return <WirelessNetworks language={language} />;
      case 'other-services':
        return <OtherServices language={language} />;
      case 'faq':
        return <FAQ language={language} />;
      case 'contact':
        return <Contact language={language} />;
      case 'storage-advisor':
        return <StorageAdvisor language={language} />;
      default:
        return <HomePage language={language} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;


