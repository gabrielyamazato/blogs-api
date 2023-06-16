const { Category } = require('../models');

const createCategory = async ({ name }) => {
  await Category.create(
    { name },
  );

  const responseNewCategory = await Category.findOne({ where: { name } });

  return responseNewCategory;
};

module.exports = {
  createCategory,
};
