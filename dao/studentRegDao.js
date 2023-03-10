const e = require("cors");
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
            text: `${newStudent}`,
            to: "dundlodgirlsschool@gmail.com",
            from: process.env.EMAIL,
            replyTo: `${data.email}`,
          });
          sendEmail({
            subject: "Student Registration",
            text: `${newStudent}`,
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
