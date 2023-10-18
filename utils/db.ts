import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const key: string =
  "mongodb+srv://sujanpoudel1080:vj4cQXhuBiPywiAN@cluster0.khhr4ud.mongodb.net/node-api?retryWrites=true&w=majority";
const port = process.env.PORT;

const db = async () => {
  try {
    await mongoose.connect(key);
    console.log('Connected to database successfully')
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default db;
