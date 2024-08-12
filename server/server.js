const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const chats = require("./data/Data");
const connectDB = require("./Config/db");
const userRoutes = require("./Routes/UserRoutes");
const {notFound, errorHandler} = require("./Middleware/errorMiddleware");
dotenv.config();
const app = express();


// middleware
app.use(express.json())
app.use(cors())
app.use('/api/user', userRoutes)
app.use(notFound)
app.use(errorHandler)

// connect db
connectDB()

// get first server
app.get('/', (req, res) => {
    res.send('This is my practice server...')
})

// get first server
app.get('/api/users', (req, res) => {
    res.send(chats)
})

const port = process.env.PORT || 5000;
// server listen
app.listen(port, () => {
    console.log(`This server is running on port: ${port}`)
})