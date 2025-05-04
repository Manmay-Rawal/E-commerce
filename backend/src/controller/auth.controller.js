// import userService from "../services/user.service.js"
// import jwtProvider from "../config/jwtProvider.js"
// import bcrypt from "bcrypt"
// import cartService from "../services/cart.service.js"

const userService = require("../services/user.service.js")
const jwtProvider = require("../config/jwtProvider.js")
const bcrypt = require("bcrypt")
const cartService = require("../services/cart.service.js")


const resister = async(req,res)=>{
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        await cartService.createCart(user);

        return res.status(200).send({jwt,message:"registered successful"})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const login = async(req,res)=>{
   const {password,email} = req.body;

    try {
        const user = await userService.getUserByEmail(email);

        if(!user){
            return res.status(404).send({message:"not fond user by email"});
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(401).send({message:"Invalid Password..."})
        }

        const jwt =jwtProvider.generateToken(user._id);
        return res.status(200).send({jwt,message:"Login successful"})

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {resister,login}