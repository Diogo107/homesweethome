'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
     
    },
    start: {
      type: Date,
    
    }
}
);

module.exports = mongoose.model('Calendar', schema);
