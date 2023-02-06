const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const data = new Schema(
  {
    description: {
      type: String,
      required: [true, "Video description required!"],
    },
    source: {
      type: String,
      required: [true, "Video source url required!"],
    },
    subtitle: {
      type: String,
      required: [true, "Video subtitle required!"],
    },
    thumb: {
      type: String,
      required: [true, "Video Thumbnail required!"],
    },
    title: {
      type: String,
      required: [true, "Video title required!"],
    },
    category: {
      type: String,
      required: [true, "Video category required!"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("VideoModel", data);
