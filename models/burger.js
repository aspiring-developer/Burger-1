const orm = require('../config/orm.js');

// creating burger object
let burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  },
  //  delete: function(condition, callback) {
  //    orm.delete("burgers", condition, function(res) {
  //     callback(res);
  //   });
  //  }

};



// exporting the module from this page to be imported into another page
module.exports = burger;