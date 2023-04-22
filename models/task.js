const mongoose = require("mongoose");
const HistoryDataSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      trim: true,
    },
    lastVisitedTime: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const HistoryData = mongoose.model("HistoryData", HistoryDataSchema);

module.exports =  HistoryData;
