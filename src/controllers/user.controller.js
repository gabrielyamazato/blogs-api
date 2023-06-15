const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const dataUser = req.body;

  const responseService = await userService.createUser(dataUser);

  if (responseService === 'ALREADY EXIST') {
    return res.status(409).json({ message: 'User already registered' });
  }

  return res.status(201).json({ token: responseService });
};

const getUsers = async (_req, res) => {
  const response = await userService.getUsers();

  return res.status(200).json(response);
};

const getUsersById = async (req, res) => {
  const { id } = req.params;

  const resp = await userService.getUsersById(id);

  if (!resp) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(resp);
};

module.exports = { 
  createUser,
  getUsers,
  getUsersById,
};
