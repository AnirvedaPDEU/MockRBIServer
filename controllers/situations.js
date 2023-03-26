const Situation = require("../models/situation")

const getCurrentSituation = async (req, res) => {
  const allSituations = await Situation.find({})
  const currentSituation = allSituations[allSituations.length - 1]
  res.status(200).json(currentSituation)
}

const postSituation = async (req, res) => {
  // console.log(req.body)
  const {situation} = req.body

  if (!situation) {
    return res.status(400).json({msg: "Please provide a situation"})
  }

  await Situation.create({
    situation: situation.situation,
    name: situation.name,
    impact: situation.impact,
    impactStatus: situation.impactStatus,
  })

  res.status(200).json({situation})
}

const deleteSituations = async (req, res) => {
  await Situation.deleteMany({})
  res.status(200).json({msg: "All situations deleted successfully"})
}

module.exports = {getCurrentSituation, postSituation, deleteSituations}
