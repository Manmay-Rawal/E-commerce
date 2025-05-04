// import mongoose from "mongoose";
// import dotenv from "dotenv";

const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();



const connectDb = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit the app if DB connection fails
  }
};

module.exports = connectDb;
