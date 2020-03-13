'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phoneNumber: {
    type: Number,
    trim: true
  },
  passwordHash: {
    type: String
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
