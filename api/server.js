import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import userRoute from './routes/user.route.js'
import reviewRoute from './routes/review.route.js'
import orderRoute from './routes/order.route.js'
import messageRoute from './routes/message.route.js'
import gigRoute from './routes/gig.route.js'
import conversationRoute from './routes/conversation.route.js'
import authRoute from './routes/auth.route.js'


const app= express();
dotenv.config();
app.use(cors({origin:"http://localhost:5173",credentials:true}))

const connection=async() => {
    try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}

app.use(express.json()) // to allow json object as input from client side its middleware
app.use(cookieParser()) //  its a middleware that allows cookies to parse

app.use("/api/users",userRoute);// app.use(path,middleware) it is use to handle multiple 
// HTTP Methods (e.g., GET, POST, PUT, DELETE) 
app.use("/api/reviews",reviewRoute);
app.use("/api/order",orderRoute);
app.use("/api/message",messageRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/auth",authRoute);

app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500;
  const errorMessage=err.message || "Server -> Something went wrong"
  return res.status(errorStatus).send(errorMessage);
})// error handling

app.listen(8000,()=>{
    connection()
    console.log('listening on port 8000');
})
