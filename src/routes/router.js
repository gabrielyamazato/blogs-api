const express = require('express');

const loginController = require('../controllers/login.controller');
const userController = require('../controllers/user.controller');
const { validateFields } = require('../middlewares/validateFields');
const { validateFieldsUser } = require('../middlewares/validateFieldsUser');

const route = express.Router();

route.post('/login', validateFields, loginController.login);
route.post('/user', validateFieldsUser, userController.createUser);

module.exports = route;