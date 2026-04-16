import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Players from './Players'; 
import Dashboard from './Dashboard';
import Matches from './Matches';
import Finance from './Finance';
import AddPlayer  from './AddPlayer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Main Navigation / Header */}
        <nav className="navbar">
          <h2>Rift Valley Sports Club</h2>
          <Link to="/" className="nav-link">Dashboard</Link>
        </nav>

        <Routes>
          {/* Route for the Main Dashboard */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Route for the Players Page */}
          <Route path="/players" element={<Players />} />
          <Route path="/finance" element={<Finance />} />   {/* NEW */}
          <Route path="/matches" element={<Matches />} />   {/* NEW */}
          <Route path="/add-player" element={<AddPlayer />} /> {/* NEW */}        

        </Routes>
      </div>
    </Router>
  );
}

export default App;