const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection (
    {
        host:'localhost',
        user:'root',
        password:'password',
        database: 'lucifer'
    },
    console.log('Connected to the lucifer database.')
);


module.exports = connection;
