import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Players() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  // Fetch players from the backend when the page loads
  useEffect(() => {
    axios.get('http://localhost:3000/players')
      .then(res => setPlayers(res.data))
      .catch(err => console.log("Error fetching players:", err));
  }, []);

  return (
    <div className="container">
      {/* Navigation Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button onClick={() => navigate('/')} className="back-btn">
          ← Dashboard
        </button>
        
        {/* The Add Player Button */}
        <button onClick={() => navigate('/add-player')} className="dash-btn" style={{ padding: '10px 20px', fontSize: '16px' }}>
          + Add New Player
        </button>
      </div>

      <h2>Rift Valley Sports Club - Players List</h2>
      
      <table className="player-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Players;