const UserObj = require("../models/task");

const getUserData = async (req, res) => {
  
  try {
    const { email } = req.query; 
    const userData = await UserObj.findOne({ email });
    if (!userData) {
      return res
        .status(400)
        .json({ res: "error", message: "No User data exists" });
    } 
    return res.status(200).json({
      res: "success",
      userData,
    });
  } catch (error) {
    res.status(500).json({ res: "error", message: "Something went wrong" });
  }
};
const userValidation = async (req, res) => {
  try {
    const userData = req.body;
    const query = { email: userData.email };
    // Find the user by email
    let user = await UserObj.findOne(query);
    if (!user) {
      // User not found, create a new user with the provided data
      user = await UserObj.create(userData);
      return res.status(200).json({
        message: "User Added Successfully",
        user,
      });
    }else {
      user.cookie = { ...user.cookie, ...userData.cookie };
      user.status = userData.status;
      await user.save();
      return res.status(200).json({
        message: "User Added Successfully",
        user,
      });
    }
  } catch (error) {
    res.status(500).json({ res: "error", message: "Something went wrong" });
  }
};
const updateUserStatus = async (req, res) => {
  try {
    let { email, service } = req.body;
    const user = await UserObj.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    user.attempt[service] += 1;
    await user.save();
    return res.status(200).json({
      res: "success",
      user,
    });
  } catch (error) {
    res.status(500).json({ res: "error", message: "Something went wrong" });
  }
};


module.exports = {
  getUserData,
  userValidation,
  updateUserStatus,
};

