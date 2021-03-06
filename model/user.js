const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    },
    pno:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.model('user',userSchema);