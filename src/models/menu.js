const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    Dish:{
        type:String,
        required:true
    },
    coast:{
        type:String,
        required:true
    }
},{timestamps:true})

const menu = mongoose.model("Book",menuSchema);
module.exports = menu;