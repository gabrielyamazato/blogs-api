const { decodeToken } = require('../utils/JWT');

const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  try {
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decode = decodeToken(token);
    
    req.user = decode;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};
