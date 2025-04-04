import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3, // Minimum length of 3 characters
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },

    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum length of 6 characters
    },
    resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resume" }],
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
