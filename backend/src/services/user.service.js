import {User} from "../model/user.models.js"


const createUser = async(userData)=>{
    try {
        
        let {firstName,lastName,email,password}=userData;
        const isUserExist = await User.findOne({email});

        if(isUserExist){
            throw new Error("this email is already exist",email);
        }
        password =  await bcrypt.hash(password,8);

        const user = await User.create({firstName,lastName,email,password});

        return user

    } catch (error) {
        throw new Error(error.message);
    }
}

const findUserById = async(userId)=>{
    try {

        const user = await User.findById(userId)

        if(!user){
            throw new Error("user not fund by Id ",userId)
        }
        return user
        
    } catch (error) {
        throw new Error(error.message)
    }
}

const findUserByEmail = async(email)=>{
    try {

        const user = await User.findOne(email)

        if(!user){
            throw new Error("user not fund by email ",email)
        }
        return user
        
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {createUser,findUserById,findUserByEmail};