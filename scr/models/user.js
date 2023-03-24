// import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
