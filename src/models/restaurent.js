const mongoose = require("mongoose");

const bookschema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    }
},{timestamps:true})

const restaurent = mongoose.model("Book",restaurentSchema);
module.exports = restaurent;