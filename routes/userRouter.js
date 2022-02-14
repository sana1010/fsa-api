const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();
 

router.post('/products', userCtrl.register);
router.get('/get', userCtrl.getUsers);
module.exports = router;