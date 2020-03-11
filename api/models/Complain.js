const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Complain
let Complain = new Schema({
  id: {
    type: Text
  },
  dof: {
    type: Text
  },
  name: {
    type: Text
  },
  type: {
    type: Text
  },
  desc: {
    type: Text
  },
},{
    collection: 'Complain'
});

module.exports = mongoose.model('Complain', Complain);