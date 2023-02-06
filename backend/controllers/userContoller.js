const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/usermodel");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);

    const token = createToken(user._id);

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const signupUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await UserModel.signup(username, email, password);

    const token = createToken(user._id);

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { loginUser, signupUser };
