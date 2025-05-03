import mongoose from "mongoose";

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

const category = mongoose.model("categories",categorySchema);

module.exports = category