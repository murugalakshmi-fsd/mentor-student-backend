import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
console.log('Mongodb database connected ')

export default mongoose