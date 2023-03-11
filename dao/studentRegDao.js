const cors = require("cors");
const sendEmail = require("../mailer");
const Student = require("../models/StudentReg");

class studentRegDao {
	static async addStudent(res, data) {
		try {
			const newStudent = new Student(data);
			newStudent
				.save()
				.then(() => {
					console.log("Student Added Success");
					sendEmail({
						subject: "Student Registration",
						html: `<div>\
                  <p>Name: ${newStudent.fullname}</p>\
                  <p>Email: ${newStudent.email}</p>\
                  <p>Class: ${newStudent.class}</p>\
                  <p>Father Name: ${newStudent.fathername}</p>\
                  <p>Mother Name: ${newStudent.mothername}</p>\
                  <p>Date of Birth: ${newStudent.dob}</p>\
                  <p>Phone Number: ${newStudent.phone}</p>\
                  <p>Whatsapp: ${newStudent.whatsapp}</p>\
                  <p>Address: ${newStudent.address}</p>\
                  </div>`,
						to: "dundlodgirlsschool@gmail.com",
						from: process.env.EMAIL,
						replyTo: `${data.email}`,
					});
					sendEmail({
						subject: "Student Registration",
						html: `<div>\
                  <p>Name: ${newStudent.fullname}</p>\
                  <p>Email: ${newStudent.email}</p>\
                  <p>Class: ${newStudent.class}</p>\
                  <p>Father Name: ${newStudent.fathername}</p>\
                  <p>Mother Name: ${newStudent.mothername}</p>\
                  <p>Date of Birth: ${newStudent.dob}</p>\
                  <p>Phone Number: ${newStudent.phone}</p>\
                  <p>Whatsapp: ${newStudent.whatsapp}</p>\
                  <p>Address: ${newStudent.address}</p>\
                  </div>`,
						to: `${data.email}`,
						from: process.env.EMAIL,
						replyTo: "dundlodgirlsschool@gmail.com",
					});
					res.status(200).json({ message: "success" });
				})
				.catch((err) => {
					res.status(500).json({ error: "Unable to Register" });
					return;
				});
			console.log(newStudent);
		} catch (err) {
			res.status(500).json({ error: err });
		}
	}
}

module.exports = studentRegDao;
