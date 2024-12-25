const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

const URI = process.env.MONGODB_URI;


const connectDB = async ()  =>{
    try {
        await mongoose.connect(URI);
        console.log("Connection successfully finally");
    } catch (error) {
        console.log("connection failed");
        process.exit(0);
    }
}
// kbuikRsc2VRt62JL - password

module.exports = connectDB;
