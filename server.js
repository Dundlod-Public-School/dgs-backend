const express = require("express");
const studentReg = require("./routes/studentReg.route.js");
const teacherApp = require("./routes/teacherApp.route.js");
const contact = require("./routes/contact.route.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/studentReg", studentReg);
app.use("/teacherApp", teacherApp);
app.use("/contact", contact);
app.use("/", (req, res) => res.status(200).json({ message: "running" }));
// app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));

module.exports = app;
