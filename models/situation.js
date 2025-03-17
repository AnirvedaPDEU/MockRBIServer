const mongoose = require("mongoose")

const situationSchema = new mongoose.Schema({
  situation: {
    type: String,
    //required: [true, "Please provide a situation"],
  },
  name: {
    type: String,
  },
  // choices: [String],
  options: [
    {
      choice: {
        type: String,
      },
      // tag: {
      //   type: String,
      // },
      impact: {
        type: Number,
      },
      // impactStatus: {
      //   type: String,
      // },
    },
  ],
})

module.exports = mongoose.model("Mockrbi", situationSchema)
