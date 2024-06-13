import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/logo.png'; // Pastikan logo berada di folder public

const TransactionsPage = ({ transactions, setTransactions }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('Pemasukan');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({
    date: false,
    category: false,
    type: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      amount: Number(amount),
      date,
      category,
      type,
    };
    setTransactions([...transactions, newTransaction]);
    setAmount('');
    setDate('');
    setCategory('');
    setType('Pemasukan');
  };

  const handleDelete = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter.date && !transaction.date.includes(search)) return false;
    if (filter.category && !transaction.category.includes(search)) return false;
    if (filter.type && !transaction.type.includes(search)) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="flex-grow flex p-8">
        <div className="w-3/4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mb-4 flex items-center"
            onClick={() => navigate('/dashboard')}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Transaksi
          </button>
          <h2 className="text-2xl font-semibold mb-4">Daftar Transaksi</h2>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Cari"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="flex mb-4 space-x-4">
            <label>
              <input
                type="checkbox"
                checked={filter.date}
                onChange={(e) => setFilter({ ...filter, date: e.target.checked })}
              />
              Tanggal
            </label>
            <label>
              <input
                type="checkbox"
                checked={filter.category}
                onChange={(e) => setFilter({ ...filter, category: e.target.checked })}
              />
              Kategori
            </label>
            <label>
              <input
                type="checkbox"
                checked={filter.type}
                onChange={(e) => setFilter({ ...filter, type: e.target.checked })}
              />
              Jenis Transaksi
            </label>
          </div>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Jumlah</th>
                <th className="py-2">Tanggal</th>
                <th className="py-2">Kategori</th>
                <th className="py-2">Jenis Transaksi</th>
                <th className="py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{`Rp${transaction.amount.toLocaleString('id-ID')},00`}</td>
                  <td className="py-2 px-4 border">{transaction.date}</td>
                  <td className="py-2 px-4 border">{transaction.category}</td>
                  <td className="py-2 px-4 border">{transaction.type}</td>
                  <td className="py-2 px-4 border">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/4 p-8">
          <h2 className="text-2xl font-semibold mb-4">Tambah Transaksi</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="number"
              placeholder="Jumlah"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Kategori"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Pemasukan">Pemasukan</option>
              <option value="Pengeluaran">Pengeluaran</option>
            </select>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded"
            >
              Tambah Transaksi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
