const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subCategory: {
    type: Array,
    default: [],
  },
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
