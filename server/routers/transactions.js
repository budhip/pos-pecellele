const express = require('express');
const router = express.Router();
const transactionCont = require('../controllers/transactionController');

router.get('/', transactionCont.getAllTransactions);
router.get('/:id', transactionCont.getOneTransaction);
router.post('/', transactionCont.createNewTransaction);
router.post('/:id', transactionCont.pushToMenuList);
router.delete('/:id', transactionCont.deleteTransaction);
router.put('/:id', transactionCont.updateTransaction);

module.exports = router;
