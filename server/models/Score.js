const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  points:[Number],
  achivement:[String],
  photo: {
    type: String,
    default: ''
  },
});
module.exports = mongoose.model('Score', scoreSchema);
