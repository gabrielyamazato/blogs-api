const displayNameCheck = (toBeChecked) => {
  const MIN_LENGTH = 7;

  if (toBeChecked === undefined || toBeChecked.length <= MIN_LENGTH || !toBeChecked) {
    return true;
  }
};

const emailCheck = (emailToCheck) => {
  const code = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  return code.test(emailToCheck);
};

const validateFieldsUser = (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayNameCheck(displayName)) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (!emailCheck(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
};

module.exports = {
  validateFieldsUser,
};
