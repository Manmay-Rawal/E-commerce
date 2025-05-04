// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config();
// import connectDb from './src/config/db.js';
// import authRouters from "./src/routes/auth.route.js"

const express = require("express")
const cors = require("cors");
const dotenv = require("dotenv")
const connectDb = require("./src/config/db.js")
const authRouters = require("./src/routes/auth.route.js")


dotenv.config();
const app = express();


//middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/',(req,res)=>{
  res.send('HEllo Server is started')
})

app.use("/auth",authRouters);


const PORT=process.env.PORT || '4000';
const HOST = process.env.HOST || 'localhost'

app.listen(PORT,HOST, async()=>{
  await connectDb();
  console.log(`server has been start http://${HOST}:${PORT}`);
})