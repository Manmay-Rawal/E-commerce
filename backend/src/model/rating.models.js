// import mongoose from "mongoose";
const mongoose = require("mongoose")

const ratingSchema =new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
   
});

const Ratings = mongoose.model("ratings",ratingSchema);

module.exports = Ratings