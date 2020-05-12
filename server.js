const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const orm = require("./config/orm");
//let router = require("./controllers/burgers_controller");
let connection = require("./config/connection.js");



const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

//app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});

