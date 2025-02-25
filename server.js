const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const restaurent = require("./src/models/restaurent");
const menu = require("./src/models/menu")
const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

mongoose.connect({uri})
.then(()=> console.log("Mongodb Succesfully Connected"))
.catch((err)=> console.error("Mongodb connection error: ",err))

app.use(express.json());;
app.get('/',(req,res)=>{
    res.send("Server is running!")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

.env
PORT=3000
MONGO_URI