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
      default: 'https://res.cloudinary.com/dhkwwgiic/image/upload/v1584969781/homesweethome/h0ige1n2nwd9sj7wm8dw.png'
    },
    creator: {
      type: String,
      trim: true
    },
    buildingId: {
      type: String
    },
    creatorName:{
      type: String
    }
  },
  {
    timestamp: { type: Date, default: Date.now }
  }
);

module.exports = mongoose.model('Annoucement', schema);
