const asyncHandler = require("express-async-handler");

const CatModel = require("../models/catmodel");

const getCategories = asyncHandler(async (req, res) => {
  const cats = await CatModel.find();
  res.status(200).json(cats);
});

const setCategory = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Please add a category name!" });
    return;
  }

  const value = req.body.value;
  const exists = await CatModel.findOne({ value });

  if (exists) {
    res.status(200).json({ message: "This Category Already Exists!" });
  } else {
    const cat = await CatModel.create(req.body);
    res.status(200).json(cat);
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const cat = await CatModel.findById(id);

  if (!cat) {
    res.status(400).json({ message: "Category not found!" });
    return;
  }

  CatModel.findByIdAndUpdate(
    id,
    updates,
    { new: true },
    (err, updatedModel) => {
      if (err) {
        res.status(500).json({ message: "Error updating resource" });
      } else {
        res.status(200).json(updatedModel);
      }
    }
  );
});

const updateCategoryList = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    const cat = await CatModel.findOne({ slug: id });

    if (!cat) {
      res.status(400).json({
        message: "Category not found! Please add this category first.",
      });
      return;
    }

    const exists = await CatModel.findOne({ title: data.title });

    if (exists) {
      res.status(400).json({ message: "Already exists!" });
      return;
    }

    const updatedModel = await CatModel.updateOne(
      { slug: id },
      { $addToSet: { data: data } },
      { upsert: true }
    );

    if (updatedModel.modifiedCount == 1) {
      const cats = await CatModel.find();
      res.status(200).json(...cats);
    } else {
      res.status(200).json({ message: "This item already exist!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating list" });
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const cat = await CatModel.findById(req.params.id);

  if (!cat) {
    res.status(400).json({ message: "Category not found!" });
    return;
  }

  res.status(200).json(await cat.remove());
});

module.exports = {
  getCategories,
  setCategory,
  updateCategory,
  deleteCategory,
  updateCategoryList,
};
