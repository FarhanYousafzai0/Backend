
import mongoose from "mongoose";
import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession(); 
  session.startTransaction(); 

  try {
    const { name, email, password } = req.body; 

    // Check if input fields are missing
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter all the fields!" }); 
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" }); 
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt); 

    // Create new user
    const newUser = await User.create(
      [
        {
          name,
          email,
          password: hashedPassword, 
        },
      ],
      { session }
    );

    // Generate JWT
    const token = jwt.sign(
      { userId: newUser[0]._id },
      process.env.JWT_SECRET, 
      { expiresIn: process.env.JWT_EXPIRE_IN } // ✅ FIXED key name
    );

    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: {
        token,
        user: newUser[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
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