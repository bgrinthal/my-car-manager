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
                        "View full car specs",
                        "View bought/sold car info",
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
            } else if (answer.start === "View full car specs") {
                viewFullCars();
            } else if (answer.start === "View bought/sold car info") {
                viewCarsInfo();
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

function viewFullCars() {
    db.viewMyFullCars()
        .then(([result]) => {
            console.table(result);
        })
        .then(() => {
            init();
        })
}

function viewCarsInfo() {
    db.viewMyCarInfo()
        .then(([result]) => {
            console.table(result);
        })
        .then(() => {
            init();
        })
}

function addCar() {
    addManu();
}

function addManu() {
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
                    name: 'manufacturer',
                    message: 'Please choose an option: ',
                    choices: ['New manufacturer'].concat(manufacturers)
                }
            ])
            .then((answer) => {
                if (answer.manufacturer === 'New manufacturer') {
                    console.log('Add new manufacturer')
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'newManufacturer',
                                message: 'What is the manufacturer of the car?',
                            }
                        ])
                        .then((newManu) => {
                            db.addNewManufacturer(newManu.newManufacturer)
                            console.log(`${newManu.newManufacturer} added!`)
                        })
                } else {
                    db.addNewManufacturer(answer.manufacturer)
                }
                addModel();
            })
    })
}

function addModel() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'year',
                message: 'What is the year of the car?',
            },
            {
                type: 'input',
                name: 'model',
                message: 'What is the model of the car?',
            },
            {
                type: 'input',
                name: 'trim',
                message: 'What is the trim type of the car? Enter NULL if not applicable',
            },
            {
                type: 'input',
                name: 'package',
                message: 'Does the car have any additional packages? Enter NULL if not applicable',
            }
        ])
        .then((year, model, trim, package) => {

            addSpecs();
        })
}

function addSpecs() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'What color is the car?',
            },
            {
                type: 'list',
                name: 'transmission',
                message: 'Transimission type: ',
                choices: ['Automatic'].concat('Manual')
            },
            {
                type: 'input',
                name: 'bought',
                message: 'How much was the car purchased for?',
            },
            {
                type: 'input',
                name: 'startMiles',
                message: 'How mamy miles on car when purchased?',
            },
            {
                type: 'input',
                name: 'sold',
                message: 'How much was the car sold for? Enter NULL if not applicable',
            },
            {
                type: 'input',
                name: 'endMiles',
                message: 'How mamy miles on car when sold? Enter NULL if not applicable',
            }
        ])
        .then(() => {

        })
}

// function to exit application
function exit() {
    connection.end()
};


