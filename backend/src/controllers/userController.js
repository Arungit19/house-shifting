const userModel = require("../models/userModel");

exports.getUsers = async (req, res) => {
  const users = await userModel.getUsers();
  res.json(users);
};

exports.saveProfile = async (req, res) => {
  res.json({ message: "Profile saved" });
};