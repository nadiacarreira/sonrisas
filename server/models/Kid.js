const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kidSchema = new Schema({
		name: String,
		age:Number,
		about:String,
	  photo: {
	    type: String,
	    default: ''
	}
});

module.exports = mongoose.model('Kid', kidSchema);
