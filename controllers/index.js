const Task = require("../models/task");

const getHistoryData = async (req, res) => {
  try {
    const history = await Task.find({});
    if (!history) {
      return res
        .status(400)
        .json({ res: "error", message: "No history data exists" });
    } 
    return res.status(200).json({
      res: "success",
      history,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ res: "error", message: "Something went wrong" });
  }
};
const insertHistoryData = async (req, res) => {
  try {
    const history = req.body;
    console.log('history: ', history);
    if (!history) {
      return res
        .status(500)
        .json({ res: "error", message: "No history data exists" });
    }
    const historyObjects = await Task.insertMany(history);
    return res.status(200).json({
      message: "History Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ res: "error", message: "Something went wrong" });
  }
};

module.exports = {
  getHistoryData,
  insertHistoryData,
};

