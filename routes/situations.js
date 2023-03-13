const express = require("express")
const router = express.Router()

const {
  getCurrentSituation,
  postSituation,
  deleteSituations,
} = require("../controllers/situations")

router
  .route("/")
  .get(getCurrentSituation)
  .post(postSituation)
  .delete(deleteSituations)

module.exports = router
