const connection = require("./connection");

// class for database or database access object
class DB {
    //  constructor function w/ instant variable
    constructor(connection) {
        this.connection = connection
    }
    //  method to find all employees using mysql commands
    viewMyCars() {
        return this.connection.promise().query(
            `SELECT model.id, model.year, manufacturer.name, model.name, model.trim
            FROM model
            LEFT JOIN manufacturer ON manufacturer.id = model.manufacturer_id`
        );
    }
    //  method to find all employees using mysql commands
    viewMyFullCars() {
        return this.connection.promise().query(
            `SELECT model.id, specs.color, model.year, manufacturer.name, model.name, model.trim, model.package, specs.transmission
            FROM model
            LEFT JOIN manufacturer ON manufacturer.id = model.manufacturer_id
            LEFT JOIN specs ON specs.id = model.id`
        );
    }
    //  method to add new employees using mysql commands
    addNewManufacturer(name) {
        return this.connection.promise().query(
            `INSERT INTO manufacturer (name)
            VALUES ('${name}')`
        );
    }

    //  method to update employee roles using mysql commands
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.promise().query(
            `UPDATE employee SET role_id = ${roleId} 
            WHERE id = ${employeeId}`
        );
    }
    //  method to find all roles using mysql commands
    viewRoles() {
        return this.connection.promise().query(
            `SELECT role.id, role.title, role.salary, department.name 
            FROM role 
            LEFT JOIN department ON role.department_id = department.id`
        );
    }
    //  method to add role using mysql commands
    addRole(title, salary, index) {
        return this.connection.promise().query(
            `INSERT INTO role (title, salary, department_id)
            VALUES ('${title}', '${salary}', '${index}')`
        );
    }
    //  method to find all departments using mysql commands
    viewDepartments() {
        return this.connection.promise().query(
            `SELECT department.id, department.name
            FROM department 
            LEFT JOIN role ON role.department_id = department.id 
            LEFT JOIN employee ON employee.role_id = role.id 
            GROUP BY department.id, department.name`
        );
    }
    //  method to add new department using mysql commands
    addDepartment(department) {
        return this.connection.query(
            `INSERT INTO department (name) VALUES ('${department}')`
        );
    }
};

// export
module.exports = new DB(connection);