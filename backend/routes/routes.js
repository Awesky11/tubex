const express = require("express");
const router = express.Router();

const {
  getCategories,
  setCategory,
  updateCategory,
  deleteCategory,
  updateCategoryList,
} = require("../controllers/catController");

const {
  getVideos,
  setVideos,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");

const { loginUser, signupUser } = require("../controllers/userContoller");

router.route("/auth/login/").post(loginUser);
router.route("/auth/signup/").post(signupUser);

router.route("/cat/").get(getCategories).post(setCategory);

router
  .route("/cat/:id")
  .put(updateCategory)
  .patch(updateCategoryList)
  .delete(deleteCategory);

router.route("/videos/").get(getVideos).post(setVideos);

router.route("/videos/:id").put(updateVideo).delete(deleteVideo);

module.exports = router;
