'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  workField: {
    type: Array,
    required: true,
    lowercase: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: Number,
    trim: true
  },
  rating: {
    type: Number,
    trim: true
  },
  localization: {
    type: Number,
    trim: true
  }
});

module.exports = mongoose.model('User', schema);

// Sugested Array of buildings
/* 
Appartments:{
  type: Array,
  required: true
}
 */
