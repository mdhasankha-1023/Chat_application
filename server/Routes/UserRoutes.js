const express = require("express");
const { register } = require("../handlers/UserHandlers");
const userRoutes = express.Router();

userRoutes.post('/register', register)
// userRoutes.post('/login', authUser)

module.exports = userRoutes;