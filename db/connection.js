const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jayladd#4',
    database: 'lucifer'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;