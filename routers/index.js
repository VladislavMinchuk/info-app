const express = require('express');
const router = express.Router();

const controllerHome = require('../controllers/home');
const controllerUser = require('../controllers/user');
const validateForm = require('../controllers/validate_form');

router.get('/', controllerHome.getIndex);
router.post('/', controllerHome.sendData);

router.get('/user', controllerUser.getPage);
router.post('/user', validateForm, controllerUser.addUser);

module.exports = router;
