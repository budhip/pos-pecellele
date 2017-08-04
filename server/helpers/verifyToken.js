const jwt = require('jsonwebtoken');
require('dotenv').config()

let verifyTokenForAdmin = (req, res, next) => {
  let roleauth = jwt.verify(req.headers.token, process.env.SECRET)
  console.log(roleauth);
  if (roleauth.role == 'admin') {
    next()
  } else {
    res.send('Maaf anda tidak memiliki akses ke halaman ini')
  }
}

let verifyTokenForAdminKasir = (req, res, next) => {
  let roleauth = jwt.verify(req.headers.token, process.env.SECRET)
  console.log(roleauth);
  console.log(req.params.id);
  if ((roleauth.role === 'admin') || (roleauth.role == 'kasir') ||(roleauth.role == 'kasir' && roleauth.id == req.params.id)) {
    next()
  } else {
    res.send('Maaf anda tidak memiliki akses ke halaman ini')
  }
}

module.exports = {
  verifyTokenForAdmin,
  verifyTokenForAdminKasir
}
