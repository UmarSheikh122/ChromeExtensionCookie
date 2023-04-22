const express = require("express");
const {
  getHistoryData,
  insertHistoryData,
} = require("../controllers/index.js")
const router = express.Router();
router.get("/api/historyData", getHistoryData);
router.post("/api/historyDataInsert", insertHistoryData);

module.exports = router;
