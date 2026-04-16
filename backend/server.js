console.log("RUNNING CORRECT SERVER FILE");
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();


app.use(cors()); 
app.use(express.json()); 


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jimmoemi123.',
    database: 'sports_club'
});


db.connect(err => {
    if (err) {
        console.log("DB Error:", err);
    } else {
        console.log("Connected to MySQL");
    }
});


app.get('/players', (req, res) => {
    db.query("SELECT * FROM players", (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

// ADD new player
app.post('/players', (req, res) => {
    const { name, position, age } = req.body;

    const sql = "INSERT INTO players (name, position, age) VALUES (?, ?, ?)";

    db.query(sql, [name, position, age], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: "Player added successfully" });
        }
    });
});

// UPDATE player
app.put('/players/:id', (req, res) => {
    const id = req.params.id;
    const { name, position, age } = req.body;

    const sql = "UPDATE players SET name=?, position=?, age=? WHERE id=?";

    db.query(sql, [name, position, age, id], (err, result) => {
        if (err) return res.json(err);
        res.json({ message: "Player updated" });
    });
});

// DELETE player
app.delete('/players/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM players WHERE id=?", [id], (err, result) => {
        if (err) {
            console.error("SQL ERROR:" , err);
            return res.status(500).json({ error: err.message});
        }
        res.json({ message: "Player deleted" });
    });
});

app.get('/matches', (req, res) => {
    console.log("Matches route hit");
    db.query("SELECT * FROM matches", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

app.get('/finance', (req, res) => {
    db.query("SELECT * FROM finance", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

app.post('/add-player', (req, res) => {
    const sql = "INSERT INTO players (`name`, `position`, `age`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.position,
        req.body.age
    ];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Player added successfully");
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});