const mongoose = require("mongoose")

const situationSchema = new mongoose.Schema({
  situation: {
    type: String,
    required: [true, "Please provide a situation"],
  },
  name: {
    type: String,
  },
  impact: {
    type: [String],
  },
  impactStatus: {
    type: [String],
  },
})

module.exports = mongoose.model("Situation", situationSchema)
