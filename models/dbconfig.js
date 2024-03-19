require("dotenv").config({ path: "./.env" });
const mongoose = require('mongoose');

exports.dbconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection established");
    } catch (error) {
        console.error("Connection error:", error.message);
    }
};