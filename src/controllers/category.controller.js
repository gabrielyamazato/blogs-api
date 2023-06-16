const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const data = req.body;

  const response = await categoryService.createCategory(data);

  return res.status(201).json(response);
};

module.exports = {
  createCategory,
};
