const connection = require('./config/connection');
const table = require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const {viewAllDeps, viewAllRoles} = require('./db/index');

connection.connect(function (err) {
    if (err) throw err;
});

function menuPrompt () { [
    inquirer 
        .prompt([
            {
                type: 'list',
                name: 'menuOption',
                message: 'What would you like to do?',
                choices: [
                    'View all Departments',
                    'View all Roles',
                    'View all Employees',
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee',
                    'Update an Employee Role'
                ]
            }
        ])
        .then((selection) => {
            selections(selection);
        })
]
}

function selections (selection) {
    switch(selection.menuOption) {
        case "View all Departments" : {
            viewAllDeps()
            .then((res) => {
                console.log("--------------------");
                console.log("All Departments:")
                console.log("--------------------");
                console.table(res[0])
                menuPrompt();
            });
            break;
        } 
        case "View all Roles" : {
            viewAllRoles()
        }
    }
}
