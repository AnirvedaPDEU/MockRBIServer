const mongoose = require("mongoose");

const LeaderboardSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    balance: { type: Number, required: true, default: 0 },
    timeTaken: { type: Number, required: true, default: 0 }
});


module.exports = mongoose.model("Leaderboard", LeaderboardSchema);