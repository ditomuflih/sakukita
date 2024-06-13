import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/logo.png'; // Pastikan logo berada di folder public
import background from '/background.jpg'; // Pastikan Anda memiliki gambar latar belakang di folder public

const HelpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      
      <div className="flex-grow flex flex-col justify-center items-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
          <h1 className="text-3xl font-bold mb-4 text-center">Panduan Penggunaan SakuKita</h1>
          <p>
            SakuKita adalah website yang dapat membantu Anda mencatat pemasukan dan pengeluaran secara mudah dan efisien. 
            Dengan SakuKita, Anda dapat memonitor keuangan Anda kapan saja dan di mana saja. 
            Fitur-fitur kami termasuk pencatatan transaksi harian, laporan bulanan, dan grafik visual untuk membantu Anda 
            memahami kondisi keuangan Anda dengan lebih baik.
          </p>
          <p>
            Berikut adalah panduan penggunaan SakuKita:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Dashboard:</strong> Menampilkan ringkasan pemasukan dan pengeluaran bulanan Anda.
            </li>
            <li>
              <strong>Transaksi:</strong> Anda dapat menambahkan, mengedit, dan menghapus transaksi harian Anda.
            </li>
            <li>
              <strong>Kategori:</strong> Mengelola kategori transaksi untuk mempermudah pengelompokan pengeluaran dan pemasukan.
            </li>
            <li>
              <strong>Laporan:</strong> Menampilkan laporan bulanan dengan grafik yang memudahkan pemantauan kondisi keuangan.
            </li>
            <li>
              <strong>Panduan:</strong> Halaman ini berisi informasi tentang cara menggunakan fitur-fitur di SakuKita.
            </li>
          </ul>
          <p>
            Kami berdedikasi untuk menyediakan alat yang memudahkan Anda dalam mengelola keuangan pribadi, sehingga Anda dapat 
            fokus pada hal-hal yang lebih penting dalam hidup Anda. SakuKita adalah partner keuangan Anda yang siap membantu 
            Anda mencapai tujuan finansial Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
