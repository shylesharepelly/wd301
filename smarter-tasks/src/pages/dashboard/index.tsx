import React from 'react';
import DashboardPages from './DashboardPage';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className=" App text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <DashboardPages/>
    </div>
  );
}

export default Dashboard;