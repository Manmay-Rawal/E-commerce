const express = require("express")
const cors = require("cors");
const dotenv = require("dotenv")
const connectDb = require("./src/config/db.js")
const authRouters = require("./src/routes/auth.route.js")
const userRouters = require("./src/routes/user.route.js")


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
app.use("/api/users",userRouters);


const PORT=process.env.PORT || '3355';
const HOST = process.env.HOST || 'localhost';

app.listen(PORT,HOST, async()=>{
  await connectDb();
  console.log(`server has been start http://${HOST}:${PORT}`);
})