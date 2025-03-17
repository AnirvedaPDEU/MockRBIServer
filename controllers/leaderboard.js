const Leaderboard = require("../models/leaderBoard");

// Save or update balance
const updateBalance =  async (req, res) => {
    const { email, balance } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required for updating balance" });
    }

    try {
        const user = await Leaderboard.findOneAndUpdate(
            { email }, 
            { balance }, 
            { new: true, upsert: true } // Upsert: Insert if doesn't exist
        );
        res.status(200).json({ message: "Balance updated!", user });
    } catch (error) {
        res.status(500).json({ message: "Error updating balance", error });
    }
};

// Get leaderboard sorted by balance
const getLeaderBoard = async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ balance: -1 }); // Sort by highest balance
        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: "Error fetching leaderboard", error });
    }
};

module.exports = {updateBalance,getLeaderBoard};