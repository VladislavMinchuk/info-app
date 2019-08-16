const express = require('express');
const router = express.Router();

const controllerHome = require('../controllers/home');
const controllerUser = require('../controllers/user');

router.get('/', controllerHome.getIndex);
router.post('/', controllerHome.sendData);

router.get('/user', controllerUser.getPage);
router.post('/user', controllerUser.addUser);

module.exports = router;
