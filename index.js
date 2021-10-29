const connection = require('./db/connection');
const inquirer = require('inquirer');
const util = require('util');
const { Table } = require('console-table-printer');
const query = util.promisify(connection.query).bind(connection);



function consoleTable(rows) {
    const table = new Table();
    table.addRows(rows);
    table.printTable();
}

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
                    'Update an Employee Role',
                    'Finished'
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
        case "View all Departments" : 
            viewAllDeps();
            break;
        case "View all Roles" : 
            viewAllRoles();
         break;
        case "View all Employees" : 
            viewAllEmployees();
         break;
        case "Add a Department" : 
            newDepartment();
         break;
        case "Add a Role" : 
            newRole();
         break;
        case "Add an Employee" : 
            addEmployee();
         break;
        case "Update an Employee Role" : 
            updateEmployee();
         break;
         case 'Finished' :
             console.log("You have now finished making changes");
             connection.end();
    } 
}

async function viewAllDeps() {
    try {
        //* get the data from the query 
        const rows = await query('SELECT * FROM department;')
        //* console table the data
        consoleTable(rows);
    } finally {
       menuPrompt();
    }
}

async function viewAllRoles() {
    try {
        const rows = await query('SELECT r.id, r.title, r.salary, d.department_name AS department FROM roles r JOIN department d ON r.department_id = d.id;')
        consoleTable(rows);
    } finally {
        menuPrompt();
    }

}

async function viewAllEmployees() {

    try {
       const rows = await query('SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, m.last_name AS manager FROM employees e LEFT JOIN roles r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id;')
        consoleTable(rows);
    } finally {
        menuPrompt();
    }
}

async function newDepartment() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'newDepartmentName',
            message: 'what is the name of the new department?'
        }])
        .then((response) => {
            async function addDepartment(response) {
                let selAllDep = `SELECT * FROM department;`
                try {
                    const { newDepartmentName } = response;
                    await query(`INSERT INTO department (department_name) VALUES (?);`, [newDepartmentName]);
                    const rows = await query(selAllDep);
                    console.table(rows)
                } finally {
                    menuPrompt();
                }
            }
            addDepartment(response);
        })
        
}

async function newRole() {
     let allDepts = `SELECT * FROM department`;
     const rows = await query(allDepts);
     console.table(rows)
    inquirer
        .prompt([
            {
				type: 'input',
				name: 'newRoleName',
				message: 'What is the title/name of the new role you want to add? ',
			},
        
        {
            type: 'input',
            name: 'newRoleSalary',
            message: 'what is the salary of the new role?'
        },
        {
            type: 'input',
            name: 'newRoleDepartment',
            message: 'from the table above, enter the department id for your new role: '
        }
    ])
    .then((response) => {
        async function addRole(response) {
            const {
                newRoleName, newRoleSalary, newRoleDepartment
            } = response;
            let allRoleQuery = `SELECT * FROM roles;`
            try {
                await query(` INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);`, [newRoleName, newRoleSalary, newRoleDepartment]);
                const rows = await query(allRoleQuery);
                    console.table(rows)
            } finally {
                menuPrompt();
            }
        }
        addRole(response);
    })
}

async function addEmployee() {
    let allRoles = `SELECT * FROM roles`;
     const rows = await query(allRoles);
     console.table(rows)
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'employeeFirstName',
            message: "What is your new employee's first name?"
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: "What is your new employee's last name?"
        },
        {
            type: 'input',
            name: 'employeeRole',
            message: "From the table above, enter your new employee's role NUMBER:"
        },
        {
            type: 'input',
            name: 'employeeManager',
            message: "What is the last name of the manager of the new employee?"
        }
    ])
    .then((response) => {
        async function newEmployee (response) {
            const { employeeFirstName, employeeLastName,employeeRole,employeeManager } = response;
            const manager = await query(`SELECT id FROM employees WHERE last_name=?;`, [employeeManager]);
            const managerID = manager[0].id;
            try {
                await query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);`, [employeeFirstName, employeeLastName,employeeRole, managerID]);
                const rows = await query(`SELECT * FROM employees;`);
                console.table(rows);
            } finally {
               menuPrompt();
            }
        }
        newEmployee(response);
    })
}

async function updateEmployee () {
    let allRoles = `SELECT * FROM roles`;
     const rows = await query(allRoles);
     console.table(rows)
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'employeeFirstName',
            message: "What is the employee's first name?"
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: "What is the employee's last name?"
        },
        {
            type: 'input',
            name: 'employeeRole',
            message: "From the table above, enter employee's new role NUMBER:"
        }
    ])
    .then((response) => {
        async function updatedEmployee (response) {
            const { employeeFirstName, employeeRole } = response;
            try{
             await query(`UPDATE employees SET role_id=? WHERE first_name=?;`, [employeeRole, employeeFirstName]);
             let allEmployees = `SELECT * FROM employees;`
             const rows = await query(allEmployees)
             console.table(rows);
        } finally {
            menuPrompt();
        }
            }
            updatedEmployee(response);
    })
}

module.exports = {menuPrompt};

