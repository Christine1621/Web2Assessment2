//Introducing the mysql module for interacting with MySQL databases
const mysql = require('mysql');
//Create a database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'crowdfunding_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});
//Export database connection objects so that other modules can be imported.
module.exports = connection;