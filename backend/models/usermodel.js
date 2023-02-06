const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "User Full Name required!"],
  },
  email: {
    type: String,
    required: [true, "Email required!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password required!"],
  },
  cpassword: {
    type: String,
    required: [true, "Confirm Password required!"],
  },
});

module.exports = mongoose.model("UserModel", userSchema);
