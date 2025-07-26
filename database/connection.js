import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.DB_URI) {
  throw new Error("Missing MongoDB connection string (DB_URI) in environment variables.");
}

const connectToDatabase =  () => {
  try {
        mongoose.connect(process.env.DB_URI);
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
