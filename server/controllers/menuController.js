const Menu = require('../models/menu');

function getAllMenus(req, res) {
  Menu.find({})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function getOneMenu(req, res) {
  Menu.find({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function createNewMenu(req, res) {
  Menu.create({
    nama_menu: req.body.nama_menu,
    harga: req.body.harga,
    stock: req.body.stock
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function updateMenu(req, res) {
  Menu.update({_id: req.params.id}, {
    nama_menu: req.body.nama_menu,
    harga: req.body.harga,
    stock: req.body.stock
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function deleteMenu(req, res) {
  Menu.remove({
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
  getAllMenus,
  getOneMenu,
  createNewMenu,
  updateMenu,
  deleteMenu
}
