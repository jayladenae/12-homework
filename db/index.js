const mysql = require('mysql2');
const table = require('console.table');
const connection = require('../config/connection');

connection.connect(function (err) {
    if (err) throw err;
});

 function viewAllDeps () {
    const query =   `SELECT * FROM department;`
    return connection.promise().then().query(query);
}
 function viewAllRoles () {
    const query = `SELECT * FROM roles;`
    return connection.promise().then().query(query);
}

module.exports = {viewAllDeps, viewAllRoles};
