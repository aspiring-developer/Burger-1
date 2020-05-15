const express = require("express");
const exphbs = require("express-handlebars");
let router = require("./controllers/burgers_controller");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});

