const Transaction = require('../models/transaction');
const Menu = require('../models/menu')
const User = require('../models/user')

function getAllTransactions(req, res) {
  Transaction.find({})
  .populate('menulist', '_id nama_menu')
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function getOneTransaction(req, res) {
  Transaction.find({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function createNewTransaction(req, res) {
  Transaction.create({
    tanggal_transaksi: req.body.tanggal_transaksi,
    user: req.body.user,
    menulist: req.body.menuid,
    total: req.body.total
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function pushToMenuList(req, res) {
  Transaction.update({
    _id: req.params.id
  }, {
    $push: {menulist: req.body.menuid}
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function updateTransaction(req,res) {
  Transaction.update({
    _id: req.params.id
  }, {
    tanggal_transaksi: req.body.tanggal_transaksi,
    user: req.body.user,
    menulist: req.body.menuid,
    total: req.body.total
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function deleteTransaction(req, res){
  Transaction.deleteOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAllTransactions,
  getOneTransaction,
  createNewTransaction,
  pushToMenuList,
  updateTransaction,
  deleteTransaction
}
