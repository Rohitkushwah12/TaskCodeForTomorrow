const Category = require('../models/categoryModel');

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const categoryId = await Category.create(name);
    res.status(201).json({ message: 'Category created successfully', categoryId });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  console.log(categoryId);
  const { name } = req.body;
  try {
    await Category.update(categoryId, name);
    res.status(200).json({ message: 'Category updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    await Category.delete(categoryId);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
