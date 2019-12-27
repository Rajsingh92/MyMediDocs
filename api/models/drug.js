

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Drug
let Drug = new Schema({
  DrugName: {
    type: String
  },
  DrugDescription: {
    type: String
  }
},{
    collection: 'Drug'
});

module.exports = mongoose.model('Drug', Drug);