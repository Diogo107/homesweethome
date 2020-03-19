'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
     
    },
    start: {
      type: Date,
    
    },
    buildingId: {
      type: String
    }

}
);

module.exports = mongoose.model('Calendar', schema);
