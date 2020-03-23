'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true
    },
    bankAccountName: {
      type: String,
      trim: true
    },
    nif: {
      type: String,
      
    },
    creator: {
      type: String,
      trim: true
    },
    creatorName: {
      type: String,
      
    },
    buildingId: {
      type: String
    },
    month: {
      type: String
    },
    amount: {
      type: String
    },
  },
  {
    timestamp: { type: Date, default: Date.now }
  }
);

module.exports = mongoose.model('Doc', schema);
