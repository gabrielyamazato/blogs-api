const express = require('express');

const loginController = require('../controllers/login.controller');
const { validateFields } = require('../middlewares/validateFields');

const route = express.Router();

route.post('/login', validateFields, loginController.login);

module.exports = route;