import mongoose from 'mongoose';
import {Schema} from 'mongoose';
const ConversationSchema=Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    sellerId:{
        type:String,
        required:true
    },
    buyerId:{
        type:String,
        required:true
    },
    readByBuyer:{
        type:Boolean,
        required:true
    },
    readBySeller:{
        type:Boolean,
        required:true
    },
    lastMessage:{
        type:String,
        required:false
    }

})
export default mongoose.model("conversation",ConversationSchema)