const express = require("express")
const {errorHandler} = require("./middleware/errorMiddleware")
const port = 5000
const colors = require("colors")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", require("./routes/goalRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))