CREATE DATABASE sports_club;

USE sports_club;

CREATE TABLE players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(50),
    age INT
);

CREATE TABLE matches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    opponent VARCHAR(100),
    match_date DATE,
    result VARCHAR(50)
);

CREATE TABLE finance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100),
    amount DECIMAL(10,2),
    date DATE
);
INSERT INTO players (name, position, age) VALUES
('John Doe', 'Forward', 24),
('Mike Smith', 'Goalkeeper', 28);

INSERT INTO matches (opponent, match_date, result) VALUES
('Team A', '2026-04-10', 'Win');

INSERT INTO finance (description, amount, date) VALUES
('Ticket Sales', 5000, '2026-04-01');
SHOW DATABASES;
USE sports_club;
SHOW TABLES;