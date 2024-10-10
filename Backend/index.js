import express from 'express';
import mongoose from 'mongoose';
import productRoute from './product.route.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const URI = process.env.MONGODB_URI;

mongoose.connect(URI , { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connection of Database Successful!");
    app.use('/product', productRoute);


    app.listen(5001 , ()=>{
        console.log("Server starting at port: 5001"); 
    })
})
