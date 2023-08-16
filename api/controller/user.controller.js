import User from "../models/user.model.js"
import createError from "../utils/createError.js"

export const deleteUser = async (req, res,next) => {
    
    const user = await User.findById(req.params.id)
    if (req.userId !== user._id.toString())// as in database its an object id
    {
        return createError(403,"You can  delete only your account")
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send("deleted")

} 
export const getUser = async (req, res,next) => {
    
    const user = await User.findById(req.params.id)
    if (req.userId !== user._id.toString())// as in database its an object id
    {
        return createError(403,"You can  delete only your account")
    }
    const {password,...data}=user._doc
    res.status(200).send(data)

} 