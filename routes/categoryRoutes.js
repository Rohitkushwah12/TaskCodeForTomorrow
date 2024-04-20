const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.post('/category', verifyToken, categoryController.createCategory);
router.get('/categories', verifyToken, categoryController.getAllCategories);
router.put('/category/:categoryId', verifyToken, categoryController.updateCategory);
router.delete('/category/:categoryId', verifyToken, categoryController.deleteCategory);

module.exports = router;
