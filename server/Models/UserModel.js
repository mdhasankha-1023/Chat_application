const mongoose = require("mongoose");
const {genSalt, hash, compare} = require("bcryptjs");

const userSchema = mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    pic: {type: String, require: true},
}, {timestamps: true})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await compare(enteredPassword, this.password)
}

userSchema.pre("save", async function(next){
    if(!this.isModified){
        next();
    }

    const salt = await genSalt(10);
    this.password = await hash(this.password, salt)
    next();
})

const User = mongoose.model("user", userSchema);

module.exports = User;