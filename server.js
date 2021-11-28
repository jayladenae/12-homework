const connection = require('./db/connection');
const {menuPrompt} = require('./index');
// const art = require('ascii-art');

connection.connect(function (err) {
    if (err) throw err;
    // menuPrompt();
});

//  function theArt () {
//     art.font("Employee Management System", 'doom')
//            .then((rendered)=>{
//                //rendered is the ascii
//                console.log(rendered);
//            })
//         };

// theArt();
menuPrompt();


