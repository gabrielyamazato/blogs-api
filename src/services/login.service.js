const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const login = async ({ email, password }) => {
  const responseEmail = await User.findOne({ where: { email } });
  const responsePassword = await User.findOne({ where: { password } });

  if (!responseEmail || !responsePassword) {
    return 'INVALID';
  }

  const payload = {
    email,
  };

  const token = createToken(payload);

  return token;
};

module.exports = {
  login,
};
