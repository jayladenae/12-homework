const connection = require('./db/connection');
const {menuPrompt} = require('./index');
// const art = require('ascii-art');

connection.connect(function (err) {
    if (err) throw err;
    // menuPrompt();
});

menuPrompt();


