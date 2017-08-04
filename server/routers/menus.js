const express = require('express');
const router = express.Router();
const menuCont = require('../controllers/menuController')
const userAuth = require('../helpers/verifyToken');

router.get('/', userAuth.verifyTokenForAdminKasir, menuCont.getAllMenus);
router.get('/:id', userAuth.verifyTokenForAdminKasir, menuCont.getOneMenu);
router.post('/', userAuth.verifyTokenForAdmin, menuCont.createNewMenu);
router.put('/:id',userAuth.verifyTokenForAdminKasir, menuCont.updateMenu);
router.delete('/:id', userAuth.verifyTokenForAdmin, menuCont.deleteMenu);

module.exports = router
