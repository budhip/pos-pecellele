const User = require('../models/user');
const genSalt = require('../helpers/generateSalt');

function getAllUsers(req, res){
  User.find({})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function getOneUser(req, res) {
  User.find({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function createNewUser(req, res) {
  var salt = genSalt.genRandomString(8);
  var password = req.body.password;
  var hash = genSalt.createHash(password, salt);
  User.create({
    name: req.body.name,
    username: req.body.username,
    password: hash,
    email: req.body.email,
    role: req.body.role,
    salt: salt
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function updateUser(req,res) {
  User.update({_id: req.params.id}, {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    role: req.body.role
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function deleteUser(req, res) {
  User.findOneAndRemove({
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
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser
}
