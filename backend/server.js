import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './src/config/db.js';



dotenv.config();

const app = express();


//middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/',(req,res)=>{
  res.send('HEllo Server is started')
})



const PORT=process.env.PORT || '4000';
const HOST = process.env.HOST || 'localhost'

app.listen(PORT,HOST, async()=>{
  await connectDb();
  console.log(`server has been start http://${HOST}:${PORT}`);
})