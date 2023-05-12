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