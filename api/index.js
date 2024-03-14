import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

const app = express()
app.use(express.json())
// Connect to MongoDB database
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log(`MongoDB Connected`);
    app.listen(process.env.PORT || 7000 ,()=>{
        console.log(`App listin on server 7000`);
    })
})
.catch((err)=>{
    console.log(err);
})

app.get( '/', (req, res)=> {
    res
    .json({
        message : "API is Working"
    })
});

app.use('/api/test' , userRouter)
app.use('/api/auth' , authRouter)

app.use((err, req , res , next) =>{
    const statusCode = err.statusCode || 500
    const message = err.message || `Internal Server Error`
    res.status(statusCode).json({
        success : false,
        message,
        statusCode,
    });
})