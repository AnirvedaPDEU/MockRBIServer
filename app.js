require("dotenv").config()
require("express-async-error")

const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const connectDB = require("./db/connect")
const situationRoutes = require("./routes/situations")

const corsOptions = {
  // Uncomment the following line for local development
  // origin: "http://localhost:5173", // For local development
  // origin: "https://anirveda.osailpdeu.in", // For deployed version
  origin: ["http://localhost:5173", "https://anirveda.osailpdeu.in"], // Trying multiple origins
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

// Middlewares
app.use(express.json())
app.use(morgan("tiny"))

// Routes
app.use("/api/v1/situation", situationRoutes)

app.get("/", (req, res) => {
  res.send("Testing")
})

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}
start()
