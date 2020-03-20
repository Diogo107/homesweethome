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
  picture: {
    type: String,
    default: 'https://source.unsplash.com/random/400x400/?face'
  },
  phoneNumber: {
    type: Number,
    trim: true
  },
  slot: {
    type: String
  },
  passwordHash: {
    type: String
  },

  buildingId: {
    type: String
  },

  admin: Boolean,

  stripeCustomerId: {
    type: String
  },
  payment: Boolean,
  createdAt: Date,
  paymentMethods: Boolean,
  blocked: Boolean
});

module.exports = mongoose.model('User', schema);

// Sugested Array of buildings
/* 
Appartments:{
  type: Array,
  required: true
}
 */
