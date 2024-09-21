
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./crowdfunding_db'); // 引入数据库连接

const app = express();

//const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// 1. 获取所有筹款活动
app.get('/api/fundraisers', (req, res) => {
    const sql = 'SELECT * FROM FUNDRAISER';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// 2. 获取特定筹款活动的详细信息
app.get('/api/fundraiser/:id', (req, res) => {
    const sql = 'SELECT * FROM FUNDRAISER WHERE FUNDRAISER_ID = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]); // 返回第一个结果
    });
});

// 3. 获取特定筹款活动的详细信息
app.get('/api/fundraiser/:id', (req, res) => {
    const sql = 'SELECT * FROM FUNDRAISER WHERE FUNDRAISER_ID = ?'; // 使用正确的ID列名
    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]); // 返回第一个结果
    });
});

// 启动服务器
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`服务器正在运行，端口: ${PORT}`);
});










/*
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./crowdfunding_db');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

// thefundraiser.js: 设置 Express 服务器及路由

// 1. 获取所有活动的筹款人，包括类别
app.get('/api/fundraisers', (req, res) => {
  const query = `
    SELECT F.*, C.NAME AS CATEGORY_NAME
    FROM FUNDRAISER F
    LEFT JOIN CATEGORY C ON F.CATEGORY_ID = C.CATEGORY_ID
    WHERE F.ACTIVE = '1';
  `;
  
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 2. 获取所有类别
app.get('/api/categories', (req, res) => {
  const query = 'SELECT * FROM CATEGORY;';
  
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 3. 获取基于类别的所有活动的筹款人
app.get('/api/fundraisers/category/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  const query = `
    SELECT F.*, C.NAME AS CATEGORY_NAME
    FROM FUNDRAISER F
    LEFT JOIN CATEGORY C ON F.CATEGORY_ID = C.CATEGORY_ID
    WHERE F.CATEGORY_ID = ? AND F.ACTIVE = '1';
  `;
  
  db.query(query, [categoryId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 4. 获取筹款人的详细信息（通过ID）
app.get('/api/fundraisers/:id', (req, res) => {
  const fundraiserId = req.params.id;
  const query = `
    SELECT F.*, C.NAME AS CATEGORY_NAME
    FROM FUNDRAISER F
    LEFT JOIN CATEGORY C ON F.CATEGORY_ID = C.CATEGORY_ID
    WHERE F.FUNDRAISER_ID = ?;
  `;
  
  db.query(query, [fundraiserId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
//添加获取特定筹款人详情的路由
app.get('/api/fundraisers/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('SELECT * FROM fundraisers WHERE id = \$1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/