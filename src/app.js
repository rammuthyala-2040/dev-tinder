const express = require("express");
const connectDB = require("./config/database");
const cookieparser = require("cookie-parser");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const app = express();
const PORT = 3000;

//enables the Express app to parse incoming JSON request bodies, making the data accessible in req.body.
app.use(express.json());
app.use(cookieparser());


const serverandDBConnectionSetUp = async() => {
    try {
        await connectDB();
        console.log("Database Connected Successfully");
        await app.listen(PORT, () => {
            console.log(`Server has started successfully on port ${PORT}`);
        })
    } catch (error) {
        console.error("ERROR ", error.message);
        process.exit(1); // Exit the process if DB connection fails  
    }
};
serverandDBConnectionSetUp();

//ROUTES
app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);