
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Employee
let Employee = new Schema({
  EmployeeName: {
    type: String
  },
  Sex: {
    type: String
  },
  Salary: {
    type: Number
  },
  Type: {
    type: String
  },
  Contact: {
    type: Number
  },
  Email: {
    type: String
  },
  Address: {
    type: String
  },
  City: {
    type: String
  },
 
},{
    collection: 'Employee'
});

module.exports = mongoose.model('Employee', Employee);