const express = require('express');
const mongoose = require('mongoose');
const Location = require('.//model/location');

mongoose.connect('mongodb+srv://anand:1234567890@cluster0.04rox.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("Mongodb Connected!!"))

const app = express();

app.use(express.json())

app.get('/',(req,res) =>{
    res.send("Test");
})
app.get('/addLocation',(req,res) =>{
    // console.log("test");
    // res.send("hello");
    const addLocation = new Location();
    addLocation.latitude = req.body.latitude;
    addLocation.longtitude = req.body.longtitude;
    addLocation.category = req.body.category;
    addLocation.timing = req.body.timing;
    addLocation.save()
    .then(result => {
        if(result) 
        res.send("Location Added Successfully")
    })
    .catch(err => console.log(err))

})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))