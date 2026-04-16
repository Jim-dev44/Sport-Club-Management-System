import React from 'react';
import { useNavigate } from 'react-router-dom';

function Matches() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button onClick={() => navigate('/')} className="back-btn">← Back</button>
      <h2>Match Schedules</h2>
      <p>Match data coming soon...</p>
    </div>
  );
}
export default Matches;