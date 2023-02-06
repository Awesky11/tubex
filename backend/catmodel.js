const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category = new Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
    required: [true, "Category Name required!"],
  },
  data: Array,
});

module.exports = mongoose.model("CatModel", category);
