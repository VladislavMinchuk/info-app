const express = require('express');
const router = express.Router();

const controllerHome = require('../controllers/home');
const controllerUserAdd = require('../controllers/userAdd');
const validateForm = require('../controllers/validateForm');
const formData = require('../controllers/formData');
const singleFormData = require('../controllers/singleFormData');
const singleUser = require('../controllers/singleUser');
const errorPageController = require('../controllers/errorPage');

router.get('/', formData, controllerHome.getIndex);
router.get('/users', formData, controllerHome.getUsers);
router.post('/users', validateForm, controllerUserAdd.addUser);
router.get('/users/:id', formData, singleFormData, singleUser.getSingleUser);
router.put('/users/:id', validateForm, singleUser.putSingleUser);
router.delete('/users/:id', singleUser.deleteSingleUser);
router.get('/form-add', formData, controllerUserAdd.getPage);
router.get('/error-page', errorPageController.getErrorPage);

module.exports = router;
