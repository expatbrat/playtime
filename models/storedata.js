const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
  }
)

const Product = mongoose.model('product', storeSchema)

module.exports = Product;
