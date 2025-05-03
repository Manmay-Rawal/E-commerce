import mongoose from "mongoose";

const ordersSchema =new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        // required:true
    },
    orderItems:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"orderItems",
    },
    orderDate:{
        type:Date,
        required:true
    },
    deliveryDate:{
        type:Date,
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    },
    paymentDetails:{
        paymentMethod:{
            type:String,
        },
        transactionId:{
            type:String,
        },
        paymentId:{
            type:String,
        },
        paymentStatus:{
            type:String,
        },
    },
    totalPrice:{
        type:Number,
        required:true
    },
    totalDiscountedPrice:{
        type:Number,
        required:true
    },
    discounte:{
        type:Number,
        required:true
    },
    orderStatus:{
        type:Number,
        required:true,
        default:"PENDING"
    },
    totalItem:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
});

const Orders = mongoose.model("orders",ordersSchema);

module.exports = Orders