const { Category } = require('../models');

const createCategory = async ({ name }) => {
  await Category.create(
    { name },
  );

  const responseNewCategory = await Category.findOne({ where: { name } });

  return responseNewCategory;
};

const getAllCat = async () => {
  const responseAllCat = await Category.findAll();

  return responseAllCat;
};

module.exports = {
  createCategory,
  getAllCat,
};
