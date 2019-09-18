const express = require('express');
const router = express.Router();

const controllerHome = require('../controllers/home');
const controllerUserAdd = require('../controllers/user_add');
const validateForm = require('../controllers/validate_form');
const formData = require('../controllers/form_data');
const singleFormData = require('../controllers/single-form-data');
const singleUser = require('../controllers/single-user');
const sorryPageController = require('../controllers/sorryMsgController');

router.get('/', formData, controllerHome.getIndex);
router.get('/users', formData, controllerHome.getUsers);
router.post('/users', validateForm, controllerUserAdd.addUser);
router.get('/users/:id', formData, singleFormData, singleUser.getSingleUser);
router.put('/users/:id', validateForm, singleUser.putSingleUser);
router.delete('/users/:id', singleUser.deleteSingleUser);
router.get('/form-add', formData, controllerUserAdd.getPage);
router.get('/sorry', sorryPageController.getSorryPage);

module.exports = router;
