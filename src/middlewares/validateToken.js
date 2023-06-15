const { decodeToken } = require("../utils/JWT");

const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' })
  }

  const decode = decodeToken(token);

  next();
};

module.exports = {
  validateToken,
};
