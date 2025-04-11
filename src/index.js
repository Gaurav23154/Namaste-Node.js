const express = require("express");

const app=express();



app.get("/hello",(req,res)=>{
    console.log(req.query);
    res.send("Hello from get request");
})
app.get("/hello/:userId/:pass",(req,res)=>{
    console.log(req.params);
    res.send("hello from second get request");
})
app.post("/hello",(req,res)=>{
    res.send("post request from gaurav");
})
app.delete("/hello",(req,res)=>{
    res.send("Deleted Successfully");
})



app.use("/hello",(req,res)=>{
    res.send("Hello hello hellow");
});
app.use("/",(req,res)=>{
    res.send("hello Gaurav");
})
app.listen(7777,()=>{
    console.log("Server is completely running...");
})