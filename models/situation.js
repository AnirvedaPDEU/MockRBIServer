const mongoose = require("mongoose")

const situationSchema = new mongoose.Schema({
  situation: {
    type: String,
    required: [true, "Please provide a situation"],
  },
})

module.exports = mongoose.model("Situation", situationSchema)
