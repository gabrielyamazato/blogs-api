const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const data = req.body;

  const response = await categoryService.createCategory(data);

  return res.status(201).json(response);
};

const getAllCat = async (_req, res) => {
  const categories = await categoryService.getAllCat();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCat,
};
