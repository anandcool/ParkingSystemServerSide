const express = require('express');
const mongoose = require('mongoose');
const Location = require('./model/location');
const User  = require('./model/user')
const Booking = require('./model/booking')

require('./model/connection');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/addLocation',(req,res) =>{
    // console.log("test");
    // res.send(req.body);
    const addLocation = new Location();
    addLocation.latitude = req.body.latitude;
    addLocation.longtitude = req.body.longtitude;
    addLocation.category = req.body.category;
    addLocation.timing = req.body.timing;
    addLocation.save()
    .then(result => {
        if(result) 
        res.status(200).json({msg:"Location Added Successfully"})
    })
    .catch(err => console.log(err))

})

app.post('/signup',(req,res)=>{
    // res.send(req.body)
    const user = new User();
    user.fname = req.body.fname;
    user.lname = req.body.lname;
    user.email = req.body.email;
    user.pass = req.body.pass;
    user.pno = req.body.pno;
    user.save()
        .then(result => res.status(200).json({msg:'User Added Succesfully'}))
        .catch(err => res.status(400).json({error:"Something goes wrong"})) 
})

app.post('/login',(req,res) =>{
    const {email,password} = req.body;
    // res.send(req.body)
    User.findOne({email:email},(err,docs) =>{
        if(err) throw err;
        else{
            // res.send(password+"--"+docs.pass)            
            if(password === docs.pass){
                res.status(200).json({msg:docs})
            }else{
                res.status(400).json({msg:'Password is not correct'})
            }
        }
    })
})

app.post('/booking',(req,res)=>{
    const booking = new Booking();
    booking.companyName  = req.body.companyName;
    booking.license = req.body.license;
    booking.contact = req.body.contact;
    booking.category = req.body.category;
    booking.timing = req.body.timing;
    booking.payment = req.body.payment;
    booking.latitude = req.body.latitude;
    booking.longtitude = req.body.longtitude;
    booking.save()
    .then(result => {
        Location.findOneAndUpdate({latitude:req.body.latitude},{$set:{space:'Accquired'}},(err,doc) =>{
            if(err) throw err;
            res.status(200).json({msg:'Booking Added Succesfully'})
        })

    })
    .catch(err => res.status(400).json({error:"Something goes wrong"})) 
})


app.get('/alllocation',(req,res)=>{
    Location.find()
            .then(result => res.status(200).json({alllocation:result}))
            .catch(err => res.status(500).json({error:'something goes wrong!'}))    
})

app.get('/unbooked',(req,res)=>{
    res.json({msg:doc})
    // Location.findOneAndUpdate({latitude:req.body.latitude},{$set:{space:'Vaccant'}},(err,doc) =>{
    //     if(err) throw err;
    //     // res.json({msg:doc})
    //     // res.status(200).json({msg:'Unbooked Succesfully'})
    // })
})


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))