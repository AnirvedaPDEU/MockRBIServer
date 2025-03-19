require("dotenv").config()
require("express-async-error")

const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const situationRoutes = require("./routes/situations")
const leaderBoardRoutes = require("./routes/leaderboard")

const corsOptions = {
  // Uncomment the following line for local development
  // origin: "http://localhost:5173", // For local development
  // origin: "https://anirveda.osailpdeu.in", // For deployed version
  origin: ["http://localhost:5173", "https://www.anirvedapdeu.in","https://anirveda-pdeu.vercel.app"], // Trying multiple origins
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.options("*", cors(corsOptions)); // Handle preflight requests globally

// Middlewares
app.use(express.json())
app.use(morgan("tiny"))

// Routes
app.use("/api/v1/situation", situationRoutes)
app.use("/api/v1/leaderboard",leaderBoardRoutes)

app.get("/", (req, res) => {
  res.send("Testing")
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB and listening to port", process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })
