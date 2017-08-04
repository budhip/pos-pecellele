const mongoose = require('mongoose');

var menuSchema = mongoose.Schema({
  nama_menu: {
    type: String,
    required: [true, 'Nama menu tidak boleh kosong'],
    minlength: [2, 'Nama menu terlalu pendek']
  },
  harga: Number,
  stock: Number,
}, {
  timestamps: true
});

var Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu
