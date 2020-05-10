// importing require modules
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

// Set the port  |  process.env.PORT is required for Heroku deployment
const PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// using template engine - handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// creating connection to mysql server
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Stanopal001$",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// server will start to the defined port
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

// exporting the module from this page to be imported in another page
module.exports = connection;
// importing syntax example: const moduleEL = require('./moduleName')