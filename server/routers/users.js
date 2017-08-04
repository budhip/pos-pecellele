const express = require('express');
const router = express.Router();
const userCont = require('../controllers/userController');
const userAuth = require('../helpers/verifyToken');

router.get('/', userCont.getAllUsers);
router.get('/:id', userCont.getOneUser);
router.post('/', userCont.createNewUser);
router.put('/:id', userCont.updateUser);
router.delete('/:id', userCont.deleteUser);

module.exports = router
