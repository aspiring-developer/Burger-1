// importing required module
const mysql = require("mysql");

// creating connection to mysql database server
// adding Heroku connection information after subscribing with CC to Heroku host
// ####### ADDED BLOCK BELOW #########
let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
// ####### ADDED BLOCK ABOVE #########
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Stanopal001$",
  database: "burgers_db"
});
}; // This closing curly-bracket is also a part of the added block. Closing else statement!
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// exporting the module from this page to be imported into another page
module.exports = connection;
