import mongoose from "mongoose";

const reviewSchema =new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    review:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
   
});

const Review = mongoose.model("reviews",reviewSchema);

module.exports = Review