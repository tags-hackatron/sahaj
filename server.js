const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("Server is ready");
})

app.get("/",(req,res)=>{
    res.send("Hello Manoj")
})