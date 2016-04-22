'use strict';
var mongoose = require('mongoose');
var transactionModel = function(){
  var transactionSchema = mongoose.Schema({
    status: Number,
    user_id: Schema.Types.ObjectId,
    user_name: String,
    user_email: String,
    user_phone: String,
    amount: Number,
    payment: String,
    payment_info: String,
    message: String,
    security: String,
    created: Date
  });
};

module.exports = new transactionModel();
