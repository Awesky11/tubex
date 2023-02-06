const asyncHandler = require("express-async-handler");

const VideoModel = require("../models/videomodel");

const getVideos = asyncHandler(async (req, res) => {
  const videos = await VideoModel.find();
  res.status(200).json(videos);
});

const setVideos = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add all filed!");
  }

  const video = await VideoModel.create(req.body);

  res.status(200).json(video);
});

const updateVideo = asyncHandler(async (req, res) => {
  const video = await VideoModel.findById(req.params.id);

  if (!video) {
    res.status(400);
    throw new Error("Video not found!");
  }

  const updateVideo = await VideoModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateVideo);
});

const deleteVideo = asyncHandler(async (req, res) => {
  const video = await VideoModel.findById(req.params.id);

  if (!video) {
    res.status(400);
    throw new Error("Video not found!");
  }

  res.status(200).json(await video.remove());
});

module.exports = {
  getVideos,
  setVideos,
  updateVideo,
  deleteVideo,
};
