import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/logo.png'; // Pastikan logo berada di folder public

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses sign up di sini, jika berhasil arahkan ke dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col justify-center items-center bg-green-500 w-1/2">
        <img src={logo} alt="SakuKita Logo" className="mb-6 w-48 h-auto" />
        <img src="rafiki.png" alt="Illustration" className="w-3/4 h-auto" />
      </div>
      <div className="flex flex-col justify-center items-center bg-white w-1/2 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Daftar</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nama"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded mt-4"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4">
            Sudah Punya Akun? <a href="/login" className="text-blue-500">Masuk</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
