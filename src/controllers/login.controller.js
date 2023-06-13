const loginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const response = await loginService.login({ email, password });

  if (response === 'INVALID') {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json({ token: response });
};

module.exports = {
  login,
};