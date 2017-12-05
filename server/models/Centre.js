const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const centreSchema = new Schema({
	name: String,
	direction: String,
	cell: Number,
	description: String,
	photo: {
		type: String,
		default: ''
		},
	constructionYear: Number,
  countNumber: Number,
});



module.exports = mongoose.model('Centre', centreSchema);
