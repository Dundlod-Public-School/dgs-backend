const express = require("express");
const TeacherAppCtrl = require("../controllers/teacherApp.controller");

const router = express.Router();

router.route("/").post(TeacherAppCtrl.postTeacher);

module.exports = router;
