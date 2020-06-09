const mongoose = require('mongoose')

const timeSchema = new mongoose.Schema(
  {
    timeLine: String,
    timeOffset: Number,
  }
)

const Time = mongoose.model('time', timeSchema)

module.exports = Time;
