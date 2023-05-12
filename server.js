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