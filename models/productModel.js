const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableQuantity: {
    type: Number,
    required: true,
  },
  otherProperties: {
    type: Object,
    default: {},
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
