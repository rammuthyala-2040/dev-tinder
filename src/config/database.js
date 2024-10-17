const mongoose = require("mongoose");
const connectDB = async() => {
    await mongoose.connect("mongodb+srv://ram:ram@ramcluster.3wuq5.mongodb.net/devTinder");
}

module.exports = connectDB;