const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const chats = require("./data/Data");
dotenv.config();
const app = express();


// middleware
app.use(express.json())

// get besic server
app.get('/', (req, res) => {
    res.send('This is my practice server...')
})

// get besic server
app.get('/api/users', (req, res) => {
    res.send(chats)
})

const port = process.env.PORT || 5000;
// server listen
app.listen(port, () => {
    console.log(`This server is running on port: ${port}`)
})