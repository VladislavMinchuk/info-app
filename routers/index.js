const express = require('express');
const router = express.Router();

const controllerHome = require('../controllers/home');
const controllerLogin = require('../controllers/login');

router.get('/', controllerHome.getIndex);
router.post('/', controllerHome.sendData);

router.get('/login', controllerLogin.getPage);

// router.get('/about', ctrlAbout.getAbout);
// router.get('/contact', ctrlContact.getContact);

module.exports = router;
