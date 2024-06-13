import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ userProfile }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <div className="bg-green-500 text-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Profil</h2>
        <div className="flex items-center mb-4">
          <div className="bg-white text-green-500 rounded-full p-4">
            <img src="/user.png" alt="User Icon" className="w-16 h-16" />
          </div>
          <div className="ml-4">
            <p className="text-xl">{userProfile.name}</p>
            <p>{userProfile.email}</p>
          </div>
        </div>
        <button
          className="bg-white text-green-500 p-2 rounded-lg shadow-md w-full"
          onClick={() => navigate('/edit-profil')}
        >
          Edit Profil
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
