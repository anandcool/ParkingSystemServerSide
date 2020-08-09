const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    license:{
        type:String,
        required:true
    },
    contact:{
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
    payment:{
        type:String,
        required:true
    },
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'user'
    // }
})

module.exports = mongoose.model('booking',bookingSchema);