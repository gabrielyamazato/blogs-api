const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const createUser = async ({ displayName, email, password, image }) => {
  const responseEmail = await User.findOne({ where: { email } });
  
  if (responseEmail) {
    return 'ALREADY EXIST';
  }

  await User.create(
    { displayName, email, password, image },
  );

  const payload = {
    email,
  };

  const token = createToken(payload);

  return token;
};

module.exports = {
  createUser,
};
