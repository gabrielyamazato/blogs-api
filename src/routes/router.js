const express = require('express');

const loginController = require('../controllers/login.controller');
const userController = require('../controllers/user.controller');
const categoryController = require('../controllers/category.controller');
const postController = require('../controllers/post.controller');
const { validateFields } = require('../middlewares/validateFields');
const { validateFieldsUser } = require('../middlewares/validateFieldsUser');
const { validateToken } = require('../middlewares/validateToken');
const { validateName } = require('../middlewares/validateName');

const route = express.Router();

route.post('/login', validateFields, loginController.login);
route.post('/user', validateFieldsUser, userController.createUser);
route.get('/user', validateToken, userController.getUsers);
route.get('/user/:id', validateToken, userController.getUsersById);
route.post('/categories', validateToken, validateName, categoryController.createCategory);
route.get('/categories', validateToken, categoryController.getAllCat);
route.get('/post', validateToken, postController.getAllPosts);

module.exports = route;