const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    pic: {type: String, require: true},
}, {timestamps: true})

const User = mongoose.model("Message", userSchema);

module.exports = User;