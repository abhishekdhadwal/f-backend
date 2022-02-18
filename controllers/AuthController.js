const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register = (req,res,next)=>{
    bcrypt.hash(req.body.password, 10, function(hashedpass){
        if (err){
            res.json({
                erroe:err
            })
        }

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password:hashedpass
        })
        
        user.save()
        .then(user =>{
            req.json({
                message:"User Added Succesfully"
            })
        })
        
       
        .catch(error =>{
            req.json({
                message:"An error accured"
            })
        })
    })

    

    module.exports ={
     register
    }
    



}