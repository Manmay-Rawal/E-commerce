import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const generateToken = (userId)=>{
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
}