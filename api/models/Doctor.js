const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Doctor
let Doctor = new Schema({
  Name: {
    type: String
  },
  Qualification: {
    type: String
  },
  Type: {
    type: String
  },
  PrevExperience: {
    type: String
  },
  Salary: {
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
  Gender: {
    type: String
  },
 
},{
    collection: 'Doctor'
});

module.exports = mongoose.model('Doctor', Doctor);