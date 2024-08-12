const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();


// get besic server
app.get('/', (req, res) => {
    res.send('This is my practice server...')
})

const port = process.env.PORT || 5000;
// server listen
app.listen(port, () => {
    console.log(`This server is running on port: ${port}`)
})