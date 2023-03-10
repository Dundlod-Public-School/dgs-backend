const express = require("express");
const StudentRegCtrl = require("../controllers/studentReg.controller");

const router = express.Router();

router.route("/").post(StudentRegCtrl.postStudent);

module.exports = router;
