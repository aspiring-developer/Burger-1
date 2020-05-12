let connection = require("./connection.js");

// Object Relational Mapper (ORM)
let orm = {
  selectAll: function () {
    connection.query("SELECT * FROM burgers", function (err, data) {
      if (err) throw err;
      console.log(data);
    });
  },

  insertOne: function () {
    connection.query("INSERT INTO burgers (burger_name) VALUES (burger_name)", function (err, data) {
      if (err) throw err;
      console.log(data);
    });
  },

  updateOne: function () {
    connection.query("UPDATE burgers SET burger_name = burger_name", function (err, data) {
      if (err) throw err;
      console.log(data);
    });

  }

};

orm.selectAll();
orm.insertOne();
orm.updateOne();

// exporting the module from this page to be imported into another page
module.exports = orm;


