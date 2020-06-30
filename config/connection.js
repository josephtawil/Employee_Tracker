const mysql = require("mysql");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        port: 3306,
        password: "yuseffufu1997",
        database: "employee_db"
    });

// connection.connect((err) => {
//     if (err) throw err;
//     console.log("Connected to database");

// });

module.exports = connection;