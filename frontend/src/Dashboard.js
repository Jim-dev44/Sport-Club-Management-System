import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  // This "hook" is what allows the buttons to change the URL
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Club Management Dashboard</h1>
      <div className="button-grid">
        
        {/* Button 1: Links to /players */}
        <button className="dash-btn" onClick={() => navigate('/players')}>
          Manage Players
        </button>
        
        {/* Button 2: Links to /finance */}
        <button className="dash-btn" onClick={() => navigate('/finance')}>
          Finance Reports
        </button>
        
        {/* Button 3: Links to /matches */}
        <button className="dash-btn" onClick={() => navigate('/matches')}>
          Match Schedules
        </button>
        
      </div>
    </div>
  );
}

export default Dashboard;