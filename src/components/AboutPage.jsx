import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/logo.png';
import background from '/background.jpg'; // Pastikan Anda memiliki gambar latar belakang di folder public

const TentangPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
     
      <div className="flex-grow flex flex-col justify-center items-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
          <h2 className="text-3xl font-semibold mb-4">Tentang <span className="font-bold">SakuKita</span></h2>
          <p>SakuKita adalah website yang dapat membantu Anda mencatat pemasukan dan pengeluaran secara mudah dan efisien. Dengan SakuKita, Anda dapat memonitor keuangan Anda kapan saja dan di mana saja. Fitur-fitur kami termasuk pencatatan transaksi harian, laporan bulanan, dan grafik visual untuk membantu Anda memahami kondisi keuangan Anda dengan lebih baik.</p>
          <p className="mt-4">Kami berdedikasi untuk menyediakan alat yang memudahkan Anda dalam mengelola keuangan pribadi, sehingga Anda dapat fokus pada hal-hal yang lebih penting dalam hidup Anda. SakuKita adalah partner keuangan Anda yang siap membantu Anda mencapai tujuan finansial Anda.</p>
        </div>
      </div>
    </div>
  );
};

export default TentangPage;
