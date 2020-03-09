const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Doctor
let Doctor = new Schema({
  Name: {
    type: Text
  },
  Qualification: {
    type: Text
  },
  Type: {
    type: Text
  },
  PrevExperience: {
    type: Text
  },
  Salary: {
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
  Gender: {
    type: Text
  },
 
},{
    collection: 'Doctor'
});

module.exports = mongoose.model('Doctor', Doctor);