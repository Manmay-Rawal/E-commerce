import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    

    title:{
        type:String,
    },
    discription:{
        type:String,
    },
    price:{
        type:Number,
    },
    discountedPrice:{
        type:Number,
    },
    discountedPercent:{
        type:Number,
    },
    quantity:{
        type:Number,
        required:true
    },
    brand:{
        type:Number,
    },
    color:{
        type:Number,
    },
    sizes:[{
        name:{type:String},
        quantity:{type:Number},
    }],
    imageUrl:{
        type:String,
    },
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings",
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews",
    }],
    numRatings:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    createdAt:{
        type:Date,
        default:Date.nom(),
    },
   
});

const product = mongoose.model("products",productSchema);

module.exports = product;