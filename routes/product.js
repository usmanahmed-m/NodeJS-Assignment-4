const express = require('express');
const {
  getProducts, createProduct, updateProduct, deleteProduct,
} = require('../controllers/productController');
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');

const router = express.Router();

router.get('/', getProducts);
router.post('/createproduct', [auth, isAdmin], createProduct);
router.put('/updateproduct', [auth, isAdmin], updateProduct);
router.delete('/deleteproduct', [auth, isAdmin], deleteProduct);

module.exports = router;
