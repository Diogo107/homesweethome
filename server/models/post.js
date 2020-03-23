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
      default: 'https://res.cloudinary.com/dhkwwgiic/image/upload/v1584974610/homesweethome/s7pzoodtxx6o7fbk1ej3.png'
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

module.exports = mongoose.model('Post', schema);
