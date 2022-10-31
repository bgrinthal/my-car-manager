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
                        "View all cars",
                        "Add a car",
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
            } else if (answer.start === "Add a car") {
                addCar();
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
    db.viewMyCars()
        .then(([result]) => {
            console.table(result);
        })
        .then(() => {
            init();
        })
}

function addCar() {
    let manufacturers = [];
    connection.query(`SELECT * FROM manufacturer`, (err, data) => {
        if (err) throw err;

        for (let i = 0; i < data.length; i++) {
            manufacturers.push(data[i].name)
        }
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'start',
                    message: 'Please choose an option: ',
                    choices: ['New manufacturer'].concat(manufacturers)
                },
            ])
    })
}

// function to exit application
function exit() {
    connection.end()
};


