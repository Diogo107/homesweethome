'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: Boolean,
      required: true,
      trim: true
    },
    purpose: {
      type: String,
      trim: true
    },
    amount: {
      type: Number,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    month: {
      type: Number,
      trim: true
    },
    year: {
      type: Number,
      trim: true
    },
    picture: {
      type: String,
      default: 'https://image.flaticon.com/icons/svg/1126/1126862.svg'
    },
    file: {
      type: String
    },
    creatorId: {
      type: String,
      trim: true
    },
    creatorName: {
      type: String,
      trim: true
    },
    buildingId: {
      type: String
    }
  },
  {
    timestamp: { type: Date, default: Date.now }
  }
);

module.exports = mongoose.model('Bill', schema);
