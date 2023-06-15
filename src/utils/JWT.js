const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'nao-passaras';

const createToken = (pay) => jwt.sign(pay, TOKEN_SECRET, { expiresIn: '15m' });

const decodeToken = (token) => jwt.verify(token, TOKEN_SECRET);

module.exports = {
  createToken,
  decodeToken,
};