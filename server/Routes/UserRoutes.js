const express = require("express");
const { register, authUser, allUsers } = require("../handlers/UserHandlers");
const protect = require("../Middleware/authMiddleware");
const userRoutes = express.Router();

userRoutes.post('/register', register)
userRoutes.post('/login', authUser)
userRoutes.get('/', protect, allUsers)

module.exports = userRoutes;