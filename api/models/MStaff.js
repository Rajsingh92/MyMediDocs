const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Doctor
let MStaff = new Schema({
  Name: {
    type: String
  },
  Salary: {
    type: String
  },
  Email: {
    type: String
  },
  AlternateEmail: {
    type: String
  },
  Contact: {
    type: String
  },
  AlternateContact: {
    type: String
  },
  Address: {
    type: String
  },
  City: {
    type: String
  },
  State: {
    type: String
  },
  Gender: {
    type: String
  },
},{
    collection: 'MStaff'
});

module.exports = mongoose.model('MStaff', MStaff);