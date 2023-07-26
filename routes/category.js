const express = require('express');
const {
  getCategories, createCategory, updateCategory, deleteCategory,
} = require('../controllers/categoryController');
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');

const router = express.Router();

router.get('/', getCategories);
router.post('/createcategory', [auth, isAdmin], createCategory);
router.put('/updatecategory', [auth, isAdmin], updateCategory);
router.delete('/deletecategory', [auth, isAdmin], deleteCategory);

module.exports = router;
