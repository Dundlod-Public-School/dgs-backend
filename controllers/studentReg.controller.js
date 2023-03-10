const studentRegDAO = require("../dao/studentRegDao");

class StudentRegCtrl {
  static async postStudent(req, res, next) {
    try {
      console.log("print");
      studentRegDAO.addStudent(res, req.body);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = StudentRegCtrl;
