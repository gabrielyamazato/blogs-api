const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const dataUser = req.body;

  const responseService = await userService.createUser(dataUser);

  if (responseService === 'ALREADY EXIST') {
    return res.status(409).json({ message: 'User already registered' });
  }

  return res.status(201).json({ token: responseService });
};

module.exports = { 
  createUser,
};
