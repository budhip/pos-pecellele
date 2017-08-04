const mongoose = require('mongoose');
Schema = mongoose.Schema;

var transactionSchema = mongoose.Schema({
  tanggal_transaksi: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  menulist: [{
    type: Schema.Types.ObjectId,
    ref: 'Menu'
  }],
  total: Number
}, {
  timestamps: true
})

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
