

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./server/routes/userRoute";

import bodyParser from "body-parser";


dotenv.config({path:'./.env'});

const app = express();
app.use(bodyParser.json());

app.use("/FREE-MENTOR.MINE/v1/user",userRouter);


//port:4040
const port = process.env.PORT;
const databaseUrl=process.env.DATABASE;


app.get("/", (req, res) => {
    return res.status(200).json({status:200, message:"This is FreeMentor APIs"})
})
mongoose.connect(databaseUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false})
.then(()=>console.log("Databse connected succesfully"))
.catch(error => console.log(error));
app.listen(port,()=>{
    console.log(databaseUrl);
    console.log('server is running on port 4040');

})
export default app;