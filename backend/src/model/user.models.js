import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName:{
        required:true,
        type:String,
    },
    lastName:{
        required:true,
        type:String,
    },
    emailName:{
        required:true,
        type:String,
    },
    password:{
        required:true,
        type:String,
    },
    role:{
        required:true,
        type:String,
        default:"CUSTOMER"
    },
    mobile:{
        type:String,
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentsInformation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"payments_information"
    }],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews"
    }],
    createdAt:[{
        type:Date,
        default:Date.now()
    }],
})

const User=mongoose.model("users",userSchema);
module.exports=User;