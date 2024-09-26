const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./crowdfunding_db'); 

const app = express();

//const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/fundraisers', (req, res) => {
    const sql = 'SELECT * FROM FUNDRAISER';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/api/categories', (req, res) => {
    const sql = 'SELECT * FROM CATEGORY';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/api/fundraisers/category/:categoryId', (req, res) => {
    const sql = `
        SELECT f.*, c.NAME as CATEGORY_NAME 
        FROM FUNDRAISER f 
        JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID 
        WHERE f.ACTIVE = 'true' AND f.CATEGORY_ID = ?`;
    db.query(sql, [req.params.categoryId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/api/fundraiser/:id', (req, res) => {
    const sql = 'SELECT * FROM FUNDRAISER WHERE FUNDRAISER_ID = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]); 
    });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server is running, port: ${PORT}`);
});