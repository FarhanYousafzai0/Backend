import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";


export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE_IN }
    );

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        token,
        user: newUser,
      },
    });
  } catch (error) {
    next(error);
  }
};






// SignIn Function:
export const signIn = async(req,res,next)=>{


    try {
        
    } catch (error) {
        
    }
}


// SignOut Function:

export const signOut = async(req,res,next)=>{


    try {
        
    } catch (error) {
        
    }
}