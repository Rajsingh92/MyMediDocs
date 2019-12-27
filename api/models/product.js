const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

let Product = new Schema({
  

  // ProductImage: {
  //   type: String
  // },
  ProductName: {
    type: String
  },
  ProductCategory: {
    type: String
  },
  ProductPrice: {
    type: Number
  },
  ProductDescription: {
    type: String
  },
  ProductAdded: {
    type: Number,
    default: moment().unix()
  },
  ProductQuatity: {
    type: Number
  },
  Ratings: {
    type: Number,
    default: Math.floor(Math.random() * 5 + 1)
  },
  Favourite: {
    type: Boolean,
    default: false
  },
  ProductSeller: {
    type: String
  }
},{
    collection: 'Product'
});

module.exports = mongoose.model('Product', Product);