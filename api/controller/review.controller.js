import createError from "../utils/createError.js"
import Review from "../models/review.model.js"
import Gig from "../models/gig.model.js"
export const createReview=async(req,res,next)=>{
   
    if (req.isSeller)
        res.status(401).send("Seller not allowed to add review")

    const newReview=new Review({
        userId:req.userId,
        gigId:req.body.gigId,
        star:req.body.star,
        desc:req.body.desc,

    });
    try {
        const review=await Review.findOne({
            gigId:req.body.gigId,
            userId:req.userId
        });
        if (review) 
            return next(createError(403,"Already create Review"))
        const savedReview=await newReview.save();
        await Gig.findByIdAndUpdate(req.body.gigId,{
            $inc:{totalStars:req.body.star,starNumber:1} // incrementing total star by star given
        })
        res.status(201).send(savedReview)
        
    } catch (err) {
        next(err) 
    }  
} 
export const getReviews=async(req,res,next)=>{
    console.log("gigID ",req.params.id)
    
    try {
        const review=await Review.find({
            gigId:req.params.id
        })
        console.log(review)
        res.status(200).send(review)
    } catch (err) {
        next(err)
        
    }
    

    
} 
export const deleteReview=async(req,res,next)=>{
    console.log(req.body)
    try {
        const review=await Review.findByIdAndDelete(req.params.id)
        res.status(200).send(review)
    } catch (err) {
        next(err)
        
    }
    

    
} 