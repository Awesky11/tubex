const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "User Name required!"],
  },
  userType: {
    type: String,
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
});

userSchema.statics.login = async function (email, password) {
  if (!email) {
    throw Error("Email is required!");
  } else if (!password) {
    throw Error("Password is required!");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid!");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not valid!");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Email is wrong!");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Password is wrong!");
  }

  return user;
};

userSchema.statics.signup = async function (username, email, password) {
  if (!username) {
    throw Error("User Name required!");
  } else if (!email) {
    throw Error("Email is required!");
  } else if (!password) {
    throw Error("Password is required!");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid!");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough!");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email Already Exists!");
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  if (email === "admin@tubex.com") {
    userType = "admin";
  } else {
    userType = "user";
  }

  const user = await this.create({ username, email, password: hash, userType });

  return user;
};

module.exports = mongoose.model("UserModel", userSchema);
