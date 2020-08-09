const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    latitude:{
        type:String,
        required:true
    },
    longtitude:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    timing:{
        type:String,
        required:true
    },
    space:{
        type:String,
        default:'Vaccant'
    }
})

module.exports = mongoose.model('location',locationSchema);