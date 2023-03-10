const mongoose = require("mongoose");
const StudentReg = new mongoose.Schema(
	{
		fullname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		class: {
			type: String,
			required: true,
		},
		fathername: {
			type: String,
			required: true,
		},
		mothername: {
			type: String,
			required: true,
		},
		dob: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		whatsapp: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
	},
	{ collection: "Student" }
);
module.exports = mongoose.model("Student", StudentReg);
