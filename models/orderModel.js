'use strict';
var mongoose = require('mongoose');
var orderModel= function(){
  var orderSchema = mongoose.Schema({
    transaction_id: Schema.Types.ObjectId,
    product_id: Schema.Types.ObjectId,
    qty: Number,
    amount: Number,
    data: String,
    status: String
  });
};
