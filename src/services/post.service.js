const { BlogPost, User, Category } = require('../models');

const getAllPosts = async () => {
  const response = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' },
    ],
  });

  return response;
};

module.exports = {
  getAllPosts,
};
