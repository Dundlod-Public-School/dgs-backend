const mongoose = require("mongoose");
const TeacherApp = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },

    dob: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    married: {
      type: String,
      required: true,
    },
    spouse: {
      type: String,
    },
    spouseOcc: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    education: [
      {
        type: String,
        required: true,
      },
    ],
    experience: [
      {
        type: String,
        required: true,
      },
    ],
    lastSalary: {
      type: String,
      reqired: true,
    },
    expected: {
      type: String,
      required: true,
    },
  },
  { collection: "Teacher" }
);
module.exports = mongoose.model("Teacher", TeacherApp);
