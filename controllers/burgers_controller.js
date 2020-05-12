const express = require('express');
// Importing the model "burger.js" from models folder 
const burger = require('../models/burger.js')

let router = express.router();

// setting routers  --- get method that targets root/main page
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    burger_name: req.body.burger_name
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // showing users 404 message if the request has nothing to show
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
 // showing users 404 message if the request has nothing to show
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// exporting the module from this page to be imported into another page
module.exports = router; 
