const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const data = new Schema(
  {
    title: {
      type: String,
      required: [true, "Video title required!"],
    },
    subtitle: {
      type: String,
      required: [true, "Video subtitle required!"],
    },
    thumb: {
      type: String,
      required: [true, "Video Thumbnail required!"],
    },
    source: {
      type: String,
      required: [true, "Video source url required!"],
    },
    category: {
      type: String,
      required: [true, "Video category required!"],
    },
    description: {
      type: String,
      required: [true, "Video description required!"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("VideoModel", data);
