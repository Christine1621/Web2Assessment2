const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Replace with your database username
    password: '123456',  // Replace with your database password
    database: 'crowdfunding_db'  // Replace with your database name
});

// Handle request to get fundraisers information
router.get('/', (req, res) => {
    db.query('SELECT * FROM FUNDRAISER', (err, results) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        res.json(results);
    });
});

module.exports = router;
