const express = require('express');
const router = express.Router();
const userCont = require('../controllers/userController');
const userAuth = require('../helpers/verifyToken');

router.get('/', userAuth.verifyTokenForAdmin, userCont.getAllUsers);
router.get('/:id', userAuth.verifyTokenForAdminKasir, userCont.getOneUser);
router.post('/', userAuth.verifyTokenForAdmin, userCont.createNewUser);
router.put('/:id', userAuth.verifyTokenForAdminKasir, userCont.updateUser);
router.delete('/:id', userAuth.verifyTokenForAdmin, userCont.deleteUser);

module.exports = router
