import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './index.css';
import './transitions.css'; // Import CSS Transitions
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import DashboardPage from './components/DashboardPage';
import TransactionsPage from './components/TransactionsPage';
import CategoryPage from './components/CategoryPage';
import ReportsPage from './components/ReportsPage';
import AboutPage from './components/AboutPage';
import HelpPage from './components/HelpPage';
import ProfilePage from './components/ProfilePage';
import EditProfilePage from './components/EditProfilePage';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [userProfile, setUserProfile] = useState({
    name: 'Ahmad Kareem Keren',
    email: 'ahmadkk@gmail.com',
  });

  return (
    <Router>
      <Header /> {/* Tempatkan Header di luar SwitchTransition */}
      <AnimatedRoutes
        transactions={transactions}
        setTransactions={setTransactions}
        categories={categories}
        setCategories={setCategories}
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      <Footer /> {/* Tempatkan Footer di luar SwitchTransition */}
    </Router>
  );
};

const AnimatedRoutes = ({ transactions, setTransactions, categories, setCategories, userProfile, setUserProfile }) => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<DashboardPage transactions={transactions} />} />
          <Route path="/transactions" element={<TransactionsPage transactions={transactions} setTransactions={setTransactions} />} />
          <Route path="/kategori" element={<CategoryPage categories={categories} setCategories={setCategories} />} />
          <Route path="/laporan" element={<ReportsPage transactions={transactions} />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/profil" element={<ProfilePage userProfile={userProfile} />} />
          <Route path="/edit-profil" element={<EditProfilePage userProfile={userProfile} setUserProfile={setUserProfile} />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
