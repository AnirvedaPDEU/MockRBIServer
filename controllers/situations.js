const Situation = require("../models/situation")

const getCurrentSituation = async (req, res) => {
  const allSituations = await Situation.find({})
  const currentSituation = allSituations[allSituations.length - 1]
  res.status(200).json(currentSituation)
}

const postSituation = async (req, res) => {
  console.log(req.body)
  const { situation, name, choices, options } = req.body

  // if (!situation) {
  //   return res.status(400).json({msg: "Please provide a situation"})
  // }

  try {
    const situ = await Situation.create({
      situation,
      name,
      choices,
      options,
    })

    res.status(200).json({ situ })
  } catch (error) {
    return res.status(400).json("error")
  }
}

const deleteSituations = async (req, res) => {
  await Situation.deleteMany({})
  res.status(200).json({ msg: "All situations deleted successfully" })
}

module.exports = { getCurrentSituation, postSituation, deleteSituations }
