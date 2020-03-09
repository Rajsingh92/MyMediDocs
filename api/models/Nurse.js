const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Doctor
let Nurse = new Schema({
  Name: {
    type: Text
  },
  Qualification: {
    type: Text
  },
  PrevExperience: {
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
    collection: 'Nurse'
});

module.exports = mongoose.model('Nurse', Nurse);