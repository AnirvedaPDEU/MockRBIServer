const express = require("express")
const {updateBalance,getLeaderBoard} = require("../controllers/leaderboard")

const router = express.Router()

// router.get("/",getLeaderBoard)
// router.post("/update-balance",updateBalance)

router.route("/")
.get(getLeaderBoard)
.post(updateBalance)

module.exports = router