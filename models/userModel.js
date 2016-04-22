'use strict';

var mongoose = require('mongoose');

var userModel = function () {
  var userSchema = mongoose.Schema({
    full_name: String,
    email: String,
    password: String,
    address: String,
    created: Date
  });
};
module.exports = new userModel;
