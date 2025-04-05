import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// console.log(process.env.MONGODB_URI);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    process.exit(1);
  }
};
