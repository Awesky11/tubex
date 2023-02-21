const express = require("express");
const router = express.Router();

const {
  getVideos,
  setVideos,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");

router.route("/videos/").get(getVideos).post(setVideos);

router.route("/videos/:id").put(updateVideo).delete(deleteVideo);

module.exports = router;
