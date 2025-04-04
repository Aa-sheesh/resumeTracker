import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import { connectDB } from './db/db.js';


dotenv.config();


const app=express();

app.use(cookieParser());
app.use(express.json());

connectDB();

app.listen(process.env.PORT||3000,(req,res)=>{
    console.log(`Server is running on port ${process.env.PORT||3000}`);
    console.log(`http://localhost:${process.env.PORT||3000}`);
})

app.use("/api/v1",authRoutes);
app.use("/api/v1",resumeRoutes);

app.get('/',(req,res)=>{
    res.send('Hello World!')
})