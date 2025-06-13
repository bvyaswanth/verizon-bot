

import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import TopBar from './components/topbar';
import MainHeader from './components/mainheader';
import LandingPage from './components/landingpage';

const VerizonPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TopBar />
        <MainHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <LandingPage />
      </div>
    </Router>
  );
};

export default VerizonPage;
