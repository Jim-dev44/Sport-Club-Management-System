import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPlayer() {
    const [values, setValues] = useState({ name: '', position: '', age: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/add-player', values)
            .then(res => {
                alert("Player Added!");
                navigate('/players'); // Go back to the list to see the new player
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h2>Register New Player</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={e => setValues({...values, name: e.target.value})} required />
                <input type="text" placeholder="Position" onChange={e => setValues({...values, position: e.target.value})} required />
                <input type="number" placeholder="Age" onChange={e => setValues({...values, age: e.target.value})} required />
                <button type="submit" className="dash-btn">Save Player</button>
            </form>
        </div>
    );
}

export default AddPlayer;