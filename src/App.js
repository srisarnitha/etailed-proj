import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Onboarding from './components/Onboarding';
import Dashboard from './pages/Dashboard';
import './styles/Onboarding.css';
import './styles/Dashboard.css';

const App = () => {
  const { userData } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={userData ? '/dashboard' : '/onboarding'} />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
