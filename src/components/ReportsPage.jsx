import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import logo from '/logo.png'; // Pastikan logo berada di folder public

const ReportsPage = ({ transactions }) => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState('Mei');

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const transactionMonth = new Date(transaction.date).toLocaleString('id-ID', {
      month: 'long',
    });
    return transactionMonth === selectedMonth;
  });

  const incomeTransactions = filteredTransactions.filter(
    (transaction) => transaction.type === 'Pemasukan'
  );
  const expenseTransactions = filteredTransactions.filter(
    (transaction) => transaction.type === 'Pengeluaran'
  );

  const totalIncome = incomeTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
  const totalExpense = expenseTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const data = filteredTransactions.map((transaction) => ({
    date: new Date(transaction.date).toLocaleDateString('id-ID'),
    income: transaction.type === 'Pemasukan' ? transaction.amount : 0,
    expense: transaction.type === 'Pengeluaran' ? transaction.amount : 0,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="flex-grow flex p-8">
        <div className="w-full">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mb-4 flex items-center"
            onClick={() => navigate('/dashboard')}
          >
            <span className="mr-2">&larr;</span> Laporan
          </button>
          <h2 className="text-2xl font-semibold mb-4">Laporan Bulanan</h2>
          <div className="mb-4">
            <label className="mr-4">Pilih Bulan: </label>
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="Januari">Januari</option>
              <option value="Februari">Februari</option>
              <option value="Maret">Maret</option>
              <option value="April">April</option>
              <option value="Mei">Mei</option>
              <option value="Juni">Juni</option>
              <option value="Juli">Juli</option>
              <option value="Agustus">Agustus</option>
              <option value="September">September</option>
              <option value="Oktober">Oktober</option>
              <option value="November">November</option>
              <option value="Desember">Desember</option>
            </select>
          </div>
          {filteredTransactions.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>Belum ada transaksi bulan ini.</p>
            </div>
          ) : (
            <>
              <div className="flex space-x-4 mb-8">
                <div className="bg-green-500 text-white p-4 rounded-lg shadow-md w-1/2">
                  <h3 className="text-xl mb-2">Uang Masuk</h3>
                  {incomeTransactions.map((transaction, index) => (
                    <div key={index} className="flex justify-between border-b border-white py-2">
                      <span>{transaction.category}</span>
                      <span>{`Rp${transaction.amount.toLocaleString('id-ID')},00`}</span>
                    </div>
                  ))}
                  <div className="flex justify-between border-t border-white py-2 mt-2">
                    <span>Total</span>
                    <span>{`Rp${totalIncome.toLocaleString('id-ID')},00`}</span>
                  </div>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg shadow-md w-1/2">
                  <h3 className="text-xl mb-2">Uang Keluar</h3>
                  {expenseTransactions.map((transaction, index) => (
                    <div key={index} className="flex justify-between border-b border-white py-2">
                      <span>{transaction.category}</span>
                      <span>{`Rp${transaction.amount.toLocaleString('id-ID')},00`}</span>
                    </div>
                  ))}
                  <div className="flex justify-between border-t border-white py-2 mt-2">
                    <span>Total</span>
                    <span>{`Rp${totalExpense.toLocaleString('id-ID')},00`}</span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="expense" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
