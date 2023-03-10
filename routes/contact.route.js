const express = require("express");
const ContactCtrl = require("../controllers/contact.controller");

const router = express.Router();

router.route("/").post(ContactCtrl.postQuery);

module.exports = router;
