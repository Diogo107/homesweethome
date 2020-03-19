'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  workField: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  price: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  buildingId: {
    type: String
  },
  
});

module.exports = mongoose.model('Services', schema);

// Sugested Array of buildings
/* 
Appartments:{
  type: Array,
  required: true
}
 */
