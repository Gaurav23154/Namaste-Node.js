const express = require("express");
 require('../config/database')

const app=express();

app.use("/user",(req,res,next)=>{
    console.log("hello for console 1");
    // res.send("user 1");
    next();
},(req,res)=>{
    console.log("hello from console 2");
    res.send("User 2");
})



app.listen(7777,()=>{
    console.log("Server is completely running...");
})