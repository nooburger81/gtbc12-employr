const express = require('express');
const consoleTable = require('console.table');
const mysql = require('mysql');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3002;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const database = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`));
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  mainMenu();

function mainMenu() {
    console.log("Welcome to the Employee Tracker!");
    inquirer.prompt(
    {
    type: "list",
    name: "choice",
    message: "What would you like to do today?",
    choices: [
            "View All Employees", 
            "View All Departments",
            "View All Roles",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Exit"
            ],
    
}).then(answers => {
    console.log(answers.choice);
    switch (answers.choice) {
        case "View All Employees":
            viewEmployees();
            break;
        case "View All Departments":
            viewDepartments();
            break;
        case "View All Roles":
            viewRoles();
            break;
        case "Add Department":
            addDepartment();
            break;
        case "Add Role":
            addRole();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Update Employee Role":
            updateEmployeeRole();
            break;
        default:
            db.end();
            break;
    }
})
}


function viewEmployees() {
    database.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        mainMenu();
    })
}

function viewDepartments() {
    database.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        mainMenu();
    })
}

function viewRoles() {
    database.query("SELECT * FROM roles", function (err, data) {
        console.table(data);
        mainMenu();
    })
}

function addEmployee() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "What is the employees first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employees role ID"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employees manager's ID?"
        }
    ]).then(function(res) {
       database.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted");
            mainMenu();
        })
    })
}
function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What is the department that you want to add?"
    }, ]).then(function(res) {
        database.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted");
            mainMenu();
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title"
        }, {
            message: "enter salary:",
            type: "number",
            name: "salary"
        }, {
            message: "enter department ID:",
            type: "number",
            name: "departmentId"
        }
    ]).then(function (response) {
        database.query("INSERT INTO roles (title, salary, departmentId) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
            console.table(data);
        })
        mainMenu();
    })

}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            message: "which employee would you like to update? (use first name only for now)",
            type: "input",
            name: "name"
        }, {
            message: "enter the new role ID:",
            type: "number",
            name: "id"
        }
    ]).then(function (response) {
        database.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
            console.table(data);
        })
        mainMenu();
    })

}