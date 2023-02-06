const asyncHandler = require("express-async-handler");

const CatModel = require("./catmodel");

const getCategories = asyncHandler(async (req, res) => {
  const cats = await CatModel.find();
  res.status(200).json(cats);
});

const setCategory = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a category name!");
  }

  const cat = await CatModel.create(req.body);

  res.status(200).json(cat);
});

const updateCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const cat = await CatModel.findById(id);

  if (!cat) {
    res.status(400);
    throw new Error("Category not found!");
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

    const cat = await CatModel.findById(id);

    if (!cat) {
      res.status(400);
      throw new Error("Category not found!");
    }

    const updatedModel = await CatModel.updateOne(
      { _id: id },
      { $push: { data: data } }
    );

    res.status(200).json({ message: "List updated", updatedModel });
  } catch (error) {
    res.status(500).json({ message: "Error updating list" });
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const cat = await CatModel.findById(req.params.id);

  if (!cat) {
    res.status(400);
    throw new Error("Category not found!");
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
