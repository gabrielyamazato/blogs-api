const express = require('express');

const loginController = require('../controllers/login.controller');
const userController = require('../controllers/user.controller');
const { validateFields } = require('../middlewares/validateFields');
const { validateFieldsUser } = require('../middlewares/validateFieldsUser');
const { validateToken } = require('../middlewares/validateToken');

const route = express.Router();

route.post('/login', validateFields, loginController.login);
route.post('/user', validateFieldsUser, userController.createUser);
route.get('/user', validateToken, userController.getUsers);
route.get('/user/:id', validateToken, userController.getUsersById);

module.exports = route;