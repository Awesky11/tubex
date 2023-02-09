const express = require("express");
const router = express.Router();


const { loginUser, signupUser } = require("../controllers/userContoller");

router.route("/auth/login/").post(loginUser);
router.route("/auth/signup/").post(signupUser);

module.exports = router;