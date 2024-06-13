import React from 'react';
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

const DashboardPage = ({ transactions }) => {
  const navigate = useNavigate();

  const currentMonth = new Date().toLocaleString('id-ID', { month: 'long' });

  const filteredTransactions = transactions.filter(transaction => {
    const transactionMonth = new Date(transaction.date).toLocaleString('id-ID', { month: 'long' });
    return transactionMonth === currentMonth;
  });

  const totalIncome = filteredTransactions
    .filter(transaction => transaction.type === 'Pemasukan')
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = filteredTransactions
    .filter(transaction => transaction.type === 'Pengeluaran')
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen flex flex-col">



     



      
      <div className="flex flex-grow">
        <div className="flex-grow p-8">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={filteredTransactions.map(transaction => ({
                date: new Date(transaction.date).toLocaleDateString('id-ID'),
                income: transaction.type === 'Pemasukan' ? transaction.amount : 0,
                expense: transaction.type === 'Pengeluaran' ? transaction.amount : 0,
              }))}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#82ca9d" />
              <Line type="monotone" dataKey="expense" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col space-y-4 p-8">
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl">Pemasukan</h3>
            <p>+Rp{totalIncome.toLocaleString('id-ID')},00</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl">Pengeluaran</h3>
            <p>-Rp{totalExpense.toLocaleString('id-ID')},00</p>
          </div>
          <button
            className="bg-green-500 text-white p-4 rounded-lg shadow-md"
            onClick={() => navigate('/transactions')}
          >
            Transaksi
          </button>
          <button
            className="bg-green-500 text-white p-4 rounded-lg shadow-md"
            onClick={() => navigate('/kategori')}
          >
            Kategori
          </button>
          <button
            className="bg-green-500 text-white p-4 rounded-lg shadow-md"
            onClick={() => navigate('/laporan')}
          >
            Laporan
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
