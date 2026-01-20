require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const url=process.env.MONGO_URL;
const PORT=process.env.PORT||3002;
const app=express();
app.use(express.json());

app.get("/test", (req, res) => {
    res.send("TradeZen backend is working");
});

app.listen(3002,()=>{
    console.log("App is started");
    mongoose.connect(url,()=>{
        console.log("connected");
    })
})