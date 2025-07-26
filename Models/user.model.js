import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    maxLength: 50,
    minLength: 5,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true, 
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 6,
  },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;
