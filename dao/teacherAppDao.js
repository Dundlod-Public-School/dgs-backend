const sendEmail = require("../mailer");
const Teacher = require("../models/TeacherApp");

class teacherRegDAO {
  static async addTeacher(res, data) {
    try {
      const newTeacher = new Teacher(data);
      newTeacher
        .save()
        .then(() => {
          console.log("Teacher Added Success");
          sendEmail({
            subject: "Teacher Application",
            text: `${newTeacher}`,
            to: "dundlodgirlsschool@gmail.com",
            from: process.env.EMAIL,
            replyTo: `${data.email}`,
          });
          sendEmail({
            subject: "Teacher Application",
            text: `${newTeacher}`,
            to: `${data.email}`,
            from: process.env.EMAIL,
            replyTo: "dundlodgirlsschool@gmail.com",
          });
          res.status(200).json({ message: "Registered" });
        })
        .catch((err) => {
          res
            .status(500)
            .json({ error: "Unable to insert teacher in Teacher" });
        });
      console.log(newTeacher);
      return newTeacher;
    } catch (err) {
      console.error(`Unable to insert teacher in TeacherAppDAO: ${err}`);
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = teacherRegDAO;
