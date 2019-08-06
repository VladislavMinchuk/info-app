const express = require('express');
const router = express.Router();

const controllerHome = require('../controllers/home');

router.get('/', controllerHome.getIndex);
router.post('/', controllerHome.sendData);

// router.get('/about', ctrlAbout.getAbout);
// router.get('/contact', ctrlContact.getContact);

module.exports = router;