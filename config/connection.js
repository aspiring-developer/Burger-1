// importing required module
const mysql = require("mysql");

// creating connection to mysql database server
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Stanopal001$",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// exporting the module from this page to be imported into another page
module.exports = connection;
