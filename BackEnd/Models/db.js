//Database Setup

//Import Statement for database
const mongoose = require("mongoose");
require("dotenv").config;

//Database Credentials
const connectDB = async () =>
{
    mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: true
    }, err => {
        if(err) throw err;
        console.log("Connected to Love ActsDB");
    })
}

//Database Connection
const db = mongoose.connection;
db.once("open", (_) => console.log("Love Acts DB is now connected"));
db.on("error", (err) => console.error("Love Acts DB connection error!", err));

module.exports = connectDB;