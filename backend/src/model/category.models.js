// import mongoose from "mongoose";
const mongoose = require("mongoose")

const categorySchema =new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        max_length:50,
        required:true
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories",
    },
    level:{
        type:Number,
        required:true
    },
   
});

const Category = mongoose.model("categories",categorySchema);

module.exports = Category