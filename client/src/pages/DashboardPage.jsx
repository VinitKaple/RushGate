import React from 'react';
import Stats from '../components/Stats';
import ProductTable from '../components/Product'; // adjust path if needed

const DashboardPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Today's Dashboard</h1>
      <Stats />
      <ProductTable />
      {/* Other dashboard components go here */}
    </div>
  );
};

export default DashboardPage;