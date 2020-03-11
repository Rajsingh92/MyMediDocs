const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Doctor
let MStaff = new Schema({
  Name: {
    type: Text
  },
  Salary: {
    type: Text
  },
  Email: {
    type: Text
  },
  AlternateEmail: {
    type: Text
  },
  Contact: {
    type: Text
  },
  AlternateContact: {
    type: Text
  },
  Address: {
    type: Text
  },
  City: {
    type: Text
  },
  State: {
    type: Text
  },
  Gender: {
    type: Text
  },
},{
    collection: 'MStaff'
});

module.exports = mongoose.model('MStaff', MStaff);