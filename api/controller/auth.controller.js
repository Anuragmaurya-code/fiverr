import User from '../models/user.model.js'
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import createError from '../utils/createError.js';
export const register=async(req,res,next)=>{
    
    try{
        const hash=bcrypt.hashSync(req.body.password,5)
        const newUser=new User({
            ...req.body,
            password:hash,
        })
        await newUser.save();
        res.status(201).send("User has been created")

    }catch(err){
        next(err)
    }
}
export const login=async(req,res,next)=>{
    console.log("user entered")
    try{
        const user=await User.findOne({username:req.body.username})
    
        if(!user) return next(createError(404,"User not found"))
        const isCorrect=bcrypt.compareSync(req.body.password,user.password)
        if(!isCorrect)  return next(createError(400,"Wrong password or username"))  

        const token=jwt.sign({ // jwt is used for authorization -> the user is same user as before
            id:user._id, // signing the user here 
            isSeller:user.isSeller,// also called payload
        },process.env.JWT_KEY   )// jwt needs a secret for hashing
        
        const {password,...info}=user._doc
        return res.cookie("accessToken",token,{
            httpOnly:true,//  it restricts the cookie from being accessed or modified by JavaScript running on the client-side
        }).status(200).send(info)

    }catch(err){
        next(err)

    }
}
export const logout=async(req,res)=>{
    res.clearCookie("accessToken",{
        sameSites:"none",// as client and server are on different pages
        secure:true
    })
    .status(200)
    .send("User has been logged out")
}