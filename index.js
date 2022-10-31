const inquirer = require('inquirer');
const { end, connect, off } = require('./db/connection');
const { connection } = require('./db/index');
const db = require("./db/index");

// Import console table for logging information on screen in table format
require("console.table");

// Call startup function
init();

// main initial functions questions
function init() {
    inquirer
        .prompt(
            questions = ([
                {
                    type: 'list',
                    name: 'start',
                    message: 'Please choose an option: ',
                    choices: [
                        "View all departments",
                        "View all roles",
                        "View all employees",
                        "Add a department",
                        "Add a role",
                        "Add an employee",
                        "Update an employee role",
                        "Remove an emplyee",
                        "Remove a role",
                        "Remove a department",
                        "Quit"
                    ]
                },
            ])

        )
        .then((answer) => {
            if (answer.start === "View all cars") {
                viewCars();
            } else if (answer.start === "View all roles") {
                viewRo();
            } else if (answer.start === "View all employees") {
                viewEmp();
            } else if (answer.start === "Add a department") {
                addDept();
            } else if (answer.start === "Add a role") {
                addRo();
            } else if (answer.start === "Add an employee") {
                addEmp();
            } else if (answer.start === "Update an employee role") {
                updateEmpRole();
            } else if (answer.start === "Remove an emplyee") {
                removeEmployee();
            } else if (answer.start === "Remove a role") {
                removeRole();
            } else if (answer.start === "Remove a department") {
                removeDepartment();
            } else {
                exit();
            }
        });
}

function viewCars() {
    db.
}

// function to exit application
function exit() {
    connection.end()
};


