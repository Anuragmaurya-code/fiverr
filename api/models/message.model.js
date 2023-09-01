import mongoose from 'mongoose';
import {Schema} from 'mongoose';
const MessageSchema=Schema({
    ConversationId:{
        type:String,
        required:true,
    },
    UserId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    

})
export default mongoose.model("message",MessageSchema)