import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/logo.png'; // Pastikan logo berada di folder public

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-green-500 p-4 flex justify-between items-center">
      <img src={logo} alt="SakuKita Logo" className="w-32 h-auto" />
      <nav className="space-x-4 text-lg">
        <a href="#" onClick={() => navigate('/dashboard')} className="text-white">Home</a>
        <a href="/tentang" className="text-white">Tentang</a>
        <a href="/help" className="text-white">Help</a>
      </nav>
      <div className="bg-white rounded-full p-2" onClick={() => navigate('/profil')}>
        <img src="/user.png" alt="User Icon" className="w-8 h-8" />
      </div>
    </header>
  );
};

export default Header;
