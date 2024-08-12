const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    chatName: {type: String, require: true},
    isGroupChat: {type: String, require: true},
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }],
    groupAdmin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
}, {timestamps: true})

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;