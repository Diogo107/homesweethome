'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    picture: {
      type: String,
      default: 'https://ya-webdesign.com/images/avatar-png-1.png'
    },
    creator: {
      type: String,
      trim: true
    }
  },
  {
    timestamp: { type: Date, default: Date.now }
  }
);

module.exports = mongoose.model('Annoucement', schema);
