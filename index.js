const connection = require('./db/connection');
const table = require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all Employees',
            'View all Roles',
            'View all Departments',
            'Add a Department',
            'Add a Role',
            'Add Employee',
            'Update Employee Role'
        ]
    }
]