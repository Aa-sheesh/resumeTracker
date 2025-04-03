import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app=express();
app.use(express.json());

app.listen(process.env.PORT||3000,(req,res)=>{
    console.log(`Server is running on port ${process.env.PORT||3000}`);
    console.log(`http://localhost:${process.env.PORT||3000}`);
})

app.use("/api/v1",authRoutes);

app.get('/',(req,res)=>{
    res.send('Hello World!')
})