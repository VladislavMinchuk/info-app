const express = require('express');
const router = express.Router();

const controllerHome = require('../controllers/home');
const controllerUserAdd = require('../controllers/user_add');
const validateForm = require('../controllers/validate_form');

router.get('/', controllerHome.getIndex);
router.get('/users', controllerHome.getUsers);

router.get('/form-add', controllerUserAdd.getPage);
router.post('/users', validateForm, controllerUserAdd.addUser);

module.exports = router;
