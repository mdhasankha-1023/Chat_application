const expressAsyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const generateToken = require("../Config/generateToken");

const register = expressAsyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    console.log(name, email, password, pic)

    if (!name || !email || !password) {
        return res.status(401).json({
            error: 'All filed is required'
        })
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
        return res.status(401).json({
            error: 'User is already exist'
        })
    }
    const user = await User.create({
        name, email, password, pic
    })

    if (user) {
        res.status(200).json({
            message: 'successfully register',
            data: {
                _id: user._id,
                name: user.name,
                pic: user.pic,
                email: user.email,
                token: generateToken(user._id)
            }
        })
    } else {
        res.status(200).json({
            error: 'Failed create the user',
        })
    }
}
)

const authUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)

    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.status(200).json({
            message: 'successfully login',
            data: {
                _id: user._id,
                name: user.name,
                pic: user.pic,
                email: user.email,
                token: generateToken(user._id)
            }
        })
    } else {
        res.status(401).json({
            error: 'User was not found'
        })
    }

}
)

module.exports = { register, authUser }