const Category = require('../models/categoryModel');

const getCategories = async (req, res) => {
  const category = await Category.find().sort('name');

  if (category !== []) {
    return res.send(category);
  }
  return res.send('There is no category in database');
};

const createCategory = async (req, res) => {
  const { name, subCategory } = req.body;

  if (name) {
    const categoryExist = await Category.findOne({ name });
    if (name === categoryExist?.name) {
      return res.send('Category with this name already exists');
    }
  } else {
    return res.send('Kindly provide category name to be created');
  }

  const category = await Category.create({ name, subCategory });

  if (category) {
    return res.json({
      category: {
        name,
        subCategory,
      },
    });
  }
  return null;
};

const updateCategory = async (req, res) => {
  const { name, subCategory } = req.body;
  if (name) {
    const category = await Category.findOne({ name });
    if (category !== []) {
      category.name = name;
      category.subCategory = subCategory;
      await category.save();
      return res.send(category);
    }
  } else {
    return res.send('Category doesnot exist');
  }

  return null;
};

const deleteCategory = async (req, res) => {
  const { name } = req.body;
  if (name) {
    const category = await Category.findOneAndDelete({ name });
    return res.send(category);
  }
  return null;
};

module.exports = {
  getCategories, createCategory, updateCategory, deleteCategory,
};
