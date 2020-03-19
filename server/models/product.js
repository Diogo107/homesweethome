'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
    price: {
    amount: {
      type: Number,
      min: 0
    },
    currency: {
      type: String,
      enum: ['EUR', 'USD', 'GBP']
    }
  }
});

module.exports = mongoose.model('Product', schema);