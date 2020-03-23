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
    doc: {
      type: String,
      default: 'https://res.cloudinary.com/dhkwwgiic/image/upload/v1584974646/homesweethome/tnslzewahrxqctdhkwq5.png'
    },
    creator: {
      type: String,
      trim: true
    },
    buildingId: {
      type: String
    },
  },
  {
    timestamp: { type: Date, default: Date.now }
  }
);

module.exports = mongoose.model('Doc', schema);
