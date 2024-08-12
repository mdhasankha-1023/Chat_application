const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    content: {type: String, trim: true},
    chat: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "chat"
    }],
    sender: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
}, {timestamps: true})

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;