const connection = require("./connection");

const getEmployees = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM employee", (err, data) => {
            // err ? console.log(err) : data.forEach((emp) => {
            //     console.log(emp.first_name);
            // });
            err ? reject(err) : resolve(data);
        });

    });
};
const getRoles = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM role", (err, data) => {
            // err ? console.log(err) : data.forEach((emp) => {
            //     console.log(emp.first_name);
            // });
            err ? reject(err) : resolve(data);
        });

    });
};

const getDepartments = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM department", (err, data) => {
            // err ? console.log(err) : data.forEach((emp) => {
            //     console.log(emp.first_name);
            // });
            err ? reject(err) : resolve(data);
        });

    });
};

//the obj keys must be the same name as the database keys
const addEmployee = (obj) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO employee SET ?", [{ first_name: obj.first_name, last_name: obj.last_name, role_id: obj.role_id, manager_id: obj.manager_id }], (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
};

const addRole = (obj) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO role SET ?", [{ title: obj.title, salary: obj.salary, department_id: obj.department_id }], (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
};

const addDepartment = (obj) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO department SET ?", [{ name: obj.name }], (err, data) => {

            err ? reject(err) : resolve(data);
        });
    });
};

module.exports = { getEmployees, getRoles, getDepartments, addEmployee, addRole, addDepartment };