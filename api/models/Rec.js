const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Doctor
let Receptionist = new Schema({
  Name: {
    type: String
  },
  Qualification: {
    type: String
  },
  PrevExperience: {
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
    collection: 'Receptionist'
});

module.exports = mongoose.model('Receptionist', Receptionist);