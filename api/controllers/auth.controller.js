import User from '../models/user.model.js'
import {errorHandler} from '../utils/error.js'

import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
const signUp = async (req, res ,next)=> {
    const { username , email , password } = req.body
    const hashedPassword = bcryptjs.hashSync(password , 10)
    const newUser = new User({username ,email ,password : hashedPassword })
    try {
        await  newUser.save()
        res.status(201).json({
            message : 'User Created Sucessfully'
        })
    } catch (error) {
        next(error)
    }

}
const signIn = async (req,res,next) =>{

    const {email,password} = req.body
    try {
        const validUser = await User.findOne({email})
        if(!validUser){
            return next(errorHandler(400,"User Not Found"))
        }
        
        const validPass = bcryptjs.compareSync(password,validUser.password)
        if(!validPass){
            return next(errorHandler(400,"Invalid Password"))
            
        }
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const {password:hashedPassword,...rest} = validUser._doc
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        res.status(200)
        .cookie('acces_token',token,{httpOnly : true , expires: expiryDate})
        .json(rest) 
    } catch (error) {
        next(error);
    }
}

const google = async (req,res,next) => {
    try {
        const user = await User.findOne({email : req.body.email})
        if(user){
            const token = jwt.sign({id : user._id}, process.env.JWT_SECRET);

        }
    } catch (error) {
        next(error)
    }
}

export {signUp , signIn , google}


