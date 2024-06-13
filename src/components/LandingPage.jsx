import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/logo.png'; // Pastikan logo berada di folder public

const LandingPage = () => {
  const navigate = useNavigate();
  console.log('Rendering LandingPage'); // Tambahkan log untuk debug

  const handleLoginClick = () => {
    console.log('Login button clicked'); // Tambahkan log untuk debug
    navigate('/login');
  };

  const handleSignupClick = () => {
    console.log('Signup button clicked'); // Tambahkan log untuk debug
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-500">
      <img src={logo} alt="SakuKita Logo" className="mb-6 w-40 h-auto" />
      <div className="bg-white p-16 rounded-lg shadow-lg text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Welcome, Financial Planners!</h2>
        <p className="mb-8">Rencanakan keuanganmu dengan mudah dan efisien.</p>
        <div className="flex justify-center space-x-8 mb-8">
          <button onClick={handleLoginClick} className="bg-green-600 text-white px-6 py-3 rounded">LOGIN</button>
          <button onClick={handleSignupClick} className="bg-green-600 text-white px-6 py-3 rounded">SIGN UP</button>
        </div>
        <p className="mt-4">Mulai mengelola keuanganmu sekarang!</p>
      </div>
    </div>
  );
};

export default LandingPage;
