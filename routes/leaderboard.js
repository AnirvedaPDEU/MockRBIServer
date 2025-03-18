const express = require("express")
const {updateBalance,getLeaderBoard, getBalance} = require("../controllers/leaderboard")

const router = express.Router()

// router.get("/",getLeaderBoard)
// router.post("/update-balance",updateBalance)

router.route("/")
.get(getLeaderBoard)
.post(updateBalance)

router.get("/:email",getBalance)
module.exports = router