const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category = new Schema({
  slug: {
    type: String,
  },
  title: {
    type: String,
    required: [true, "Category Name required!"],
  },
  data: Array,
});

module.exports = mongoose.model("CatModel", category);
