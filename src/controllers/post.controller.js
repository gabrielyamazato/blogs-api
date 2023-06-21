const postService = require('../services/post.service');

const getAllPosts = async (_req, res) => {
  const resp = await postService.getAllPosts();

  return res.status(200).json(resp);
};

module.exports = {
  getAllPosts,
};
