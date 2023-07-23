const mongoose = require("mongoose");
const Task = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    cookie: {
      type: Object,
      default: {},
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserObj = mongoose.model("Task", Task);

module.exports = UserObj;
