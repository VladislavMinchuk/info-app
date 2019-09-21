const express = require('express');
const router = express.Router();

const controllerHome = require('../controllers/home'); // get home page (search form) / search users
const controllerUserAdd = require('../controllers/userAdd'); // get user add page / user add to DB
const validateForm = require('../controllers/validateForm'); // check empty fields
const formData = require('../controllers/formData'); // get data for form select
const singleFormData = require('../controllers/singleFormData'); // get data single user
const singleUser = require('../controllers/singleUser'); // get/update/delete - single user
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
