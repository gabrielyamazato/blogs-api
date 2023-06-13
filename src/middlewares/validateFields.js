const validations = (thing) => {
  if (thing === undefined || thing.length < 1 || !thing) {
    return true;
  }
};

const validateFields = async (req, res, next) => {
  const { email, password } = req.body;

  if (validations(email) || validations(password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validateFields,
};