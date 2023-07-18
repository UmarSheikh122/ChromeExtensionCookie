const express = require("express");
const { getUserData, userValidation, updateUserStatus } = require("../controllers/index.js");
const router = express.Router();
router.get("/api/getUserData", getUserData);
router.post("/api/userValidation", userValidation);
router.put("/api/userStatus", updateUserStatus)

module.exports = router;
