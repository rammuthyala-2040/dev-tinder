const jwt = require('jsonwebtoken');
const userModel = require("../models/userschema");

const userAuth = async(req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            throw new Error("Token is invalid!!!!")
        }
        const decoded_token = jwt.verify(token, "DEV@TINDER");
        const { _id } = decoded_token
        const user = await userModel.findById(_id);
        if (!user) {
            throw new Error("user Not Found ")
        }
        req.user = user;
        next()
    } catch (error) {
        res.status(400).send("ERROR " + error.message)
    }
}
module.exports = {
    userAuth
}