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

const timeSchema = new mongoose.Schema(
  {
    timeLine: String,
    timeOffset: Number,
    timeProducts: [storeSchema]
  }
)

const Time = mongoose.model('time', timeSchema)

module.exports = Time;
