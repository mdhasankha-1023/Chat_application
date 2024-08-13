const express = require("express");
const protect = require("../Middleware/authMiddleware");
const { accessChat, faceChat, createGroupChat, renameGroupChat, removeGroupChat, addGroupChat } = require("../handlers/chatHandlers");
const chatRoutes = express.Router();

chatRoutes.post('/', protect, accessChat)
chatRoutes.get('/', protect, faceChat)
chatRoutes.post('/group', protect, createGroupChat)
chatRoutes.put('/rename', protect, renameGroupChat)
chatRoutes.delete('/remove', protect, removeGroupChat)
chatRoutes.delete('/groupAdd', protect, addGroupChat)

module.exports = chatRoutes;