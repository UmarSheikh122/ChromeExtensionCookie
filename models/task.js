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
    attempt: {
      type: {
        SEMRUSH: {
          type: Number,
          default: 0,
        },
        CANVA: {
          type: Number,
          default: 0,
        },
        CHATGPT: {
          type: Number,
          default: 0,
        },
        INDEXIFICATION: {
          type: Number,
          default: 0,
        },
        GRAMMARLY: {
          type: Number,
          default: 0,
        },
      },
      default: {
        SEMRUSH: 0,
        CANVA: 0,
        CHATGPT: 0,
        INDEXIFICATION: 0,
        GRAMMARLY: 0,
      },
    },
  },
  { timestamps: true }
);

const UserObj = mongoose.model("Task", Task);

module.exports = UserObj;
