const mysql = require("mysql");
const cTable = require("console.table");
const connection = require("./config/connection");
const inquirer = require("inquirer");
const { getEmployees, getRoles, getDepartments, addEmployee, addRole, addDepartment } = require("./config/orm");



function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "questions",
            choices: ["Add a department", "Add a role", "Add an employee", "View all departments", "View all roles", "View all employees", "Exit"]
        }]).then((res) => {
            switch (res.questions) {
                case "View all employees":
                    getEmployees().then((res) => {
                        console.table(res);
                        mainMenu();
                    });
                    break;
                case "View all roles":
                    getRoles().then((res) => {
                        console.table(res);
                        mainMenu();
                    });
                    break;
                case "View all departments":
                    getDepartments().then((res) => {
                        console.table(res);
                        mainMenu();
                    });
                    break;
                case "Add an employee":
                    addingEmployee();

                    break;
                case "Add a role":
                    addingRole();

                    break;
                case "Add a department":
                    addingDepartment();

                    break;
                case "Exit":
                    connection.end();
                    process.exit();
                    break;

            }
        });
};

function addingEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "What is the first name of the employee",
        name: "first"
    },
    {
        type: "input",
        message: "What is the last name of the employee",
        name: "last"
    },
    {
        type: "input",
        message: "What is the role id the employee works as",
        name: "role"
    },
    {
        type: "input",
        message: "What is the manager's id",
        name: "manager"
    }]).then((res) => {
        console.log(res);
        const first = res.first;
        const last = res.last;
        const role = parseInt(res.role);
        console.log(typeof role);
        const manager = parseInt(res.manager);
        const data = { first_name: first, last_name: last, role_id: role, manager_id: manager };
        addEmployee(data).then((res) => console.log(res))
            .catch((err) => console.log(err));
        mainMenu();
    });
}

function addingRole() {
    inquirer.prompt([{
        type: "input",
        message: "What is the title of the position",
        name: "title"
    },
    {
        type: "input",
        message: "What is the salary for this position",
        name: "salary"
    },
    {
        type: "input",
        message: "What is the department id of this position",
        name: "department"
    }]).then((res) => {
        console.log(res);
        const title = res.title;
        const salary = parseFloat(res.salary);
        console.log(typeof salary);
        const department = parseInt(res.department);
        const data = { title: title, salary: salary, department_id: department };
        addRole(data).then((res) => console.log(res))
            .catch((err) => console.log(err));
        mainMenu();
    });
}

function addingDepartment() {
    inquirer.prompt([{
        type: "input",
        message: "What is the kind of department",
        name: "name"
    }]).then((res) => {
        console.log(res);
        const name = res.name;
        const data = { name: name };
        addDepartment(data).then((res) => console.log(res))
            .catch((err) => console.log(err));
        mainMenu();
    });
}
mainMenu();
module.exports = { mainMenu };