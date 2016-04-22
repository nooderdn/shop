'use strict';

var mongoose = require('mongoose');

var catalogModel = function(){
  var catalogSchema = mongoose.Schema({
    name: String,
    parent_id: Schema.Types.ObjectId
  });
};

module.exports = new catalogModel();
