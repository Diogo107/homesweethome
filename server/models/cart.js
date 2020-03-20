'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: String
  },
  products: [
    {
      type: String
    }
  ],
  
});

module.exports = mongoose.model('Cart', schema);