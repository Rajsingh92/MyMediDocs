const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Complain
let Complain = new Schema({
  id: {
    type: String
  },
  dof: {
    type: String
  },
  name: {
    type: String
  },
  type: {
    type: String
  },
  desc: {
    type: String
  },
},{
    collection: 'Complain'
});

module.exports = mongoose.model('Complain', Complain);