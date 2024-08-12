import user from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const SignUp = async (req,res) => {
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newuser = new user({username,email,password: hashedPassword});
    try{
        await newuser.save();
        res.status(201).json({message:"User created successfully"});
    }catch(error){
        console.log(error);
    }
};