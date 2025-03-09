import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

export default function Earnings() {
  const salesData = [
    { date: '2025-02-20', totalSales: 5000, orders: 50, earnings: 4000 },
    { date: '2025-02-21', totalSales: 4500, orders: 45, earnings: 3600 },
    { date: '2025-02-22', totalSales: 7000, orders: 70, earnings: 5600 },
    { date: '2025-02-23', totalSales: 6000, orders: 60, earnings: 4800 },
    { date: '2025-02-24', totalSales: 6500, orders: 65, earnings: 5200 },
  ];

  const topDishes = [
    { name: 'Margherita Pizza', orders: 120, earnings: 24000 },
    { name: 'Pasta Alfredo', orders: 95, earnings: 19000 },
    { name: 'Veg Burger', orders: 80, earnings: 16000 },
    { name: 'Tacos', orders: 60, earnings: 12000 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const totalSales = salesData.reduce((acc, curr) => acc + curr.totalSales, 0);
  const totalEarning = salesData.reduce((acc, curr) => acc + curr.earnings, 0);
  const totalOrders = salesData.reduce((acc, curr) => acc + curr.orders, 0);

  return (
    <>
      <h4>Sales & Earnings Overview</h4>
      <p className='text-danger'>This is the demo of sales and earning page. We are working on it and will be soon updated to show your sales and earnings.</p>
      <div className="row">
        <div className="col">
          <p className='mb-0'><b>Total Sales:</b> {totalSales}</p>
          <p className='mb-0'><b>Total Earnings: </b>{totalEarning}</p>
          <p className='mb-0'><b>Number of Orders: </b>{totalOrders}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card shadow p-4">
            <h5>Sales Overview</h5>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" name="Total Sales" dataKey="totalSales" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card shadow p-4">
            <h5>Top Selling Dishes</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={topDishes} dataKey="orders" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                  {topDishes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend payload={topDishes.map((item, index) => ({
                  value: item.name,
                  type: 'circle',
                  color: COLORS[index % COLORS.length]
                }))} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  )
}
