const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anand:1234567890@cluster0.04rox.mongodb.net/parkingsystem?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("Mongodb Connected!!"))