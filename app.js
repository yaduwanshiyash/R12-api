require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();

// db connection
require("./models/dbconfig").dbconnection();

// routes
const userRouter = require("./routes/userRoute");

// logger
const logger = require("morgan");
app.use(logger("tiny"));
// body pasrser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://localhost:8080/api/user/
// http://localhost:8080/api/user/create

app.use("/api/user", userRouter);

app.all("*",(req,res,next)=>{
    res.status(404).json({
        status:"fail",
        message:`Can't find ${req.originalUrl} on this server`
    })
})

// server
app.listen(process.env.PORT, () => {
    console.log(`The Server is running on port ${process.env.PORT}`);
});
