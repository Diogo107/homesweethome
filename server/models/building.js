'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    default: 'My Home'
  },
  address: {
    type: String,
    trim: true
  },
  numberOfApartment: {
    type: Number,
    required: false
  },
  admin: {
    type: String,
    required: true
  },
  residents: {
    type: Array
  },
  picture: {
    type: String,
    default: 'https://pt.seaicons.com/wp-content/uploads/2015/07/home-icon2.png'
  }
});

module.exports = mongoose.model('Building', schema);

//Optional Address Under
/* 
country: {
  type: String,
  trim: true
},
city: {
  type: String,
  trim: true
},
street: {
  type: String,
  trim: true
},
doorNumber:{
  type: String,
  trim: true
},
floor:{
  type: Number,
  trim: true
},
letter:{
  type: String,
  trim: true
}
 */
