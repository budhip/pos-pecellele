const User = require('../models/user');
const genSalt = require('../helpers/generateSalt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function signin(req, res, next) {
  let usernameFromLogin = req.body.username;
  let password = req.body.password;
  User.findOne({
    username : usernameFromLogin
  })
  .then(user => {
    console.log(usernameFromLogin);
    console.log('================ini masuk ke user');
    var saltUserLogin = user.salt;
    console.log('==========ini saltUserLogin', saltUserLogin);
    var passwordUserLogin = req.body.password
    console.log('========ini password dari login', passwordUserLogin);
    var getPasswordUser = genSalt.createHash(passwordUserLogin, saltUserLogin)
    console.log('===========ini getPasswordUser', getPasswordUser);
    console.log('===========ini user.password', user.password);
    console.log('============ini user._id', user._id);

    if (user.password == getPasswordUser) {
      var token = jwt.sign({id: user._id, username: user.username, role: user.role}, process.env.SECRET);
      console.log(token);
      res.send(token);
    } else {
      res.send('Maaf username atau password salah')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  signin
}
