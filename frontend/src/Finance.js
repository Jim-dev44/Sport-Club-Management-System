import React from 'react';
import { useNavigate } from 'react-router-dom';

function Finance() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button onClick={() => navigate('/')} className="back-btn">← Back</button>
      <h2>Finance Reports</h2>
      <p>Finance data coming soon...</p>
    </div>
  );
}
export default Finance;