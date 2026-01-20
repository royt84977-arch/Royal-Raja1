
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Results from './pages/Results';
import Chart from './pages/Chart';
import Game from './pages/Game';
import MyBids from './pages/MyBids';
import BankDetails from './pages/BankDetails';

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideNavPaths = ['/login', '/signup', '/admin'];
  const shouldHideNav = hideNavPaths.includes(location.pathname) || location.pathname.startsWith('/game/');

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Auth type="LOGIN" />} />
        <Route path="/signup" element={<Auth type="SIGNUP" />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/game/:gameId" element={<Game />} />
        <Route path="/bank-details" element={<BankDetails />} />
        {/* Simplified routes for prototype */}
        <Route path="/my-bids" element={<MyBids />} />
        <Route path="/results" element={<Results />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/support" element={<Profile />} />
      </Routes>
      {!shouldHideNav && <NavBar />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;