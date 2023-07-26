/* eslint-disable no-param-reassign, no-underscore-dangle */
const Category = require('../models/categoryModel');
const Product = require('../models/productModel');

const getProducts = async (req, res) => {
  const products = await Product.find().populate('category').sort('title');
  if (products !== []) {
    return res.send(products);
  }
  return res.send('There are no products in database');
};

const createProduct = async (req, res) => {
  const {
    title, description, price, category, availableQuantity,
  } = req.body;

  let categoryExist;

  if (title) {
    const productExist = await Product.findOne({ title });

    if (title === productExist?.title) {
      return res.send('Product with this title already exists');
    }
  } else {
    return res.send('Kindly provide product title name');
  }
  if (category) {
    categoryExist = await Category.findOne({ name: category });
    if (!categoryExist?._id) {
      return res.send('Category with this name does not exist');
    }
  }

  const product = await Product.create({
    title,
    description,
    price,
    category: {
      _id: categoryExist._id,
      name: categoryExist.name,
      subCategory: categoryExist.subCategory,
    },
    availableQuantity,
  });

  if (product) {
    res.send(product);
  }
  return null;
};

const updateProduct = async (req, res) => {
  const {
    title, description, price, category, availableQuantity,
  } = req.body;

  if (title) {
    const product = await Product.findOne({ title }).populate('category');
    if (product !== []) {
      product.title = title;
      product.description = description;
      product.price = price;
      product.category = {
        _id: category._id,
        name: category.name,
        subCategory: category.subCategory,
      };
      product.availableQuantity = availableQuantity;
      await product.save();
      return res.send(product);
    }
  } else {
    return res.send('Kindly provide product title name to be updated');
  }
  return null;
};

const deleteProduct = async (req, res) => {
  res.send('deleting product');
};

module.exports = {
  getProducts, createProduct, updateProduct, deleteProduct,
};
