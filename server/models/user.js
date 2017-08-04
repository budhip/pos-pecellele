const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama tidak boleh kosong']
  },
  username: {
    type: String,
    required: [true, 'username tidak boleh kosong'],
    minlength: [5, 'username minimal 5 karakter'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'password tidak boleh kosong'],
  },
  email: {
    type: String,
    required: [true, 'email tidak boleh kosong']
  },
  role: String,
  salt: String
}, {
  timestamps: true
});

userSchema.plugin(uniqueValidator);

var User = mongoose.model('User', userSchema);

module.exports = User
