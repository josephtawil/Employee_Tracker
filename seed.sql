DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department
(
    id INT PRIMARY KEY NOT NULL
    AUTO_INCREMENT, name VARCHAR
    (30));
    CREATE TABLE role
    (
        id INT PRIMARY KEY NOT NULL
        AUTO_INCREMENT, title VARCHAR
        (30), salary DECIMAL
        (4,2), department_id INT NOT NULL, FOREIGN KEY
        (department_id) REFERENCES department
        (id));
        CREATE TABLE employee
        (
            id INT PRIMARY KEY NOT NULL
            auto_increment, first_name VARCHAR
            (30), last_name VARCHAR
            (30), role_id INT NOT NULL, manager_id INT default null, FOREIGN KEY
            (role_id) REFERENCES role
            (id), FOREIGN KEY
            (manager_id) REFERENCES employee
            (id));

            -- viewing table
            SELECT *
            FROM employee;
            SELECT *
            FROM role;

            -- department values
            INSERT INTO department
                (name)
            VALUES
                ("clothing");
            INSERT INTO department
                (name)
            VALUES
                ("food");

            -- role values
            INSERT INTO role
                ( title, salary, department_id)
            VALUES
                ( "cashier", 15.50, 1);
            INSERT INTO role
                (title, salary, department_id)
            VALUES
                ( "stocker", 16.00, 1);
            INSERT INTO role
                (title, salary, department_id)
            VALUES
                ( "chef", 17.00, 2);
            INSERT INTO role
                (title, salary, department_id)
            VALUES
                ( "manager", 20.00, 2);

            -- employee values
            INSERT INTO employee
                (first_name, last_name, role_id)
            VALUES
                ("Farid", "Tawil", 4);
            INSERT INTO employee
                (first_name, last_name, role_id, manager_id)
            VALUES
                ("Joseph", "Tawil", 3, 1);

            ALTER TABLE employee
MODIFY id INTEGER NOT NULL auto_increment;