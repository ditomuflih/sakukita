import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = ({ userProfile, setUserProfile }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [password, setPassword] = useState('');

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Update the user profile with new values
    setUserProfile({ ...userProfile, name, email });
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-500 p-4 flex justify-between items-center">
        <button onClick={() => navigate('/profile')} className="text-white">Back</button>
      </header>
      <div className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSaveChanges} className="bg-green-500 p-8 rounded-lg shadow-md w-1/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">Edit Profil</h2>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-green-500 p-2 rounded-lg shadow-md"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
