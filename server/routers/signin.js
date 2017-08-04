const express = require('express');
const router = express.Router();
const signinCont = require('../controllers/signinController')
const genSalt = require('../helpers/generateSalt');

router.post('/', signinCont.signin)

module.exports = router;
